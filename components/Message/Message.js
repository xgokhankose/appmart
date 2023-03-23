import { View, Text } from 'react-native';
import { getAuth } from 'firebase/auth';
import styles from './Message.style';

const Message = ({ item }) => {
  const authEmail = getAuth().currentUser.email;
  return (
    <View style={styles.container}>
      {authEmail == item.sender ? (
        <View style={styles.sender_message_container}>
          <Text style={styles.sender_message}>{item.message}</Text>
        </View>
      ) : <View style={styles.receiver_message_container}>
          <Text style={styles.receiver_message}>{item.message}</Text>
        </View>}
    </View>
  );
};

export default Message;
