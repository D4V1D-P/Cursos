import React from 'react';
import { Text, StyleSheet, Image, ScrollView, View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';  
import cursos from './cursosCategoria.json'


export default function Home() {

  const navigation = useNavigation();
  
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.titulo}>Cursos Técnico</Text>
        {cursos.map((e) => (
          <TouchableOpacity key={e.id} style={[styles.card, { backgroundColor: e.cor }]} onPress={() => navigation.navigate('CursoDescricao', { e })}   >
          <Image source={e.imagem} style={styles.img} />
          <Text style={styles.texto}>{e.nome}</Text>
        </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
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