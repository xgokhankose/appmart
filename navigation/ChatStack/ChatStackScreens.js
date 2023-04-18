import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ChatList from '../../pages/ChatList';
import Chat from '../../pages/Chat';
import CommentProfile from '../../pages/CommentProfile';

const Stack = createNativeStackNavigator();

const ChatStackScreens = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="ChatListPage" component={ChatList} />
      <Stack.Screen name="ChatPage" component={Chat} />
      <Stack.Screen name="CommentProfilePage" component={CommentProfile} />
    </Stack.Navigator>
  );
};
export default ChatStackScreens;
