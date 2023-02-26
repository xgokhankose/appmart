import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AddProduct from "../../pages/AddProduct";
import Profile from "../../pages/Profile";
import ViewProducts from "../../pages/ViewProducts";

const ProfileStack = createNativeStackNavigator();

const ProfileStackScreen = () => {
  return (
    <ProfileStack.Navigator screenOptions={{title:""}}>
      <ProfileStack.Screen name="Profile" component={Profile} />
      <ProfileStack.Screen  name="AddProductPage" component={AddProduct} />
      <ProfileStack.Screen  name="ViewProductsPage" component={ViewProducts} />
    </ProfileStack.Navigator>
  );
};

export default ProfileStackScreen;
