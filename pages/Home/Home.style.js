import { StyleSheet, Dimensions } from 'react-native';
const device = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent:"center",
    alignItems:"center"
  },
  top_container: {
    justifyContent: "flex-end",
    alignItems: 'center',
    backgroundColor: '#3C2C3E',
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    height:device.height*0.35
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
    color: '#fff',
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
    height: device.height * 0.15,
  },
  categories_list: {
    marginLeft: 10,
  },
  products_container: {
    justifyContent:"center",
    alignItems:"center"
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
    backgroundColor:"red"
  },
 
});
