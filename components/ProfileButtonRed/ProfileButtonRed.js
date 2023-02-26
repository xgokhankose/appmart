import { TouchableOpacity, Text } from "react-native";
import styles from "./ProfileButtonRed.style";

const ProfileButtonRed = ({ name,onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
};
export default ProfileButtonRed;
