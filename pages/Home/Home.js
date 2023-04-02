import {
  View,
  Text,
  TextInput,
  Image,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import useGetAllData from '../../hooks/useGetAllData';
import { setProducts } from '../../redux/productsSlice';
import styles from './Home.style';
import categories from '../../categories.json';
import ProductCards from '../../components/ProductCards';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';
import Loading from '../../components/Loading/Loading';

const Home = () => {
  const [selected, setSelected] = useState();
  const [products, setProducts] = useState();
  const { data, loading } = useGetAllData('products');

  const navigation = useNavigation();

  const navigateProductDetail = (item) => {
    navigation.navigate('ProductDetailPage', { item });
  };

  const filterSelected = (selectedCategory) => {
    if (selected == selectedCategory) {
      setSelected();
      setProducts(data);
    } else {
      setSelected(selectedCategory);
      const filteredProducts = data.filter((product) => product.category === selectedCategory);
      setProducts(filteredProducts);
    }
  };

  const handleSearch = (query) => {
    console.log(!!query);
    if (query) {
      const filtered = data.filter((product) => {
        const nameMatch = product.name.toLowerCase().includes(query.toLowerCase());
        const descMatch = product.description.toLowerCase().includes(query.toLowerCase());
        return nameMatch || descMatch;
      });
      console.log(filtered);
      setProducts(filtered);
    } else {
      setProducts(data);
    }
  };

  const categoriesRender = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => filterSelected(item.category)}
        style={[
          styles.categories_button,
          selected == item.category
            ? { backgroundColor: '#ED6663' }
            : { backgroundColor: '#3C2C3E' },
        ]}>
        <Text style={styles.categories_button_text}>{item.category}</Text>
      </TouchableOpacity>
    );
  };

  const productsRender = ({ item }) => {
    return <ProductCards item={item} onPress={() => navigateProductDetail(item)} />;
  };

  if (loading) {
    <Loading />;
  }

  useEffect(() => {
    setProducts(data);
    console.log('usee efect çalıştı');
  }, [data]);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={products}
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
                <TextInput
                  onChangeText={(value) => {
                    handleSearch(value);
                  }}
                  style={styles.search_bar_input}
                  placeholder="Search here"
                />
                <TouchableOpacity style={styles.search_bar_button}>
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
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </>
        }
      />
    </SafeAreaView>
  );
};
export default Home;
