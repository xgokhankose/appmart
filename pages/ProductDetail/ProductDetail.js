import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import styles from './ProductDetail.style';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

const ProductDetail = ({ route }) => {
  const navigation = useNavigation();

  const imagesList = (data) => {
    return (
      <TouchableOpacity onPress={null} style={styles.mini_image_container}>
        <Image style={styles.mini_image} source={{ uri: data.item.url }} />
      </TouchableOpacity>
    );
  };
  return (
    <ScrollView bounces={true} showsVerticalScrollIndicator={false}>
      <View style={styles.icon_container}>
        <TouchableOpacity style={styles.icon_inner_container} onPress={navigation.goBack}>
          <Image style={styles.icon} source={require('../../assets/left-arrow.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.icon_inner_container}>
          <Image style={styles.icon} source={require('../../assets/dots.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.titles_container}>
        <Text style={styles.name}>{route.params.item.name}</Text>
        <Text style={styles.category}>{route.params.item.category}</Text>
      </View>
      <View style={styles.image_container}>
        {!!route.params.item.images[0] ? (
          <Image style={styles.image} source={{ uri: route.params.item.images[0].url }} />
        ) : null}
        <FlatList
          bounces={false}
          horizontal={true}
          data={route.params.item.images}
          renderItem={imagesList}
        />
      </View>
      <View style={styles.titles_container}>
        <Text style={styles.description_title}>Description</Text>
        <Text style={styles.description}>{route.params.item.description}</Text>
      </View>
      <View style={styles.button_container}>
        <TouchableOpacity style={styles.message_button}>
          <Text style={styles.message_button_title}>Contact the trader</Text>
          <Image style={styles.icon} source={require("../../assets/messenger.png")} />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default ProductDetail;
