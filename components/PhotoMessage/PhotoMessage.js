import { View, Text, Image, TouchableOpacity } from 'react-native';
import { getAuth } from 'firebase/auth';
import styles from './PhotoMessage.style';
import { useNavigation } from '@react-navigation/native';

const PhotoMessage = ({ item }) => {
  const authEmail = getAuth().currentUser.email;
  const navigation = useNavigation();

  const navigateShowPhoto = () => {
    navigation.navigate('ShowPhotoPage', { url: item.url });
  };

  return (
    <View style={styles.container}>
      {authEmail == item.sender ? (
        <TouchableOpacity onPress={navigateShowPhoto}>
          <Image style={styles.image_sender} source={{ uri: item.url }} />
        </TouchableOpacity>
      ) : (
        <TouchableOpacity>
          <Image style={styles.image_receiver} source={{ uri: item.url }} />
        </TouchableOpacity>
      )}
    </View>
  );
};
export default PhotoMessage;
