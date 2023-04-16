import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('screen');
export default StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },
  avatar: {
    width: 50,
    height: 50,
    margin: 20,
  },
  name: {
    fontSize: 17,
    fontFamily: 'Nunito_700Bold',
  },
  icon: {
    width: 20,
    height: 20,
    margin: 10,
  },
  top_container: {
    flexDirection: 'row',
    width: width,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
    height: 40,
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 14,
  },
  input: {
    flex: 1,
    marginHorizontal: 5,
    fontFamily: 'Nunito_400Regular',
    fontSize: 16,
  },
  flatList: {
    backgroundColor: 'red',
  },
  send: {
    fontFamily: 'Nunito_700Bold',
    color: '#ED6663',
    fontSize: 17,
  },
  send_button: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginRight: 5,
    padding: 3,
  },
  commentContainer: {
    width: width - 80,
    padding: 24,
    backgroundColor: 'white',
    marginTop: 24,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 12
  },
  commentInput: {
    width: '100% - 80',
    borderWidth: 1,
    borderRadius: 8,
    height: 48
  },
  star: {
    marginVertical: 12
  }
});
