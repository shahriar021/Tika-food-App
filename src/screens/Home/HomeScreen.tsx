import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
  ImageBackground,
  Animated,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import TopSection from "../../components/ui/homepage/TopSection";
import { dashboardData } from "src/constants/dashboardData";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign, Fontisto, Ionicons } from "@expo/vector-icons";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";
import * as Font from "expo-font";

const { height } = Dimensions.get("screen");

const chunkArray = (arr: any[], size: number) => {
  const chunked = [];
  for (let i = 0; i < arr.length; i += size) {
    chunked.push(arr.slice(i, i + size));
  }
  return chunked;
};
const images = [
  require("../../../assets/Pizza sharing-bro.png"),
  require("../../../assets/healthy food-bro.png"),
  require("../../../assets/fruit salad-bro.png"),
];
const DashboardScreen = ({ navigation }: { navigation: any }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const fadeAnim = useRef(new Animated.Value(1)).current;

  const nextImageIndex = (currentIndex + 1) % images.length;

  const insets = useSafeAreaInsets();

  const handleNavigation = (route: string) => {
    if (route) {
      navigation.navigate(route);
    }
  };

  const chunkedData = chunkArray(dashboardData, 4);
  if (chunkedData.length > 0) {
    const lastRow = chunkedData[chunkedData.length - 1];
    while (lastRow.length < 4) {
      lastRow.push({
        id: `empty-${lastRow.length}`,
        name: "",
        screen: "",
        empty: true,
        permission: "",
      });
    }
  }

  const [fontsLoaded, setFontsLoaded] = React.useState(false);

  const loadFonts = async () => {
    await Font.loadAsync({
      "Satoshi-Bold": require("../../../assets/fonts/Satoshi-Bold.ttf"),
    });
    setFontsLoaded(true);
  };

  React.useEffect(() => {
    loadFonts();
  }, []);

  if (!fontsLoaded) {
    return null; // or <AppLoading />
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View className="flex-1 p-3 bg-white">
        {/* top */}
      <View className="flex-row justify-between">
        <View className="flex-row items-center gap-1">
          <Ionicons name="notifications-circle-outline" size={24} color="black" />
          <Text className="font-satoshiBold text-2xl">The Readiness Track</Text>
        </View>
        <TouchableOpacity>
          <Ionicons name="notifications-circle-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
      {/* header */}
      <View className="border rounded-md p-2 mt-5 border-gray-100 bg-white shadow-2xl">
        <View className="flex-row justify-between">
          <Text className="font-satoshiBold text-2xl">Welcome PVT,Alex,Rivera</Text>
          <Text>June 21,20205</Text>
        </View>
        <View className="flex-row justify-between mt-2">
          <Text>UIC:W12345</Text>
          <Text>11:25 pm</Text>
        </View>
      </View>
      {/* color view */}
      <View className="items-center bg-paleYellow h-[250px] mt-5 rounded-md justify-center gap-10">
        <View className="bg-darkYellow rounded-full p-5 w-[100px] h-[100px] items-center justify-center">
            <Text className="font-satoshiBold text-2xl text-white">50 %</Text>
        </View>
        <View>
          <Text className="font-satoshiBold text-2xl">Readiness Status:Yellow</Text>
        <Text>Fill all information to stay GREEN</Text>
        </View>
      </View>
      {/* overview */}
      <View className="mt-5">
        <Text className="font-satoshiBold text-2xl">Quick Overview</Text>
        <View className="flex-row justify-between mt-3 border  p-3 rounded-md border-gray-100 bg-white shadow-md">
          <View className="flex-row items-center gap-2"><Fontisto name="first-aid-alt" size={24} color="blue" />
          <Text>Medpro</Text></View>
          <View className="flex-row items-row gap-2">
            <Text>Not Complete</Text>
        <AntDesign name="close" size={24} color="red" />
          </View>
        </View>
        <View className="flex-row justify-between mt-3 border  p-3 rounded-md border-gray-100 bg-white shadow-md">
          <View className="flex-row items-center gap-2"><Fontisto name="first-aid-alt" size={24} color="blue" />
          <Text>Medpro</Text></View>
          <View className="flex-row items-row gap-2">
            <Text>Not Complete</Text>
        <AntDesign name="close" size={24} color="red" />
          </View>
        </View>
        <View className="flex-row justify-between mt-3 border  p-3 rounded-md border-gray-100 bg-white shadow-md">
          <View className="flex-row items-center gap-2"><Fontisto name="first-aid-alt" size={24} color="blue" />
          <Text>Medpro</Text></View>
          <View className="flex-row items-row gap-2">
            <Text>Not Complete</Text>
        <AntDesign name="close" size={24} color="red" />
          </View>
        </View>
        <View className="flex-row justify-between mt-3 border  p-3 rounded-md border-gray-100 bg-white shadow-md">
          <View className="flex-row items-center gap-2"><Fontisto name="first-aid-alt" size={24} color="blue" />
          <Text>Medpro</Text></View>
          <View className="flex-row items-row gap-2">
            <Text>Not Complete</Text>
        <AntDesign name="close" size={24} color="red" />
          </View>
        </View>
        <View className="flex-row justify-between mt-3 border  p-3 rounded-md border-gray-100 bg-white shadow-md">
          <View className="flex-row items-center gap-2"><Fontisto name="first-aid-alt" size={24} color="blue" />
          <Text>Medpro</Text></View>
          <View className="flex-row items-row gap-2">
            <Text>Not Complete</Text>
        <AntDesign name="close" size={24} color="red" />
          </View>
        </View>
      </View>
      </View>
    </SafeAreaView>
  );
};

export default DashboardScreen;
