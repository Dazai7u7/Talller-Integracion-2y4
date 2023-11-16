import React, { useState,useEffect } from "react";
import { View, Text, TextInput, Button, ScrollView } from "react-native"; 
import { useNavigation,useRoute  } from "@react-navigation/native";
import { StackTypes } from "../../routes";
import * as Animatable from "react-native-animatable";
import { Obtener_Presupuesto,Actualizar_Presupuesto } from "../../API/api";


export function Editar_presupuesto() {
  const navigation = useNavigation<StackTypes>();
  const [error, setError] = useState(null);
  const [presupuesto, setpresupuesto] = useState("");
  const route = useRoute();
  const { id, onGoBack } = route.params;
  useEffect(() => {
    async function fetchGastos() {
      try {
        const response = await Obtener_Presupuesto(id); 
        console.log(response.data)
        setpresupuesto(response.data.presupuesto)
      } catch (error) {
        console.log("Error: " + error);
      }
    }

    fetchGastos();
  }, []);

  const handleAgregarGasto = async () => {
      if (!presupuesto) {
        setError('Por favor, complete todos los campos.');
        return;
      }
      const fecha=new Date();
      const updatedData = {
        presupuesto:presupuesto
      };
      try {
        const response = await Actualizar_Presupuesto(id, updatedData);
        if (response.status === 200) {
          console.log('Presupuesto Actualizado:', response.data);
          onGoBack();
          navigation.goBack();
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
        <Text style={{ color: "white", fontSize: 24, fontWeight: "bold" }}>Editar Presupuesto</Text>
      </Animatable.View>
      <Animatable.View animation="fadeInUp" style={{ backgroundColor: "white", borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: 5, flex: 1 }}>
        <ScrollView style={{ flex: 1 }}>
          <View style={{ padding: 16 }}>
            <TextInput
              placeholder="Presupuesto"
              value={presupuesto === null ? '' : presupuesto.toString()}
              onChangeText={(text) => setpresupuesto(text)}
              style={{ borderBottomWidth: 1, borderColor: "gray", marginBottom: 12, fontSize: 20, padding: 8 }}
            />
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

