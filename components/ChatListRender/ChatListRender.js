import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './ChatListRender.style';
import { useNavigation } from '@react-navigation/native';
import { getAuth } from 'firebase/auth';

const ChatListRender = ({ item }) => {
  const navigation = useNavigation();
  const chatId = item.id;
  const currentUser = getAuth().currentUser;
  const navigateChat = () => {
    var receiver = '';
    var receiverEmail = '';
    var sender = '';
    var senderEmail = '';

    if (currentUser.email == item.users[0].senderEmail) {
      receiver = item.receiverName;
      receiverEmail = item.users[1].receiverEmail;
      sender = item.senderName;
      senderEmail = item.users[0].senderEmail;
    } else {
      receiver = item.senderName;
      receiverEmail = item.users[0].senderEmail;
      sender = item.receiverName;
      senderEmail = item.users[1].receiverEmail;
    }
    navigation.navigate('ChatPage', {
      chatId,
      productPhoto: item.productImage,
      receiver: receiver,
      receiverEmail: receiverEmail,
      sender: sender,
      senderEmail: senderEmail,
    });
  };

  const timestampInMillis = item.updatedAt.seconds * 1000 + item.updatedAt.nanoseconds / 1000000;
  const date = new Date(timestampInMillis);
  /*   const dataMonth = date.getMonth();
  const dataDay = date.getDate();
  const dataYear = date.getFullYear(); */
  const hour = date.getHours();
  const minute = date.getMinutes();

  return (
    <TouchableOpacity onPress={navigateChat} style={styles.container}>
      <Image style={styles.image} source={{ uri: item.productImage }} />
      <View style={styles.inner_container}>
        <View style={styles.title_container}>
          <View style={styles.inner_title_container}>
            <Text numberOfLines={1} style={styles.name}>
              {currentUser.displayName == item.senderName ? item.receiverName : item.senderName}
            </Text>
            <Text numberOfLines={1} style={styles.product_name}>
              {item.productName}
            </Text>
          </View>
          <Text numberOfLines={1}>{item.messages[item.messages.length - 1].message}</Text>
        </View>
        <Text style={styles.date}>
          {hour < 10 ? '0' + hour : hour}:{minute < 10 ? '0' + minute : minute}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ChatListRender;
