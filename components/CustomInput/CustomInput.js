import { View, Text, TextInput } from "react-native";
import styles from "./CustomInput.style";
const CustomInput = ({ header, placeholder,onChangeText,inputValue }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{header}</Text>
      <TextInput value={inputValue} onChangeText={onChangeText} style={styles.input} placeholder={placeholder} />
    </View>
  );
};
export default CustomInput;
