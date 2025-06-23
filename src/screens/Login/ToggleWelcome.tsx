import { View, Text } from "react-native";
import React from "react";
import LoginScreen from "./LoginScreen";
import WelcomeScreen from "./WelcomeScreen";
import { useAppSelector } from "src/redux/hooks";

const ToggleWelcome = () => {
  const company = useAppSelector((state) => state.auth.BASE_URL);
  return (
    <View className="flex-1">
      {company ? <LoginScreen /> : <WelcomeScreen />}
    </View>
  );
};

export default ToggleWelcome;
