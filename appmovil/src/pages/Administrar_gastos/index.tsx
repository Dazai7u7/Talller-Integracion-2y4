import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../routes";
import * as Animatable from "react-native-animatable";
import { styles } from "./style";

const Tab = createBottomTabNavigator();

export function Administrar_gastos() {
  const navigation = useNavigation<StackTypes>();
    return (
      <View style={{ flex: 1, backgroundColor: "#38a69d" }}>
      <Animatable.View animation="fadeInLeft" delay={500} style={{ marginTop: 14, marginBottom: 8, paddingLeft: 5 }}>
        <Text style={{ color: "white", fontSize: 24, fontWeight: "bold" }}>Administrar de gastos</Text>
      </Animatable.View>
      <Animatable.View animation="fadeInUp" style={{ backgroundColor: "white", borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: 5, flex: 1 }}>
        <View style={styles.container}>
          <ScrollView>
            <View style={styles.cardRow}>
              <TouchableOpacity style={styles.card}  onPress={() => navigation.navigate('ExpenseTracker')}>
                <Text style={styles.cardText}>Registrar Gastos</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.card}  onPress={() => navigation.navigate('Actualizar_gastos')}>
                <Text style={styles.cardText}>Actualizar Gastos</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
        </Animatable.View>
        </View>
      );

}

