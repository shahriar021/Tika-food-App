import React, { useRef } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { BottomNavigation } from "./BottomNavigation";
import {
  LoginScreen,
  Profile,
  OngoingCustomerList,
  OrderList,
  Kitchen,
  NearbyRestaurantList,
} from "src/screens";
import AboutUs from "src/screens/Profile/AboutUs";
import Privacy from "src/screens/Profile/Privacy";
import Terms from "src/screens/Profile/Terms";
import Address from "src/screens/Profile/Address";
import Setting from "src/screens/Profile/Setting";
import ChangePassword from "src/screens/Profile/ChangePassword";
import EditProfile from "src/screens/Profile/EditProfile";
import RestaurantProfile from "src/screens/Restaurant/RestaurantProfile";
const Stack = createStackNavigator();

const StackNavigation = ({ setCurrentScreen }: { setCurrentScreen: any }) => {
  const routeNameRef = useRef<string | null>(null);
  const navigationRef = useRef<any>(null);

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
        <Stack.Screen
          name="BottomScreen"
          component={BottomNavigation}
          options={{
            headerShown: false,
          }}
        />
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
      </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default StackNavigation;
