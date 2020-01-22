import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  Alert,
} from 'react-native';

import logo from './imgs/logo.png';

const App = () => {
  function getPhrase() {
    const random_number = Math.floor(Math.random() * 5);

    const phrases = [];
    phrases.push('O senhor é meu pastor e nada me faltará');
    phrases.push('Aquele que habita no esconderijo do altíssimo, à sombra do onipotente descansará.');
    phrases.push('O ser humano pode fazer muitos planos; contudo, quem decide é Deus, o SENHOR.');
    phrases.push('Pois Tu tens sido o meu refúgio, uma fortaleza diante do meu inimigo.');
    phrases.push('Abres tua mão e sacias, de bom grado, todo ser vivo.');

    Alert.alert(phrases[random_number]);
  }

  return (
    <View style={styles.container}>
      <Image source={logo} />
      <TouchableOpacity onPress={getPhrase} style={styles.button}>
        <Text style={styles.label}>Nova frase</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#538530',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 20,
  },
  label: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default App;
