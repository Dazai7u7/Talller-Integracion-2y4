import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#008080", // Color de fondo teal-600
  },
  headerContainer: {
    marginTop: 14,
    marginBottom: 8,
    paddingLeft: 5,
  },
  headerText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },
  cardContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  card: {
    flex: 1,
    alignItems: "center",
  },
  cardButton: {
    backgroundColor: "#008080", // Color de fondo teal-600
    borderRadius: 8,
    paddingVertical: 20,
    paddingHorizontal: 16,
    marginBottom: 16,
    width: "80%",
    alignItems: "center",
  },
  cardButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
