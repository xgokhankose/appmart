import { StyleSheet, Dimensions } from 'react-native';
const device = Dimensions.get("window")
export default StyleSheet.create({
  container: {},
  sender_message: {
    color: '#fff',
    fontFamily: 'Nunito_400Regular',
    fontSize: 17,
  },
  sender_message_container: {
    backgroundColor: '#ED6663',
    alignSelf: 'flex-end',
    marginRight: 10,
    marginTop: 5,
    borderRadius: 12,
    paddingHorizontal:15,
    paddingVertical:8
  },
  receiver_message_container: {
    backgroundColor: '#F0F0F0',
    alignSelf: 'flex-start',
    paddingHorizontal:15,
    paddingVertical:8,
    marginLeft: 10,
    marginTop: 10,
    borderRadius: 10,
  },
  receiver_message: {
    color: '#ED6663',
    fontFamily: 'Nunito_400Regular',
    fontSize: 17,
  },
  image:{
    width:device.width*0.5,
    height:device.width*0.5
  },

  
});
