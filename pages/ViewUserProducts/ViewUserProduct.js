import { View, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import UserProductCard from '../../components/UserProductCard';
const ViewUserProducts = () => {
  const list = useSelector((state) => state.userProducts.userProducts);

  const productsRender = ({ item }) => {
    return <UserProductCard item={item} />;
  };

  return (
    <View style={{ flex: 1, alignItems: 'center' }}>
      <FlatList
        data={list}
        renderItem={productsRender}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
  );
};
export default ViewUserProducts;
