import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { scale, verticalScale } from 'react-native-size-matters'
import { Entypo } from '@expo/vector-icons'

const ViewDetails = () => {

    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerStyle: {
                backgroundColor: "white",
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0
            },
            headerTitleAlign: "center",
            headerLeft: () => (
                <TouchableOpacity className='p-1' onPress={() => navigation.goBack()}>
                    <View className='w-[35px] h-[35px] border border-red-100 items-center justify-center rounded-full'>
                        <Entypo name="chevron-small-left" size={24} color="red" />
                    </View>
                </TouchableOpacity>
            )
        })
    }, [navigation])
    return (
        <View className='p-2'>
            {/* card */}
            <View style={{ width: "100%", height: verticalScale(100) }} className='border border-gray-300 rounded-2xl overflow-hidden p-1 flex-row gap-2'>
                <View style={{ width: scale(80), height: "100%" }}>
                    <Image source={require("../../../assets/restroIcon/nearbyRes.png")} style={{ width: "100%", height: "100%" }} className='rounded-2xl' />
                </View>
                <View className='flex-1 '>
                    <View className='flex-row justify-between items-center'>
                        <Text className='font-robotoBold text-xl'>Red n hot pizza</Text>
                        <Text className='text-[#19CC49] border border-[#19CC49] rounded-full p-2 text-center'>Deliverd</Text>
                    </View>
                    <Text className='text-[#222222]'>Order ID:1fd21rg</Text>
                    <View className='flex-1 flex-row items-center  gap-3'>
                        <View className='flex-row items-center gap-2'><Image source={require("../../../assets/restroIcon/calendar-03.png")} />
                            <Text>May 10</Text>
                        </View>
                        <View className='flex-row items-center gap-2 '>
                            <Image source={require("../../../assets/restroIcon/clock-01.png")} />
                            <Text>08:00 pm</Text>
                        </View>
                    </View>
                </View>
            </View>
            {/* card */}
        </View>
    )
}

export default ViewDetails