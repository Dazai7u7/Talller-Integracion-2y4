import React, { useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../routes";
import * as Animatable from "react-native-animatable";
export function BudgetPlanner() {
  const [amount, setAmount] = useState("");
  const navigation = useNavigation<StackTypes>();

  const addBudget = () => {
    if (amount) {
      const budget = {
        amount: parseFloat(amount),
      };
      setAmount("");
    }
  };

  return (
    <View className="flex-1 bg-teal-600">
      <Animatable.View animation="fadeInLeft" delay={500} className="mt-14 mb-8 pl-5">
        <Text className="text-white text-2xl font-bold">Agregar Presupuesto</Text>
      </Animatable.View>
      <Animatable.View animation="fadeInUp" className="bg-white rounded-tl-2xl rounded-tr-2xl p-5 flex-1">
    <View style="p-4">
      <TextInput
        placeholder="Cantidad"
        value={amount}
        onChangeText={(text) => setAmount(text)}
        keyboardType="numeric"
        style="border-b border-gray-400 mb-2 text-xl p-2"
      />
      <Button title="Agregar presupuesto" onPress={addBudget} color="#38a69d" />
    </View>
    </Animatable.View>
    </View>
  );
}
