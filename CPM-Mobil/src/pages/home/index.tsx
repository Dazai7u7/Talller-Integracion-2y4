import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../routes"; // Asegúrate de importar tus tipos de navegación
import * as Animatable from "react-native-animatable";
export function Home() {
  const navigation = useNavigation<StackTypes>();

  return (
    <View className="flex-1 bg-teal-600">
        <Animatable.View animation="fadeInLeft" delay={500} className="mt-14 mb-8 pl-5">
        <Text className="text-white text-2xl font-bold">Home</Text>
      </Animatable.View>
      <Animatable.View animation="fadeInUp" className="bg-white rounded-tl-2xl rounded-tr-2xl p-5 flex-1"> 
        <View className="flex-1 justify-center items-center">
        <TouchableOpacity
            className="bg-teal-600 rounded-md py-2 px-4 mb-4"
            onPress={() => navigation.navigate("ExpenseTracker")} // Navegar a la página de Gastos
        >
            <Text className="text-white text-xl">Registrar gastos</Text>
        </TouchableOpacity>
        <TouchableOpacity
            className="bg-teal-600 rounded-md py-2 px-4 mb-4"
            onPress={() => navigation.navigate("BudgetPlanner")} // Navegar a la página de Planificador de presupuesto
        >
            <Text className="text-white text-xl">Agregar presupuesto</Text>
        </TouchableOpacity>
        <TouchableOpacity
            className="bg-teal-600 rounded-md py-2 px-4 mb-4"
            onPress={() => navigation.navigate("FinancialAnalysis")} // Navegar a la página de Análisis financiero
        >
            <Text className="text-white text-xl">Analizar mis gastos</Text>
        </TouchableOpacity>
        {/* Prototipo para poder */}
        </View>
        </Animatable.View>
    </View>
  );
}
