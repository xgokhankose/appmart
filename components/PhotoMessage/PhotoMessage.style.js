import { StyleSheet, Dimensions } from 'react-native';

const device = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  image_sender: {
    width: device.width * 0.5,
    height: device.width * 0.5,
    alignSelf: 'flex-end',
    marginRight: 10,
    marginTop: 10,
    borderRadius: 10,
  },
  image_receiver: {
    width: device.width * 0.5,
    height: device.width * 0.5,
    alignSelf: 'flex-start',
    marginLeft: 10,
    marginTop: 10,
    borderRadius: 10,
  },
});
