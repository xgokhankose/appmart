import { View, Text, SafeAreaView, TouchableOpacity, Image } from 'react-native';
import styles from './ChatListRender.style';

const ChatListRender = ({ item }) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image style={styles.image} source={{ uri: item.productImage }} />
      <View style={styles.inner_container}>
        <Text style={styles.name} >{item.receiverName}</Text>
        <Text style={styles.product_name} >{item.productName}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ChatListRender;
