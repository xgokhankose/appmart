import {
  View,
  Text,
  TextInput,
  Image,
  StatusBar,
  useState,
  FlatList,
  SafeAreaView,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useDispatch } from 'react-redux';
import useGetAllData from '../../hooks/useGetAllData';
import { setProducts } from '../../redux/productsSlice';
import styles from './Home.style';
import categories from '../../categories.json';

const Home = () => {
  console.log(categories);
  const { data } = useGetAllData('products');

  const dispatch = useDispatch();
  dispatch(setProducts(data));

  const categoriesRender = ({ item }) => {
    return (
      <TouchableOpacity style={styles.categories_button}>
        <Text style={styles.categories_button_text}>{item.category}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <>
     <StatusBar barStyle="#" backgroundColor="red" />
      <SafeAreaView style={styles.container}>
        <View style={styles.top_container}>
          <Text style={styles.top_container_title}>Trampa what you want</Text>
          <View style={styles.search_bar}>
            <TextInput style={styles.search_bar_input} placeholder="Search here" />
            <TouchableOpacity onPress={null} style={styles.search_bar_button}>
              <Image
                source={require('../../assets/magnifying-glass.png')}
                style={styles.search_bar_icon}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.categories_container}>
          <Text style={styles.categories_title}>Categories</Text>
          <FlatList
            style={styles.categories_list}
            horizontal={true}
            data={categories}
            renderItem={categoriesRender}
          />
        </View>
      </SafeAreaView>
    </>
  );
};
export default Home;
