import { StyleSheet, Dimensions } from 'react-native';

const device = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(00, 00, 00, 0.8)',
  },
  modal: {
    height: 150,
    paddingTop: 10,
    backgroundColor: 'blue',
    borderRadius: 10,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: device.width,
    height: device.width,
    zIndex: 100,
  },
  inner_container: {
    width: device.width,
    height: device.height,
    position: 'absolute',
  },
});
