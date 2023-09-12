import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";
import { SignInStyles } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { phoneMask } from "../../utils/phoneNumberMask";
import MaskInput, { Masks } from "react-native-mask-input";

export function Login() {
  const styles = SignInStyles;
  const [hidePass, setHidePass] = useState(true);
  const [phoneNumber, setPhoneNumber] = React.useState("");

  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" delay={500} style={styles.header}>
        <Text style={styles.message}>Registrate!</Text>
      </Animatable.View>
      <Animatable.View animation="fadeInUp" style={styles.containerForm}>
        <View>
          <Text style={styles.title}>Email</Text>
          <TextInput
            placeholder="ejemplo123@gmail.com"
            style={styles.input}
            autoCorrect={false}
            keyboardType="email-address"
          />
          <Text style={styles.title}>Contraseña</Text>
          <View style={styles.password}>
            <TextInput
              placeholder="* * * * *"
              autoCorrect={false}
              secureTextEntry={hidePass ? true : false}
              style={styles.passwordInput}
            />
            <TouchableOpacity
              style={styles.icon}
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
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Crear cuenta</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}
