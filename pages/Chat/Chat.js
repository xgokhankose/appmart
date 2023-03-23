import { useState, useEffect, useRef } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  FlatList,
} from 'react-native';
import styles from './Chat.style';
import { useNavigation } from '@react-navigation/native';
import {
  collection,
  getDocs,
  query,
  where,
  onSnapshot,
  doc,
  updateDoc,
  arrayUnion,
} from 'firebase/firestore';
import { db } from '../../firebase';
import Message from '../../components/Message';
import { getAuth } from 'firebase/auth';

const Chat = ({ route }) => {
  const { chatId } = route.params;

  const [messages, setMessages] = useState('');
  const [message, setMessage] = useState('');

  const flatListRef = useRef(null);

  const handleSend = () => {
    if (message == '') {
      return console.log('empty');
    }
    setMessage('');

    const myDocRef = doc(db, 'chats', chatId);
    const valueToAdd = { message: message, date: Date.now(), sender: getAuth().currentUser.email };
    updateDoc(myDocRef, {
      messages: arrayUnion(valueToAdd),
    })
      .then(() => {
        console.log('Document updated successfully!');
      })
      .catch((error) => {
        console.error('Error updating document: ', error);
      });
  };

  const messageItems = ({ item }) => {
    return <Message item={item} />;
  };
  const navigation = useNavigation();

  useEffect(() => {
    const chatDoc = doc(db, 'chats', chatId);
    const unsubscribe = onSnapshot(chatDoc, (doc) => {
      var data = doc.data();
      setMessages(data.messages);
      // flatListRef.current?.scrollToEnd();
    });
    console.log();
    return unsubscribe;
  }, [chatId]);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={60}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        bounces={false}
        contentContainerStyle={styles.container}>
        <View style={styles.icon_container}>
          <TouchableOpacity style={styles.icon_inner_container} onPress={navigation.goBack}>
            <Image style={styles.icon} source={require('../../assets/left-arrow.png')} />
          </TouchableOpacity>
          <View style={styles.icon_mid_container}>
            <Image style={styles.product_photo} source={{ uri: route.params.productPhoto }} />
            <Text style={styles.receiver_name}>{route.params.receiver}</Text>
          </View>

          <TouchableOpacity style={styles.icon_inner_container}>
            <Image style={styles.icon} source={require('../../assets/dots.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.messages_container}>
          <FlatList
            inverted={true}
            showsVerticalScrollIndicator={false}
            ref={flatListRef}
            //onContentSizeChange={() => flatListRef.current?.scrollToEnd()}
            bounces={false}
            data={messages}
            renderItem={messageItems}
            ListFooterComponent={null}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Type a message..."
            value={message}
            onChangeText={setMessage}
          />
          {message.length == 0 ? (
            <TouchableOpacity style={styles.send_button} onPress={null}>
              <Image style={styles.image_icon} source={require("../../assets/image.png")} />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={styles.send_button} onPress={handleSend}>
              <Text style={styles.send}>Send</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Chat;
