import React, { useState, useEffect } from 'react';
import Tabs from './navigation/Tabs';
import AuthStack from './navigation/AuthStack';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts, Nunito_400Regular, Nunito_700Bold } from '@expo-google-fonts/nunito';
import { getAuth } from 'firebase/auth';
import { Provider } from 'react-redux';
import { store } from './redux';
import { LogBox } from 'react-native';


export default function App() {
  const [isLogin, setIsLogin] = useState();

  LogBox.ignoreAllLogs();
  
  useEffect(() => {
    getAuth().onAuthStateChanged((user) => {
      setIsLogin(!!user);
    });
  }, []);

  const [fontLoaded] = useFonts({
    Nunito_400Regular,
    Nunito_700Bold,
  });

  if (!fontLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>{!isLogin ? <AuthStack /> : <Tabs />}</NavigationContainer>
    </Provider>
  );
}
