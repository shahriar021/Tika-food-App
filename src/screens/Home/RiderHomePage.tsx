import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { MaterialCommunityIcons } from '@expo/vector-icons';

const RiderHomePage = () => {
    const { width, height } = Dimensions.get("screen");
    const [isAvailble, setIsAvailable] = useState(false)

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>

            <View>
                <View className="flex-row justify-between items-center">
                    <View className=" rounded-full overflow-hidden " style={{ width: width * 0.15, height: width * 0.15, }}>
                        <Image source={require("../../../assets/restroIcon/image 13.png")} style={{ width: "100%", height: "100%", resizeMode: "stretch" }} />
                    </View>
                    <View className="flex-row items-center">

                        {isAvailble ? <TouchableOpacity onPress={() => setIsAvailable(false)}><MaterialCommunityIcons name="toggle-switch" size={54} color="#4BB54B" /></TouchableOpacity>
                            : <TouchableOpacity onPress={() => setIsAvailable(true)}><MaterialCommunityIcons name="toggle-switch-off" size={54} color="#4BB54B" /></TouchableOpacity>}
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default RiderHomePage