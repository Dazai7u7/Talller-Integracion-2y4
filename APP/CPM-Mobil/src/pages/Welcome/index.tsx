import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../routes";

export function Welcome() {
  const navigation = useNavigation<StackTypes>();

  return (
    <View
      className="flex-1 bg-teal-600"
    >
      <View
        className="flex-2 bg-teal-600 justify-center items-center"
      >
        <Animatable.Image
          source={require("../../assets/logo.png")}
          className="w-full top-1/2"
          resizeMode="contain"
          animation="flipInY"
        />
      </View>
      <Animatable.View
        animation="fadeInUp"
        delay={1000}
        className="flex-3 bg-white rounded-tl-2xl rounded-tr-2xl p-5 absolute bottom-0 w-full"
      >
        <Text
          className="text-2xl font-bold mt-8 mb-4"
        >
          Monitoriza, organiza tus gastos desde cualquier lugar!
        </Text>
        <Text className="text-gray-400">Inicia sesión para comenzar</Text>
        <TouchableOpacity
          className="bg-teal-600 rounded-full py-3 mt-8 w-3/5 self-center"
          onPress={() => navigation.navigate("SignIn")}
        >
          <Text className="text-white text-xl font-bold text-center">
            Ingresar
          </Text>
        </TouchableOpacity>
      </Animatable.View>
      
    </View>
  );
}