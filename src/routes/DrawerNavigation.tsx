import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HomeScreen } from "../screens";
import DrawerLayout from "src/components/ui/drawer/DrawerLayout";
import { Feather } from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

export const DrawerNavigation = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <DrawerLayout {...props} />}
      screenOptions={{
        drawerActiveTintColor: "white",
        drawerInactiveTintColor: "#888",
        drawerActiveBackgroundColor: "#22c55e",
        drawerInactiveBackgroundColor: "#FFFFFF",
        drawerLabelStyle: {
          fontSize: 15,
          fontWeight: "500",
          color: "white",
        },
        drawerItemStyle: {
          borderRadius: 25,
          marginVertical: 6,
        },
      }}
    >
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          drawerIcon: ({ color, size }) => (
            <Feather name="home" size={16} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
