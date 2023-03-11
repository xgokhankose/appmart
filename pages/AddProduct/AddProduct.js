import { getAuth } from 'firebase/auth';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  Text,
  ScrollView,
  View,
  Alert,
  ActivityIndicator,
  TouchableOpacity,
  Image,
} from 'react-native';
import CustomDescriptionInput from '../../components/CustomDescriptionInput';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { doc, setDoc, addDoc, collection } from 'firebase/firestore';
import { db, storage } from '../../firebase';
import * as ImagePicker from 'expo-image-picker';
import { ref, uploadBytesResumable, getDownloadURL, uploadBytes } from 'firebase/storage';

import styles from './addProduct.style';
import { useState } from 'react';
import Dropdown from '../../components/Dropdown';
import categories from '../../categories.json';
import { addProduct } from '../../redux/userProductsSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Loading from '../../components/Loading';
import { FlatList } from 'react-native-gesture-handler';

const AddProduct = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [selected, setSelected] = useState('');
  const [imageObjects, setImageObjects] = useState([]);

  const dispatch = useDispatch();

  const imageRender = ({ item }) => {
    console.log(item[0].url);

    return <Image style={styles.photo} source={{ uri: item[0].url }} />;
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });
    return result;
  };

  const uploadImage = async (image) => {
    if (imageObjects.length == 3) {
      return console.log('max limit');
    }

    setIsUploading(true);
    const imageRefs = [];
    console.log(image);

    try {
      const blobImage = await new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.onload = function () {
          resolve(xhr.response);
        };
        xhr.onerror = function () {
          reject(new TypeError('Network request failed'));
        };
        xhr.responseType = 'blob';
        xhr.open('GET', image[0].uri, true);
        xhr.send(null);
      });

      const metadata = {
        contentType: 'image/jpeg',
      };

      const imageRef = ref(storage, 'Photos/' + Date.now());

      const uploadTask = await uploadBytesResumable(imageRef, blobImage, metadata);
      const url = await getDownloadURL(uploadTask.ref);
      const path = uploadTask.metadata.fullPath;
      console.log(url, path);

      imageRefs.push({ path: path, url: url });
      setImageObjects([...imageObjects, imageRefs]);
    } catch (error) {
      console.log('Error uploading image:', error);
      setIsUploading(false);
    }

    console.log(imageRefs);
    setIsUploading(false);
  };

  const handleUploadImages = async () => {
    const image = await pickImage();

    if (!image.didCancel) {
      uploadImage(image.assets);
    }
  };

  const addData = async () => {
    setIsUploading(true);
    try {
      const docRef = await addDoc(collection(db, 'products'), {
        name: name,
        description: description,
        user: getAuth().currentUser.email,
        category: selected,
        createdAt: new Date(),
        images: imageObjects,
        isActive: true,
      });
      console.log('Document written with ID: ', docRef.id);
      const timestamp = Date.now();
      const secondsSinceEpoch = Math.floor(timestamp / 1000);
      const nanosecondsSinceEpoch = (timestamp % 1000) * 1e6;
      dispatch(
        addProduct({
          name: name,
          description: description,
          user: getAuth().currentUser.email,
          category: selected,
          createdAt: { secondsSinceEpoch, nanosecondsSinceEpoch },
          images: imageObjects,
          isActive: true,
        })
      );
      Alert.alert('Ürün başarıyla eklendi!');
      setIsUploading(false);
      setName('');
      setDescription('');
      setSelected('');
      setImageObjects([]);
    } catch (error) {
      console.log(error);
      Alert.alert('Ürün eklenirken beklenmedik bir hata oluştu!');
      setIsUploading(false);
    }
  };

  if (isUploading) {
    return <Loading />;
  }

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
          <FlatList horizontal={true} data={imageObjects} renderItem={imageRender} />
          <TouchableOpacity onPress={handleUploadImages} style={styles.photoButton}>
            <Image style={styles.add} source={require('../../assets/add.png')} />
            <Text style={styles.photoButtonText}>Add photo</Text>
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
export default AddProduct;
