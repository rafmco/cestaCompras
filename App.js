// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import AppLoading from 'expo-app-loading';

import Agenda from './src/telas/fornecedor';
import mock from './src/mocks/agenda';

export default function App() {
  const [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold
  });

  if (!fonteCarregada) {
    return <AppLoading />
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      {/* Desencapsular o objeto */ }
      <Agenda {...mock} />
    </SafeAreaView>
  );
}