import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../../pages/Auth/Login";
import Register from "../../pages/Auth/Register";

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="LoginPage" component={Login} />
      <Stack.Screen name="RegisterPage" component={Register} />
    </Stack.Navigator>
  );
};
export default AuthStack;
