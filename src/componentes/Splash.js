import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { ResizeMode, Video } from 'expo-av'; 
import { hideAsync } from 'expo-router/build/utils/splash';

export function Splash({ onComplete }) {
    const [lastStatus, setStatus] = useState({});
    function onPlaybackStatusUpdate(status) {
        if (status.isLoaded) {  // Verifica se o vídeo foi carregado
            hideAsync(); // Oculta a splash screen após o vídeo ser reproduzido
        }

        if (status.didJustFinish) {  // Verifica se o vídeo terminou
            onComplete(true);  // Chama a função onComplete
        }

        setStatus(status);  // Atualiza o estado com o status atual
    }

    return (
        <Video
            style={StyleSheet.absoluteFill}
            resizeMode={ResizeMode.COVER}
            source={require('../../assets/SplashSenac.mp4')}
            isLooping={false}
            onPlaybackStatusUpdate={onPlaybackStatusUpdate}
            shouldPlay={true}
        />
    );
}
