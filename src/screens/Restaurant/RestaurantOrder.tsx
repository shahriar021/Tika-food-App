import {
  View,
  Text,
  ScrollView,
  useWindowDimensions,
  TouchableOpacity,
  ActivityIndicator,
  TouchableHighlight,
} from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Navigation } from "src/types/navigation";
import { useTableListQuery } from "src/redux/features/restOrder/restaurantOrderApi";
import { tableData } from "src/types";

const RestaurantOrder = ({ navigation }: Navigation) => {
  const width = useWindowDimensions();
  const { data: tableList, isLoading } = useTableListQuery(undefined);

  const handleTable = (room: any) => {
    navigation.navigate("table Order", { info: room });
  };

  if (isLoading) {
    return (
      <View className="flex-1 items-center justify-center">
        <ActivityIndicator size="large" />
      </View>
    );
  }

  const tableColor = {
    orange: "bg-yellow-400",
    green: "bg-green-400",
    red: "bg-red-400",
  };

  return (
    <View>
      <View className="flex-row justify-end p-2 gap-1 items-center">
        <View className="gap-1 items-center w-[80px]">
          <FontAwesome name="circle" size={24} color="green" />
          <Text>Free Table</Text>
        </View>
        <View className="items-center gap-1 w-[80px]">
          <FontAwesome name="circle" size={24} color="orange" />
          <Text>Food Order</Text>
        </View>
        <View className="items-center gap-1 w-[100px]">
          <FontAwesome name="circle" size={24} color="red" />
          <Text>Guest Invoice</Text>
        </View>
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate("Order Submit")}>
        <Text>press</Text>
      </TouchableOpacity>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
        {tableList?.data?.map((item: tableData) => (
          <View key={item.zone_id}>
            <Text className="text-xl mx-2 font-semibold">{item.zone_name}</Text>
            <View
              className={`w-${width} border m-1 mx-2 border-cyan-500`}
            ></View>

            <View className="flex-row flex-wrap gap-2 m-2 ">
              {item?.tables?.map((room) => (
                <TouchableOpacity
                  key={room.id}
                  className={`border border-yellow-500 p-2 w-[60px] h-[70px] items-center justify-center rounded-md ${
                    tableColor[room.color as "green" | "orange" | "red"]
                  }`}
                  onPress={() => handleTable(room)}
                >
                  <Text className="text-xl font-semibold text-white">
                    {room.table_no}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default RestaurantOrder;
