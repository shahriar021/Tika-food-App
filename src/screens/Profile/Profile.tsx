import { Entypo } from "@expo/vector-icons";
import React from "react";
import {  View, Image, Dimensions, Text, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function YourComponent() {
  const { width } = Dimensions.get("window"); 

  return (
    <SafeAreaView style={{ flex: 1,backgroundColor:"white",overflow:'visible' }}>
      <View style={{ width, height: 200,position: "relative" }}>
        {/* Left Image */}
        <Image
          source={require("../../../assets/restroIcon/Ellipse1.png")}
          style={{
            width: width * 0.65,
            height: "100%",
            position: "absolute",
            left: 0,
            top: 0,
            zIndex: 2,
            resizeMode: "contain",
          }}
        />
        {/* Right Image */}
        <Image
          source={require("../../../assets/restroIcon/Ellipse2.png")}
          style={{
            width: width * 0.6,
            height: "100%",
            position: "absolute",
            right: 0,
            top: 0,
            resizeMode: "contain",
          }}
        />
        <View className="w-[100] h-[100] absolute z-10 overflow-hidden rounded-full left-1/2 bottom-0 -translate-x-1/2  border-4 border-white">
          <Image source={require("../../../assets/restroIcon/tikaImg.jpg")} style={{width:"100%",height:"100%"}} resizeMode="cover"/>
        </View>
      </View>
      <Text className="text-center mt-2 mb-2 font-robotoBold">Lukas Wagner</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="p-4 items-center">
        <TouchableOpacity className="flex-row justify-between border p-2 m-2 rounded-lg border-gray-300 w-full">
          <View className="flex-row items-center gap-2">
            <Image source={require("../../../assets/restroIcon/setting.png")} className="w-[20] h-[20]"/>
          <Text>Settings</Text>
          </View>
          <Entypo name="chevron-with-circle-right" size={24} color="gray" />
        </TouchableOpacity>

        <TouchableOpacity className="flex-row justify-between border p-2 m-2 rounded-lg border-gray-300  w-full">
          <View className="flex-row items-center gap-2">
            <Image source={require("../../../assets/restroIcon/location-03.png")} className="w-[20] h-[20]"/>
          <Text>Address</Text>
          </View>
          <Entypo name="chevron-with-circle-right" size={24} color="gray" />
        </TouchableOpacity>

        <TouchableOpacity className="flex-row justify-between border p-2 m-2 rounded-lg border-gray-300  w-full">
          <View className="flex-row items-center gap-2">
            <Image source={require("../../../assets/restroIcon/Info_alt_light.png")} className="w-[20] h-[20]"/>
          <Text>About Us</Text>
          </View>
          <Entypo name="chevron-with-circle-right" size={24} color="gray" />
        </TouchableOpacity>

        <TouchableOpacity className="flex-row justify-between border p-2 m-2 rounded-lg border-gray-300  w-full">
          <View className="flex-row items-center gap-2">
            <Image source={require("../../../assets/restroIcon/Chield.png")} className="w-[20] h-[20]"/>
          <Text>Privacy Policy</Text>
          </View>
          <Entypo name="chevron-with-circle-right" size={24} color="gray" />
        </TouchableOpacity>

        <TouchableOpacity className="flex-row justify-between border p-2 m-2 rounded-lg border-gray-300  w-full">
          <View className="flex-row items-center gap-2">
            <Image source={require("../../../assets/restroIcon/Paper_light.png")} className="w-[20] h-[20]"/>
          <Text>Terms & conditions</Text>
          </View>
          <Entypo name="chevron-with-circle-right" size={24} color="gray" />
        </TouchableOpacity>

        <TouchableOpacity className="mt-2 flex-row items-center border p-3 rounded-xl border-red-700 bg-red-50">
          <Image source={require("../../../assets/restroIcon/logout-02.png")} className="w-[30] h-[30]"/>
          <Text>Log out</Text>
        </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
