import {
  Text,
  StyleSheet,
  SafeAreaView,
  View,
  TouchableOpacity,
} from "react-native";

import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import Icon from "react-native-vector-icons/FontAwesome";

export default function TelaPerfil() {
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
        <View style={estilo.fotoUser}></View>
        <Text style={estilo.titulo}> Usuário Logado </Text>
      </View>

      <View style={estilo.config}>
        <View style={{ display: "flex", flexDirection: "row", gap: 15, borderBottomColor: "#CACACA45", borderBottomWidth: 1, width: "100%", paddingBottom: 21 }}>
          <View>
            <Icon name="user" size={20} color="#000" />
          </View>
          <View style={{ display: "flex", gap: 7 }}>
            <Text style={estilo.configTitulo}>Informações Pessoais</Text>
            <Text style={estilo.textoconfig}>nome: usuario</Text>
            <Text style={estilo.textoconfig}>email: aaaaaaaaa@saa.com</Text>
            <Text style={estilo.textoconfig}>telefone: 1195468231</Text>
          </View>
        </View>

        <TouchableOpacity onPress={() => alert("Configurações")} style={{ display: "flex", flexDirection: "row", gap: 15, borderBottomColor: "#CACACA45", borderBottomWidth: 1, width: "100%", paddingBottom: 21 }}>
          <View>
            <Icon name="gear" size={20} color="#000" />
          </View>
          <View style={{ display: "flex", gap: 7 }}>
            <Text style={estilo.configTitulo}>Configurações</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => alert("Sair")} style={{ display: "flex", flexDirection: "row", gap: 15, width: "100%" }}>
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
    boxShadow:"1 4 8 1 rgba(0, 0, 0, 0.06)",
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
