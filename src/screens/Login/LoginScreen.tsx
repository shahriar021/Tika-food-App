import {
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Image,
  useWindowDimensions,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useDispatch } from "react-redux";
import { setUser } from "src/redux/features/auth/authSlice";
import { useLoginMutation } from "src/redux/features/auth/authApi";

const LoginScreen = () => {
  const { height, width } = useWindowDimensions();
  const [postLogin] = useLoginMutation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

  return (
    <LinearGradient
      colors={["#fff", "#22c55e"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      className="flex-1 items-center justify-center p-4"
    >
      <View
        className="bg-green-500 border border-gray-300 rounded-3xl overflow-hidden"
        style={{ width: width * 0.9, height: height * 0.8 }}
      >
        <View
          className="m-2"
          style={{ width: width * 0.9, height: height * 0.5 }}
        >
          <Image
            source={require("../../../assets/healthy food-bro.png")}
            style={{ width: "100%", height: "100%" }}
          />
        </View>
        <View className="flex-1 bg-white justify-center  w-full items-center p-4 gap-4">
          <TextInput
            className="border border-gray-300 rounded-full w-full"
            placeholder="E-Mail"
            onChangeText={setEmail}
          />
          <TextInput
            className="border border-gray-300 rounded-full w-full"
            placeholder="Password"
            onChangeText={setPassword}
          />
          <TouchableOpacity
            className=" bg-green-500 w-full rounded-full p-4 items-center"
            onPress={handleLogin}
          >
            <Text className="text-white text-xl font-bold">Log In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};

export default LoginScreen;
