import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import styles from './MenuModal.style';
import { TouchableOpacity } from 'react-native-gesture-handler';
const MenuModal = ({ changeModalVisible, onPress }) => {
  const closeModal = (bool) => {
    changeModalVisible(bool);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View onTouchStart={() => closeModal(false, 'cancel')} style={styles.inner_container}></View>
      <Text style={styles.title}>Has the exchange started?</Text>
      <Text style={styles.description}>
        After you approve each other's profile, you can comment and rate. You can't undo it.
      </Text>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.text}>YES</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => closeModal(false, 'cancel')} style={styles.button_red}>
        <Text style={styles.text}>NO</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default MenuModal;
