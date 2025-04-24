import React, { useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
 
import { Checkbox } from "react-native-paper";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./Firebase";
 
 
 
export default function Login({ navigation }) {
  const [checked, setChecked] = useState(false);
 
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");
 
  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, senha);
      navigation.replace("MainTabs");
    } catch (err) {
      setError(err + "erro ao fazer o login . verifique suas credenciais");
      alert("Erro ao fazer o login. Verifique suas credenciais.");
    }
  };
 
  return (
    <SafeAreaView style={estilo.container}>
 
      <View style={estilo.areaInput}>
        <Text style={estilo.textoLabel}>E-mail:</Text>
        <TextInput
          style={estilo.textoinput}
          placeholderTextColor={"#5a5a5a"}
          placeholder="Digite seu email"
          onChangeText={setEmail}
          value={email}
        />
      </View>
 
      <View style={estilo.areaInput}>
        <Text style={estilo.textoLabel}>Senha:</Text>
        <TextInput
          style={estilo.textoinput}
          placeholderTextColor={"#5a5a5a"}
          placeholder="Digite sua senha"
          onChangeText={setSenha}
          value={senha}
          secureTextEntry={true}
        />
      </View>
 
      <View style={{ display: "flex"}}>
        <View style={estilo.esqueceuSenha}>
          {/* <View style={{display: "flex", gap: 5, flexDirection: "row", alignItems: "center"}}>
            <Checkbox
              status={checked ? "checked" : "unchecked"}
              onPress={() => {
                setChecked(!checked);
              }}
            />
              <Text style={{ color: "#4f7afb", fontSize: 12 }}>
                Lembrar usuário
              </Text>
          </View> */}
 
          <TouchableOpacity
            onPress={() => navigation.navigate("RecuperarSenha")}
          >
            <Text
              style={{
                color: "#4f7afb",
                fontSize: 12,
                textDecorationColor: "#4f7afb",
              }}
            >
              Esqueci minha senha
            </Text>
          </TouchableOpacity>
        </View>
      </View>
 
      <TouchableOpacity style={estilo.button} onPress={login}>
        {error ? <Text style={estilo.error}>{error}</Text> : null}
        <Text style={estilo.buttonText}>Acessar</Text>
      </TouchableOpacity>
 
      <TouchableOpacity onPress={() => navigation.navigate("Cadastro")}><Text style={{ color: "#4f7afb", fontSize: 12, textDecorationLine: "underline" }}>Não tem conta? (Criar usuário)</Text></TouchableOpacity>
    </SafeAreaView>
  );
}
 
const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    paddingHorizontal: 60,
  },
  lembrarUser: {
    width: "100%",
    display: "flex",
    gap: 5,
    flexDirection: "row",
    alignItems: "center",
    marginLeft: -8,
  },
  esqueceuSenha: {
    width: "100%",
    display: "flex",
    gap: 5,
    flexDirection: "row",
    marginLeft: -8,
  },
  titulo: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center",
    color: "#f29100",
  },
  areaInput: {
    width: "100%",
    position: "relative",
  },
  logo: {
    width: "50%",
    height: 100,
  },
  imgLogo: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  textoLabel: {
    color: "#5a5a5a",
    fontSize: 12,
    backgroundColor: "#fff",
    position: "absolute",
    top: -10,
    left: 15,
    zIndex: 1,
    paddingHorizontal: 5,
    paddingVertical: 2,
    fontWeight: "700",
  },
  textoinput: {
    height: 47,
    border: 1,
    borderColor: "rgba(0, 0, 0, 0.32)",
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    color: "#000",
  },
  button: {
    width: "100%",
    height: 40,
    backgroundColor: "#4f7afb",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "700",
  },
  error: {
    color: "red",
  },
});