import { View, Text, TextInput, useWindowDimensions, ScrollView, Image, TouchableOpacity, Button } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons'
import { tableData } from '../Orders/demoData'
import { tableEarData } from './demoEarningData'
import * as Sentry from "@sentry/react-native";

const EarningList = () => {

    const navigation = useNavigation()
    const { width } = useWindowDimensions()

    useLayoutEffect(() => {
        navigation.setOptions({
            headerStyle: {
                backgroundColor: "white",
                elevation: 0,
                shadowOpacity: 0,
                borderBottomWidth: 0
            },
            headerTintColor: "#33363F",
            headerTitleAlign: "start"
        })
    }, [navigation])

    return (
        <View className='flex-1 bg-white p-2'>
            <View className='items-center'>
                <Text className='text-[#6B6B6B] text-xl'>Available Balance</Text>
                <Text className='text-black text-4xl font-robotoBold mt-2'>$322.45</Text>
            </View>

            <View className='flex-row gap-3 mt-4'>
                <View className='flex-row justify-between flex-1 border border-[#0404041A] p-3 rounded-xl'>
                    <Text className='text-[#6B6B6B] font-robotoBold'>Cash</Text>
                    <Text  className='text-[#6B6B6B] font-robotoBold'>$322.40</Text>
                </View>
                <View className='flex-row justify-between flex-1 border border-[#0404041A] p-3 rounded-xl'>
                    <Text  className='text-[#6B6B6B] font-robotoBold'>Management</Text>
                    <Text  className='text-[#6B6B6B] font-robotoBold'>$22.05</Text>
                </View>
            </View>
                        <Button
                            title="Verify Sentry Setup" 
                            onPress={() => {
                                // This sends a message without killing the app
                                Sentry.captureMessage("Sentry is connected to Tika Food!");
                                
                                // This kills the app to test crash reporting
                                throw new Error("Tika Food Manual Test Crash");
                            }}
                        />
        </View>
    )
}

export default EarningList