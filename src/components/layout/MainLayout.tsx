import { View } from "react-native";
import React, {  useState } from "react";
import { StatusBar } from "expo-status-bar";
import StackNavigation from "src/routes/StackNavigation";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "src/routes/AuthStack";
import { useFonts } from "expo-font";

const MainLayout = () => {
  // const token = useAppSelector((state) => state.auth.user?.access_token);
  const token =0;
  const [, setCurrentScreen] = useState("");

  const [fontsLoaded] = useFonts({
      'Roboto-Bold': require('../../../assets/fonts/Roboto-Bold.ttf'),
    });
  
    if (!fontsLoaded) return null;  
  
  return (
    <NavigationContainer>
    <View style={{ flex: 1 }}>
      <StatusBar style="light" />
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
