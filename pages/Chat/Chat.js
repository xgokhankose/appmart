import { useState, useEffect, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  FlatList,
  ActivityIndicator,
  TouchableWithoutFeedback,
  Modal,
  Alert,
} from 'react-native';
import styles from './Chat.style';
import { useNavigation } from '@react-navigation/native';
import {
  onSnapshot,
  doc,
  updateDoc,
  arrayUnion,
  collection,
  query,
  where,
  getDocs,
  setDoc,
} from 'firebase/firestore';
import Message from '../../components/Message';
import { getAuth } from 'firebase/auth';
import * as ImagePicker from 'expo-image-picker';
import { storage } from '../../firebase';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import PhotoMessage from '../../components/PhotoMessage';
import MenuModal from '../../components/MenuModal';
import { db } from '../../firebase';

const Chat = ({ route }) => {
  const { chatId } = route.params;

  const [messages, setMessages] = useState('');
  const [message, setMessage] = useState('');
  const [image, setImage] = useState(null);
  const [photoUploading, setPhotoUploading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const navigation = useNavigation();

  const changeModalVisible = (bool) => {
    setIsModalVisible(bool);
  };

  const flatListRef = useRef(null);

  const navigateCommentProfile = () => {
    navigation.navigate('CommentProfilePage', {
      name: route.params.receiver,
      email: route.params.receiverEmail,
    });
  };

  const setPermission = async () => {
    var results = '';
    var id = '';
    const usersRef = collection(db, 'commentPermissions');
    const emailQuery = query(usersRef, where('email', '==', route.params.senderEmail));
    await getDocs(emailQuery)
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          id = doc.id;
          results = doc.data();
        });
      })
      .catch((error) => {
        console.log('Error getting documents:', error);
      });

    if (results.permissions.includes(route.params.receiverEmail)) {
      setIsModalVisible(false);
      console.log('Has been already added.');
      Alert.alert('Has been already added.');
    } else {
      const docRef = doc(db, 'commentPermissions', id);
      try {
        results.permissions.push(route.params.receiverEmail);
        await updateDoc(docRef, results);
        Alert.alert('Permission granted successfully.');
      } catch (e) {
        console.error('Belge güncelleme hatası: ', e);
      }
    }
  };

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
    if (image == null) {
      return console.log('empty');
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

  const handleSend = () => {
    if (message == '') {
      return console.log('empty');
    }
    setMessage('');

    const myDocRef = doc(db, 'chats', chatId);
    const valueToAdd = { message: message, date: Date.now(), sender: getAuth().currentUser.email };
    updateDoc(myDocRef, {
      messages: arrayUnion(valueToAdd),
      updatedAt: new Date(),
    })
      .then(() => {
        console.log('Document updated successfully!');
      })
      .catch((error) => {
        console.error('Error updating document: ', error);
      });
  };

  const handleSendPhoto = async () => {
    setPhotoUploading(true);
    const result = await uploadImage();
    setMessage('');

    const myDocRef = doc(db, 'chats', chatId);
    const valueToAdd = {
      url: result[0],
      path: result[1],
      date: new Date(),
      sender: getAuth().currentUser.email,
    };
    updateDoc(myDocRef, {
      messages: arrayUnion(valueToAdd),
    })
      .then(() => {
        setPhotoUploading(false);

        console.log('Document photo updated successfully!');
        setImage(null);
      })
      .catch((error) => {
        console.error('Error updating document: ', error);
        setPhotoUploading(false);
      });
  };

  const messageItems = ({ item }) => {
    if (!!item.message) {
      return <Message item={item} />;
    } else {
      return <PhotoMessage item={item} />;
    }
  };

  useEffect(() => {
    const chatDoc = doc(db, 'chats', chatId);
    const unsubscribe = onSnapshot(chatDoc, (doc) => {
      var data = doc.data();
      setMessages(data.messages);
      //const messsagesData = data.messages.reverse();
      //setMessages(messsagesData);

      flatListRef.current?.scrollToEnd();
    });
    return unsubscribe;
  }, [chatId]);

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={60}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        bounces={false}
        contentContainerStyle={styles.container}>
        <View style={styles.icon_container}>
          <TouchableOpacity style={styles.icon_inner_container} onPress={navigation.goBack}>
            <Image style={styles.icon} source={require('../../assets/left-arrow.png')} />
          </TouchableOpacity>
          <View style={styles.icon_mid_container}>
            <Image style={styles.product_photo} source={{ uri: route.params.productPhoto }} />
            <TouchableOpacity onPress={navigateCommentProfile}>
              <Text style={styles.receiver_name}>{route.params.receiver}</Text>
            </TouchableOpacity>
          </View>
          {isModalVisible && (
            <>
              <Modal
                transparent={true}
                animationType="fade"
                visible={isModalVisible}
                onRequestClose={() => changeModalVisible(false)}>
                <MenuModal onPress={setPermission} changeModalVisible={changeModalVisible} />
              </Modal>
            </>
          )}
          <TouchableOpacity
            onPress={() => changeModalVisible(true)}
            style={styles.icon_inner_container}>
            <Image style={styles.icon} source={require('../../assets/dots.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.messages_container}>
          <FlatList
            inverted={false}
            showsVerticalScrollIndicator={false}
            ref={flatListRef}
            onContentSizeChange={() => flatListRef.current?.scrollToEnd()}
            bounces={false}
            data={messages}
            renderItem={messageItems}
            ListFooterComponent={null}
          />
        </View>
        <View style={styles.inputContainer}>
          {!!image ? (
            <TouchableOpacity onPress={() => setImage()} style={styles.input}>
              <Image style={styles.image_icon} source={require('../../assets/deleteImage.png')} />
            </TouchableOpacity>
          ) : (
            <TextInput
              style={styles.input}
              placeholder="Type a message..."
              value={message}
              onChangeText={setMessage}
            />
          )}

          {message.length == 0 ? (
            !!image ? (
              !photoUploading ? (
                <TouchableOpacity style={styles.send_button} onPress={handleSendPhoto}>
                  <Text style={styles.send}>Send photo</Text>
                </TouchableOpacity>
              ) : (
                <ActivityIndicator style={styles.indicator} color="#ED6663" />
              )
            ) : (
              <TouchableOpacity style={styles.send_button} onPress={pickImage}>
                <Image style={styles.image_icon} source={require('../../assets/addImage.png')} />
              </TouchableOpacity>
            )
          ) : (
            <TouchableOpacity style={styles.send_button} onPress={handleSend}>
              <Text style={styles.send}>Send</Text>
            </TouchableOpacity>
          )}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Chat;
