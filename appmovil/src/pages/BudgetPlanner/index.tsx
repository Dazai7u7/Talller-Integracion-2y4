import React, { useState } from "react";
import { View, Text, TextInput, Button, Modal, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../routes";
import * as Animatable from "react-native-animatable";
import { Picker } from '@react-native-picker/picker';

export function BudgetPlanner() {
  const [amount, setAmount] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState("January");
  const [selectedDay, setSelectedDay] = useState(1);
  const [budgetList, setBudgetList] = useState([]);

  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
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
      setBudgetList([...budgetList, budget]);
      setModalVisible(false);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#38a69d" }}>
      <Animatable.View animation="fadeInLeft" delay={500} style={{ marginTop: 14, marginBottom: 4, paddingLeft: 5 }}>
        <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>Agregar Presupuesto</Text>
      </Animatable.View>
      <Animatable.View animation="fadeInUp" style={{ backgroundColor: "white", borderTopLeftRadius: 20, borderTopRightRadius: 20, padding: 5, flex: 1 }}>
      <FlatList
        data={budgetList}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ backgroundColor: "white", padding: 5, marginBottom: 2, borderRadius: 10 }}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Mes: {item.month}, Día: {item.day}, Cantidad: {item.amount}
            </Text>
          </View>
        )}
      />

      <Animatable.View animation="fadeInUp" style={{ padding: 0 }}>
        <Button title="Agregar presupuesto" onPress={() => setModalVisible(true)} color="#38a69d" />
      </Animatable.View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 20 }}>
              Agregar Presupuesto
            </Text>
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
              style={{ borderBottomWidth: 1, borderColor: 'gray', marginBottom: 20, fontSize: 20, padding: 2 }}
            />
            <Button title="Guardar" onPress={addBudget} />
            <Button title="Cancelar" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
      </Animatable.View>
    </View>
  );
}
