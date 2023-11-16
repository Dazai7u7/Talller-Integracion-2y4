import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button, ScrollView,TextInput } from "react-native";
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
import * as Animatable from "react-native-animatable";
import { useNavigation  } from "@react-navigation/native";
import { ingresarPresupuesto,presupuestos,Eliminar_Presupuesto } from '../../API/api';
export function Administrar_presupuesto() {
  const [tableData, setTableData] = useState([]);
  const [refresh, setRefresh] = useState(false); 
  const navigation = useNavigation<StackTypes>();
  const [presupuesto, setpresupuesto] = useState('');
  const [error, setError] = useState(null);
  
  const handleAgregar = async () => {
    if (!presupuesto ) {
      setError('Por favor, complete todos los campos.');
      return;
    }
    const fecha=new Date();
    try {
      const response = await ingresarPresupuesto(presupuesto);
      if (response.status === 200) {
        setRefresh(true)
        setpresupuesto('')
        setError('')
      } else {
        setError('Error en el registro: ' + response);
        setpresupuesto('')
      }
    } catch (error) {
      setError('Error en el registro: ' + error.message);
      setpresupuesto('')
    }
  };
  useEffect(() => {
    async function fetchGastos() {
      try {
        const response = await presupuestos(); 

        if (Array.isArray(response.data)) {
          // Mapear la respuesta de la API y agregar botones a cada fila
          const updatedTableData = response.data.map((item, index) => {
            return [
              item.presupuesto,
              <Button title="Editar" onPress={() => handleActualizar(item._id)} />,
              <Button title="Eliminar" onPress={() => handleEliminar(item._id)} color="red"/>,
            ];
          });

          // Actualizar el estado con los datos de la tabla
          setTableData(updatedTableData);
          setRefresh(false); // Restablecer el estado de actualización a falso
        }
      } catch (error) {
        console.log("Error: " + error);
      }
    }

    fetchGastos();
  }, [refresh]); // Agregar 'refresh' como dependencia del efecto

  const state = {
    tableHead: ['Presupuesto', 'Editar', 'Eliminar'],
  };

  const handleActualizar = (id) => {
    navigation.navigate("Editar_presupuesto", { id: id, onGoBack: () => setRefresh(!refresh) });
  };

  const handleEliminar = async (id) => {
    const response = await Eliminar_Presupuesto(id);
    if (response.status === 204) {
      console.log("Se ha eliminado correctamente.");
      setRefresh(true); 
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#38a69d" }}>
      <Animatable.View animation="fadeInLeft" delay={500} style={{ marginTop: 14, marginBottom: 8, paddingLeft: 5 }}>
        <Text style={{ color: "white", fontSize: 24, fontWeight: "bold" }}>Administrar presupuestos</Text>
      </Animatable.View>
      <Animatable.View animation="fadeInUp" style={{ backgroundColor: "white", borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: 5, flex: 1 }}>
        <ScrollView style={{ flex: 1 }}>
          <View style={{ padding: 16 }}>
          <View style={{ flexDirection: 'row', marginBottom: 12 }}>
              <TextInput
                placeholder="Nuevo Presupuesto"
                value={presupuesto}
                onChangeText={(text) => setpresupuesto(text)}
                style={{ flex: 1, borderBottomWidth: 1, borderColor: "gray", fontSize: 20, padding: 8 }}
              />
              
              <Button title="Agregar" onPress={handleAgregar} color="#38a69d" />
            </View>
            {error && (
              <Text style={{ color: "red" }}>{error}</Text>
            )}

            <Table borderStyle={{ borderWidth: 1 }}>
              <Row data={state.tableHead} flexArr={[1, 1, 1]} style={styles.head} textStyle={styles.text} />
              {tableData.map((rowData, index) => (
                <TableWrapper key={index} style={styles.row}>
                  {rowData.map((cellData, cellIndex) => (
                    <Cell
                      key={cellIndex}
                      data={cellData}
                      
                      textStyle={styles.text}
                    />
                  ))}
                </TableWrapper>
              ))}
            </Table>
          </View>
        </ScrollView>
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, paddingTop: 30, backgroundColor: '#fff' },
  head: { height: 40, backgroundColor: '#f1f8ff' },
  row: { flexDirection: 'row', backgroundColor: '#FFF1C1' },
  text: { margin: 6 },
});
