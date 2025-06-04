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

const responses = [
  "Yes, absolutely.",
  "The signs point to no.",
  "It’s unclear, ask again later.",
  "Without a doubt.",
  "My sources say no.",
  "Possibly… if you believe.",
  "The universe says maybe.",
  "Definitely not today.",
  "Yes, but tread carefully.",
  "You already know the answer.",
];

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

      <TouchableOpacity style={styles.button} onPress={askOracle}>
        <Text style={styles.buttonText}>Reveal the Oracle</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={onReset}>
        <Text style={styles.buttonText}>Ask Another</Text>
      </TouchableOpacity>
    </View>
  );
}
