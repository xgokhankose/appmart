import { View, TouchableOpacity, Text } from "react-native";
import styles from "./CustomButton.style"

const CustomButton = ({title,onPress}) => { 
  return (
      <TouchableOpacity onPress={onPress} style={styles.container}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
  );
};
export default CustomButton;
