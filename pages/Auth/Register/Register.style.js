import { StyleSheet, Dimensions } from "react-native";
const device = Dimensions.get("window");

export default StyleSheet.create({
  container: { flex: 1,justifyContent:"center",alignItems:"center" },
  scroll_container: { flexGrow: 1,justifyContent:"center",alignItems:"center" },
  main_container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    marginBottom: device.height * 0.1,
    marginTop: device.height * 0.1,
  },
  avatar: {
    width: 50,
    height: 50,
    margin: 20,
  },
  input: {
    fontFamily: "Nunito_700Bold",
    borderBottomWidth: 2,
    width: device.width * 0.6,
    height: 40,
    borderColor: "#ED6663",
    marginBottom: 20,
    marginLeft:20
  },
  title: {
    fontFamily: "Nunito_400Regular",
    fontSize: 40,
  },
  bottom_container: {
    alignItems: "center",
  },
  bottom_container_question: {
    fontSize: 18,
    fontFamily: "Nunito_400Regular",
  },
  bottom_container_button: {
    marginTop: 10,
  },
  bottom_container_button_text: {
    color: "#ED6663",
    fontSize: 18,
    fontFamily: "Nunito_400Regular",
  },
  main_container_button: {
    width: device.width * 0.7,
    height: 50,
    backgroundColor: "#ED6663",
    borderRadius: 5,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  main_container_button_text: {
    fontFamily: "Nunito_700Bold",
    fontSize: 18,
    color: "#fff",
  },
  input_container:{
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    
  },
  mid_container:{
    justifyContent:"center",
    alignItems:"center",
    marginBottom:device.width*0.5,
    marginTop:device.width*0.3
    
  },
  input_title:{
    textAlign:"center",
    width:device.width*0.2
  }
});
