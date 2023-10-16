import React, { useState } from "react";
import { View, Text, TextInput, Button, ScrollView } from "react-native"; 
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../routes";
import * as Animatable from "react-native-animatable";
import {Picker} from '@react-native-picker/picker'
export function ExpenseTracker() {
  const navigation = useNavigation<StackTypes>();
  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState("");
  const [amount, setAmount] = useState("");
  const [price, setPrice] = useState("");

  const [product, setProduct] = useState("");
  const [description, setDescription] = useState("");
  const [value, setValue] = useState("");
  const [expenseType, setExpenseType] = useState("Comida"); // Establece el valor inicial
  // Fecha se establecerá automáticamente en la creación del objeto

  const productTypes = ["Comida", "Transporte", "Higiene", "Entretenimiento", "Otros"]; // Opciones de selección

  const addExpense = () => {
    if (newExpense && amount && price) {
      const expense = {
        name: newExpense,
        amount: parseFloat(amount),
        price: parseFloat(price),
        producto: product,
        descripcion: description,
        valor: parseFloat(value),
        tipo_de_gasto: expenseType,
        fecha: new Date(), // Fecha actual
      };
      setExpenses([...expenses, expense]);
      setNewExpense("");
      setAmount("");
      setPrice("");
      setProduct("");
      setDescription("");
      setValue("");
      setExpenseType("Comida"); // Restablece el valor a "Comida"
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#38a69d" }}>
      <Animatable.View animation="fadeInLeft" delay={500} style={{ marginTop: 14, marginBottom: 8, paddingLeft: 5 }}>
        <Text style={{ color: "white", fontSize: 24, fontWeight: "bold" }}>Registro de gastos</Text>
      </Animatable.View>
      <Animatable.View animation="fadeInUp" style={{ backgroundColor: "white", borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: 5, flex: 1 }}>
        <ScrollView style={{ flex: 1 }}>
          <View style={{ padding: 16 }}>
            <TextInput
              placeholder="Producto"
              value={product}
              onChangeText={(text) => setProduct(text)}
              style={{ borderBottomWidth: 1, borderColor: "gray", marginBottom: 12, fontSize: 20, padding: 8 }}
            />
            <TextInput
              placeholder="Descripción"
              value={description}
              onChangeText={(text) => setDescription(text)}
              style={{ borderBottomWidth: 1, borderColor: "gray", marginBottom: 12, fontSize: 20, padding: 8 }}
            />
            <TextInput
              placeholder="Valor"
              value={value}
              onChangeText={(text) => setValue(text)}
              keyboardType="numeric"
              style={{ borderBottomWidth: 1, borderColor: "gray", marginBottom: 12, fontSize: 20, padding: 8 }}
            />
            <Text>Tipo de Producto:</Text>
            <Picker
              selectedValue={expenseType}
              onValueChange={(itemValue) => setExpenseType(itemValue)}
              style={{ height: 50, width: "100%" }}
            >
              {productTypes.map((type, index) => (
                <Picker.Item key={index} label={type} value={type} />
              ))}
            </Picker>
            <Button title="Agregar" onPress={addExpense} color="#38a69d" />
            {expenses.map((expense, index) => (
              <Text key={index}>
                Nombre: {expense.name} - Precio: ${expense.price} - Cantidad: {expense.amount}
                Producto: {expense.producto} - Descripción: {expense.descripcion} - Valor: ${expense.valor} - Tipo de gasto: {expense.tipo_de_gasto}
              </Text>
            ))}
          </View>
        </ScrollView>
      </Animatable.View>
    </View>
  );
}
