import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  useWindowDimensions,
  Alert,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Entypo, Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useDispatch } from "react-redux";
import { setUser } from "src/redux/features/auth/authSlice";
import { useLoginMutation } from "src/redux/features/auth/authApi";
import { SafeAreaView } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/native";
import SignUpRider from "./SignUpRider";
import SignUpUser from "./SignUpUser";

const LoginScreen = () => {
  const { height, width } = useWindowDimensions();
  const [isSignIn, setIsSignIn] = useState(true)
  const [isUser, setIsUser] = useState("user")
  const [roleOff,setRoleOff]=useState(true)
  const [postLogin] = useLoginMutation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation()

  const dispatch = useDispatch();

  const handleLogin = async () => {
    if (email !== "" && password !== "") {
      try {
        const output = { email, password };
        const result = await postLogin(output).unwrap();
        if (result?.status) {
          const { data } = result;
          dispatch(setUser({ user: data, Credential: output }));
        }
        if (!result?.status) {
          Alert.alert(result.message);
        }
      } catch (err: any) {
        Alert.alert("Something went wrong!", err);
      }
    } else {
      Alert.alert("Please Enter a valid Email or password.");
    }
  };
  const [fontsLoaded] = useFonts({
    'Roboto-Bold': require('../../../assets/fonts/Roboto-Bold.ttf'),
  });

  if (!fontsLoaded) return null;

  const handleVerify = () => {
    navigation.navigate("VerifyEmail" as never)
  }

  console.log(roleOff)

  return (
    <SafeAreaView className="flex-1 bg-[#B42315] items-center">
      <View style={{ width: width * 0.5, height: height * 0.3 }} className="items-center">
        <Image source={require("../../../assets/tika.png")} style={{ width: "100%", height: "100%" }} resizeMode="contain" />
      </View>
      <View className="relative flex-1 w-full  rounded-tr-2xl rounded-tl-2xl bg-white items-center p-4">
        <View className=" mt-5 flex-row border border-gray-200 rounded-full overflow-hidden w-full p-1">
          <TouchableOpacity className={`flex-1 rounded-full items-center p-3 ${isSignIn ? "bg-[#C21A1E]" : " bg-white"}`} onPress={() => setIsSignIn(true)}>
            <Text className={`${isSignIn ? "text-white" : "text-red-500"}`}>Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity className={`flex-1 rounded-full items-center p-3  ${isSignIn ? "bg-white" : " bg-[#C21A1E]"}`} onPress={() =>{
             setRoleOff(true)
             setIsSignIn(false)}}>
            <Text className={`${isSignIn ? "text-red-500" : "text-white"}`}>Sign Up</Text>
          </TouchableOpacity>
        </View>
        {/* sign in */}
        {isSignIn ?
          <View className="mt-4 flex-1 w-full ">
            <Text className="font-robotoBold text-2xl text-left mb-2">Hi, Welcome back!</Text>
            <Text className="mb-2">Sigin in to continue exploring the best deals</Text>

            <Text className="mt-1 mb-1">Email</Text>
            <TextInput className="border rounded-xl mt-1 border-gray-300 mb-1 p-3" />

            <Text className="mt-1 mb-1">Password</Text>
            <View className="flex-row border border-gray-300 rounded-xl items-center px-3">
              <TextInput className="flex-1 py-3" />
              <Text><Feather name="eye-off" size={24} color="gray" /></Text>
            </View>
            <View className="mt-3 flex-row items-center justify-between">
              <View className="flex-row items-center gap-2">
                <TouchableOpacity>
                  <Entypo name="circle" size={24} color="gray" />
                </TouchableOpacity>
                <Text>Remember Me</Text>
              </View>
              <Text className="text-red-700">Forget Password?</Text>
            </View>

            <View className="items-center">
              <TouchableOpacity className=" items-center mt-3 rounded-full  overflow-hidden" style={{ width: width * 0.9 }} onPress={() => navigation.navigate("Forget Password" as never)}>
                <LinearGradient colors={["#DD0F14", "#C21A1E"]} style={{ width, borderRadius: 999, alignItems: "center" }}>
                  <Text className="text-white p-3 ">Sign In</Text>
                </LinearGradient>
              </TouchableOpacity>
            </View>
            <View className="flex-row mt-3 justify-center gap-3 items-center">
              <View className="h-[1px] flex-1 bg-gray-400" />
              <Text>or</Text>
              <View className="h-[1px] flex-1 bg-gray-400" />
            </View>

            <View className="flex-row items-center justify-center gap-2 mt-3">
              <Image source={require("../../../assets/restroIcon/google.png")} className="w-10 h-10" />
              <Image source={require("../../../assets/restroIcon/apple.png")} className="w-10 h-10" />
            </View>
          </View>
          :
          isUser == "user" ?
            <SignUpUser setIsSignIn={setIsSignIn} handleVerify={handleVerify} setRoleOff={setRoleOff}/>
            :
            <SignUpRider setIsSignIn={setIsSignIn} handleVerify={handleVerify} setRoleOff={setRoleOff}/>
        }
        {/* role */}
        {!isSignIn && roleOff  && <View className="absolute bg-white p-3 right-5 top-24 border rounded-3xl border-gray-200">
          <TouchableOpacity className="mb-3 items-center p-2" onPress={() => {setIsUser("user")
            setRoleOff(false)}}>
            <Text className="font-robotoRegular text-xl text-red-500">As an User</Text>
          </TouchableOpacity >
          <TouchableOpacity className="mt-2 items-center p-2" onPress={() => {setIsUser("rider")
            setRoleOff(false)
          }}>
            <Text className="font-robotoRegular text-xl text-red-500">As a Rider</Text>
          </TouchableOpacity>
        </View>}
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
