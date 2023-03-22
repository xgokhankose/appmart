import { SafeAreaView, View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './Chat.style';
import { useNavigation } from '@react-navigation/native';

const Chat = ({route}) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <View style={styles.icon_container}>
        <TouchableOpacity style={styles.icon_inner_container} onPress={navigation.goBack}>
          <Image style={styles.icon} source={require('../../assets/left-arrow.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon_inner_container}>
          <Image style={styles.icon} source={require('../../assets/dots.png')} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Chat;
