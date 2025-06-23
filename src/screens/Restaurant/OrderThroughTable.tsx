import {
  View,
  Text,
  useWindowDimensions,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import { AntDesign, Feather, Fontisto } from "@expo/vector-icons";
import { Image } from "react-native";
import CategoryPicker from "src/components/ui/restaurant/CategoryPicker";
import {
  useCreateTableItemsQuery,
  useCreateTableItemsWithSaleIdQuery,
} from "src/redux/features/restOrder/restaurantOrderApi";
import useTableOrderInfo from "src/hooks/useTableOrderInfo";
import InputSelectPickerUser from "src/components/ui/restaurant/InputSelectPickerUser";
import { skipToken } from "@reduxjs/toolkit/query";

const OrderThroughTable = ({ navigation }: any) => {
  const { width } = useWindowDimensions();
  const route = useRoute();
  const { info } = route.params;
  const [selectFoodCategory, setSelectFoodCategory] = useState<any>([]);
  const [selectWaiter, setSelectWaiter] = useState([]);
  const [selectedItems, setSelectedItems] = useState<any>([]);
  const [showFirst, setSelectedShowFirst] = useState([]);
  const [selectCustomer, setSelectCustomer] = useState();
  const [tableState, setTableState] = useState();
  const tId = info?.id;
  const wId = "yes";
  const sId = info?.sale_id;

  const { data: allItemsForCreateOrder } = useCreateTableItemsQuery(
    tId && wId ? { tId, wId } : skipToken
  );
  const { data: allItemsForCreateOrderWithSaleId } =
    useCreateTableItemsWithSaleIdQuery(tId && sId ? { tId, sId } : skipToken);

  useEffect(() => {
    if (info.color == "green") {
      setTableState(allItemsForCreateOrder);
    } else if (info.color == "orange") {
      setTableState(allItemsForCreateOrderWithSaleId);
    }
  }, [allItemsForCreateOrder, allItemsForCreateOrderWithSaleId]);

  // custom hoooks..
  const { waiters, foodCategory, foods, customers } = useTableOrderInfo(
    tableState,
    selectFoodCategory.id
  );

  const handleItemPick = (item: any, categoryName: any) => {
    setSelectedItems((prev: any) => {
      const existing = prev.find((picked: any) => picked.id === item.id);
      if (existing) {
        return prev.map((picked: any) =>
          picked.id === item.id
            ? { ...picked, quantity: picked.quantity + 1 }
            : picked
        );
      } else {
        return [...prev, { ...item, quantity: 1, categoryName }];
      }
    });
  };

  const handleProceed = () => {
    const othersInfoObj = {
      customer: showFirst,
      waiter: selectWaiter,
      slFoodCategory: selectFoodCategory,
      table_id: tId,
    };
    navigation.navigate("Order Submit", {
      info: selectedItems,
      othersInfo: othersInfoObj,
    });
  };

  const totalItemsQuantity = selectedItems
    .map((item: any) => item.quantity)
    .reduce((acc: any, cur: any) => acc + cur, 0);

  useEffect(() => {
    const showFirstOne = customers?.find((item: any) => item.id == 1);
    setSelectedShowFirst(showFirstOne);
  }, [customers]);

  return (
    <View className={`flex-1 w-${width} `}>
      <Text className="text-center font-bold text-2xl bg-green-500 p-2 text-white">
        Table:{info?.table_no}
      </Text>
      <View className="flex-row items-center justify-between gap-2  p-2">
        <View className="flex-1 ">
          <InputSelectPickerUser
            title={"Customers"}
            showSelected={showFirst}
            data={customers}
            selectedState={selectCustomer}
            setSelectedState={setSelectCustomer}
          />
        </View>
        <View className="flex-row items-center gap-2">
          <Fontisto name="date" size={24} color="green" />
          <Text className="font-semibold text-xl">
            {new Date().toDateString()}
          </Text>
        </View>
      </View>

      <View className=" w-full items-center px-2 justify-center ">
        <Text className="text-center font-semibold px-2 text-xl mb-1">
          Waiter
        </Text>
        <CategoryPicker
          data={waiters}
          selectedState={selectWaiter}
          setSelectedState={setSelectWaiter}
        />
      </View>

      <View className="w-full px-2 ">
        <Text className="font-semibold px-2 text-center text-xl mb-1">
          Food Category
        </Text>
        <CategoryPicker
          data={foodCategory}
          selectedState={selectFoodCategory}
          setSelectedState={setSelectFoodCategory}
        />
      </View>
      <ScrollView
        contentContainerStyle={{ paddingBottom: 20, marginTop: 2 }}
        showsVerticalScrollIndicator={false}
      >
        {foods ? (
          foods.map((item: any, index: any) => {
            const itemQuantity =
              selectedItems.find((p: any) => p.id === item.id)?.quantity || 0;
            return (
              <TouchableOpacity
                key={item.id}
                className={`p-3 m-2 rounded-md h-[60px] relative mt-3   flex-row justify-between items-center bg-white ${
                  selectedItems.some((picked: any) => picked.id === item.id)
                    ? " border-green-500 border bg-green-50"
                    : "border border-red-300"
                }`}
                onPress={() =>
                  handleItemPick(item, selectFoodCategory.name?.toString())
                }
              >
                <View>
                  <Text className="text-black text-2xl font-bold">
                    {item.name}
                  </Text>
                </View>
                <Text className="text-xl">{item.sale_price} tk</Text>
                {selectedItems.some((picked: any) => picked.id === item.id) && (
                  <View className="justify-center items-center  absolute right-1.5 -top-4 bg-green-500 rounded-full w-7 h-7">
                    <Text className=" font-bold text-white">
                      {itemQuantity}
                    </Text>
                  </View>
                )}
              </TouchableOpacity>
            );
          })
        ) : (
          <View className="flex-1 items-center justify-center">
            <View className="items-center justify-center w-[200px] h-[200px] mt-20">
              <Image
                source={require("../../../assets/empty-cart.png")}
                style={{ width: "100%", height: "100%" }}
              />
            </View>
          </View>
        )}
      </ScrollView>
      {selectedItems?.length > 0 && (
        <TouchableOpacity onPress={handleProceed}>
          <View className="bg-green-500 p-2 h-[60px] flex-row justify-between mt-2  rounded-full mx-2">
            <View className="relative justify-center  px-2">
              <Text className="text-gray-700 ">
                <AntDesign name="shoppingcart" size={44} />
              </Text>

              <View className="absolute left-8 top-1 bg-white rounded-full  -mt-1 items-center justify-center   w-6 h-6">
                <Text className="text-black-500 font-bold">
                  {totalItemsQuantity}
                </Text>
              </View>
            </View>
            <View>
              <Text className="font-bold text-2xl text-black border border-white p-2 px-5 text-center rounded-full bg-white">
                Proceed
                <Feather name="arrow-right" size={24} color="black" />
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default OrderThroughTable;
