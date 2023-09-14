import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../routes";
import { Ionicons } from "@expo/vector-icons";
export function Login() {
  const navigation = useNavigation<StackTypes>();
  const [hidePass, setHidePass] = useState(true);

  return (
    <View className="flex-1 bg-teal-600">
      <Animatable.View animation="fadeInLeft" delay={500} className="mt-14 mb-8 pl-5">
        <Text className="text-white text-2xl font-bold">Registrate!</Text>
      </Animatable.View>
      <Animatable.View animation="fadeInUp" className="bg-white rounded-tl-2xl rounded-tr-2xl p-5 flex-1">
        <View>
          <Text className="text-2xl mt-8">Email</Text>
          <TextInput
            placeholder="ejemplo123@gmail.com"
            className="border-b border-gray-400 h-10 mb-12 text-xl"
            autoCorrect={false}
            keyboardType="email-address"
          />
          <Text className="text-2xl">Contraseña</Text>
          <View className="border-b border-gray-400">
            <TextInput
              placeholder="* * * * *"
              autoCorrect={false}
              secureTextEntry={hidePass ? true : false}
              className="w-full text-xl"
            />
            <TouchableOpacity
              className="absolute right-0"
              onPress={() => setHidePass(!hidePass)}
            >
              {hidePass ? (
                <Ionicons name="eye" size={25} />
              ) : (
                <Ionicons name="eye-off" size={25} />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity className="bg-teal-600 rounded-md py-2 mt-14 w-full self-center" onPress={() => navigation.navigate("home")}>
          <Text className="text-white text-xl font-bold text-center">Crear cuenta</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}
