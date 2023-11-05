import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button, ScrollView } from "react-native";
import { Table, TableWrapper, Row, Cell } from 'react-native-table-component';
import { gastos, Eliminar_gastos } from "../../API/api";
import * as Animatable from "react-native-animatable";
import { useNavigation } from "@react-navigation/native";
export function Actualizar_gastos() {
  const [tableData, setTableData] = useState([]);
  const [refresh, setRefresh] = useState(false); 
  const navigation = useNavigation<StackTypes>();
  useEffect(() => {
    async function fetchGastos() {
      try {
        const response = await gastos(); 

        if (Array.isArray(response.data)) {
          // Mapear la respuesta de la API y agregar botones a cada fila
          const updatedTableData = response.data.map((item, index) => {
            return [
              item.producto,
              item.valor,
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
    tableHead: ['Producto', 'Valor', 'Editar', 'Eliminar'],
  };

  const handleActualizar = (id) => {
    navigation.navigate("Editar_gasto", { id: id });
  };

  const handleEliminar = async (id) => {
    const response = await Eliminar_gastos(id);
    if (response.status === 204) {
      console.log("Se ha eliminado correctamente.");
      setRefresh(true); 
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#38a69d" }}>
      <Animatable.View animation="fadeInLeft" delay={500} style={{ marginTop: 14, marginBottom: 8, paddingLeft: 5 }}>
        <Text style={{ color: "white", fontSize: 24, fontWeight: "bold" }}>Actualizar de gastos</Text>
      </Animatable.View>
      <Animatable.View animation="fadeInUp" style={{ backgroundColor: "white", borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: 5, flex: 1 }}>
        <ScrollView style={{ flex: 1 }}>
          <View style={{ padding: 16 }}>
            <Table borderStyle={{ borderWidth: 1 }}>
              <Row data={state.tableHead} flexArr={[1, 0.5, 1, 1]} style={styles.head} textStyle={styles.text} />
              {tableData.map((rowData, index) => (
                <TableWrapper key={index} style={styles.row}>
                  {rowData.map((cellData, cellIndex) => (
                    <Cell
                      key={cellIndex}
                      data={cellData}
                      flex={cellIndex === 1 ? 0.5 : 1}
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
