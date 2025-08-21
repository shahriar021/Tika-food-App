import { View, Text, Modal, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Entypo } from '@expo/vector-icons'

const ReportModal = ({visible,onClose}:any) => {
  return (
    <Modal visible={visible} onRequestClose={onClose} animationType='slide'>
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
                        Report
                    </Text>

                    {/* Spacer for symmetry */}
                    <View className="w-[35px]" />
                </View>

                {/* Body */}
                <View className="flex-1 p-2 items-center">
                    
                </View>
            </SafeAreaView>
    </Modal>
  )
}

export default ReportModal