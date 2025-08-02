import { StyleSheet } from "react-native";

const coinSize = 200;
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 60,
    height: 400,
  },
  coin: {
    width: coinSize,
    height: coinSize,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: coinSize - 10,
    height: coinSize - 10,
  },
  label: {
    color: "#fff",
    fontSize: 32,
    fontFamily: "Savoye LET",
    marginTop: 20,
  },
});

export default styles;