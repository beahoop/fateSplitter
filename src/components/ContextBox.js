import { View } from "react-native";
import themeStyles from "../styles/Theme.styles";

export default function ContextBox({ children }) {
  return (
    <View style={themeStyles.cardBox}>
      {children}
    </View>
  );
}