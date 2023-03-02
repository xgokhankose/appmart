import { StyleSheet, Dimensions } from 'react-native';
const device = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  top_container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#59405C',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
  search_bar: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: device.width * 0.8,
    height: 50,
    borderRadius: 25,
    paddingLeft: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 50,
    marginTop:20,
  },
  search_bar_icon: {
    width: 20,
    height: 20,
    marginRight: 3,
  },
  search_bar_input: {
    fontFamily: 'Nunito_400Regular',
    fontSize: 16,
    width: device.width * 0.6,
  },

  search_bar_button: {
    height: 45,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ED6663',
    borderRadius: 25,
    margin: 4,
  },
  top_container_title: {
    width: device.width * 0.8,
    fontFamily: 'Nunito_700Bold',
    fontSize: 35,
    marginTop: 80,
    color:"#fff"
  },
  categories_button: {
    margin: 2,
    backgroundColor: '#ED6663',
    borderRadius: 9,
  },
  categories_button_text: {
    padding: 12,
    fontSize: 16,
    fontFamily: 'Nunito_700Bold',
    color: '#fff',
  },
  categories_title: {
    fontSize: 22,
    fontFamily: 'Nunito_700Bold',
    width: '100%',
    marginTop: 30,
    margin: 10,
  },
  categories_container: {
    marginLeft: 10,
  },
  categories_list: {
    marginLeft: 10,
  },
});
