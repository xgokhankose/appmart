import { StyleSheet, Dimensions } from 'react-native';
const device = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    width: device.width * 0.8,
    borderRadius: 6,
    backgroundColor: '#fff',
    marginVertical: 8,

    backgroundColor: '#F0F0F0',
  },
  comment: {
    fontFamily: 'Nunito_700Bold',
    paddingTop: 6,
    paddingHorizontal: 10,
    paddingBottom: 25
  },
  name: {
    fontSize: 18,
    fontFamily: 'Nunito_700Bold',
    maxWidth: device.width * 0.5,
  },
  date: {
    fontFamily: 'Nunito_700Bold',
    textAlign: 'right',
  },
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  rating: {},
  titleInnerContainer: {
    alignItems: 'flex-start',
  },
  divider: {
    borderWidth: 1,
    width: '100%',
    borderColor: '#fff',
  },
});

export { styles };
