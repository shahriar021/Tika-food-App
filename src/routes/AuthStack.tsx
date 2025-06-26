import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "src/screens/Login/LoginScreen";
import VerifyEmailPage from "src/screens/Login/VerifyEmailPage";

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen options={{headerShown:true}} name="VerifyEmail" component={VerifyEmailPage} />
    </Stack.Navigator>
  );
};

export default AuthStack;
