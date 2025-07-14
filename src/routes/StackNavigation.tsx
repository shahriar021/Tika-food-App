import React, { useRef, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { BottomNavigation } from "./BottomNavigation";
import {
  LoginScreen,
  Profile,
  OngoingCustomerList,
  OrderList,
  Kitchen,
  NearbyRestaurantList,
  HomeScreen,
} from "src/screens";
import AboutUs from "src/screens/Profile/AboutUs";
import Privacy from "src/screens/Profile/Privacy";
import Terms from "src/screens/Profile/Terms";
import Address from "src/screens/Profile/Address";
import Setting from "src/screens/Profile/Setting";
import ChangePassword from "src/screens/Profile/ChangePassword";
import EditProfile from "src/screens/Profile/EditProfile";
import RestaurantProfile from "src/screens/Restaurant/RestaurantProfile";
import PopularItems from "src/screens/Restaurant/PopularItems";
import PopularItemDetails from "src/screens/Restaurant/PopularItemDetails";
import PaymentAnimation from "src/screens/Payment/PaymentAnimation";
import PaymentInfo from "src/screens/Payment/PaymentInfo";
import CartPage from "src/screens/Cart/CartPage";
import TrackOrder from "src/screens/Orders/TrackOrder";
import ViewDetails from "src/screens/Orders/ViewDetails";
import PaymentOption from "src/screens/Payment/PaymentOption";
import SpecialInstructions from "src/screens/Cart/SpecialInstructions";
import { RiderBottomNavigation } from "./RiderBottomNavigation";
import { store } from "src/redux/store";
import { useSelector } from "react-redux";
import { ActivityIndicator } from "react-native";
import { useAppSelector } from "src/redux/hooks";
const Stack = createStackNavigator();

const StackNavigation = ({ setCurrentScreen }: { setCurrentScreen: any }) => {
  const routeNameRef = useRef<string | null>(null);
  const navigationRef = useRef<any>(null);
  const userType = useAppSelector((store)=>store.auth.userType)

  console.log(userType,"userType")

  if(!userType){
    <ActivityIndicator size="large"/>
  }

  return (
    
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
          // headerRight: () => <NavRight routeName={routeNameRef.current} />,
        }}
      >
        {<Stack.Screen
          name="BottomScreen"
          component={userType==="user"?BottomNavigation:RiderBottomNavigation}
          options={{
            headerShown: false,
          }}
        />}
        {/* <Stack.Screen name="Notification" component={} /> */}
        <Stack.Screen name="Profile" options={{headerShown:false}} component={Profile} />
        <Stack.Screen name="Log in" component={LoginScreen} />
        <Stack.Screen name="Ongoing Customer" component={OngoingCustomerList} />
        <Stack.Screen name="Order List" component={OrderList} />
        <Stack.Screen name="Kitchen" component={Kitchen} />

        <Stack.Screen name="about" component={AboutUs}/>
        <Stack.Screen name="Privacy" component={Privacy}/>
        <Stack.Screen name="Terms" component={Terms}/>
        <Stack.Screen name="Address" component={Address}/>
        <Stack.Screen name="Setting" component={Setting}/>
        <Stack.Screen name="Edit Profile" component={EditProfile}/>
        <Stack.Screen name="Change Password" component={ChangePassword}/>

        <Stack.Screen name="Nearby Restaurants List" component={NearbyRestaurantList}/>
        <Stack.Screen name="Restaurant Profile" options={{headerShown:false}} component={RestaurantProfile}/>
        <Stack.Screen name="Popular Items"  component={PopularItems}/>
        <Stack.Screen name="Popular Items Details" options={{headerShown:false}} component={PopularItemDetails}/>
        <Stack.Screen name="Payment Animation" options={{headerShown:false}} component={PaymentAnimation}/>
        <Stack.Screen name="Payment Info" options={{headerShown:false}} component={PaymentInfo}/>
        <Stack.Screen name="Track Order" component={TrackOrder}/>
        <Stack.Screen name="View Details" component={ViewDetails}/>
        <Stack.Screen name="Payment Options" component={PaymentOption}/>
        <Stack.Screen name="Special Instructions" component={SpecialInstructions}/>
        
      </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default StackNavigation;
