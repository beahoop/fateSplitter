import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import { Image as ExpoImage } from "expo-image";
import SpinningCard from "./SpinningCard";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

export default function App() {
  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");
  const [intro, setIntro] = useState("");
  const [chosenFate, setChosenFate] = useState("");
  const [showResult, setShowResult] = useState(false);


  const glitterOpacity = useSharedValue(0);

  const glitterStyle = useAnimatedStyle(() => ({
    opacity: glitterOpacity.value,
  }));

  const pickFate = () => {
    if (!optionOne || !optionTwo) {
      setIntro("The spirits need *both* options, darling.");
      return;
    }

    // Fade in the glitter
    glitterOpacity.value = withTiming(1, { duration: 3000 });

    // After glitter appears, fade it out and show result
    setTimeout(() => {
      glitterOpacity.value = withTiming(0, { duration: 3500 });

      const options = [optionOne, optionTwo];
      const chosen = options[Math.floor(Math.random() * options.length)];
      const sassyIntros = [
        "The cosmos have spoken:",
        "The winds of fate whisper...",
        "Clearly, you already knew:",
        "Don't fight it... it's written:",
        "Your destiny is:",
      ];
      const chosenIntro =
        sassyIntros[Math.floor(Math.random() * sassyIntros.length)];
      setIntro(chosenIntro);
      setChosenFate(chosen);
      setShowResult(true);
    }, 1000);
  };

  const reset = () => {
    setOptionOne("");
    setOptionTwo("");
    setIntro("");
    setShowResult(false);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
        {/* Background */}
        <ExpoImage
          source={require("../assets/background.jpg")}
          contentFit="cover"
          style={StyleSheet.absoluteFill}
        />

        {/* 🌫️ Animated Glitter Layer */}
        <Animated.View style={[StyleSheet.absoluteFill, glitterStyle]}>
          <ExpoImage
            source={require("../assets/fog.gif")}
            contentFit="cover"
            style={StyleSheet.absoluteFill}
          />
        </Animated.View>

        {/* Dark overlay*/}
        <View style={styles.overlay} />

        {/* Logo */}
        <View style={styles.content}>
          {!showResult && (
            <View style={styles.logoContainer}>
              <ExpoImage
                source={require("../assets/logo.png")}
                style={styles.logo}
                contentFit="contain"
              />
            </View>
          )}
          {/* Input Fields and Button */}
          {!showResult && (
            <>
              <TextInput
                style={styles.input}
                placeholder="Option One"
                placeholderTextColor="#ccc"
                value={optionOne}
                onChangeText={setOptionOne}
                maxLength={100}
              />
              <TextInput
                style={styles.input}
                placeholder="Option Two"
                placeholderTextColor="#ccc"
                value={optionTwo}
                onChangeText={setOptionTwo}
                maxLength={100}
              />
              <TouchableOpacity style={styles.button} onPress={pickFate}>
                <Text style={styles.buttonText}>Divine My Fate</Text>
              </TouchableOpacity>
            </>
          )}

          {/* Result Display */}
          {showResult && (
            <>
              <SpinningCard
                intro={intro}
                chosenFate={chosenFate}
                trigger={showResult}
              />
              <TouchableOpacity style={styles.button} onPress={reset}>
                <Text style={styles.buttonText}>Ask Again</Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  scrollContainer: {
    flexGrow: 1,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  content: {
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
  button: {
    backgroundColor: "#E274E1",
    padding: 15,
    borderRadius: 10,
    width: "40%",
    alignSelf: "center",
    alignItems: "center",
    marginTop: 50,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 50,
  },
  logo: {
    width: 300,
    height: 300,
    maxWidth: "80%",
    maxHeight: "80%",
  },
});
