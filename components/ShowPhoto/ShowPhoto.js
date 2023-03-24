import { View, ImageBackground, Text,TouchableOpacity,Image } from 'react-native';
import styles from './ShowPhoto.style';
import { useNavigation } from '@react-navigation/native';

const ShowPhoto = ({ route }) => {
  console.log(route.params);
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
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
      <ImageBackground style={styles.image} source={{ url: route.params.url }}></ImageBackground>
    </View>
  );
};

export default ShowPhoto;
