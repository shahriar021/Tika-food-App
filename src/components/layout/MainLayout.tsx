import { View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import StackNavigation from "src/routes/StackNavigation";
import SplashScreen from "../ui/splashScreen/SplashScreen";
import { LoginScreen } from "src/screens";
import { useAppSelector } from "src/redux/hooks";
import VerifyEmailPage from "src/screens/Auth/VerifyEmailPage";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "src/routes/AuthStack";
import { useFonts } from "expo-font";

const MainLayout = () => {
  // const token = useAppSelector((state) => state.auth.user?.access_token);
  const token =1;
  const [, setCurrentScreen] = useState("");

  const [fontsLoaded] = useFonts({
      'Roboto-Bold': require('../../../assets/fonts/Roboto-Bold.ttf'),
    });
  
    if (!fontsLoaded) return null;  
  
  return (
    <NavigationContainer>
    <View style={{ flex: 1 }}>
      <StatusBar style="dark" />
      {token ? (
        <StackNavigation setCurrentScreen={setCurrentScreen} />
      ) : (
        <AuthStack />
      )}
    </View>
    </NavigationContainer>
  );
};

export default MainLayout;
