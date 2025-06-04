import { useState } from "react";
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Image as ExpoImage } from "expo-image";
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from "react-native-reanimated";
import SpinningCard from "./SpinningCard";

export default function FateMode({ onReset }) {
  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");
  const [intro, setIntro] = useState("");
  const [chosenFate, setChosenFate] = useState("");
  const [showResult, setShowResult] = useState(false);

  const glitterOpacity = useSharedValue(0);
  const glitterStyle = useAnimatedStyle(() => ({ opacity: glitterOpacity.value }));

  const showGlitterWithDelay = () => {
    glitterOpacity.value = withTiming(1, { duration: 2000 });
    setTimeout(() => {
      glitterOpacity.value = withTiming(0, { duration: 2500 });
    }, 1500);
  };

  const pickFate = () => {
    if (!optionOne || !optionTwo) {
      setIntro("The spirits need *both* options, darling.");
      return;
    }

    const options = [optionOne, optionTwo];
    const chosen = options[Math.floor(Math.random() * options.length)];
    const sassyIntros = [
      "The cosmos have spoken:",
      "The winds of fate whisper...",
      "Clearly, you already knew:",
      "Don't fight it... it's written:",
      "Your destiny is:",
    ];
    const chosenIntro = sassyIntros[Math.floor(Math.random() * sassyIntros.length)];

    showGlitterWithDelay();
    setIntro(chosenIntro);
    setChosenFate(chosen);
    setShowResult(true);
  };

  const resetFate = () => {
    setOptionOne("");
    setOptionTwo("");
    setIntro("");
    setChosenFate("");
    setShowResult(false);
    onReset();
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[StyleSheet.absoluteFill, glitterStyle]}>
        <ExpoImage
          source={require("./../../assets/glitter.gif")}
          contentFit="cover"
          style={StyleSheet.absoluteFill}
        />
      </Animated.View>

      {!showResult ? (
        <View style={styles.askContainer}>
          <TextInput style={styles.input} placeholder="Option One" placeholderTextColor="#ccc" value={optionOne} onChangeText={setOptionOne} />
          <TextInput style={styles.input} placeholder="Option Two" placeholderTextColor="#ccc" value={optionTwo} onChangeText={setOptionTwo} />
          <TouchableOpacity style={styles.button} onPress={pickFate}>
            <Text style={styles.buttonText}>Divine My Fate</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <>
          <SpinningCard intro={intro} chosenFate={chosenFate} trigger={showResult} />
          <TouchableOpacity style={styles.button} onPress={resetFate}>
            <Text style={styles.buttonText}>Ask Again</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  askContainer: { alignItems: "center", marginTop: 200 },
  input: {
    backgroundColor: "#222",
    color: "#fff",
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: "60%",
    alignSelf: "center",
  },
  button: {
    backgroundColor: "#E274E1",
    padding: 15,
    borderRadius: 10,
    width: 200,
    alignSelf: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  buttonText: { color: "#fff", fontSize: 16 },
});
