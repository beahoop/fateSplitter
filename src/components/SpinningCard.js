import { useEffect, useState } from "react";
import { View, Image, Text } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate,
  runOnJS,
  Easing,
} from "react-native-reanimated";
import styles, { cardWidth, cardHeight } from "../styles/SpinningCard.styles.js";

export default function SpinningCard({ intro, chosenFate, trigger }) {
  const rotation = useSharedValue(0);
  const [flipped, setFlipped] = useState(false);

  useEffect(() => {
    if (trigger) {
      rotation.value = 0;
      setFlipped(false);
      rotation.value = withTiming(
        180,
        { duration: 1000, easing: Easing.inOut(Easing.ease) },
        () => {
          runOnJS(setFlipped)(true);
        }
      );
    }
  }, [trigger]);

  const frontStyle = useAnimatedStyle(() => {
    const rotateY = interpolate(rotation.value, [0, 180], [0, 180]);
    return {
      transform: [{ perspective: 1500 }, { rotateY: `${rotateY}deg` }],
      backfaceVisibility: "hidden",
      opacity: rotation.value < 90 ? 1 : 0,
    };
  });

  const backStyle = useAnimatedStyle(() => {
    const rotateY = interpolate(rotation.value, [0, 180], [180, 360]);
    return {
      transform: [{ perspective: 1500 }, { rotateY: `${rotateY}deg` }],
      backfaceVisibility: "hidden",
      opacity: rotation.value >= 90 ? 1 : 0,
      position: "absolute",
      width: cardWidth,
      height: cardHeight,
      justifyContent: "center",
      alignItems: "center",
    };
  });

  return (
    <View style={styles.cardBox}>
      <Animated.View style={[styles.card, frontStyle]}>
        <Image
          source={require("./../../assets/frontofcard.png")}
          style={styles.frontImage}
        />
      </Animated.View>
      <Animated.View style={[styles.card, backStyle]}>
        <Image
          source={require("./../../assets/backofcard.png")}
          style={styles.frontImage}
        />
        <Text style={styles.introText}>{intro}</Text>
        <Text style={styles.chosenFateText}>{chosenFate}</Text>
      </Animated.View>
    </View>
  );
}