import { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import { Image as ExpoImage } from "expo-image";
import { StatusBar } from "expo-status-bar";
import * as NavigationBar from "expo-navigation-bar";
import themeStyles from "./styles/Theme.styles";
import styles from "./styles/App.styles.js";
import FateMode from "./components/FateMode";
import CoinFlip from "./components/CoinFlip";
import Oracle from "./components/Oracle";
import Glitter from "./components/Glitter";
import ContextBox from "./components/ContextBox";
import ButtonBox from "./components/ButtonBox";
import ModeSelector from "./components/ModeSelector";

export default function App() {
  const [mode, setMode] = useState(null);
  const [question, setQuestion] = useState("");
  const glitterRef = useRef();

  const triggerGlitter = () => {
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
      <View style={{ flex: 1 }}>
        <ExpoImage
          source={require("../assets/background.jpg")}
          contentFit="cover"
          style={StyleSheet.absoluteFill}
        />
        <View style={styles.overlay} />
        <Glitter ref={glitterRef} />

        <View style={[themeStyles.contentBox, { flex: 1 }]}>
          <ContextBox>
            {!mode && (
              <ExpoImage
                source={require("../assets/logo.png")}
                style={styles.logo}
                contentFit="contain"
              />
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
          </ContextBox>

          <ButtonBox>
            {!mode && <ModeSelector setMode={setMode} />}
          </ButtonBox>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}