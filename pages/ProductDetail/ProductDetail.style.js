import { StyleSheet, Dimensions } from 'react-native';
const device = Dimensions.get('window');
export default StyleSheet.create({
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
  name: {
    fontSize: 30,
    fontFamily: 'Nunito_400Regular',
  },
  titles_container: {
    width: device.width,
    paddingTop: 10,
    paddingHorizontal: 30,
    paddingBottom: 20,
  },
  category: {
    fontSize: 20,
    fontFamily: 'Nunito_700Bold',
    color: '#606060',
  },
  image: {
    width: device.width * 0.8,
    height: device.width * 0.8,
    borderRadius: 10,
  },
  image_container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  mini_image: {
    width: 50,
    height: 50,
    margin: 4,
    borderRadius: 5,
  },
  mini_image_container: {
    borderWidth: 2,
    marginHorizontal: 10,
    marginVertical: 20,
    borderRadius: 6,
  },
  description: {
    fontSize: 18,
    fontFamily: 'Nunito_400Regular',
  },
  description_title: {
    fontSize: 22,
    color: '#ED6663',
    fontFamily: 'Nunito_700Bold',
  },
  message_button: {
    width: device.width * 0.6,
    backgroundColor: '#ED6663',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderRadius: 15,
    flexDirection: 'row',
  },
  button_container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 50,
  },
  message_button_title: {
    fontSize: 20,
    fontFamily: 'Nunito_700Bold',
    color: '#fff',
    marginRight: 5,
  },
  titles_inner_container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  date: {
    fontSize: 14,
    fontFamily: 'Nunito_700Bold',
    color: '#606060',
  },
  userName: {
    fontSize: 20,
    fontFamily: 'Nunito_700Bold',
    color: '#ed6663',
  },
  userNameButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  calendar: {
    height: 10,
    width: 10,
    marginRight: 4,
  },
  calendar_container: { flexDirection: 'row', alignItems: 'center' },
});
