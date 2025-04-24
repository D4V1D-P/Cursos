import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from './Firebase';
 
export default function RecuperarSenha({ navigation }) {
  const [email, setEmail] = useState('');
 
  const handleResetPassword = async () => {
    try {
      await sendPasswordResetEmail(auth, email);
      Alert.alert(
        "Email enviado!",
        "Um link para redefinição de senha foi enviado para o seu email."
      );
      navigation.goBack();
    } catch (error) {
      console.log(error);
      Alert.alert("Erro", "Não foi possível enviar o email. Verifique o endereço.");
    }
  };
 
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Redefinir Senha</Text>
      <TextInput
        placeholder="Digite seu e-mail"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholderTextColor="#999"
      />
      <TouchableOpacity style={styles.botao} onPress={handleResetPassword}>
        <Text style={styles.textoBotao}>Enviar e-mail de redefinição</Text>
      </TouchableOpacity>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#4f7afb',
    textAlign: 'center'
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    color: '#000'
  },
  botao: {
    backgroundColor: '#4f7afb',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center'
  },
  textoBotao: {
    color: '#fff',
    fontWeight: 'bold'
  }
});