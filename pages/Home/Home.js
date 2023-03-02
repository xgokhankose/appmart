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
import ProductCards from '../../components/ProductCards';

const Home = () => {
  const { data } = useGetAllData('products');

  const dispatch = useDispatch();
  dispatch(setProducts(data));



  const categoriesRender = ({ item }) => {
    console.log(item.name)
    return (
      <TouchableOpacity onPress={()=>filteredByCategory(item.category)} style={styles.categories_button}>
        <Text style={styles.categories_button_text}>{item.category}</Text>
      </TouchableOpacity>
    );
  };

  const productsRender = ({ item }) => {
    return <ProductCards item={item} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        renderItem={productsRender}
        keyExtractor={(item) => item.id}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        bounces={false}
        contentContainerStyle={styles.products_container}
        ListHeaderComponent={
          <>
            <View style={styles.top_container}>
              <Text style={styles.top_container_title}>Appmart</Text>
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
                showsVerticalScrollIndicator={false}

              />
            </View>
          </>
        }
      />
    </SafeAreaView>
  );
};
export default Home;
