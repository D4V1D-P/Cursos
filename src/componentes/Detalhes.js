import React from 'react';
import { View, Text, StyleSheet, Image, Button, Linking } from 'react-native';
import { useRoute } from '@react-navigation/native';
import descricao from './Descricao.json';

const imagens = {
  "tecnologia": require("../../assets/JogosDigitais.jpg"),
  "tecnologia1": require("../../assets/InformaticaparaInternet2.jpg"),
  "tecnologia2": require("../../assets/InformaticaparaInternet.jpg"),
  "tecnologia3": require("../../assets/JogosDigitais2.jpg"),
  "Gestao": require("../../assets/TecnicoemAdministração.png"),
  "Gestao1": require("../../assets/tecnicoemcontabilidade.jpg"),
  "Gestao2": require("../../assets/TecnicoemRecursosHumanos.jpg"),
  "Gestao3": require("../../assets/TecnicoemLogística.jpg"),
  "Beleza": require("../../assets/TecnicoemEstética.jpg"),
  "Beleza2": require("../../assets/TecnicoemPodologia.jpg"),
  "Turismo": require("../../assets/TecnicoemEventos.jpg"),
  "Turismo1": require("../../assets/TecnicoemGuiaDeTurismo.jpg"),
};

export default function Detalhes() {
  const route = useRoute();
  const { id } = route.params;

  // Procurar o curso pelo ID no JSON
  const curso = Object.values(descricao).flat().find(item => item.id === id);

  const openCourseLink = (link) => {
    Linking.openURL(link).catch(err => console.error("Erro ao abrir o link:", err));
  };

  if (!curso) {
    return (
      <View style={estilo.container}>
        <Text style={estilo.erro}>Curso não encontrado!</Text>
      </View>
    );
  }

  return (
    <View style={estilo.container}>
      <View style={estilo.card}>
        <Image source={imagens[curso.imagem]} style={estilo.imagem} />
        <Text style={estilo.titulo}>{curso.nome}</Text>
        <Text style={estilo.descricao}>{curso.descricao}</Text>
        <Text style={estilo.detalhes}>Compras: {curso.compras}</Text>
        <Text style={estilo.detalhes}>Bolsas: {curso.bolsas}</Text>
        <Text style={estilo.detalhes}>Duração: {curso.tempo}</Text>
        <Button title="Ver mais" color="#FF8C00" onPress={() => openCourseLink(curso.link)} />
      </View>
    </View>
  );
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF8C00', // Cor de fundo consistente com outras páginas
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#FFF',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
    width: '90%',
  },
  imagem: {
    width: 300,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    textAlign: 'center',
  },
  descricao: {
    fontSize: 18,
    color: '#555',
    marginBottom: 10,
    textAlign: 'center',
  },
  detalhes: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
    textAlign: 'center',
  },
  erro: {
    fontSize: 18,
    color: 'red',
    textAlign: 'center',
    marginTop: 50,
  },
});