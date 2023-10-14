import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../routes";
import * as Animatable from "react-native-animatable";
import { styles } from "./style";

const Tab = createBottomTabNavigator();

export function Home() {
  const navigation = useNavigation<StackTypes>();

  // Función para navegar a una pantalla específica
  const navigateToScreen = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: "#38a69d",
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        },
      }}
    >
      <Tab.Screen
        name="Inicio"
        component={() => <HomeScreen navigateToScreen={navigateToScreen} />}
      />
      <Tab.Screen name="Perfil" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

function HomeScreen({ navigateToScreen }) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.cardRow}>
          <TouchableOpacity style={styles.card} onPress={() => navigateToScreen("BudgetPlanner")}>
            <Text style={styles.cardText}>Agregar Presupuesto</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={() => navigateToScreen("ExpenseTracker")}>
            <Text style={styles.cardText}>Registrar Gastos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.card} onPress={() => navigateToScreen("FinancialAnalysis")}>
            <Text style={styles.cardText}>Analizar Mis Gastos</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Profile</Text>
    </View>
  );
}
