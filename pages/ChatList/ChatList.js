import { useEffect } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { getAuth } from 'firebase/auth';
import ChatListRender from '../../components/ChatListRender';
import styles from './ChatList.style';
import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { db } from '../../firebase';
import { useDispatch } from 'react-redux';
import { setChatList } from '../../redux/chatList';
import { useSelector } from 'react-redux';

const ChatList = () => {
  const authEmail = getAuth().currentUser.email;
  const dispatch = useDispatch();
  const list = useSelector((state) => state.chatList.chatList);

  const chatRender = ({ item }) => {
    return <ChatListRender item={item} />;
  };

  /* const fetchData = async () => {
    try {
      const q = query(collection(db, 'chats'), where('users', 'array-contains', authEmail));
      const querySnapshot = await getDocs(q);
      const chatsTemp = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      dispatch(setChatList(chatsTemp));
    } catch (error) {
      console.log('hata', error);
    }
  }; */
  const fetchData = async () => {
    try {
      const myCollectionRef = collection(db, 'chats');
      const myQuery = query(myCollectionRef, where('users', 'array-contains', authEmail));
      onSnapshot(myQuery, (querySnapshot) => {
        const chatsTemp = querySnapshot.docs
          .filter((doc) => doc.data().messages.length > 0)
          .map((doc) => ({ ...doc.data(), id: doc.id }));
        console.log(chatsTemp);

        dispatch(setChatList(chatsTemp));
      });
    } catch (error) {
      console.log('fetchData error:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.top_container}>
        <Text style={styles.title}>Chats</Text>
        <Image source={require('../../assets/search.png')} style={styles.icon_search} />
      </View>
      <FlatList ListEmptyComponent={<Text>Mesaj Yok</Text>} data={list} renderItem={chatRender} />
    </View>
  );
};
export default ChatList;
