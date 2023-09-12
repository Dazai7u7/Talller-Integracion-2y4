import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../routes";
import { WelcomeStyles } from "./styles";

export function Welcome() {
  const navigation = useNavigation<StackTypes>();

  const styles = WelcomeStyles;
  return (
    <View style={styles.container}>
      <View style={styles.containerLogo}>
        <Animatable.Image
          source={require("../../assets/logo.png")}
          style={{ width: "100%" }}
          resizeMode="contain"
          animation="flipInY"
        />
      </View>
      <Animatable.View
        animation="fadeInUp"
        delay={1000}
        style={styles.containerForm}
      >
        <Text style={styles.title}>
        Monitoriza, organiza tus gastos desde cualquier lugar!
        </Text>
        <Text style={styles.text}>Inicia sesión para comenzar</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("SignIn")}
        >
          <Text style={styles.buttonText}>Ingresar</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
}
