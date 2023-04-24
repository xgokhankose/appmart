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
  if (dataMonth < 10) {
    dataMonth = '0' + dataMonth;
  }
  var dataDay = date.getDate();
  if (dataDay < 10) {
    dataDay = '0' + dataDay;
  }
  var dataYear = date.getFullYear().toString().substring(2, 4);
  return (
    <View style={styles.container}>
      {item.images.length != 0 ? (
        <Image style={styles.image} source={{ uri: item.images[0].url }} />
      ) : null}

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
            {dataDay}.{dataMonth}.{dataYear}
          </Text>
        </View>
        <TouchableOpacity onPress={() => navigateProductEdit(item.id)} style={styles.button}>
          <Text style={styles.button_text}>Edit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default UserProductCard;
