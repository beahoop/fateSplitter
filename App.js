import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView, 
  ScrollView, 
  Platform
} from 'react-native';
import { Image } from 'expo-image'; // This supports animated gifs!

export default function App() {
  const [optionOne, setOptionOne] = useState('');
  const [optionTwo, setOptionTwo] = useState('');
  const [result, setResult] = useState('');
  const [showResult, setShowResult] = useState(false);


  const pickFate = () => {
     if (!optionOne || !optionTwo) {
      setResult("The spirits need *both* options, darling.");
      return;
    }
     const options = [optionOne, optionTwo];
    const chosen = options[Math.floor(Math.random() * options.length)];
    console.log(`Chosen option: ${chosen}`);
    const sassyIntros = [
      "The cosmos have spoken:",
      "The winds of fate whisper...",
      "Clearly, you already knew:",
      "Don't fight it — it's written:",
      "Your destiny is:"
    ];
    const intro = sassyIntros[Math.floor(Math.random() * sassyIntros.length)];
    setResult(`${intro} ${chosen}`);
    setShowResult(true);
  };

  const reset = () => {
    setOptionOne('');
    setOptionTwo('');
    setResult('');
    setShowResult(false);
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
       <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
   <Image
        source={require('./assets/background.jpg')}
        contentFit="cover"
        style={StyleSheet.absoluteFill}
      />
  <View style={styles.overlay} />
  
      <View style={styles.content}>
          <View style={styles.logoContainer}>
    <Image
      source={require('./assets/logo.png')}
      style={styles.logo}
      contentFit="contain"
    />
  </View> 
        {!showResult && (
          <>
            
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
            <TouchableOpacity style={styles.button} onPress={pickFate}>
              <Text style={styles.buttonText}>Divine My Fate</Text>
            </TouchableOpacity>
          </>
        )}

        {showResult && (
          <>
            <Text style={styles.resultText}>🌟 {result} 🌟</Text>
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
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: 'black', // Visible through transparent gif
  },

  scrollContainer: {
  flexGrow: 1,
},
  
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.6)', // Optional: dim gif for readability
  },
  content: {
    flex: 1,
  },

  input: {
    backgroundColor: '#222',
    color: '#fff',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    width: '60%',
    alignSelf: 'center',
  },
  button: {
    backgroundColor: '#E274E1',
    padding: 15,
    borderRadius: 10,
    width: '40%',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  resultText: {
    fontSize: 24,
    color: '#ffd700',
    textAlign: 'center',
    marginTop: 30,
  },

  logoContainer: {
  alignItems: 'center',
  marginTop: 50,
  },

  logo: {
    width: 400,
    height: 400,
    maxWidth: '80%',
    maxHeight: '80%',
  },
});
