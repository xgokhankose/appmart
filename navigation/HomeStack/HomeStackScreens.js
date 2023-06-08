import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../pages/Home';
import ProductDetail from '../../pages/ProductDetail';
import Chat from '../../pages/Chat';
import ShowPhoto from '../../components/ShowPhoto';
import CommentProfile from '../../pages/CommentProfile';

const HomeStack = createNativeStackNavigator();

const HomeStackScreens = () => {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="HomePage" component={Home} />
      <HomeStack.Screen name="ProductDetailPage" component={ProductDetail} />
      <HomeStack.Screen name="ChatPage" component={Chat} />
      <HomeStack.Screen name="ShowPhotoPage" component={ShowPhoto} />
      <HomeStack.Screen name="CommentProfilePage" component={CommentProfile} />

    </HomeStack.Navigator>
  );
};

export default HomeStackScreens;
