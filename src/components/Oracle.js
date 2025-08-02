import { useState } from "react";
import {
  TextInput,
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
} from "react-native";
import { Image as ExpoImage } from "expo-image";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import styles from "../styles/Oracle.styles.js";
import buttonStyles from "../styles/Button.styles";
import { responses } from "../responses.js"; 
import BackButton from "./BackButton.js";


export default function Oracle({
  onReset,
  question,
  setQuestion,
  triggerGlitter,
}) {
  const [answer, setAnswer] = useState(null);
  const opacity = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  const askOracle = () => {
    const random = responses[Math.floor(Math.random() * responses.length)];
    setAnswer(random);
    opacity.value = 0;
    opacity.value = withTiming(1, { duration: 1000 });

    triggerGlitter?.();
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ExpoImage
          source={require("./../../assets/orcale.png")}
          contentFit="contain"
          style={styles.image}
        />
        {answer && (
          <Animated.Text style={[styles.answer, animatedStyle]}>
            {answer}
          </Animated.Text>
        )}
      </View>

      <TextInput
        style={styles.input}
        placeholder="Ask your question..."
        placeholderTextColor="#ccc"
        value={question}
        onChangeText={setQuestion}
      />

      <TouchableOpacity style={buttonStyles.button} onPress={askOracle}>
        <Text style={buttonStyles.buttonText}>Reveal the Oracle</Text>
      </TouchableOpacity>

      <BackButton onReset={onReset} />
    </View>
  );
}
