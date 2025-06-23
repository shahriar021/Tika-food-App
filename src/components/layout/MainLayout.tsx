import { View } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import StackNavigation from "src/routes/StackNavigation";
import SplashScreen from "../ui/splashScreen/SplashScreen";
import { LoginScreen } from "src/screens";
import WelcomeScreen from "src/screens/Login/WelcomeScreen";
import { useAppSelector } from "src/redux/hooks";
import ToggleWelcome from "src/screens/Login/ToggleWelcome";

const MainLayout = () => {
  // const token = useAppSelector((state) => state.auth.user?.access_token);
  const token =1;
  const [, setCurrentScreen] = useState("");
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  useLayoutEffect(() => {
    setTimeout(() => {
      setIsSplashVisible(false);
    }, 3000);
  }, []);

  if (isSplashVisible) {
    return <SplashScreen />;
  }
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="dark" />
      {token ? (
        <StackNavigation setCurrentScreen={setCurrentScreen} />
      ) : (
        <ToggleWelcome />
      )}
    </View>
  );
};

export default MainLayout;
