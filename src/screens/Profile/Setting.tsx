import { View, Text, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Entypo } from '@expo/vector-icons'

const Setting = () => {

    const navigation = useNavigation()

    useLayoutEffect(()=>{
        navigation.setOptions({
            title:"Settings",
            headerStyle:{backgroundColor:"white"},
            headerTintColor:"black",
            headerTitleAlign:"center",
            headerLeft:()=>(
                 <TouchableOpacity className='p-1' onPress={() => navigation.goBack()}>
                    <View className='w-[35px] h-[35px] border border-red-100 items-center justify-center rounded-full' >
                        <Entypo name="chevron-small-left" size={24} color="red" />
                    </View>
                </TouchableOpacity>
            )
        })
    },[navigation])

  return (
    <View>
      
    </View>
  )
}

export default Setting