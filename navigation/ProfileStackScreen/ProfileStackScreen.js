import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddProduct from '../../pages/AddProduct';
import Profile from '../../pages/Profile';
import ProductEdit from '../../pages/UserProductEdit';
import ViewUserProducts from '../../pages/ViewUserProducts';

const ProfileStack = createNativeStackNavigator();

const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator screenOptions={{ title: '', headerTintColor: '#ED6663' }}>
      <ProfileStack.Screen options={{headerShown:false}} name="Profile" component={Profile} />
      <ProfileStack.Screen name="AddProductPage" component={AddProduct} />
      <ProfileStack.Screen name="ViewProductsPage" component={ViewUserProducts} />
      <ProfileStack.Screen name="ProductEditPage" component={ProductEdit} />
    </ProfileStack.Navigator>
  );
};

export default ProfileStackScreen;
