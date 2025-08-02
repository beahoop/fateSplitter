import { useState } from "react";
import { TextInput, Text, Pressable, View } from "react-native";
import SpinningCard from "./SpinningCard";
import BackButton from "./BackButton";
import buttonStyles from "../styles/Button.styles";
import styles from "../styles/SpinningCard.styles";

export default function FateMode({ onReset, triggerGlitter }) {
  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");
  const [intro, setIntro] = useState("");
  const [chosenFate, setChosenFate] = useState("");
  const [showResult, setShowResult] = useState(false);

  const pickFate = () => {
    if (!optionOne || !optionTwo) {
      setIntro("The spirits need *both* options, darling.");
      setChosenFate("");
      setShowResult(true);
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
    triggerGlitter?.();
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
    <>
      {!showResult ? (
        <View style={styles.cardBox}>
          <TextInput
            style={styles.input}
            placeholder="Option One"
            placeholderTextColor="#ccc"
            value={optionOne}
            onChangeText={setOptionOne}
          />
          <TextInput
            style={styles.input}
            placeholder="Option Two"
            placeholderTextColor="#ccc"
            value={optionTwo}
            onChangeText={setOptionTwo}
          />
        </View>
      ) : (
        <SpinningCard intro={intro} chosenFate={chosenFate} trigger={showResult} />
      )}

      <Pressable style={buttonStyles.button} onPress={showResult ? resetFate : pickFate}>
        <Text style={buttonStyles.buttonText}>{showResult ? "Ask Again" : "Divine My Fate"}</Text>
      </Pressable>
      <BackButton onReset={resetFate} />
    </>
  );
}