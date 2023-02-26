import { View, Text, TextInput } from "react-native";
import styles from "./CustomDescriptionInput.style"
const CustomDescriptionInput = ({header,placeholder,onChangeText}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{header}</Text>
      <TextInput onChangeText={onChangeText} multiline={true} style={styles.input} placeholder={placeholder} />
    </View>
  );
};
export default CustomDescriptionInput;
