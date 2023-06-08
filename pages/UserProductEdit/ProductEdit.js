import { getAuth } from 'firebase/auth';
import {
  KeyboardAvoidingView,
  Text,
  ScrollView,
  View,
  Alert,
  ActivityIndicator,
  FlatList,
  Image,
} from 'react-native';
import CustomDescriptionInput from '../../components/CustomDescriptionInput';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';
import { doc, setDoc } from 'firebase/firestore';
import { db, storage } from '../../firebase';
import * as ImagePicker from 'expo-image-picker';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import styles from './ProductEdit.style';
import { useState } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Dropdown from '../../components/Dropdown';
import categories from '../../categories.json';
import { useDispatch, useSelector } from 'react-redux';
import { updateProduct } from '../../redux/userProductsSlice';
import CustomDeleteButton from '../../components/CustomDeleteButton';
import AddProductImageRender from '../../components/AddProductImageRender';
import Loading from '../../components/Loading';

const ProductEdit = ({ route }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [selected, setSelected] = useState('');
  const [product, setProduct] = useState('');
  const [imageObjects, setImageObjects] = useState([]);
  const [isActive, setIsActive] = useState(true);

  const dispatch = useDispatch();

  const list = useSelector((state) => state.userProducts.userProducts);
  if (product == '') {
    list.forEach((item, index) => {
      if (item.id === route.params.id) {
        setProduct(item);
        setName(item.name);
        setSelected(item.category);
        setDescription(item.description);
        setImageObjects(item.images);
      }
    });
  }

  const deleteImage = (value) => {
    const ImageObjects = imageObjects.filter((imageObjects) => imageObjects.path !== value);
    setImageObjects(ImageObjects);
  };

  const imageRender = ({ item }) => {
    return <AddProductImageRender onPressDelete={() => deleteImage(item.path)} item={item} />;
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
    [];

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

      const imageRefs = { path: path, url: url };
      setImageObjects([...imageObjects, imageRefs]);
    } catch (error) {
      console.log('Error uploading image:', error);
      setIsUploading(false);
    }
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
      const ref = doc(db, 'products', product.id);
      await setDoc(ref, {
        name: name,
        description: description,
        user: getAuth().currentUser.email,
        userName: getAuth().currentUser.displayName,
        category: selected,
        createdAt: product.createdAt,
        images: imageObjects,
        isActive: isActive,
      });

      const updatedProduct = {
        ...product,
        name: name,
        description: description,
        category: selected,
        images: imageObjects,
      };
      dispatch(updateProduct({ id: product.id, updatedProduct }));
      Alert.alert('Product Updated successfully!');
      setIsUploading(false);
    } catch (error) {
      console.log(error);
      Alert.alert('An unexpected error occurred while adding the product!');
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
        contentContainerStyle={styles.scroll_container}
        bounces={false}>
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
            <CustomButton onPress={addData} title={'Update product'} />
          )}
          <CustomDeleteButton onPress={null} title="Delete product" />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default ProductEdit;
