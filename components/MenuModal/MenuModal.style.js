import { StyleSheet, Dimensions } from 'react-native';

const device = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(00, 00, 00, 0.9)',
  },
  inner_container: {
    width: device.width,
    height: device.height,
    position: 'absolute',
  },
  button: {
    width: 150,
    height: 50,
    backgroundColor: '#3C2C3E',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginBottom: 5,
  },
  text: {
    color: '#fff',
    fontSize: 22,
    fontFamily: 'Nunito_700Bold',
  },
  title: {
    fontSize: 25,
    color: '#fff',
  },
  description: {
    width: device.width * 0.8,
    marginVertical: 20,
    color: '#fff',
    fontSize: 17,
    textAlign:"center"
  },
  button_red: {
    width: 150,
    height: 50,
    backgroundColor: '#ED6663',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginBottom: 5,
  },
});
