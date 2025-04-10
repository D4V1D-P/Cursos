import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Splash from './src/componentes/Splash';
import RotasTab from './src/componentes/Rotas';


export default function App() {
  const [splashComplete, setSplashComplete] = useState(false);

  useEffect(() => {
    // Simula um tempo para a splash screen (ex.: 3 segundos)
    const timer = setTimeout(() => {
      setSplashComplete(true);
    }, 3000);

    return () => clearTimeout(timer); // Limpa o timer ao desmontar o componente
  }, []);

  if (!splashComplete) {
    // Exibe a Splash enquanto o estado splashComplete for false
    return <Splash />;
  }

  return (
      <NavigationContainer>
         <RotasTab /> 
      </NavigationContainer>
  );
}
