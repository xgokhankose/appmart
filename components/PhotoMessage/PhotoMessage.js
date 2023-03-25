import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, Modal } from 'react-native';
import { getAuth } from 'firebase/auth';
import styles from './PhotoMessage.style';
import { useNavigation } from '@react-navigation/native';
import ImageModal from '../ImageModal';

const PhotoMessage = ({ item }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const authEmail = getAuth().currentUser.email;
  const navigation = useNavigation();

  const navigateShowPhoto = () => {
    navigation.navigate('ShowPhotoPage', { url: item.url });
  };

  const changeModalVisible = (bool) => {
    setIsModalVisible(bool);
  };

  const setDataFunc = (data) => {
    setData(data);
  };

  return (
    <View style={styles.container}>
      {authEmail == item.sender ? (
        <TouchableOpacity onPress={() => changeModalVisible(true)}>
          <Image style={styles.image_sender} source={{ uri: item.url }} />
          <Modal
            transparent={true}
            animationType="fade"
            visible={isModalVisible}
            onRequestClose={() => changeModalVisible(false)}>
            <ImageModal
              url={item.url}
              changeModalVisible={changeModalVisible}
            />
          </Modal>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity>
          <Image style={styles.image_receiver} source={{ uri: item.url }} />
        </TouchableOpacity>
      )}
    </View>
  );
};
export default PhotoMessage;
