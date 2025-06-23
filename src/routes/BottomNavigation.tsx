import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DrawerNavigation } from "./DrawerNavigation";
import { Feather, FontAwesome } from "@expo/vector-icons";
import NavRight from "src/components/shared/NavRight";
import { View, Text, TouchableOpacity } from "react-native";
import { Profile, RestaurantOrder } from "src/screens";

const BottomTabs = createBottomTabNavigator();

const CustomTabButton = ({ children, onPress, accessibilityState }:any) => {
  const focused = accessibilityState.selected;

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderRadius:10,
        borderTopWidth: focused ? 5 : 0,
        borderTopColor: focused ? "#08692C" : "transparent",
        backgroundColor: "white",
      }}
    >
      {children}
    </TouchableOpacity>
  );
};

export const BottomNavigation = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "transparent" }}>
      <BottomTabs.Navigator
        screenOptions={{
          tabBarStyle: {
            paddingBottom: 7,
            
            height: 68,
            backgroundColor: "white",
          },
          tabBarLabelStyle: {
            fontSize: 12,
          },
          tabBarActiveTintColor: "#08692C",
          tabBarInactiveTintColor: "black",
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
          headerTintColor: "#08692C",
          headerRight: () => <NavRight />,
        }}
      >
        <BottomTabs.Screen
          name="DrawerScreen"
          component={DrawerNavigation}
          options={{
            headerShown: false,
            tabBarLabel: "Home",
            tabBarIcon: ({ color, size }) => (
              <Feather name="home" size={size} color={color} />
            ),
            tabBarButton: (props) => <CustomTabButton {...props} />,
          }}
        />

        <BottomTabs.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: "Task",
            tabBarIcon: ({ color, size }) => (
              <Feather name="folder-minus" size={24} color={color} />
            ),
            tabBarButton: (props) => <CustomTabButton {...props} />,
          }}
        />

        <BottomTabs.Screen
          name="Restaurant Order"
          component={RestaurantOrder}
          options={{
            tabBarLabel: "Schedule",
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="user-circle" size={size} color={color} />
            ),
            tabBarButton: (props) => <CustomTabButton {...props} />,
          }}
        />

        <BottomTabs.Screen
          name="Profile4"
          component={Profile}
          options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color, size }) => (
              <FontAwesome name="user-circle" size={size} color={color} />
            ),
            tabBarButton: (props) => <CustomTabButton {...props} />,
          }}
        />
      </BottomTabs.Navigator>
    </View>
  );
};
