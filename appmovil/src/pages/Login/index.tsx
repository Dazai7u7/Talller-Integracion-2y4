import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, Alert } from "react-native"; 
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../routes";
import { Ionicons } from "@expo/vector-icons";
import { registrarUsuario } from '../../API/api';

export function Login() {
  const navigation = useNavigation<StackTypes>();
  const [hidePass, setHidePass] = useState(true);
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [error, setError] = useState(null);

  return (
    <View className="flex-1 bg-teal-600">
      <Animatable.View animation="fadeInLeft" delay={500} className="mt-14 mb-8 pl-5">
        <Text className="text-white text-2xl font-bold">Regístrate</Text>
      </Animatable.View>
      <Animatable.View animation="fadeInUp" className="bg-white rounded-tl-2xl rounded-tr-2xl p-5 flex-1">
        <View>
          <Text className="text-2xl mt-8">Nombre</Text>
          <TextInput
            placeholder="Tu nombre"
            value={nombre}
            onChangeText={(text) => setNombre(text)}
            className="border-b border-gray-400 h-10 mb-12 text-xl"
          />
          <Text className="text-2xl">Email</Text>
          <TextInput
            placeholder="ejemplo123@gmail.com"
            value={email}
            onChangeText={(text) => setEmail(text)}
            className="border-b border-gray-400 h-10 mb-12 text-xl"
            autoCorrect={false}
            keyboardType="email-address"
          />
          <Text className="text-2xl">Contraseña</Text>
          <View className="border-b border-gray-400">
            <TextInput
              placeholder="* * * * *"
              value={contraseña}
              onChangeText={(text) => setContraseña(text)}
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
        {error && (
          <Text style={{ color: "red" }}>{error}</Text>
        )}
        <TouchableOpacity
          className="bg-teal-600 rounded-md py-2 mt-14 w-full self-center"
          onPress={async () => {
            if (!nombre || !email || !contraseña) {
              setError('Por favor, complete todos los campos.');
              return; 
            }

            try {
              const response = await registrarUsuario(nombre, email, contraseña);
              if (response.status === 200) {
                console.log('Registro exitoso:', response.data);
                navigation.navigate("SignIn");
              } else {
                setError('Error en el registro: ' + response.response.data);
              }
            } catch (error) {
              setError('Error en el registro: ' + error.message);
            }
          }}
        >
          <Text className="text-white text-xl font-bold text-center">Crear cuenta</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}
