import { StyleSheet, Dimensions } from 'react-native';
const device = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ED6663',
    padding: 20,
    margin: 5,
    borderRadius: 20,
    flex:1
  },
  image: {
    width: device.width * 0.4,
    height: device.width * 0.4,
    borderRadius: 20,
  },
  inner_mid_container: {
    width: device.width * 0.4,
    alignItems: 'flex-start',
  },
  name: {
    fontFamily: 'Nunito_700Bold',
    fontSize: 23,
  },
  category: {
    fontFamily: 'Nunito_400Regular',
    fontSize: 17,
  },
  calendar: {
    height: 10,
    width: 10,
    marginRight:4
  },
  button: {
    backgroundColor: '#3C2C3E',
    width: 50,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inner_bottom_container: {
    width: device.width * 0.4,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  calendar_container: { flexDirection: 'row', alignItems: 'center' },
  button_text: {
    color: '#ED6663',
    fontFamily: 'Nunito_700Bold',
  },
});
