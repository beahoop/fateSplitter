import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;
const screenHeight = Dimensions.get("window").height;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "black" },
  scrollContainer: { flexGrow: 1 },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  content: { flex: 1 },
  logo: {
    width: screenWidth > 400 ? Math.min(350, screenWidth * 0.8) : screenWidth * 0.85,
    height: screenHeight > 700 ? Math.min(350, screenHeight * 0.4) : screenHeight * 0.35,
    alignSelf: "center",
    marginVertical: 20,
    maxWidth: 400,
    maxHeight: 400,
  },
});


export default styles;
