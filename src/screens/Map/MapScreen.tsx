import React from 'react';
import { View, Text } from 'react-native';
import MapView, { Marker, Polyline } from 'react-native-maps';

const MapScreen = () => {
  const pickupLocation = {
    latitude: 23.7805733,
    longitude: 90.4195402,
  };

  const deliveryLocation = {
    latitude: 23.8748575,
    longitude: 90.3984187,
  };

  return (
    <View className="flex-1 ">
      {/* Top text overlay */}
      <View style={{
        position: 'absolute',
        top: 60,
        left: 0,
        right: 0,
        alignItems: 'center',
        zIndex: 10,
        backgroundColor:"white",
        margin:20
      }}>
        <Text style={{
          backgroundColor: 'white',
          paddingVertical: 8,
          paddingHorizontal: 16,
          borderRadius: 12,
          fontWeight: 'bold',
          elevation: 4, // shadow for Android
          shadowColor: '#000', // shadow for iOS
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.3,
          shadowRadius: 3,
        }}>
          Order Picked
        </Text>
      </View>

      {/* Map itself */}
      <MapView
        style={{ width: '100%', height: '100%' }}
        initialRegion={{
          latitude: 23.825,
          longitude: 90.41,
          latitudeDelta: 0.1,
          longitudeDelta: 0.1,
        }}
      >
        <Marker coordinate={pickupLocation} title="Pickup" description="Gulshan" />
        <Marker coordinate={deliveryLocation} title="Delivery" description="Uttara" />
        <Polyline
          coordinates={[pickupLocation, deliveryLocation]}
          strokeColor="#0E7AFE"
          strokeWidth={3}
        />
      </MapView>
    </View>
  );
};

export default MapScreen;
