import { useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import { Image as ExpoImage } from "expo-image";
import styles from "./styles/App.styles.js";

import FateMode from "./components/FateMode";
import CoinFlip from "./components/CoinFlip";
import Oracle from "./components/Oracle";
import Glitter from "./components/Glitter";

export default function App() {
  const [mode, setMode] = useState(null);
  const [question, setQuestion] = useState("");
  const glitterRef = useRef();

  const triggerGlitter = () => {
    console.log("triggerGlitter called");
    glitterRef.current?.trigger();
  };

  const reset = () => {
    setMode(null);
    setQuestion("");
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
        <ExpoImage
          source={require("../assets/background.jpg")}
          contentFit="cover"
          style={StyleSheet.absoluteFill}
        />
        <View style={styles.overlay} />
        <Glitter ref={glitterRef} />
        <View style={styles.content}>
          {!mode && (
            <ExpoImage
              source={require("../assets/logo.png")}
              style={styles.logo}
              contentFit="contain"
            />
          )}

          {!mode && (
            <View style={styles.buttonGroup}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => setMode("fate")}
              >
                <Text style={styles.buttonText}>Divine My Fate</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => setMode("coin")}
              >
                <Text style={styles.buttonText}>Coin Flip</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.button}
                onPress={() => setMode("oracle")}
              >
                <Text style={styles.buttonText}>Ask the Oracle</Text>
              </TouchableOpacity>
            </View>
          )}

          {mode === "fate" && (
            <FateMode onReset={reset} triggerGlitter={triggerGlitter} />
          )}
          {mode === "coin" && (
            <CoinFlip onReset={reset} triggerGlitter={triggerGlitter} />
          )}
          {mode === "oracle" && (
            <Oracle
              onReset={reset}
              question={question}
              setQuestion={setQuestion}
              triggerGlitter={triggerGlitter}
            />
          )}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
