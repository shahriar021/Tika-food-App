import {
  View,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Image,
  useWindowDimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Entypo, Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useDispatch } from "react-redux";
import { setBaseUrl, setCompanyAuth } from "src/redux/features/auth/authSlice";

const WelcomeScreen = () => {
  const dispatch = useDispatch();
  const { height, width } = useWindowDimensions();
  const [companyURL, setCompanyURL] = useState("");
  const [errormsg, setErrMsg] = useState(" ");

  // useEffect(() => {
  //   if (!cName) return;
  //   if (cName == companyName) {
  //     dispatch(setCompanyAuth(cName));
  //     setErrMsg(" ");
  //   }
  //   if (cName !== companyName) {
  //     setErrMsg("Not matched.");
  //   }
  // }, [cName]);

  const handleWelome = async () => {
    const result = await fetch(companyURL);
    if (result.status !== 200) {
      setErrMsg("Not Matched.");
    }
    if (result.status == 200) {
      dispatch(setBaseUrl(`${companyURL}/api`));
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
            source={require("../../../assets/Cooking-bro.png")}
            style={{ width: "100%", height: "100%" }}
          />
        </View>
        <View className=" flex-1 bg-white justify-end  w-full items-center p-4 relative">
          <Text className="font-bold text-3xl absolute left-0 bg-green-500 p-3 rounded-r-3xl top-8 text-white">
            Welcome
          </Text>

          <TextInput
            className="border border-gray-300 rounded-full w-full"
            placeholder="http://"
            onChangeText={setCompanyURL}
          />

          <TouchableOpacity
            className="p-2  m-2  items-center"
            onPress={handleWelome}
          >
            <Entypo name="arrow-with-circle-right" size={34} color="greeen" />
          </TouchableOpacity>

          {errormsg && (
            <Text className="font-bold text-red-500 text-xl">{errormsg}</Text>
          )}
        </View>
      </View>
    </LinearGradient>
  );
};

export default WelcomeScreen;
