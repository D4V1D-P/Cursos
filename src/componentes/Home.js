import React from 'react';
import { Text, StyleSheet, Image, ScrollView, View, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import cursos from '../componentes/cursosCategoria.json'

const imagem = {
  "img":  require('./../../assets/Games.jpeg'),
  "img3": require('../../assets/Gestao.jpg'),
  "img4": require('../../assets/Beleza.jpeg'),
  "img5": require('../../assets/turismo.jpg'),
}

const CursoCard = ({ curso }) => {
  const navigation = useNavigation();

  const imagemCurso = imagem[curso.imagem];

  return (
    <TouchableOpacity
      style={[styles.card, { backgroundColor: curso.cor }]}
      onPress={() => navigation.navigate('Descricao', { categoria: curso.nome })}
    >
      <Image source={imagemCurso} style={styles.img} />
      <Text style={styles.texto}>{curso.nome}</Text>
    </TouchableOpacity>
  );
};

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.titulo}>Cursos Técnicos</Text>
        <FlatList
          data={cursos}
          keyExtractor={(item) => item.id}
          numColumns={1}
          renderItem={({ item }) => <CursoCard curso={item} />}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF8C00',
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'blue',
    textAlign: 'center',
    marginTop: 50,
  },
  card: {
    marginTop: 70,
    marginLeft: 55,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    borderBlockColor: 'white',
    borderRadius: 10,
    width: '300',
    height: 250,
    marginBottom: 20,
    elevation: 10,
  },
  img: {
    borderRadius: 10,
    width: '290',
    height: 200,
    marginBottom: 100,
    marginTop: 5,
    marginLeft: 5,
  },
  texto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    marginTop: -93,
  },
});
