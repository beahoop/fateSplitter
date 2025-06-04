import { useRef, forwardRef, useImperativeHandle } from "react";
import { StyleSheet } from "react-native";
import { Image as ExpoImage } from "expo-image";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";

const Glitter = forwardRef((props, ref) => {
  const opacity = useSharedValue(0);

  const animatedStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  useImperativeHandle(ref, () => ({
    trigger: () => {
      opacity.value = withTiming(1, { duration: 2000 });
      setTimeout(() => {
        opacity.value = withTiming(0, { duration: 2500 });
      }, 1500);
    },
  }));

  return (
    <Animated.View
      style={[
        StyleSheet.absoluteFill,
        animatedStyle,
        { pointerEvents: "none" },
      ]}
    >
      <ExpoImage
        source={require("./../../assets/glitter.gif")}
        contentFit="cover"
        style={StyleSheet.absoluteFill}
      />
    </Animated.View>
  );
});

export default Glitter;
