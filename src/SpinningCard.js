import { useEffect, useState } from "react";
import { StyleSheet, View, Image, Text } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  interpolate,
  runOnJS,
  Easing,
} from "react-native-reanimated";

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
    <View style={styles.container}>
      <Animated.View style={[styles.card, frontStyle]}>
        <Image
          source={require("../assets/frontofcard.png")}
          style={styles.frontImage}
        />
      </Animated.View>
      <Animated.View style={[styles.card, backStyle]}>
        <Image
          source={require("../assets/backofcard.png")}
          style={styles.frontImage}
        />
        <Text style={styles.introText}>{intro}</Text>
        <Text style={styles.chosenFateText}>{chosenFate}</Text>
      </Animated.View>
    </View>
  );
}

const cardHeight = 400;
const cardWidth = 290;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
    width: "100%",
    height: 500,

  },
  card: {
    width: cardWidth,
    height: cardHeight,
    justifyContent: "center",
    alignItems: "center",
    backfaceVisibility: "hidden",
  },
  frontImage: {
    width: cardWidth - 10,
    height: cardHeight + 20,
  },
  introText: {
    position: "absolute",
    fontFamily: "Savoye LET",
    top: "35%",
    left: "15%",
    color: "#fff",
    fontSize: 36,
    width: 200,
  },
  chosenFateText: {
    position: "absolute",
    fontFamily: "Savoye LET",
    top: "55%",
    left: "15%",
    color: "#fff",
    fontSize: 36,
    width: 200,
  },
});
