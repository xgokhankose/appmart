import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './ChatListRender.style';
import { useNavigation } from '@react-navigation/native';
import { getAuth } from 'firebase/auth';

const ChatListRender = ({ item }) => {
  const navigation = useNavigation();
  const chatId = item.id;
  const currentUserName = getAuth().currentUser.displayName;
  const navigateChat = () => {
    navigation.navigate('ChatPage', {
      chatId,
      productPhoto: item.productImage,
      receiver: item.receiverName,
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
        <View style={styles.inner_title_container}>
          <Text numberOfLines={1} style={styles.name}>
            {currentUserName == item.senderName ? item.receiverName : item.senderName}
          </Text>
          <Text numberOfLines={1}> {item.messages[item.messages.length - 1].message} </Text>
          <Text style={styles.product_name}>{item.productName}</Text>
        </View>
        <Text style={styles.date}>
          {hour}:{minute}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ChatListRender;
