import { StyleSheet, Dimensions } from 'react-native';
const device = Dimensions.get('window');

export default StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  scroll_container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  main_container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    marginBottom: device.height * 0.2,
    marginTop: device.height * 0.2,
  },
  photoButton: {
    marginTop: 10,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  photoButtonText: {
    color: '#ED6663',
    fontFamily: 'Nunito_700Bold',
    fontSize: 18,
  },
  add: {
    width: 25,
    height: 25,
  },
  photo: {
    width: 100,
    height: 100,
  },
  
});
