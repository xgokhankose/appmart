import { useState, useEffect } from 'react';
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import styles from './AddProductImageRender.style';

const AddProductImageRender = ({ item, onPressDelete }) => {
  const [value, setValue] = useState('');

  const handleButtonClick = () => {
    onPressDelete(value);
  };

  useEffect(() => {
    setValue(item);
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.icon_container}>
        <TouchableOpacity onPress={handleButtonClick}>
          <Image style={styles.icon} source={require('../../assets/delete.png')} />
        </TouchableOpacity>
      </View>
      <ImageBackground style={styles.image} source={{ uri: item.url }} />
    </View>
  );
};
export default AddProductImageRender;
