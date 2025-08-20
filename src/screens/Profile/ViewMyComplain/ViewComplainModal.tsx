import { View, Text, Modal, TouchableOpacity, SafeAreaView, Image, useWindowDimensions } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { scale, verticalScale } from "react-native-size-matters";
import { useDimensionsChange } from "react-native-responsive-dimensions";

const ViewComplainModal = ({ visible, onClose }: any) => {
    const { width } = useWindowDimensions()
    return (
        <Modal visible={visible} onRequestClose={onClose} animationType="slide">
            <SafeAreaView className="flex-1 bg-white p-2">
                {/* Header */}
                <View className="flex-row items-center justify-between px-3 py-2 ">
                    {/* Back button */}
                    <TouchableOpacity onPress={onClose} className="p-1">
                        <View className="w-[35px] h-[35px] border border-red-100 items-center justify-center rounded-full">
                            <Entypo name="chevron-small-left" size={24} color="red" />
                        </View>
                    </TouchableOpacity>

                    {/* Title */}
                    <Text className="absolute left-1/2 -translate-x-1/2 text-lg font-semibold text-black">
                        Complaints Details
                    </Text>

                    {/* Spacer for symmetry */}
                    <View className="w-[35px]" />
                </View>

                {/* Body */}
                <View className="flex-1 p-2 items-center">
                    <View>
                        <Text className="text">Restaurant name</Text>
                        <Text>Red n hot pizza</Text>
                        <Text>Issue Type</Text>
                        <Text>Missing Item</Text>
                        <Text>Description</Text>
                        <Text>Brown the beef better. Lean ground beef – I like to use 85% lean angus. Garlic – use fresh  chopped. Spices – chili powder, cumin, onion powder.</Text>
                        <Text>Upload Picture</Text>
                    </View>
                    <View className="items-center justify-center p-2 rounded-md overflow-hidden" style={{ width: width , height: verticalScale(190) }}>
                        <Image source={require("../../../../assets/restroIcon/complain.png")} style={{ width: "100%", height: "100%" }} />
                    </View>
                </View>
            </SafeAreaView>
        </Modal>
    );
};

export default ViewComplainModal;
