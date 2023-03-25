import { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { doc, setDoc, addDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import { getAuth } from 'firebase/auth';

const ChatList = () => {
  const [chats, setChats] = useState();

  const authEmail = getAuth().currentUser.email;

  useEffect(() => {
    const fetchData = async () => {
      const q = query(collection(db, 'chats'), where('users', 'array-contains', authEmail));
      const querySnapshot = await getDocs(q);
      const chats = [];
      querySnapshot.forEach((doc) => {
        chats.push(doc.data());
      });
      setChats(chats);
    };

    fetchData();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>chat</Text>
    </View>
  );
};
export default ChatList;
