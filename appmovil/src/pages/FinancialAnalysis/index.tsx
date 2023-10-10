import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Svg, Circle } from 'react-native-svg';
import { useNavigation } from "@react-navigation/native";
import gastosData from '../utils/expenses'; // Importa desde el archivo correcto
import { Card, CardProps } from '../../components/Card';

export function FinancialAnalysis() {
  const [filteredData, setFilteredData] = useState<CardProps[]>([]);
  const navigation = useNavigation<StackTypes>();
  useEffect(() => {
    // Filtrar y sumar los valores por tipo_de_gasto
    const groupedData = gastosData.reduce((result, item) => {
      const existingItem = result.find((x) => x.tipo_de_gasto === item.tipo_de_gasto);
      if (existingItem) {
        existingItem.valor += item.valor;
      } else {
        result.push({ ...item });
      }
      return result;
    }, [] as CardProps[]);

    setFilteredData(groupedData);
  }, []);

  // Función para navegar a la pantalla de productos por tipo_de_gasto
  

  return (
    <View className="flex-1 bg-teal-600">
      <Animatable.View animation="fadeInLeft" delay={500} className="mt-14 mb-8 pl-5">
        <Text className="text-white text-2xl font-bold">Analisis de mis gastos</Text>
      </Animatable.View>
      <Animatable.View animation="fadeInUp" className="bg-white rounded-tl-2xl rounded-tr-2xl p-5 flex-1">
        <FlatList
          data={filteredData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <Card
              data={item}
              selected={false}
              title={item.tipo_de_gasto}
              onPress={() => navigation.navigate('ProductsListScreen', { tipo_de_gasto: item.tipo_de_gasto})}
              />

            </TouchableOpacity>
          )}
          showsVerticalScrollIndicator={false}
        />
      </Animatable.View>
    </View>
  );
}
