import { View, Text, TextInput } from 'react-native';
import styles from './CustomDescriptionInput.style';
const CustomDescriptionInput = ({ header, placeholder, onChangeText, inputValue }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{header}</Text>
      <TextInput
        value={inputValue}
        onChangeText={onChangeText}
        multiline={true}
        style={styles.input}
        placeholder={placeholder}
        maxLength={200}
      />
    </View>
  );
};
export default CustomDescriptionInput;
