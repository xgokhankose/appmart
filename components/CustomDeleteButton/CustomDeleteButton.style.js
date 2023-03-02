import { StyleSheet,Dimensions } from 'react-native'
const device = Dimensions.get("window")

export default StyleSheet.create({
    container:{
       width:device.width*0.6,
       backgroundColor:"#E6595F",
       height:device.height*0.05,
       alignItems:"center",
       justifyContent:"center",
       borderRadius:5,
       margin:5
    

    },
    text:{
        fontFamily:"Nunito_700Bold",
        fontSize:18,
        color:"#3C2C3E",
        textAlign:"center"

    }
})