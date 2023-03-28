import React, { useState } from 'react';
import {
  View,
  Image,
  SafeAreaView,
} from 'react-native';
import styles from './ImageModal.style';
const ImageModal = (props) => {
  const closeModal = (bool) => {
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
