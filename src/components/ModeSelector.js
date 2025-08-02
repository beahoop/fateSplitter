import { Pressable, Text, View } from "react-native";
import buttonStyles from "../styles/Button.styles";

export default function ModeSelector({ setMode }) {
  return (
    <View style={buttonStyles.buttonGroup}>
      <Pressable style={buttonStyles.button} onPress={() => setMode("fate")}>
        <Text style={buttonStyles.buttonText}>Divine My Fate</Text>
      </Pressable>
      <Pressable style={buttonStyles.button} onPress={() => setMode("coin")}>
        <Text style={buttonStyles.buttonText}>Coin Flip</Text>
      </Pressable>
      <Pressable style={buttonStyles.button} onPress={() => setMode("oracle")}>
        <Text style={buttonStyles.buttonText}>Ask the Oracle</Text>
      </Pressable>
    </View>
  );
}