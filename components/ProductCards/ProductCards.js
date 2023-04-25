import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './ProductCards.style';
const ProductCards = ({ item, onPress }) => {
  return (
    <View style={[styles.container, styles.shadowProp]}>
      <Image style={styles.image} source={{ uri: item.images[0].url }} />
      <View style={styles.inner_container}>
        <Text numberOfLines={1} style={styles.name}>
          {item.name}
        </Text>
        <View style={styles.bottom_container}>
          <Text style={styles.category}>{item.category}</Text>
          <TouchableOpacity onPress={onPress} style={styles.button_container}>
            <Image source={require('../../assets/right-arrow.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default ProductCards;
