import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import descricao from './Descricao.json';

const imagens = {
  "tecnologia": require("../../assets/JogosDigitais.jpg"),
  "tecnologia1": require("../../assets/InformaticaparaInternet2.jpg"),
  "tecnologia2": require("../../assets/InformaticaparaInternet.jpg"),
  "tecnologia3": require("../../assets/JogosDigitais2.jpg"),
  "Gestao": require("../../assets/TecnicoemAdministracao.png"),
  "Gestao1": require("../../assets/tecnicoemcontabilidade.jpg"),
  "Gestao2": require("../../assets/TecnicoemRecursosHumanos.jpg"),
  "Gestao3": require("../../assets/TecnicoemLogistica.jpg"),
  "Beleza": require("../../assets/TecnicoemEstetica.jpg"),
  "Beleza2": require("../../assets/TecnicoemPodologia.jpg"),
  "Turismo": require("../../assets/TecnicoemEventos.jpg"),
  "Turismo1": require("../../assets/TecnicoemGuiaDeTurismo.jpg"),
};

export default function CursoDescricao() {
  const route = useRoute();
  const navigation = useNavigation();
  const [categoria, setCategoria] = useState(route.params?.categoria || 'Belelao');

  useEffect(() => {
    if (route.params?.categoria) {
      setCategoria(route.params.categoria);
    }
  }, [route.params?.categoria]);

  const handleCourseClick = (id) => {
    navigation.navigate('Detalhes', { id }); // Corrigido para navegar para a página correta
  };

  const cursosDaCategoria = descricao[categoria] || [];

  return (
    <ScrollView>
      <View style={estilo.container}>
        <Text style={estilo.titulo}>{categoria}</Text>
        {cursosDaCategoria.map((item, index) => (
          <TouchableOpacity key={index} onPress={() => handleCourseClick(item.id)}>
            <ItemCursos
              nome={item.nome}
              imagem={item.imagem}
              tempo={item.tempo}
              compras={item.compras}
              bolsas={item.bolsas}
            />
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const ItemCursos = ({ nome, imagem, tempo, compras, bolsas }) => {
  const source = imagens[imagem];
  return (
    <View style={estilo.card}>
      <Image source={source} style={estilo.fotos} />
      <Text style={estilo.nome}>{nome}</Text>
      <Text style={estilo.tempo}> {tempo}</Text>
      <Text style={estilo.compras}>Comprar: {compras}</Text>
      <Text style={estilo.bolsas}>Bolsas: {bolsas}</Text>
    </View>
  );
};

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF8C00',
    paddingHorizontal: 20,
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'blue',
    textAlign: 'center',
    marginTop: 50,
  },
  card: {
    marginLeft: 36,
    backgroundColor: 'white',
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 10,
    elevation: 5,
    padding: 6,
    alignItems: 'center',
    width: 300,
  },
  fotos: {
    borderRadius: 10,
    width: 290,
    height: 250,
    marginBottom: 10,
  },
  nome: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginTop: 10,
  },
  tempo: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
    marginVertical: 5,
    fontWeight: 'bold',
    marginLeft: 170,
  },
  compras: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'green',
    marginVertical: 5,
  },
  bolsas: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'blue',
    marginVertical: 5,
  },
});
