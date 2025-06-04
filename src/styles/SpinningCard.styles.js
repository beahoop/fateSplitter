import { StyleSheet } from "react-native";


export const cardHeight = 400;
export const cardWidth = 290;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    width: "100%",
    height: 500,

  },
  card: {
    width: cardWidth,
    height: cardHeight,
    justifyContent: "center",
    alignItems: "center",
    backfaceVisibility: "hidden",
  },
  frontImage: {
    width: cardWidth - 10,
    height: cardHeight + 20,
  },
  introText: {
    position: "absolute",
    fontFamily: "Savoye LET",
    top: "35%",
    left: "15%",
    color: "#fff",
    fontSize: 36,
    width: 200,
  },
  chosenFateText: {
    position: "absolute",
    fontFamily: "Savoye LET",
    top: "55%",
    left: "15%",
    color: "#fff",
    fontSize: 36,
    width: 200,
  },
});
export default styles;