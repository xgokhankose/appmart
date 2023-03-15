import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './UserProductCard.style';
import { useNavigation } from '@react-navigation/native';

const UserProductCard = ({ item }) => {
  const navigation = useNavigation();
  const navigateProductEdit = (id) => {
    navigation.navigate('ProductEditPage', { id });
  };

  var date = new Date(item.createdAt.seconds * 1000);
  var dataMonth = date.getMonth();
  var dataDay = date.getDate();
  var dataYear = date.getFullYear();
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: item.images[0].url }} />
      <View style={styles.inner_mid_container}>
        <Text numberOfLines={1} style={styles.name}>
          {item.name}
        </Text>
        <Text numberOfLines={1} style={styles.category}>
          {item.category}
        </Text>
      </View>
      <View style={styles.inner_bottom_container}>
        <View style={styles.calendar_container}>
          <Image style={styles.calendar} source={require('../../assets/calendar.png')} />
          <Text style={styles.date}>
            {dataDay}.{dataMonth}.{dataYear}{' '}
          </Text>
        </View>
        <TouchableOpacity  onPress={() => navigateProductEdit(item.id)} style={styles.button}>
          <Text style={styles.button_text}>Edit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default UserProductCard;
