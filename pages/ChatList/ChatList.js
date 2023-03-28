import { useEffect, useState } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { getAuth } from 'firebase/auth';
import ChatListRender from '../../components/ChatListRender';
import styles from './ChatList.style';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
const ChatList = () => {
  const [chats, setChats] = useState([]);

  const authEmail = getAuth().currentUser.email;

  const chatRender = ({ item }) => {
    return <ChatListRender item={item} />;
  };

  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, 'chats'), where('users', 'array-contains', authEmail));
      const querySnapshot = await getDocs(q);
      const chatsTemp = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setChats(chatsTemp);
    };

    fetchData();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.top_container}>
        <Text style={styles.title}>Chats</Text>
        <Image source={require('../../assets/search.png')} style={styles.icon_search} />
      </View>
      <FlatList ListEmptyComponent={<Text>Mesaj Yok</Text>} data={chats} renderItem={chatRender} />
    </View>
  );
};
export default ChatList;
