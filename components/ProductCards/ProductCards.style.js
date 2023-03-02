import { StyleSheet, Dimensions } from 'react-native';
const device = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    borderRadius: 27,
    margin: 8,
    padding: 5,
    backgroundColor: Platform.OS === 'ios' ? '#fff' : null,
    borderColor: '#ED6663',
    shadowColor: Platform.OS === 'ios' ? '#ED6663' : '#ED6663',
    shadowOffset: {
      width: Platform.OS === 'ios' ? 3 : 0,
      height: Platform.OS === 'ios' ? 3 : 2,
    },
    shadowOpacity: Platform.OS === 'ios' ? 0.4 : 0.8,
    shadowRadius: Platform.OS === 'ios' ? null : 40,
    elevation: Platform.OS === 'ios' ? null : 4,
  },

  image: {
    width: device.width * 0.4,
    height: device.width * 0.4,
    borderRadius: 25,
  },
  bottom_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  icon: {
    width: 15,
    height: 15,
    marginRight: 5,
  },
  name: {
    fontFamily: 'Nunito_400Regular',
    fontSize: 21,
    color: 'black',
  },
  category: {
    fontSize: 14,
    fontFamily:"Nunito_700Bold",
    color:"#ED6663"
  },
  inner_container: {
    justifyContent: 'center',
    height:80,
    paddingLeft:10
  },
});
