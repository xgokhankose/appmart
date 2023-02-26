import { View, Text, Image, SafeAreaView } from "react-native";
import styles from "./Profile.style";
import ProfileButton from "../../components/ProfileButton";
import ProfileButtonRed from "../../components/ProfileButtonRed";
import { getAuth, signOut } from "firebase/auth";
import AddProduct from "../AddProduct";

const Profile = ({ navigation }) => {
  const currentUser = getAuth().currentUser;

  const navigateAddProduct = () => {
    console.log(navigation);
    navigation.navigate("AddProductPage");
  };
  const navigateViewProducts = () => {
    console.log(navigation);
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
