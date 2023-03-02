import { StyleSheet, Dimensions } from 'react-native';
const device = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    width: device.width * 0.7,
    margin: 10,
  },
  input: {
    borderWidth: 2,
    borderColor: '#BEBEBE',
    height: 40,
    borderRadius: 6,
    paddingHorizontal: 5,
  },
  header: {
    fontSize: 17,
    fontFamily: 'Nunito_400Regular',
  },
});
