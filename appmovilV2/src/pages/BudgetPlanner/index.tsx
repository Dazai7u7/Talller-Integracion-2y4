import React, { useState } from "react";
import { View, Text, TextInput, Button, Modal, Pressable, FlatList, ScrollView } from "react-native";
import { Picker } from '@react-native-picker/picker';
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../routes";
import * as Animatable from "react-native-animatable";

export function BudgetPlanner() {
  const [amount, setAmount] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState("January");
  const [selectedDay, setSelectedDay] = useState(1);
  const [budgetList, setBudgetList] = useState([]); // Lista para almacenar los presupuestos

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  const navigation = useNavigation<StackTypes>();

  const addBudget = () => {
    if (amount) {
      const budget = {
        amount: parseFloat(amount),
        month: selectedMonth,
        day: selectedDay
      };
      setAmount("");
      setBudgetList([...budgetList, budget]); // Agregar el nuevo presupuesto a la lista
      setModalVisible(false);
    }
  };

  return (
    <View className="flex-1 bg-teal-600">
      <Animatable.View animation="fadeInLeft" delay={500} className="mt-14 mb-4 pl-5">
        <Text className="text-white text-2xl font-bold">Agregar Presupuesto</Text>
      </Animatable.View>
      <ScrollView className="bg-white flex-1 p-4">
        <FlatList
          data={budgetList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View className="bg-white p-5 mb-2 rounded-lg">
              <Text className="text-xl font-bold">
                Mes: {item.month}, Día: {item.day}, Cantidad: {item.amount}
              </Text>
            </View>
          )}
        />
      </ScrollView>
      <Animatable.View animation="fadeInUp" className="p-4">
        <TextInput
          placeholder="Cantidad"
          value={amount}
          onChangeText={(text) => setAmount(text)}
          keyboardType="numeric"
          style="border-b border-gray-400 mb-2 text-xl p-2"
        />
        <Button title="Agregar presupuesto" onPress={() => setModalVisible(true)} color="#38a69d" />
      </Animatable.View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <View className="flex-1 justify-center items-center">
          <View className="bg-white p-5 rounded-lg">
            <Text className="text-xl font-bold mb-2">Agregar Presupuesto</Text>
            <Picker
              selectedValue={selectedMonth}
              onValueChange={(itemValue) => setSelectedMonth(itemValue)}
            >
              {months.map((month) => (
                <Picker.Item label={month} value={month} key={month} />
              ))}
            </Picker>
            <Picker
              selectedValue={selectedDay}
              onValueChange={(itemValue) => setSelectedDay(itemValue)}
            >
              {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                <Picker.Item label={day.toString()} value={day} key={day} />
              ))}
            </Picker>
            <TextInput
              placeholder="Cantidad"
              value={amount}
              onChangeText={(text) => setAmount(text)}
              keyboardType="numeric"
              style="border-b border-gray-400 mb-2 text-xl p-2"
            />
            <Button title="Guardar" onPress={addBudget} />
            <Button title="Cancelar" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
}






