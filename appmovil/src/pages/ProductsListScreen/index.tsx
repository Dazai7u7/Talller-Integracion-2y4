import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import gastosData from '../utils/expenses';
import { Card, CardProps } from '../../components/Card';
import * as Animatable from 'react-native-animatable';
import { PieChart } from "react-native-gifted-charts";
import { gastos } from '../../API/api.js';
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export function ProductsListScreen({ route }) {
  const [showPage, setShowPage] = useState(false);
  const [chartData, setChartData] = useState([]);
  const { tipo_de_gasto } = route.params;
  const [colorMapping, setColorMapping] = useState({});
  const [datos,setdatos]=useState('');
  useEffect( () => {
    obtenerDatos(); // Llamada a la función para obtener los datos de gastos
    setTimeout(() => {
      setShowPage(true);
    }, 2000);
  }, []);
  const obtenerDatos = async () => {
    try {

      const response = await gastos(); 
      
      const datosFiltrados = response.data.filter((item) => item.tipo_de_gasto === tipo_de_gasto);
      
      setdatos(datosFiltrados);
      datosFiltrados.forEach((item) => {
        colorMapping[item.producto] = getRandomColor();
      });
      setColorMapping({ ...colorMapping });
      

      setTimeout(()=>{
        const chartData = datosFiltrados.map((item) => ({
          value: item.valor,
          label: item.producto,
          color: colorMapping[item.producto],
        }));
        
        setChartData(chartData);
      },1500)
      
      
      }catch{
      console.error('Error al obtener datos de gastos:', error);
    }};
  return (
    <View className="flex-1 bg-teal-600">
      <Animatable.View animation="fadeInLeft" delay={500} className="mt-14 mb-8 pl-5">
        <Text className="text-white text-2xl font-bold">{tipo_de_gasto}</Text>
      </Animatable.View>

      {showPage && (
        <Animatable.View animation="fadeInUp" className="bg-white rounded-tl-2xl rounded-tr-2xl p-5 flex-1">
          <View className="w-3/5 h-2/5 mx-auto">
            <PieChart
              data={chartData}
              donut
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
            data={datos}
            keyExtractor={(item, index) => item.id || index.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity>
                <Card
                  data={item}
                  selected={false}
                  title={item.producto}
                  color={colorMapping[item.producto] }
                />
              </TouchableOpacity>
            )}
          />
        </Animatable.View>
      )}
    </View>
  );
}
