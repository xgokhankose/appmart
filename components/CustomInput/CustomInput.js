import { View, Text, TextInput } from "react-native";
import styles from "./CustomInput.style";
const CustomInput = ({ header, placeholder,onChangeText }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{header}</Text>
      <TextInput onChangeText={onChangeText} style={styles.input} placeholder={placeholder} />
    </View>
  );
};
export default CustomInput;
