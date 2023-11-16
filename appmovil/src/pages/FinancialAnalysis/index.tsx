import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { useNavigation } from "@react-navigation/native";
import { Card, CardProps } from '../../components/Card';
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

export function FinancialAnalysis() {
  const [filteredData, setFilteredData] = useState([]);
  const navigation = useNavigation<StackTypes>();
  const [selectedSegment, setSelectedSegment] = useState(null);
  const [chartData, setChartData] = useState([]);
  const [showPage, setShowPage] = useState(false);
  const [colorMapping, setColorMapping] = useState({});
  const [colorMappingReady, setColorMappingReady] = useState(false);
  const [datos,setdatos]=useState('');
  useEffect( () => {
    obtenerDatos(); // Llamada a la función para obtener los datos de gastos
    setTimeout(() => {
      setShowPage(true);
    }, 500);
  }, []);
    const obtenerDatos = async () => {
      try {
        const response = await gastos(); // Reemplaza con tu función para obtener los datos desde el backend
       
        const datosAgrupados = response.data.reduce((acumulador, item) => {
          const tipoDeGasto = item.tipo_de_gasto;
          const valor = item.valor;
    
          // Si ya existe una entrada para este tipo de gasto, suma el valor
          if (acumulador[tipoDeGasto]) {
            acumulador[tipoDeGasto].valor += valor;
          } else {
            // Si no existe, crea una nueva entrada
            acumulador[tipoDeGasto] = {
              tipo_de_gasto: tipoDeGasto,
              valor: valor,
            };
          }
    
          return acumulador;
        }, {});
    
        // Convierte el objeto de datos agrupados en un array
        const datosFiltrados = Object.values(datosAgrupados);
        setdatos(datosFiltrados)
        datosFiltrados.forEach((item) => {
          colorMapping[item.tipo_de_gasto] = getRandomColor();
        });
        setColorMapping({ ...colorMapping });
        setColorMappingReady(true);
        setTimeout(()=>{
          const chartData = datosFiltrados.map((item) => ({
            value: item.valor,
            label: item.tipo_de_gasto,
            color: colorMapping[item.tipo_de_gasto],
          }));
          setChartData(chartData);
        },1000)
        
        }catch{
        console.error('Error al obtener datos de gastos:', error);
      }};


  const handleCardPress = (tipo_de_gasto) => {
    setSelectedSegment(tipo_de_gasto);
  };

  return (
    <View className="flex-1 bg-teal-600">
      <Animatable.View animation="fadeInLeft" delay={500} className="mt-14 mb-8 pl-5">
        <Text className="text-white text-2xl font-bold">Analisis de mis gastos</Text>
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
                title={item.tipo_de_gasto}
                color={colorMapping[item.tipo_de_gasto]}
                onLongPress={() => navigation.navigate('ProductsListScreen', { tipo_de_gasto: item.tipo_de_gasto })}
                onPress={() => handleCardPress(item.tipo_de_gasto)}
              />
            </TouchableOpacity>
          )}
          showsVerticalScrollIndicator={false}
        />
      </Animatable.View>
      )}
    </View>
  );
}
