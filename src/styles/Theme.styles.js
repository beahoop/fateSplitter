import { StyleSheet, Dimensions } from "react-native";

const screenWidth = Dimensions.get("window").width;

const themeStyles = StyleSheet.create({
  contentBox: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    minHeight: 500,
    paddingHorizontal: 20,
    position: "relative",
    // Optional: backgroundColor: "#fff",
  },
  cardBox: {
    width: screenWidth > 400 ? 350 : "90%",
    minHeight: 420,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
  logoBox: {
    width: "95%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1,
  },
  buttonBox: {
    width: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: 30,
    zIndex: 3,
    // Optional: paddingBottom: 20,
  },
});

export default themeStyles;