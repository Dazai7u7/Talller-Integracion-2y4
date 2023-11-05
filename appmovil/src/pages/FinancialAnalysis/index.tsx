import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from "@react-navigation/native";
import gastosData from '../utils/expenses';
import { Card, CardProps } from '../../components/Card';
import { PieChart } from "react-native-gifted-charts";
import {token,gastos,ingresarGasto} from '../../API/api.js';

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
const colorMapping = {};

const uniqueCategories = [...new Set(gastosData.map((item) => item.tipo_de_gasto))];

uniqueCategories.forEach((category) => {
  colorMapping[category] = getRandomColor();
});

export function FinancialAnalysis() {
  const [filteredData, setFilteredData] = useState<CardProps[]>([]);
  const navigation = useNavigation<StackTypes>();
  const [selectedSegment, setSelectedSegment] = useState(null);
  const [chartData, setChartData] = useState([]);
  const [showPage, setShowPage] = useState(false); 
  useEffect(() => {
    setTimeout(() => {
      setShowPage(true);
    }, 500);
  }, []);

  useEffect(() => {
    
      const chartData = filteredData.map((item) => ({
        value: item.valor,
        label: item.tipo_de_gasto,
        color: colorMapping[item.tipo_de_gasto],
      }));
      setChartData(chartData);

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
  }, [showPage]);

  const handleCardPress = (tipo_de_gasto) => {
    setSelectedSegment(tipo_de_gasto);
  };
  const nuevoGasto = {
    producto: 'Ejemplo de Producto',
    descripcion: 'Descripción de ejemplo',
    valor: 50.0,
    tipo_de_gasto: 'Alimentos',
    fecha: new Date(), 
  };
  return (
    <View className="flex-1 bg-teal-600">
      <Animatable.View animation="fadeInLeft" delay={500} className="mt-14 mb-8 pl-5">
        <Text className="text-white text-2xl font-bold">Analisis de mis gastos</Text>
      </Animatable.View>
      <Animatable.View animation="fadeInUp" className="bg-white rounded-tl-2xl rounded-tr-2xl p-5 flex-1">
      <View className="w-3/5 h-2/5 mx-auto">
          <PieChart
          data={chartData}
          donut
          //showText
          showValuesAsLabels
          showTextBackground
          textBackgroundColor="#333"
          textBackgroundRadius={22}
          textColor="white"
          textSize={16}
          fontWeight="bold"
          strokeWidth={5}
          strokeColor="#333"
          innerCircleBorderWidth={5}
          innerCircleBorderColor="#333"
          focusOnPress

          showGradient
          />
        </View>
        <FlatList
          data={filteredData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <Card
                data={item}
                selected={false}
                title={item.tipo_de_gasto}
                color={colorMapping[item.tipo_de_gasto]}
                onLongPress={() => navigation.navigate('ProductsListScreen', { tipo_de_gasto: item.tipo_de_gasto })}
                onPress={() => handleCardPress(item.tipo_de_gasto)}
              />
            </TouchableOpacity>
          )}
          showsVerticalScrollIndicator={false}
        />
        <TouchableOpacity onPress={()=>gastos()}>
          <Text>A</Text>
        </TouchableOpacity>
        
      </Animatable.View>
    </View>
  );
}
