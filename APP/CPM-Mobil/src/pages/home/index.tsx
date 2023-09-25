import React, { useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackTypes } from "../../routes";
import Modal from "react-native-modal"; // Importa Modal desde react-native-modal
import * as Animatable from "react-native-animatable";

export function Home() {
  const navigation = useNavigation<StackTypes>();
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Inicio</Text>

      <View style={styles.collectionContainer}>
        <TouchableOpacity style={styles.collectionItem}
         onPress={() => navigation.navigate("ExpenseTracker")}>
          <Image
            source={{
              uri:
                "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg",
            }}
            style={styles.collectionImage}
          />
          <Text style={styles.collectionTitle}>Registrar Gastos</Text>
          <Text style={styles.collectionDescription}>
            Aquí podrás registrar tus gastos
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.collectionItem}
        onPress={() => navigation.navigate("BudgetPlanner")}>
          <Image
            source={{
              uri:
                "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg",
            }}
            style={styles.collectionImage}
          />
          <Text style={styles.collectionTitle}>Agregar Presupuesto</Text>
          <Text style={styles.collectionDescription}>
            Aquí podrás agregar tu presupuesto para el ahorro
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.collectionItem}
        onPress={() => navigation.navigate("FinancialAnalysis")}> 
          <Image
            source={{
              uri:
                "https://tailwindui.com/img/ecommerce-images/home-page-02-edition-03.jpg",
            }}
            style={styles.collectionImage}
          />
          <Text style={styles.collectionTitle}>Analizar Mis Gastos</Text>
          <Text style={styles.collectionDescription}>
            Aquí podrás ver un análisis de tus gastos
          </Text>
        </TouchableOpacity>
      </View>

      {/* Botón para abrir el panel desplegable */}
      <TouchableOpacity style={styles.button} onPress={toggleModal}>
        <Text style={styles.buttonText}>Abrir Panel</Text>
      </TouchableOpacity>

      {/* Panel desplegable */}
      <Modal isVisible={isModalVisible} animationIn="slideInRight" animationOut="slideOutRight">
        <View style={styles.modalContent}>
          {/* Tu código HTML y CSS aquí */}
          <h2 class="text-base font-semibold leading-6 text-gray-900">Panel title</h2>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 16,
  },
  collectionContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  collectionItem: {
    width: "30%",
    marginBottom: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    overflow: "hidden",
  },
  collectionImage: {
    width: "100%",
    height: 200,
  },
  collectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    padding: 8,
  },
  collectionDescription: {
    fontSize: 12,
    color: "#888",
    padding: 8,
  },
  button: {
    alignSelf: "center",
    backgroundColor: "#007AFF",
    padding: 10,
    borderRadius: 5,
    marginTop: 16,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: 16,
    borderRadius: 8,
  },
});


