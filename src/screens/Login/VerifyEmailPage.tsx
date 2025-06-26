import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import React, { useLayoutEffect } from 'react'
import {Image, Text, TouchableOpacity, useWindowDimensions, View} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const VerifyEmailPage =()=>{
     const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "Verify your email",
      headerStyle: {
        backgroundColor: "white",
      },
      headerTintColor: "black",
      headerTitleAlign:"center",
      

      headerLeft:()=>(
        <TouchableOpacity className='p-1'>
            <Ionicons name="chevron-back-circle-outline" size={34} color="black" />
        </TouchableOpacity>
      )
     
    });
  }, [navigation]);
    const {width,height}=useWindowDimensions();
    const [fontsLoaded] = useFonts({
        'Roboto-Bold': require('../../../assets/fonts/Roboto-Bold.ttf'),
      });
    
      if (!fontsLoaded) return null; 

    return(
        <View className='flex-1'>
            <View className='flex-1 items-center justify-center'>
                <View style={{width:width*0.2,height:height*0.1}} className='bg-red-50 rounded-full'>
                <Image source={require("../../../assets/restroIcon/Message_open_duotone.png")} style={{width:"100%",height:"100%"}} resizeMode='contain'/>
                </View>
                <Text className='font-robotoBold text-xl'>There’s a letter waiting for you</Text>
                <Text className='text-center text-gray-500'>{"Not all letters change lives. But this one might. \n Check your inbox to continue"}</Text>

            </View>
        </View>
    )
}

export default VerifyEmailPage