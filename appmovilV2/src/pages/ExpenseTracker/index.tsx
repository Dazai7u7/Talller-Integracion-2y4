import React, { useState } from "react";
import { View, Text, TextInput, Button, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../routes";
import * as Animatable from "react-native-animatable";
export function ExpenseTracker() {
  const navigation = useNavigation<StackTypes>();
  const [expenses, setExpenses] = useState([]);
  const [newExpense, setNewExpense] = useState("");
  const [amount, setAmount] = useState("");
  const [price, setPrice] = useState("");

  const addExpense = () => {
    if (newExpense && amount) {
      const expense = {
        name: newExpense,
        amount: parseFloat(amount),
        price: parseFloat(price),
      };
      setExpenses([...expenses, expense]);
      setNewExpense("");
      setAmount("");
      setPrice("");
    }
  };

  return (
    <View className="flex-1 bg-teal-600">
    <Animatable.View animation="fadeInLeft" delay={500} className="mt-14 mb-8 pl-5">
      <Text className="text-white text-2xl font-bold">Registro de gastos</Text>
    </Animatable.View>
    <Animatable.View animation="fadeInUp" className="bg-white rounded-tl-2xl rounded-tr-2xl p-5 flex-1">
    <ScrollView className="flex-1">
      <View className="p-4">
        <TextInput
          placeholder="Nombre del producto"
          value={newExpense}
          onChangeText={(text) => setNewExpense(text)}
          className="border-b border-gray-400 mb-2 text-xl p-2"
        />
        <TextInput
          placeholder="Cantidad"
          value={amount}
          onChangeText={(text) => setAmount(text)}
          keyboardType="numeric"
          className="border-b border-gray-400 mb-2 text-xl p-2"
        />
        <TextInput
          placeholder="Precio"
          value={price}
          onChangeText={(text) => setPrice(text)}
          keyboardType="numeric"
          className="border-b border-gray-400 mb-2 text-xl p-2"
        />
        <Button title="Agregar" onPress={addExpense} color="#38a69d" />
        {expenses.map((expense, index) => (
          <Text key={index}>
            Nombre: {expense.name} - Precio: ${expense.price} - Cantidad: {expense.amount}
          </Text>
        ))}
      </View>
    </ScrollView>
    </Animatable.View>
    </View>
  );
}
