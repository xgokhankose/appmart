import { StyleSheet, Dimensions } from "react-native";
const device = Dimensions.get("window");

export default StyleSheet.create({
  container: {
    width: device.width * 0.7,
    margin: 10,
  },
  header: {
    fontFamily: "Nunito_400Regular",
    fontSize: 18,
  },
  selected: {
    borderWidth: 2,
    borderColor: "#BEBEBE",
    height: 40,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft:10
  },
 
  dropdown_icon: {
    width: 20,
    height: 20,
  },
  dropdown_button:{
    height:40,
    width:40,
    justifyContent:"center",
    alignItems:"flex-end",
    paddingRight:10
  },
  dropdown_up_icon:{
    height:15,
    width:15,
    marginRight:2
  },
  dropdown_container:{
    borderWidth: 2,
    borderTopWidth:0,
    borderColor: "#BEBEBE",
    borderRadius: 6,
    maxHeight:device.height*0.2
  },
  dropdown_item:{
    padding:10,
    height:40,
  },
  dropdown_item_text:{
    color:"#ED6663",
    fontSize:17,
    
  }
});
