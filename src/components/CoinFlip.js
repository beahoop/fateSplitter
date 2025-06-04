import { useEffect, useState } from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  runOnJS,
  Easing,
} from "react-native-reanimated";
import styles from "../styles/CoinFlip.styles.js";

export default function CoinFlip({ onReset, triggerGlitter }) {
  const rotation = useSharedValue(0);
  const [result, setResult] = useState(null);
  const [isSpinning, setIsSpinning] = useState(false);

  const flipCoin = () => {
    setIsSpinning(true);
    setResult(null);
    rotation.value = 0;

    const isHeads = Math.random() < 0.5;
    const chosen = isHeads ? "Heads" : "Tails";
    triggerGlitter?.();
    rotation.value = withTiming(
      1080, // 3 full flips
      { duration: 2000, easing: Easing.inOut(Easing.ease) },
      () => {
        runOnJS(setResult)(chosen);
        runOnJS(setIsSpinning)(false);
      }
    );
  };

  useEffect(() => {
    flipCoin();
  }, []);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ perspective: 1500 }, { rotateY: `${rotation.value}deg` }],
    };
  });

  const getResultImage = () => {
    if (isSpinning) return require("./../../assets/blank.png"); // show blank while spinning
    if (result === "Heads") return require("./../../assets/heads.png");
    if (result === "Tails") return require("./../../assets/tails.png");
    return null;
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.coin, animatedStyle]}>
        <Image
          source={getResultImage()}
          style={styles.image}
          resizeMode="contain"
        />
      </Animated.View>

      {result && (
        <>
          <Text style={styles.label}>{result}</Text>
          <TouchableOpacity style={styles.button} onPress={flipCoin}>
            <Text style={styles.buttonText}>Flip Again</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={onReset}>
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}
