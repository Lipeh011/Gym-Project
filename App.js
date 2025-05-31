import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingPage from './screens/LandingPage';
import CompraSuplementos from './screens/CompraSuplementos';
import InformacoesAcademia from './screens/InformacoesAcademia';
import DicasTreino from './screens/DicasTreino';
import PlanosAssinatura from './screens/PlanosAssinatura';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LandingPage">
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="CompraSuplementos" component={CompraSuplementos} />
        <Stack.Screen name="InformacoesAcademia" component={InformacoesAcademia} />
        <Stack.Screen name="DicasTreino" component={DicasTreino} />
        <Stack.Screen name="PlanosAssinatura" component={PlanosAssinatura} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
