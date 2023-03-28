import { TouchableOpacity, Text } from "react-native";
import styles from "./CustomDeleteButton.style"

const CustomDeleteButton = ({title,onPress}) => { 
  return (
      <TouchableOpacity onPress={onPress} style={styles.container}>
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
  );
};
export default CustomDeleteButton;
