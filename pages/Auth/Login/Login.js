import { useState } from "react";
import {
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
} from "react-native";
import {
  signInWithEmailAndPassword,
  getAuth
} from "firebase/auth";
import styles from "./Login.style";
import { authentication } from "../../../firebase";

const Login = ({navigation}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigateRegister = () =>{
   navigation.navigate("RegisterPage")
  }

  const handleLogin = () => {
    signInWithEmailAndPassword(authentication, email, password)
      .then((userCredential) => {
        console.log("account login !");
        console.log(userCredential.user.displayName)

      })
      .catch((error) => {
        console.log(error);
        Alert.alert(error.message);
      });
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : undefined}
      style={styles.container}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.scroll_container}
      >
        <View style={styles.main_container}>
          <View>
            <Text style={styles.title}>Login</Text>
          </View>
          <View style={styles.mid_container}>
            
<View style={styles.input_container}>
            <Text style={styles.input_title}>E-mail</Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => setEmail(text)}
              placeholder="johndoe@hotmail.com"
              autoCorrect={false}
              secureTextEntry={false}
            />
            </View>
            <View style={styles.input_container}>
            <Text style={styles.input_title}>Password</Text>
            <TextInput
              style={styles.input}
              onChangeText={(text) => setPassword(text)}
              placeholder="******"
              secureTextEntry={true}
              autoCorrect={false}
            />
            </View>
            <TouchableOpacity
              onPress={handleLogin}
              style={styles.main_container_button}
            >
              <Text style={styles.main_container_button_text}>
                Login
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.main_container_bottom_button}>
              <Text style={styles.bottom_container_button_text}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottom_container}>
            <Text style={styles.bottom_container_question}>
              Don't have an account?
            </Text>
            <TouchableOpacity onPress={navigateRegister} style={styles.bottom_container_button}>
              <Text style={styles.bottom_container_button_text}>Create Account</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default Login;
