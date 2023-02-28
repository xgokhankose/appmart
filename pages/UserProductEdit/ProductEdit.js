import { getAuth } from 'firebase/auth';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  Text,
  ScrollView,
  View,
  Alert,
  ActivityIndicator,
} from 'react-native';
import CustomDescriptionInput from '../../components/CustomDescriptionInput';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { doc, setDoc, addDoc, collection } from 'firebase/firestore';
import { db, storage } from '../../firebase';
import * as ImagePicker from 'expo-image-picker';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

import styles from './ProductEdit.style';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Dropdown from '../../components/Dropdown';
import categories from '../../categories.json';
import { useSelector } from 'react-redux';

const ProductEdit = ({ route }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);
  const [isUploading, setIsUploading] = useState(false);
  const [selected, setSelected] = useState('');
  const [product, setProduct] = useState('');

  const list = useSelector((state) => state.userProducts.userProducts);
  if (product == '') {
    list.forEach((item) => {
      if (item.id === route.params.id) {
        console.log("girdi")
        setProduct(item);
        setName(item.name)
        setSelected(item.category)
        setDescription(item.description)
        console.log(name)
      }
    });
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [9, 16],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.uri);
    }
  };

  const uploadImage = async () => {
    if (!image) {
      return ['', ''];
    }

    const blobImage = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function () {
        resolve(xhr.response);
      };
      xhr.onerror = function () {
        reject(new TypeError('Network request failed'));
      };
      xhr.responseType = 'blob';
      xhr.open('GET', image, true);
      xhr.send(null);
    });

    const metadata = {
      contentType: 'image/jpeg',
    };

    const storageRef = ref(storage, 'Photos/' + Date.now());
    const uploadTask = await uploadBytesResumable(storageRef, blobImage, metadata);
    const url = await getDownloadURL(uploadTask.ref);
    const path = uploadTask.metadata.fullPath;

    return [url, path];
  };

  const addData = async () => {
    setIsUploading(true);
    try {
      const result = await uploadImage();
      const docRef = await addDoc(collection(db, 'products'), {
        name: name,
        description: description,
        user: getAuth().currentUser.email,
        category: selected,
        createdAt: new Date(),
        picturePath: result[1],
        productPicture: result[0],
        isActive: true,
      });
      console.log('Document written with ID: ', docRef.id);
      Alert.alert('Ürün başarıyla eklendi!');
      setIsUploading(false);
      setName('');
      setDescription('');
      setSelected('');
      setImage(null);
    } catch (error) {
      console.log(error);
      Alert.alert('Ürün eklenirken beklenmedik bir hata oluştu!');
      setIsUploading(false);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scroll_container}>
        <View style={styles.main_container}>
          <CustomInput inputValue={name} onChangeText={setName} header={'Product name'} />
          <Dropdown selectedOnPress={setSelected} selected={selected} list={categories} />
          <CustomDescriptionInput
            inputValue={description}
            onChangeText={setDescription}
            header={'Product description'}
          />
          <TouchableOpacity onPress={pickImage} style={styles.photoButton}>
            {!!image ? (
              <Text style={styles.photoButtonText}>Change product photo</Text>
            ) : (
              <Text style={styles.photoButtonText}>Add new product photo</Text>
            )}
          </TouchableOpacity>
          {isUploading ? (
            <CustomButton
              onPress={addData}
              title={<ActivityIndicator style={{ paddingTop: 8 }} size="large" color="yellow" />}
            />
          ) : (
            <CustomButton onPress={addData} title={'Add product'} />
          )}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default ProductEdit;
