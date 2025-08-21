import { View, Text, TouchableOpacity, useWindowDimensions } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Entypo, FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import ReportModal from './ReportModal';

const Report = () => {
    const navigation = useNavigation();
    const { width, height } = useWindowDimensions();
    const [showModal, setShowModal] = useState(false);
    const [option,setOptions]=useState("")

    useLayoutEffect(() => {
        navigation.setOptions({
            title: "Reports",
            headerStyle: {
                backgroundColor: "white",
                elevation: 0, // for Android
                shadowOpacity: 0, // for iOS
                borderBottomWidth: 0, // for iOS
            },
            headerTintColor: "black",
            headerTitleAlign: "center",
            headerLeft: () => (
                <TouchableOpacity className='p-1' onPress={() => navigation.goBack()}>
                    <View className='w-[35px] h-[35px] border border-red-100 items-center justify-center rounded-full' >
                        <Entypo name="chevron-small-left" size={24} color="red" />
                    </View>
                </TouchableOpacity>
            )
        })
    }, [navigation])

    const handleReport = () => {
        setShowModal(true)
    }

    return (
        <View className='flex-1 p-3'>
            <TouchableOpacity className='flex-row items-center gap-2 border border-[#0000001A] p-3 rounded-xl mt-3' onPress={()=>setOptions("Report Dish")}>
                <FontAwesome name="circle" size={24} color="black" />
                <Text>Report Dish</Text>
            </TouchableOpacity>
            <TouchableOpacity className='flex-row items-center gap-2 border border-[#0000001A] p-3 rounded-xl mt-3'  onPress={()=>setOptions("Report Delivery Person")}>
                <FontAwesome name="circle" size={24} color="#BA14141A" />
                <Text>Report Delivery Person</Text>
            </TouchableOpacity>
            <View className="items-center mb-2">
                <TouchableOpacity
                    className="items-center mt-3 rounded-full overflow-hidden"
                    style={{ width: width * 0.9 }}
                    onPress={handleReport}
                >
                    <LinearGradient
                        colors={["#DD0F14", "#C21A1E"]}
                        style={{ width, borderRadius: 999, alignItems: "center" }}
                    >
                        <Text className="text-white p-3">Submit</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>

            <ReportModal visible={showModal} onClose={() => setShowModal(false)} />
        </View>
    )
}

export default Report