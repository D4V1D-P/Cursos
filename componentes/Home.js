import { Text, StyleSheet, Image, ScrollView, SafeAreaView, ImageBackground } from 'react-native';
 
export default function Home() {

  return (
<SafeAreaView style={styles.container}>
<ImageBackground source={require("../assets/nome.jpg")} style={styles.background}>
<ScrollView>

<Text style={styles.titulo}>Cursos Técnico</Text>

 </ScrollView>
 </ImageBackground>
 </SafeAreaView>

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
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 20,
  
  },

  background: {
    flex: 1,
    resizeMode: 'cover', 
    justifyContent: 'flex-start', 
  },
  

});

 