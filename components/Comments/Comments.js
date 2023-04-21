import { Text, View } from 'react-native';
import { styles } from './Comments.style';
const Comments = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text>Name</Text>
        <Text>Rating</Text>
      </View>
      <Text>Comment</Text>
      <Text>Date</Text>
    </View>
  );
};
export default Comments;
