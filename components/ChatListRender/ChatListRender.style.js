import { StyleSheet, Dimensions } from 'react-native';
const device = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginLeft: 20,
    marginVertical: 15,
  },
  inner_container: {
    borderBottomWidth: 1,
    borderColor: '#D8D8D8',
    margin: 20,
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    width: device.width * 0.7,
  },
  name: {
    fontSize: 22,
    fontFamily: 'Nunito_700Bold',
  },
  product_name: {
    fontSize: 14,
    fontFamily: 'Nunito_400Regular',
    color: '#404040',
    marginLeft: 3,
    maxWidth: device.width * 0.3,
  },
  title_container: {
    width: device.width * 0.6,
    paddingRight: device.width * 0.05,
  },
  date: {
    fontSize: 16,
    color: 'gray',
    fontFamily: 'Nunito_400Regular',
  },
  inner_title_container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
