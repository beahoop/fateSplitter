import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: { alignItems: "center", marginTop: 60 },
  input: {
    backgroundColor: "#222",
    color: "#fff",
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: "80%",
    alignSelf: "center",
  },
  imageContainer: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    width: 300,
    height: 300,
    marginVertical: 20,
  },
  image: {
    position: "absolute",
    width: "100%",
    height: "100%",
    opacity: 0.5,
  },
  answer: {
    color: "#fff",
    fontSize: 28,
    fontFamily: "Savoye LET",
    textAlign: "center",
    paddingHorizontal: 20,
  },
});

export default styles;