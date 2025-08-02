import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
export const cardHeight = 400;
export const cardWidth = screenWidth > 350 ? 290 : screenWidth * 0.8;

const styles = StyleSheet.create({
  // Used for SpinningCard and FateMode card area
  cardBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    minHeight: 420,
  },
  card: {
    width: cardWidth,
    height: cardHeight,
    justifyContent: "center",
    alignItems: "center",
    backfaceVisibility: "hidden",
    position: "relative",
  },
  frontImage: {
    width: cardWidth - 10,
    height: cardHeight + 20,
    borderRadius: 18,
  },
  introText: {
    position: "absolute",
    fontFamily: "Savoye LET",
    top: "35%",
    left: "15%",
    color: "#fff",
    fontSize: 36,
    width: 200,
    textAlign: "center",
  },
  chosenFateText: {
    position: "absolute",
    fontFamily: "Savoye LET",
    top: "55%",
    left: "15%",
    color: "#fff",
    fontSize: 36,
    width: 200,
    textAlign: "center",
  },
  // FateMode input area
  askContainer: {
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    paddingVertical: 20,
    paddingTop: 40,
    minHeight: 420,
    flex: 1,
  },
  input: {
    backgroundColor: "#222",
    color: "#fff",
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: "60%",
    alignSelf: "center",
  },
  // Glitter overlay
  glitterOverlay: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 2,
    pointerEvents: "none",
  },
  glitterImage: {
    width: "100%",
    height: "100%",
  },
});

export default styles;