import { TouchableOpacity, Text, StyleSheet } from "react-native";
import buttonStyles from "../styles/Button.styles";
export default function BackButton({ onReset }) {
  return (
    <TouchableOpacity style={buttonStyles.button} onPress={onReset}>
      <Text style={buttonStyles.buttonText}>Back</Text>
    </TouchableOpacity>
  );
}

