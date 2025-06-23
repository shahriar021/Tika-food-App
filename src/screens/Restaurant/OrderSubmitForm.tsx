import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image,
  useWindowDimensions,
} from "react-native";
import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";
import { AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { useOrderSubmitApiMutation } from "src/redux/features/restOrder/restaurantOrderApi";

const OrderSubmitForm = () => {
  const { width } = useWindowDimensions();
  const [quantity, setQuantity] = useState();
  const [itemQuantities, setItemQuantities] = useState({});
  const [postSubmit] = useOrderSubmitApiMutation();

  
  

 

  const handleSubmit = async () => {
    const output = {
      is_multiple_way: "1",
      transaction_ledger_ids: [null],
      modal_account_types: ["4"],
      modal_account_paid_amounts: ["370"],
      total_amount: "0",
      change_amount: null,
      is_soft_save: "0",
      sale_type: "table",
      online_sale_id: null,
      parcel_id: null,
      color_status: "0",
      hotel_guest_id: "1",
      table_name: "2",
      invoice_no: "2025-05-04",
      product_search: null,
      date: "2025-05-12",
      available_qty: ["0", "0"],
      old_available_qty: ["0", "0"],
      unit_id: ["1", "1"],
      small_unit_id: ["null", "null"],
      sales_qty: ["1", "1"],
      item_discount: ["0", "0"],
      sales_price: ["300.00", "70.00"],
      item_vat_amounts: ["0", "0"],
      total_addon_price: ["0", "0"],
      item_price: ["300", "70"],
      payment_status: "Due",
      vat_amount: "0",
      subtotal: "370",
      discount: "0",
      payable_amount: "370",
      service_charge: "0",
      paid_amount: "0",
      print_mode: "pos",
    };
    const result = await postSubmit(output).unwrap();
  };

  return (
    <ScrollView contentContainerStyle={{}}>
      

      <View className=" w-full bg-gray-100">
        <View className="flex-row justify-between gap-1 m-2 p-2">
          <View className="flex-row flex-1 items-center gap-2">
            <Text className="font-bold w-[50px] ">Discount</Text>
            <TextInput className="border flex-1 rounded-md border-red-500" />
          </View>
          <View className="flex-row flex-1 items-center gap-2">
            <Text className="w-[50px] font-bold">Service Charge</Text>
            <TextInput className="border flex-1 rounded-md border-green-500" />
          </View>
        </View>
        <View className="flex-row justify-between gap-1 m-2 p-2">
          <View className="flex-row flex-1 items-center gap-2">
            <Text className="font-bold w-[50px] ">Vat</Text>
            <Text className="border flex-1 rounded-md border-red-300 bg-white h-[40px]"></Text>
          </View>
          <View className="flex-row flex-1 items-center gap-2">
            <Text className="w-[50px] font-bold">Payable Amount</Text>
            <Text className="border flex-1 rounded-md border-green-300 bg-white h-[40px]"></Text>
          </View>
        </View>
        <View className="flex-row justify-between gap-1 m-2 p-2">
          <View className="flex-row flex-1 items-center gap-2">
            <Text className="font-bold w-[50px]">Sub Total</Text>
            <Text className="border flex-1 rounded-md border-red-300 bg-white h-[40px]"></Text>
          </View>
          <View className="flex-row flex-1 items-center gap-2">
            <Text className="w-[50px] font-bold">Paid Amount</Text>
            <Text className="border flex-1 rounded-md border-green-300 bg-white h-[40px]"></Text>
          </View>
        </View>
        <View className="flex-row justify-between m-2 p-2 gap-1 bg-gray-100">
          <TouchableOpacity
            className="bg-green-500 p-2 rounded-md flex-1 items-center shadow-md"
            onPress={handleSubmit}
          >
            <Text className="text-white text-2xl font-bold">Submit</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-orange-500 p-2 rounded-md flex-1 items-center shadow-md">
            <Text className="text-white text-2xl font-bold">Guest Print</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-red-500 p-2 rounded-md flex-1 items-center shadow-md">
            <Text className="text-white text-2xl font-bold">Payment</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default OrderSubmitForm;
