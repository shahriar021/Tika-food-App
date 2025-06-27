import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "src/screens/Auth/LoginScreen";
import OTPScreen from "src/screens/Auth/OTPScreen";
import VerifyEmailPage from "src/screens/Auth/VerifyEmailPage";

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen options={{ headerShown: true }} name="VerifyEmail" component={VerifyEmailPage} />
      <Stack.Screen options={{headerShown:true}} name="OTP Screen" component={OTPScreen} />
    </Stack.Navigator>
  );
};

export default AuthStack;
