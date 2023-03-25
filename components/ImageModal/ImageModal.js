import React, { useState } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TouchableWithoutFeedback,
} from 'react-native';
import { back } from 'react-native/Libraries/Animated/Easing';
import styles from './ImageModal.style';
const ImageModal = (props) => {
  //const [modalVisible, setModalVisible] = useState(false);
  const closeModal = (bool, data) => {
    props.changeModalVisible(bool);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View onTouchStart={() => closeModal(false, 'cancel')} style={styles.inner_container}></View>
      <Image source={{ uri: props.url }} style={styles.image} />
    </SafeAreaView>
  );
};

export default ImageModal;
