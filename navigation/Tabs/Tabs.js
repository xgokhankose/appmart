import { Image, SafeAreaView, StatusBar } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../pages/Home';
import Chat from '../../pages/Chat';
import ProfileStackScreen from '../ProfileStackScreen';
import HomeStackScreens from '../HomeStack/HomeStackScreens';

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'yellow ' }} forceInset={{ top: 'never' }}>
      <Tab.Navigator screenOptions={{ headerShown: false }} initialRouteName="HomeScreen">
        <Tab.Screen
          options={{
            title: '',
            tabBarIcon: ({ focused, color, size }) => (
              <Image
                source={
                  focused ? require('../../assets/chatFocus.png') : require('../../assets/chat.png')
                }
                style={{
                  width: size,
                  height: size,
                  borderRadius: size,
                }}
              />
            ),
          }}
          name="ChatScreen"
          component={Chat}
        />
        <Tab.Screen
          options={{
            title: '',
            tabBarIcon: ({ focused, color, size }) => (
              <Image
                source={
                  focused ? require('../../assets/homeFocus.png') : require('../../assets/home.png')
                }
                style={{
                  width: size,
                  height: size,
                }}
              />
            ),
          }}
          name="HomeScreen"
          component={HomeStackScreens}
        />
        <Tab.Screen
          options={{
            title: '',
            tabBarIcon: ({ focused, color, size }) => (
              <Image
                source={
                  focused ? require('../../assets/userFocus.png') : require('../../assets/user.png')
                }
                style={{
                  width: size,
                  height: size,
                }}
              />
            ),
          }}
          name="ProfileScreen"
          component={ProfileStackScreen}
        />
      </Tab.Navigator>
    </SafeAreaView>
  );
};
export default MyTabs;
