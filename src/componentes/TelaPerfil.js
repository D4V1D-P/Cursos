import React, { useEffect } from "react";
import { useState } from "react";
import * as ImagePicker from "expo-image-picker";
import {
  Text,
  StyleSheet,
  SafeAreaView,
  View,
  TouchableOpacity,
  Image
} from "react-native";

import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

import { signOut } from "firebase/auth";
import { auth } from "./Firebase";
import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from "@react-navigation/native";
import { getFirestore, doc, getDoc, updateDoc } from "firebase/firestore";

export default function TelaPerfil() {
  const [userData, setUserData] = useState({ photoURL: "" });
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const navigation = useNavigation();

  const db = getFirestore();

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setUserData(data);
          setNome(data.nome || "");
          setTelefone(data.telefone || "");
          setEmail(user.email || "");
        }
      }
    };
    fetchUserData();
  }, []);

  const HandleLogout = async () => {
    try {
      await signOut(auth);
      navigation.replace("Login");
      console.log("Logout realizado com sucesso!");
    } catch (error) {
      console.log(error);
    }
  };

  const pickImageAndUpload = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        quality: 1,
        base64: true,
      });
   
      if (!result.canceled) {
        const base64Img = `data:image/jpg;base64,${result.assets[0].base64}`;
   
        const formData = new FormData();
        formData.append("file", base64Img);
        formData.append("upload_preset", "ml_default"); // seu preset
        formData.append("cloud_name", "dxevrm6zj"); // seu cloud_name
   
        const res = await fetch("https://api.cloudinary.com/v1_1/dxevrm6zj/image/upload", {
          method: "POST",
          body: formData,
        });
   
        const json = await res.json();
        console.log("Resposta Cloudinary: ", json);
   
        if (json.secure_url) {
          const user = auth.currentUser;
          await updateDoc(doc(db, "users", user.uid), {
            photoURL: json.secure_url,
          });
   
          setUserData((prev) => ({ ...prev, photoURL: json.secure_url }));
          alert("Sucesso! Foto de perfil atualizada.");
        } else {
          alert("Erro: Não foi possível obter a URL da imagem.");
        }
      }
    } catch (error) {
      console.error("Erro no upload da imagem:", error);
      alert("Erro no upload da imagem.");
    }
  };

  return (
    <SafeAreaView style={estilo.container}>
      <View
        style={{
          display: "flex",
          gap: 20,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {userData.photoURL ? (
          <Image
            source={{ uri: userData.photoURL }}
            style={estilo.fotoUser}
          />
        ) : (
          <Text style={estilo.info}>Nenhuma foto cadastrada.</Text>
        )}

        <TouchableOpacity onPress={pickImageAndUpload}>
          <Text>Editar foto de perfil</Text>
        </TouchableOpacity>
        <Text style={estilo.titulo}> {nome} </Text>
      </View>

      <View style={estilo.config}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 15,
            borderBottomColor: "#CACACA45",
            borderBottomWidth: 1,
            width: "100%",
            paddingBottom: 21,
          }}
        >
          <View>
            <Icon name="user" size={20} color="#000" />
          </View>
          <View style={{ display: "flex", gap: 7 }}>
            <Text style={estilo.configTitulo}>Informações Pessoais</Text>
            <Text style={estilo.textoconfig}>nome: {nome}</Text>
            <Text style={estilo.textoconfig}>email: {email} </Text>
            <Text style={estilo.textoconfig}>telefone: {telefone}</Text>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate("Editarperfil")}
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 15,
            borderBottomColor: "#CACACA45",
            borderBottomWidth: 1,
            width: "100%",
            paddingBottom: 21,
          }}
        >
          <View>
            <FontAwesome5 name="user-edit" size={18} color="#000" />
          </View>
          <View style={{ display: "flex", gap: 7 }}>
            <Text style={estilo.configTitulo}>Editar Perfil</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={HandleLogout}
          style={{
            display: "flex",
            flexDirection: "row",
            gap: 15,
            width: "100%",
          }}
        >
          <View>
            <MaterialIcons name="logout" size={20} color="#000" />
          </View>
          <View style={{ display: "flex", gap: 7 }}>
            <Text style={estilo.configTitulo}>Sair</Text>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FAFAFA",
    gap: 75,
  },
  configTitulo: {
    fontWeight: 600,
  },
  textoconfig: {
    fontSize: 11,
    fontWeight: 400,
  },
  config: {
    display: "flex",
    gap: 20,
    flexDirection: "column",
    padding: 27,
    backgroundColor: "#fff",
    width: "80%",
    borderRadius: 25,
    boxShadow: "1 4 8 1 rgba(0, 0, 0, 0.06)",
  },
  fotoUser: {
    backgroundColor: "#000",
    width: 115,
    height: 115,
    borderRadius: 100,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 600,
    color: "#000",
  },

  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-start",
  },
});
