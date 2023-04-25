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
    height: 100,
    borderRadius: 6,
    padding: 5,
    textAlignVertical: 'top',
  },
  header: {
    fontSize: 17,
    marginBottom: 8,
    fontFamily: 'Nunito_400Regular',
  },
});
