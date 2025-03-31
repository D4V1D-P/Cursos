import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";
import AntDesign from '@expo/vector-icons/AntDesign';

import Home from './Home';
import Gogo from './Gogo';

const Tab = createBottomTabNavigator();

export default function RotasTab() {
    return (
        <Tab.Navigator initialRouteName="Home" screenOptions={{ activeTintColor: "#00ff00" }}>

<Tab.Screen 
                name='Gogo' 
                component={Gogo} 
                options={{
                    tabBarLabel: 'Gogo',
                    tabBarIcon: ({ color, size }) => (
                        <AntDesign name="arrowleft" color={color} size={size} />
                    ),
                }} 
            />
            <Tab.Screen 
                name='Home' 
                component={Home} 
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }} 
            />

        </Tab.Navigator>
    );
}
