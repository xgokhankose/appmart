import { View, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import useGetData from '../../hooks/useGetData';
import { setProducts } from '../../redux/userProductsSlice';

const Home = () => {
  const { data } = useGetData('products');
  const dispatch = useDispatch();
  dispatch(setProducts(data));

  return (
    <View style={{ flex: 1 }}>
      <Text>HOME</Text>
    </View>
  );
};
export default Home;
