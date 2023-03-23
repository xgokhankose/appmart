import { StyleSheet, Dimensions } from 'react-native';

const device = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  icon: {
    width: 20,
    height: 20,
  },
  icon_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 60,
  },
  icon_inner_container: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  product_photo: {
    width: 44,
    height: 44,
    borderRadius: 22,
  },
  seperator: {
    borderWidth: 1,
    borderColor: '#ED6663',
  },
  icon_mid_container: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  receiver_name: {
    fontSize: 17,
    fontFamily: 'Nunito_700Bold',
    marginLeft: 10,
    color: '#ED6663',
  },
  messages_container: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    height: 40,
    backgroundColor: '#F0F0F0',
    margin: 10,
    borderRadius: 14,
  },
  input: {
    flex: 1,
    marginHorizontal: 5,
    fontFamily:"Nunito_400Regular",
    fontSize:16,
    
  },
  send: {
    fontFamily: 'Nunito_700Bold',
    color: '#ED6663',
    fontSize: 17,
  },
  send_button: {
    backgroundColor: '#f0f0f0',
    height: 30,
    width: 60,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginRight:5
  },
  image_icon: {
    width: 25,
    height: 25,
  },
});
