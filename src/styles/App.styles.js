import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "black" },
  scrollContainer: { flexGrow: 1 },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  content: { flex: 1 },
  buttonGroup: { marginTop: 50 },
  button: {
    backgroundColor: "#E274E1",
    padding: 15,
    borderRadius: 10,
    width: 200,
    alignSelf: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  buttonText: { color: "#fff", fontSize: 16 },
  logo: {
    width: 400,
    height: 400,
    alignSelf: "center",
    marginVertical: 20,
  },
});

export default styles;
