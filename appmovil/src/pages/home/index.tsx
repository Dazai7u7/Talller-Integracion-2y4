import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../routes";
import * as Animatable from "react-native-animatable";
import { styles } from "./style"; // Asegúrate de importar tus estilos o definirlos aquí

export function Home() {
  const navigation = useNavigation<StackTypes>();

  return (
    <View style={styles.container}>
      <Animatable.View animation="fadeInLeft" delay={500} style={styles.headerContainer}>
        <Text style={styles.headerText}>Home</Text>
      </Animatable.View>
      <Animatable.View animation="fadeInUp" style={styles.cardContainer}>
        <View style={styles.card}>
          <TouchableOpacity
            style={styles.cardButton}
            onPress={() => navigation.navigate("ExpenseTracker")}
          >
            <Text style={styles.cardButtonText}>Registrar Gastos</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <TouchableOpacity
            style={styles.cardButton}
            onPress={() => navigation.navigate("BudgetPlanner")}
          >
            <Text style={styles.cardButtonText}>Agregar Presupuesto</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <TouchableOpacity
            style={styles.cardButton}
            onPress={() => navigation.navigate("FinancialAnalysis")}
          >
            <Text style={styles.cardButtonText}>Analizar Mis Gastos</Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
}
