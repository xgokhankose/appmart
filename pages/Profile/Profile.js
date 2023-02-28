import { View, Text, Image, SafeAreaView } from "react-native";
import styles from "./Profile.style";
import ProfileButton from "../../components/ProfileButton";
import ProfileButtonRed from "../../components/ProfileButtonRed";
import { getAuth, signOut } from "firebase/auth";
import AddProduct from "../AddProduct";
import { useDispatch, useSelector } from 'react-redux';
import useGetData from "../../hooks/useGetData";
import { setProducts } from '../../redux/userProductsSlice';



const Profile = ({ navigation }) => {

  const { data } = useGetData('products');
  const dispatch = useDispatch();
  dispatch(setProducts(data));

  const currentUser = getAuth().currentUser;

  const navigateAddProduct = () => {
    navigation.navigate("AddProductPage");
  };
  const navigateViewProducts = () => {
    navigation.navigate("ViewProductsPage");
  };

  const Logout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require("../../assets/avatar.png")}
        style={styles.avatar}
      />
      <Text style={styles.name}>{currentUser.displayName}</Text>
      <ProfileButton onPress={navigateAddProduct} name={"Add product"} />
      <ProfileButton onPress={navigateViewProducts} name={"View products"} />
      <ProfileButtonRed onPress={Logout} name={"Logout"} />
    </SafeAreaView>
  );
};
export default Profile;
