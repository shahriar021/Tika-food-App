import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { FontAwesome, Fontisto } from "@expo/vector-icons";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  Easing,
} from "react-native-reanimated";
import { useOnGoingCustomerListQuery } from "src/redux/features/restOrder/restaurantOrderApi";

const OngoingCustomerList = () => {
  const scale = useSharedValue(1);
  const fDt = "";
  const tDt = "";
  const dateFIlter = { fDt, tDt };
  const { data: onGoinglist } = useOnGoingCustomerListQuery(undefined);

  useEffect(() => {
    scale.value = withRepeat(
      withTiming(0.5, {
        duration: 1000,
        easing: Easing.inOut(Easing.ease),
      }),
      -1,
      true // reverse
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    opacity: 2 - scale.value, // fades as it scales
  }));

  return (
    <View className="flex-1 items-center p-1 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-100 m-2">
      {onGoinglist &&
        onGoinglist.sales.map((item: any) => (
          <View className="mt-3 w-full bg-white p-3 rounded-3xl overflow-hidden border border-r-green-300 border-l-red-300 border-t-red-300 border-b-green-300 shadow-2xl">
            {/* Header */}
            <View className="flex-row justify-between mb-1">
              <Text className="font-extrabold text-3xl text-[#333333] tracking-wide">
                {item.guest_name}
              </Text>
              <View className="flex-row items-center gap-2">
                <Fontisto name="date" size={22} color="#D49F00" />
                <Text className="font-semibold text-xl text-gray-600">
                  {item.date?.split("-").reverse().join("-")}
                </Text>
              </View>
            </View>

            {/* Price & Animated Circle */}
            <View className="flex-row justify-between items-center mb-1">
              <Text className="font-semibold text-2xl text-[#333333]">
                Total Price:{" "}
                <Text className="text-[#D49F00]">{item.subtotal} tk</Text>
              </Text>
              <Animated.View
                style={[animatedStyle]}
                className="h-14 w-14 bg-[#ffc822] rounded-full shadow-2xl border-2 border-[#D49F00]"
              />
            </View>

            {/* Table Info */}
            <Text className="font-bold text-lg text-[#333333]">
              Table: <Text className="font-semibold text-[#D49F00]">201</Text>
            </Text>
          </View>
        ))}
    </View>
  );
};

export default OngoingCustomerList;
