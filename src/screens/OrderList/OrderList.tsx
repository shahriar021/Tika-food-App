import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { AntDesign, Fontisto, SimpleLineIcons } from "@expo/vector-icons";

const OrderList = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <View className="flex-1 bg-gray-100 p-1">
      <View className="bg-white p-2 shadow-2xl m-2 rounded-md relative">
        <View className="flex-row items-center absolute left-0 top-4 bg-green-300 p-2 rounded-tr-full rounded-br-full gap-2">
          <Fontisto name="date" size={24} color="white" />
          <Text className="font-semibold">03-05-2025</Text>
        </View>
        <TouchableOpacity
          className="items-end"
          onPress={() => setOpenMenu(!openMenu)}
        >
          <SimpleLineIcons name="options" size={24} color="black" />
        </TouchableOpacity>
        <View className="mt-2 p-2 flex-row justify-between items-center">
          <Text className="font-semibold">Mr Salam</Text>
          <View className="bg-green-300 items-center border border-green-300 rounded-md overflow-hidden">
            <Text className="text-black font-semibold">Invoice</Text>
            <View className="flex-row items-center gap-2 bg-white p-1">
              <Fontisto name="date" size={24} color="green" />
              <Text className="font-semibold">03-05-2025</Text>
            </View>
          </View>
        </View>
        <View className="border border-green-300"></View>
        <View className="flex-row justify-around mt-2">
          <View className="bg-green-100 p-2 rounded-md items-center">
            <Text className="font-semibold">Total</Text>
            <Text className="text-lg text-black">2000 tk</Text>
          </View>
          <View className="bg-green-100 p-2 rounded-md items-center">
            <Text className="font-semibold">Discount</Text>
            <Text className="text-lg text-black">20 tk</Text>
          </View>
          <View className="bg-green-100 p-2 rounded-md items-center">
            <Text className="font-semibold">Paid</Text>
            <Text className="text-lg text-black">1500 tk</Text>
          </View>
        </View>
        {openMenu && (
          <View className="flex-row bg-white p-3 w-[100px] justify-between rounded-md absolute right-1 top-7 border border-green-100">
            <TouchableOpacity>
              <AntDesign name="eye" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
              <AntDesign name="printer" size={24} color="black" />
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

export default OrderList;
