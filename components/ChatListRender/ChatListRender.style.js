import { StyleSheet, Dimensions } from 'react-native';

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
    flex: 1,
    margin: 20,
    justifyContent: 'center',
    paddingBottom:20
    
  },
  name: {
    fontSize: 22,
    fontFamily: 'Nunito_700Bold',
  },
  product_name: {
    fontSize: 16,
    fontFamily: 'Nunito_400Regular',
    color: '#404040',
  },
});
