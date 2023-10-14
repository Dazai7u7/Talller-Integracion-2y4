import React from 'react';
import { View, Text, FlatList } from 'react-native';
import gastosData from '../utils/expenses'; // Importa desde el archivo correcto
import { Card, CardProps } from '../../components/Card';
import * as Animatable from 'react-native-animatable';
import { BarChart, LineChart, PieChart } from "react-native-gifted-charts";


function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
export function ProductsListScreen({ route }) {
  const data=[ {value:50}, {value:80}, {value:90}, {value:70} ]
      
  const { tipo_de_gasto } = route.params;

  // Filtra los productos por tipo_de_gasto
  const productosFiltrados = gastosData.filter((item) => item.tipo_de_gasto === tipo_de_gasto);

  // Calcula el valor total de los productos
  const valorTotal = productosFiltrados.reduce((total, item) => total + item.valor, 0);

  // Prepara los datos para el gráfico circular
  //const data = productosFiltrados.map((item) => ({
    //value: item.valor,
    //key: item.producto,
    //svg: { fill: getRandomColor() }, // Color aleatorio para cada segmento
  //}));
  return (
    <View className="flex-1 bg-teal-600">
      <Animatable.View animation="fadeInLeft" delay={500} className="mt-14 mb-8 pl-5">
        <Text className="text-white text-2xl font-bold">{tipo_de_gasto}</Text>
      </Animatable.View>
      <Animatable.View animation="fadeInUp" className="bg-white rounded-tl-2xl rounded-tr-2xl p-5 flex-1">
        <FlatList
          data={productosFiltrados}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View>
              <Card data={item} selected={false} title={item.producto} color={getRandomColor()} />
            </View>
          )}
        />

        <PieChart data = {data} />

      </Animatable.View>
    </View>
  );
}
