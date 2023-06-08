import { View, Text, TouchableOpacity,Image } from 'react-native';
import { Image as ImageCache } from 'react-native-expo-image-cache';

import styles from './ProductCards.style';
const ProductCards = ({ item, onPress }) => {
  return (
    <View style={[styles.container, styles.shadowProp]}>
      <TouchableOpacity onPress={onPress} style={styles.button_container}>
        <ImageCache style={styles.image} uri={item.images[0].url} />
      </TouchableOpacity>
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
