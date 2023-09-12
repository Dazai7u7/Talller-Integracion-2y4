import React from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import * as Animatable from "react-native-animatable";
import { StackTypes } from "../../routes";
import { useNavigation } from "@react-navigation/native";

export function SignIn() {
  const navigation = useNavigation<StackTypes>();

  return (
    <View className='flex-1 bg-teal-600'>
      <Animatable.View animation="fadeInLeft" delay={500} className='mt-14 mb-8 pl-5'>
        <Text className='text-white text-2xl font-bold'>Bienvenido(a)</Text>
      </Animatable.View>
      <Animatable.View animation="fadeInUp" className='bg-white rounded-tl-2xl rounded-tr-2xl p-5 flex-1'>
        <Text className='text-2xl mt-8'>Email</Text>
        <TextInput placeholder="Escriba un email" className='border-b border-gray-400 h-10 mb-12 text-xl' />
        <Text className='text-2xl'>Contraseña</Text>
        <TextInput placeholder="Escriba su contraseña" className='border-b border-gray-400 h-10 mb-12 text-xl' />
        <TouchableOpacity className='bg-teal-600 rounded-md py-2 mt-0 w-full self-center' onPress={() => navigation.navigate("Login")}>
          <Text className='text-white text-xl font-bold text-center'>Ingresar</Text>
        </TouchableOpacity>
        <TouchableOpacity className='mt-5 self-center'>
          <Text className='text-gray-400' onPress={() => navigation.navigate("Login")}>
            ¿No tienes una cuenta? Registro
          </Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}
