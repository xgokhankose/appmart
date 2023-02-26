import { TouchableOpacity, Text } from "react-native";
import styles from "./ProfileButton.style";

const ProfileButton = ({ name,onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{name}</Text>
    </TouchableOpacity>
  );
};
export default ProfileButton;
