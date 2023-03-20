import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../pages/Home';
import ProductDetail from '../../pages/ProductDetail';

const HomeStack = createNativeStackNavigator();

const HomeStackScreens = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HomePage" component={Home} />
      <HomeStack.Screen name="ProductDetailPage" component={ProductDetail} />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreens;
