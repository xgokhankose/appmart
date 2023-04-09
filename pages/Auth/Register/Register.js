import { useState } from 'react';
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  ScrollView,
  Alert,
} from 'react-native';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import styles from './Register.style';
import { authentication } from '../../../firebase';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../../../firebase';
const Register = ({ navigation }) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigateLogin = () => {
    navigation.navigate('LoginPage');
  };
  const createCommment = async () => {
    try {
      const docRef = await addDoc(collection(db, 'commentPermissions'), {
        // Replace this with the data you want to add to the document
        name: name,
        email: email,
        permissions: [],
      });

      console.log('New document added with ID: ', docRef.id);
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  const handleRegister = () => {
    createUserWithEmailAndPassword(authentication, email, password)
      .then((userCredential) => {
        console.log('account created !');
        Alert.alert('Account created!');
        const user = userCredential.user;
        updateProfile(user, { displayName: name });
      })
      .then(createCommment())
      .catch((error) => {
        console.error();
        Alert.alert(error.message);
      });
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        contentContainerStyle={styles.scroll_container}>
        <View style={styles.main_container}>
          <View>
            <Text style={styles.title}>Register</Text>
          </View>
          <View style={styles.mid_container}>
            <View style={styles.input_container}>
              <Text style={styles.input_title}>Name</Text>
              <TextInput
                style={styles.input}
                onChangeText={(text) => setName(text)}
                placeholder="John Doe"
              />
            </View>
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
            <TouchableOpacity onPress={handleRegister} style={styles.main_container_button}>
              <Text style={styles.main_container_button_text}>Create Account</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.bottom_container}>
            <Text style={styles.bottom_container_question}>Already have an account?</Text>
            <TouchableOpacity onPress={navigateLogin} style={styles.bottom_container_button}>
              <Text style={styles.bottom_container_button_text}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default Register;
