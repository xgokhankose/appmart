import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './ChatListRender.style';
import { useNavigation } from '@react-navigation/native';
import { getAuth } from 'firebase/auth';
import { get } from 'react-native/Libraries/Utilities/PixelRatio';

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

  return (
    <TouchableOpacity onPress={navigateChat} style={styles.container}>
      <Image style={styles.image} source={{ uri: item.productImage }} />
      <View style={styles.inner_container}>
        <Text style={styles.name}>
          {currentUserName == item.senderName ? item.receiverName : item.senderName}
        </Text>
        <Text style={styles.product_name}>{item.productName}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ChatListRender;
