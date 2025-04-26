import React, { useEffect } from "react";
import { useState } from "react";
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";
import { auth } from "./Firebase";

import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Editarperfil() {
  const [userData, setUserData] = useState(null);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");

  const db = getFirestore();

  const navigation = useNavigation();
  
  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      console.log(user);
        if (user) {
            const docRef = doc(db, "users", user.uid);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                const data = docSnap.data();
                setUserData(data);
                setNome(data.nome || '');
                setEmail(user.email || '');
                setTelefone(data.telefone || '');
            }
        }
    };
    fetchUserData();
}, []);

  const handleSave = async () => {
    try {
      const user = auth.currentUser;
      if (user) {
        const docRef = doc(db, "users", user.uid);
        await updateDoc(docRef, { nome, email, telefone });
        alert("Sucesso, Dados atualizados com sucesso.");
        navigation.replace("MainTabs");
      }
    } catch (error) {
      console.log(error);
      alert("Erro, Não foi possível atualizar os dados.");
    }
  };

  return (
    <SafeAreaView style={estilo.container}>
      <Text style={estilo.titulo}>Editar Perfil</Text>

      <View style={estilo.areaInput}>
        <Text style={estilo.textoLabel}>Nome:</Text>
        <TextInput
          style={estilo.textoinput}
          placeholderTextColor={"#5a5a5a"}
          placeholder="Digite seu nome atualizado"
          value={nome}
          onChangeText={setNome}
        />
      </View>

      <View style={estilo.areaInput}>
        <Text style={estilo.textoLabel}>E-mail:</Text>
        <TextInput
          style={estilo.textoinput}
          placeholderTextColor={"#5a5a5a"}
          placeholder="Digite seu email atualizado"
          value={email}
          onChangeText={setEmail}
          
        />
      </View>
      <View style={estilo.areaInput}>
        <Text style={estilo.textoLabel}>Telefone:</Text>
        <TextInput
          style={estilo.textoinput}
          textContentType="telephoneNumber"
          keyboardType="phone-pad"
          placeholderTextColor={"#5a5a5a"}
          placeholder="Digite seu telefone atualizado"
          value={telefone}
          onChangeText={setTelefone}
        />
      </View>

      <TouchableOpacity style={estilo.button} onPress={handleSave}>
        <Text style={estilo.buttonText}>Atualizar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={estilo.button} onPress={() => navigation.navigate("MainTabs")}>
        <Text style={estilo.buttonText}>Cancelar</Text>
      </TouchableOpacity>
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
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: -8,
  },
  titulo: {
    fontSize: 25,
    fontWeight: "500",
    textAlign: "center",
    color: "#000",
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
