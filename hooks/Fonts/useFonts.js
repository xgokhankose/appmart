import * as Font from 'expo-font';

export default useFonts = async () =>
  await Font.loadAsync({
    limelight: require('../../assets/fonts/Nunito.ttf'),
    indie: require('../../assets/fonts/Nunito-Italic.ttf'),
  });