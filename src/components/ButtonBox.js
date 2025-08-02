import { View } from "react-native";
import themeStyles from "../styles/Theme.styles";

export default function ButtonBox({ children }) {
  return (
    <View style={themeStyles.buttonBox}>
      {children}
    </View>
  );
}