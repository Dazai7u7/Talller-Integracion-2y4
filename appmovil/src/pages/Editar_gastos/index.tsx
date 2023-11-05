import React, { useState,useEffect } from "react";
import { View, Text, TextInput, Button, ScrollView } from "react-native"; 
import { useNavigation,useRoute  } from "@react-navigation/native";
import { StackTypes } from "../../routes";
import * as Animatable from "react-native-animatable";
import {Picker} from '@react-native-picker/picker'
import { Actualizar_gasto,Obtener_gasto } from '../../API/api';



export function Editar_gasto() {
  const navigation = useNavigation<StackTypes>();
  const [error, setError] = useState(null);
  const [producto, setProduct] = useState("");
  const [descripcion, setDescription] = useState("");
  const [valor, setValue] = useState(null);
  const [tipo_de_gasto, setExpenseType] = useState("Comida"); 
  const route = useRoute();
  const { id } = route.params;
  useEffect(() => {
    async function fetchGastos() {
      try {
        const response = await Obtener_gasto(id); 
        console.log(response.data)
        setProduct(response.data.producto)
        setDescription(response.data.descripcion)
        setValue(response.data.valor)
        setExpenseType(response.data.tipo_de_gasto)  
      } catch (error) {
        console.log("Error: " + error);
      }
    }

    fetchGastos();
  }, []);

  const productTypes = ["Comida", "Transporte", "Higiene", "Entretenimiento", "Otros"]; // Opciones de selección
  const handleAgregarGasto = async () => {
      if (!producto || !descripcion || !valor || !tipo_de_gasto) {
        setError('Por favor, complete todos los campos.');
        return;
      }
      const fecha=new Date();
      const updatedData = {
        producto: producto, // Nuevo valor para el campo 'producto'
        descripcion: descripcion, // Nuevo valor para el campo 'descripcion'
        valor: valor, // Nuevo valor para el campo 'valor'
        tipo_de_gasto: tipo_de_gasto, // Nuevo valor para el campo 'tipo_de_gasto'
        fecha:fecha,
      };
      try {
        const response = await Actualizar_gasto(id, updatedData);
        if (response.status === 200) {
          console.log('Gasto Actualizado:', response.data);
          navigation.navigate("Administrar_gastos");
        } else {
          setError('Error en el registro: ' + response);
        }
      } catch (error) {
        setError('Error en el registro: ' + error.message);
      }
    };
  return (
    <View style={{ flex: 1, backgroundColor: "#38a69d" }}>
      <Animatable.View animation="fadeInLeft" delay={500} style={{ marginTop: 14, marginBottom: 8, paddingLeft: 5 }}>
        <Text style={{ color: "white", fontSize: 24, fontWeight: "bold" }}>Editar de gastos</Text>
      </Animatable.View>
      <Animatable.View animation="fadeInUp" style={{ backgroundColor: "white", borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: 5, flex: 1 }}>
        <ScrollView style={{ flex: 1 }}>
          <View style={{ padding: 16 }}>
            <TextInput
              placeholder="Producto"
              value={producto}
              onChangeText={(text) => setProduct(text)}
              style={{ borderBottomWidth: 1, borderColor: "gray", marginBottom: 12, fontSize: 20, padding: 8 }}
            />
            <TextInput
              placeholder="Descripción"
              value={descripcion}
              onChangeText={(text) => setDescription(text)}
              style={{ borderBottomWidth: 1, borderColor: "gray", marginBottom: 12, fontSize: 20, padding: 8 }}
            />
            <TextInput
              placeholder="Valor"
              value={valor}
              onChangeText={(text) => {
                const numericValue = parseFloat(text); // Convierte la cadena en un número decimal
                setValue(numericValue); // Actualiza el estado con el valor numérico
              }}
              keyboardType="numeric"
              style={{ borderBottomWidth: 1, borderColor: "gray", marginBottom: 12, fontSize: 20, padding: 8 }}
            />
            <Text>Tipo de Producto:</Text>
            <Picker
              selectedValue={tipo_de_gasto}
              onValueChange={(itemValue) => setExpenseType(itemValue)}
              style={{ height: 50, width: "100%" }}
            >
              {productTypes.map((type, index) => (
                <Picker.Item key={index} label={type} value={type} />
              ))}
            </Picker>
            {error && (
              <Text style={{ color: "red" }}>{error}</Text>
            )}
            <Button title="Actualizar" 
             onPress={handleAgregarGasto}
             color="#38a69d" />
          </View>
        </ScrollView>
      </Animatable.View>
    </View>
  );

}

