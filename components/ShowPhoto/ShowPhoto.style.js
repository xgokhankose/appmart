import { StyleSheet, Dimensions } from 'react-native';

const device = Dimensions.get('window');

export default StyleSheet.create({
  image: {
    width: device.width,
    height: device.width,
    marginTop: device.width / 2 - 75,
  },
  container: {
    flex: 1,
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
});
