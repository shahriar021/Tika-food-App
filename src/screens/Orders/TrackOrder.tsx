import { View, Text, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { scale, verticalScale } from 'react-native-size-matters'
import { FontAwesome } from '@expo/vector-icons'

const TrackOrder = () => {

    const navigation = useNavigation()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerStyle: {
                backgroundColor: "white",
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0
            },
            headerTitleAlign: "center"
        })
    }, [navigation])

    return (
        <View className='p-2 items-center flex-1'>
            <View
                className='mt-3 mb-1 border border-gray-300 rounded-2xl p-2 mx-2 flex-row gap-2 bg-white'
                style={{
                    width: '100%',
                    height: verticalScale(100), // ✅ Fixed card height
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.1,
                    shadowRadius: 4,
                    elevation: 3,
                }}
            >
                {/* Image */}
                <View
                    className='rounded-xl overflow-hidden'
                    style={{
                        width: scale(80),
                        height: '100%', // ✅ Fill card height
                        borderRadius: 12,
                        overflow: 'hidden',
                    }}
                >
                    <Image
                        source={require('../../../assets/restroIcon/nearbyRes.png')}
                        style={{ width: '100%', height: '100%' }}
                        resizeMode='cover'
                    />
                </View>

                {/* Info */}
                <View className='flex-1 justify-between py-1'>
                    <View className='flex-row items-start justify-between'>
                        <View>
                            <Text className='font-bold text-black text-base'>The Burger Spot</Text>
                            <Text className='text-sm text-black'>Order ID: 2sf56sdfs6</Text>
                        </View>
                        <Text className='text-[#FE724C] border border-[#FE724C] rounded-full px-3 py-1 text-xs font-medium bg-[#FE724C]/10'>
                            Out for Delivery
                        </Text>
                    </View>

                    <View>
                        <Text className='text-sm text-black'>Estimated Arrival</Text>
                        <Text className='text-xl font-semibold text-black'>
                            25 <Text className='text-[#9796A1]'>min</Text>
                        </Text>
                    </View>
                </View>
            </View>

            <View className=' flex-1 w-full mt-3 mx-2' style={{ alignItems: "flex-start" }}>
                <Text className='font-robotoBold text-2xl'>Order Progress Tracker</Text>

                <View className='flex-1 bg-red-400 items-start '>
                    <View className='flex-row items-center gap-3'>
                        <FontAwesome name="circle" size={24} color="#5555554D" />
                    <Text>Delivered</Text>
                     
                    </View>
                    <FontAwesome name="circle" size={14} color="#5555554D" />
                </View>



            </View>
        </View>
    )
}

export default TrackOrder
