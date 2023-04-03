import { StyleSheet, Dimensions } from 'react-native';
const device = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  top_container: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#E8E2E2',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    height: device.height * 0.22,
  },
  search_bar: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: device.width * 0.7,
    height: 50,
    borderRadius: 25,
    paddingLeft: 15,
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 50,
    marginTop: 20,
  },
  search_bar_icon: {
    width: 20,
    height: 20,
    marginRight: 3,
  },
  search_bar_input: {
    fontFamily: 'Nunito_400Regular',
    fontSize: 16,
    width: device.width * 0.5,
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
    width: device.width * 0.7,
    fontFamily: 'Nunito_700Bold',
    fontSize: 35,
    marginTop: 80,
    color: '#ED6663',
  },
  categories_button: {
    margin: 2,
    backgroundColor: '#ED6663',
    borderRadius: 10,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2,
  },
  categories_button_text: {
    padding: 12,
    fontFamily: 'Nunito_700Bold',
    color: '#fff',
    fontSize: 16,
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
    height: device.height * 0.15,
  },
  categories_list: {
    marginLeft: 10,
  },
  products_container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  products_title: {
    fontSize: 22,
    fontFamily: 'Nunito_700Bold',
    width: '100%',
    marginLeft: 22,
  },
  products_list: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  remove_bar_button: {
    height: 45,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    margin: 4,
  },
});
