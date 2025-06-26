import React, { useRef } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { BottomNavigation } from "./BottomNavigation";
import NavRight from "src/components/shared/NavRight";
import {
  LoginScreen,
  Profile,
  RestaurantOrder,
  OrderThroughTable,
  OrderSubmitForm,
  OngoingCustomerList,
  OrderList,
  Kitchen,
} from "src/screens";
import VerifyEmailPage from "src/screens/Login/VerifyEmailPage";
const Stack = createStackNavigator();

const StackNavigation = ({ setCurrentScreen }: { setCurrentScreen: any }) => {
  const routeNameRef = useRef<string | null>(null);
  const navigationRef = useRef<any>(null);

  return (
    // <NavigationContainer
    //   ref={navigationRef}
    //   onReady={() => {
    //     routeNameRef.current = navigationRef.current.getCurrentRoute().name;
    //     setCurrentScreen(routeNameRef.current);
    //   }}
    //   onStateChange={() => {
    //     const currentRouteName = navigationRef.current.getCurrentRoute().name;
    //     setCurrentScreen(currentRouteName);
    //     routeNameRef.current = currentRouteName;
    //   }}
    // >
      <Stack.Navigator
        screenOptions={{
          cardStyle: {
            backgroundColor: "white",
          },
          headerStyle: {
            elevation: 0,
            shadowOpacity: 0,
            borderBottomWidth: 0,
          },
          headerTintColor: "#006400",
          headerRight: () => <NavRight routeName={routeNameRef.current} />,
        }}
      >
        <Stack.Screen
          name="BottomScreen"
          component={BottomNavigation}
          options={{
            headerShown: false,
          }}
        />
        {/* <Stack.Screen name="Notification" component={} /> */}
         <Stack.Screen name="VerifyEmail" component={VerifyEmailPage} />
        <Stack.Screen name="Restaurant Order" component={RestaurantOrder} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Log in" component={LoginScreen} />
        <Stack.Screen name="table Order" component={OrderThroughTable} />
        <Stack.Screen name="Order Submit" component={OrderSubmitForm} />
        <Stack.Screen name="Ongoing Customer" component={OngoingCustomerList} />
        <Stack.Screen name="Order List" component={OrderList} />
        <Stack.Screen name="Kitchen" component={Kitchen} />
      </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default StackNavigation;
