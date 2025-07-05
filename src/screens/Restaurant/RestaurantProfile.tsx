import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

const RestaurantProfile =()=>{

    const navigation = useNavigation()

    return (
        <View className='items-center'>
            <Image source={require("../../../assets/restroIcon/resProfile.png")} style={{width:"100%"}}/>
            <Text className='mt-2 text-start'>Urban Palate</Text>
        </View>
    )
}

export default RestaurantProfile