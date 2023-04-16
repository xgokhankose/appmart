import { View, TouchableOpacity, Text } from "react-native";
import styles from "./CustomButton.style"

const CustomButton = ({title,onPress, width}) => { 
  return (
      <TouchableOpacity onPress={onPress} style={[styles.container, width ? {width} : {}]}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
  );
};
export default CustomButton;
