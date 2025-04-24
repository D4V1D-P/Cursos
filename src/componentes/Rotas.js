import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";

import Home from "./Home";
import TelaPerfil from "./TelaPerfil"
import Login from "./Login";
import CursoDescricao from "./CursoDescricao";
import Detalhes from "./Detalhes";
import Cadastro from "./Cadastro";
import Editarperfil from "./Editarperfil";
import RecuperarSenha from "./RecuperarSenha";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator()

function Tabs() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={TelaPerfil}
        options={{
          tabBarLabel: "Perfil",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default function RotasTab() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: true }} initialRouteName="Login">
      <Stack.Screen name="MainTabs" component={Tabs} options={{ headerShown: false }} />
      <Stack.Screen name="Login" component={Login}  options={{ headerShown: false }} />
      <Stack.Screen name="Home" component={Home}  options={{ headerShown: false }} />
      <Stack.Screen name="Descricao" component={CursoDescricao}  options={{ headerShown: false }} />
      <Stack.Screen name="Detalhes" component={Detalhes}  options={{ headerShown: false }} />
      <Stack.Screen name="Cadastro" component={Cadastro}  options={{ headerShown: false }} />
      <Stack.Screen name="TelaPerfil" component={TelaPerfil}  options={{ headerShown: false }}/>
      <Stack.Screen name="Editarperfil" component={Editarperfil}  options={{ headerShown: false }}/>
      <Stack.Screen name="RecuperarSenha" component={RecuperarSenha}  options={{ headerShown: false }}/>
    </Stack.Navigator>
  )
}