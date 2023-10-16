import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Animatable from "react-native-animatable";
import { StackTypes } from "../../routes";
import { useNavigation } from "@react-navigation/native";
import { iniciarSesion } from '../../API/api'; // Importa la función para iniciar sesión desde tu API

export function SignIn() {
  const navigation = useNavigation<StackTypes>();
  const [email, setEmail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [error, setError] = useState(null);

  const handleSignIn = async () => {
    if (!email || !contraseña) {
      setError('Por favor, complete todos los campos.');
      return;
    }

    try {
      const response = await iniciarSesion(email, contraseña);

      if (response.status === 200) {
        //console.log('Inicio de sesión exitoso:', response.data);
        //console.log(response.headers)
        const tokenHeader = response.headers["set-cookie"][0]; 
        const tokenParts = tokenHeader.split(" "); 
        const token = tokenParts[0].substring("token=".length); 

        await AsyncStorage.setItem('token', token);

        console.log("Token guardado en AsyncStorage");
        console.log("inicio de session exitoso");
        navigation.navigate("home");
      } else {
        setError('Error en el inicio de sesión: ' + response.response.data.message);
      }
    } catch (error) {
      setError('Error en el inicio de sesión: ' + error.message);
    }
  };

  return (
    <View className='flex-1 bg-teal-600'>
      <Animatable.View animation="fadeInLeft" delay={500} className='mt-14 mb-8 pl-5'>
        <Text className='text-white text-2xl font-bold'>Bienvenido(a)</Text>
      </Animatable.View>
      <Animatable.View animation="fadeInUp" className='bg-white rounded-tl-2xl rounded-tr-2xl p-5 flex-1'>
        <Text className='text-2xl mt-8'>Email</Text>
        <TextInput
          placeholder="Escriba un email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          className='border-b border-gray-400 h-10 mb-12 text-xl'
        />
        <Text className='text-2xl'>Contraseña</Text>
        <TextInput
          placeholder="Escriba su contraseña"
          value={contraseña}
          onChangeText={(text) => setContraseña(text)}
          secureTextEntry={true}
          className='border-b border-gray-400 h-10 mb-12 text-xl'
        />
        {error && (
          <Text style={{ color: "red" }}>{error}</Text>
        )}
        <TouchableOpacity
          className='bg-teal-600 rounded-md py-2 mt-0 w-full self-center'
          onPress={handleSignIn}
        >
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
