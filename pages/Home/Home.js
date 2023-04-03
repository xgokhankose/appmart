import {
  View,
  Text,
  TextInput,
  Image,
  FlatList,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import styles from './Home.style';
import categories from '../../categories.json';
import ProductCards from '../../components/ProductCards';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import { fetchProducts } from '../../redux/productsSlice';

const Home = () => {
  const [selected, setSelected] = useState();
  const [dataProducts, setDataProducts] = useState();
  const [searchText, setSearchText] = useState('');

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const list = useSelector((state) => state.products.products);

  const navigateProductDetail = (id) => {
    navigation.navigate('ProductDetailPage', { id });
  };

  const filterSelected = (selectedCategory) => {
    if (selected == selectedCategory) {
      setSelected();
      setDataProducts(list);
    } else {
      setSelected(selectedCategory);
      const filteredProducts = list.filter((product) => product.category === selectedCategory);
      setDataProducts(filteredProducts);
    }
  };

  const handleSearch = (query) => {
    if (query) {
      const filtered = list.filter((product) => {
        const nameMatch = product.name.toLowerCase().includes(query.toLowerCase());
        const descMatch = product.description.toLowerCase().includes(query.toLowerCase());
        return nameMatch || descMatch;
      });
      setDataProducts(filtered);
    } else {
      setDataProducts(list);
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
    return <ProductCards item={item} onPress={() => navigateProductDetail(item.id)} />;
  };

  useEffect(() => {
    console.log(list);
    setDataProducts(list);
  }, [list]);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={60}>
      <FlatList
        data={dataProducts}
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
                  value={searchText}
                  onChangeText={(value) => {
                    handleSearch(value);
                    setSearchText(value);
                  }}
                  style={styles.search_bar_input}
                  placeholder="Search here"
                />
                {searchText ? (
                  <TouchableOpacity
                    onPress={() => {
                      setSearchText();
                      handleSearch();
                    }}
                    style={styles.remove_bar_button}>
                    <Image
                      source={require('../../assets/remove.png')}
                      style={styles.search_bar_icon}
                    />
                  </TouchableOpacity>
                ) : (
                  <TouchableOpacity style={styles.search_bar_button}>
                    <Image
                      source={require('../../assets/magnifying-glass.png')}
                      style={styles.search_bar_icon}
                    />
                  </TouchableOpacity>
                )}
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
    </KeyboardAvoidingView>
  );
};
export default Home;
