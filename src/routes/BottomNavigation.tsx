import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { EvilIcons, Feather, FontAwesome } from "@expo/vector-icons";
import { View, Text, Platform, useWindowDimensions } from "react-native";
import { HomeScreen } from "src/screens";

const BottomTabs = createBottomTabNavigator();

const ACTIVE_BG_COLOR = "#c21a1e";
const INACTIVE_ICON_COLOR = "#c21a1e";
const ACTIVE_ICON_COLOR = "#fff";

export const BottomNavigation = () => {
  const { width } = useWindowDimensions();

  return (
    <BottomTabs.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          height: 68,
          paddingBottom: 7,
          paddingTop: 17,
          paddingHorizontal: 5,
          backgroundColor: "#F7F7F7",
          borderTopWidth: 0,
          elevation: 0,
          marginHorizontal: 17,
          borderRadius: 60,
          marginBottom: Platform.OS === "android" ? 10 : 16,
        },
        tabBarItemStyle: {
          width: "25%", // even spacing for 4 tabs
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarShowLabel: false,
        tabBarIcon: ({ focused, size }) => {
          let iconName = "circle";
          let IconComponent = Feather;

          if (route.name === "Home") iconName = "home";
          else if (route.name === "Cart") {
            iconName = "cart";
            IconComponent = EvilIcons;
          }

          else if (route.name === "My Orders") {
            iconName = "user-circle";
            IconComponent = FontAwesome;
          } else if (route.name === "Profile") {
            iconName = "user-circle";
            IconComponent = FontAwesome;
          }

          if (focused) {
            return (
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: ACTIVE_BG_COLOR,
                  paddingHorizontal: 12,
                  paddingVertical: 8,
                  borderRadius: 30,
                  minWidth: 90,
                  minHeight: 50       ,
                  flexShrink: 1,        // 🧠 allow shrinking to fit small screens
    maxWidth: width * 0.7        
                }}
              >
                <IconComponent name={iconName} size={14} color={ACTIVE_ICON_COLOR} />
                <Text
                  numberOfLines={1}
                  style={{
                    color: ACTIVE_ICON_COLOR,
                    marginLeft: 8,
                    fontWeight: "600",
                    fontSize: width > 450 ? 14 : 12,
                    flexShrink: 1,
                  }}
                >
                  {route.name === "Profile"
                    ? "Profile"
                    : route.name === "Restaurant Order"
                    ? "Schedule"
                    : route.name}
                </Text>
              </View>
            );
          } else {
            return (
              <IconComponent name={iconName} size={size} color={INACTIVE_ICON_COLOR} />
            );
          }
        },
      })}
    >
      <BottomTabs.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
      <BottomTabs.Screen name="Cart" component={() => <View />} />
      <BottomTabs.Screen name="My Orders" component={() => <View />} />
      <BottomTabs.Screen name="Profile" component={() => <View />} />
    </BottomTabs.Navigator>
  );
};
