import { StyleSheet, Dimensions } from "react-native";
const device = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    width: device.width * 0.4,
    borderWidth: 2,
    margin: 10,
    padding: 7,
    borderRadius: 4,
    borderColor: "#ED6663",
    backgroundColor:"#E44641"
  },
  text: {
    color: "white",
    textAlign: "center",
    fontFamily: "Nunito_700Bold",
    fontSize: 22,
  },
  
});
