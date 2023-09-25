import React from "react";
import { View, Text, ScrollView } from "react-native";
import * as Animatable from "react-native-animatable";

export function FinancialAnalysis() {
  return (
    <View className="flex-1 bg-teal-600">
      <Animatable.View animation="fadeInLeft" delay={500} className="mt-14 mb-8 pl-5">
        <Text className="text-white text-2xl font-bold">Analisis de mis gastos</Text>
      </Animatable.View>
      <Animatable.View animation="fadeInUp" className="bg-white rounded-tl-2xl rounded-tr-2xl p-5 flex-1">
        <ScrollView className="flex-1">
          <View className="p-5">
            <View className="bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 p-5 rounded-lg shadow-lg">
              {/* Agregar tu gráfico de barras aquí */}
              <Text>AQUI DEBERIA IR EL ANALISIS GRAFICO DE GRAFICOS, ETC.</Text>
            </View>
          </View>
        </ScrollView>
        </Animatable.View>
    </View>
  );
}
