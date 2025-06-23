import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
  ImageBackground,
  Animated,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import TopSection from "../../components/ui/homepage/TopSection";
import { dashboardData } from "src/constants/dashboardData";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";
import { useSafeAreaInsets } from "react-native-safe-area-context";

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

  useEffect(() => {
    const interval = setInterval(() => {
      // Fade out
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      }).start(() => {
        // Switch image
        setCurrentIndex(nextImageIndex);

        // Fade in
        fadeAnim.setValue(0);
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }).start();
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex]);
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
  return (
    <SafeAreaView style={{ flex: 1 }}>
      
    </SafeAreaView>
  );
};

export default DashboardScreen;
