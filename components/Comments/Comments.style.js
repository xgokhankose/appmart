import { StyleSheet, Dimensions } from 'react-native';
const device = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    width: device.width * 0.8,
    borderWidth: 2,
    borderColor: '#BEBEBE',
    borderRadius: 6,
    paddingHorizontal: 5,
  },
  comment: {},
  name: {},
  date: {},
  innerContainer: {
    flexDirection: 'row',
  },
  rating: {},
});

export { styles };
