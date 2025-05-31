import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, Dimensions } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome5, Feather } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function LandingPage({ navigation }) {
  // Remove a barra de navegação superior
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    });
  }, [navigation]);

  return (
    <ImageBackground 
      source={{ uri: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1075&q=80' }}
      style={styles.background}
      blurRadius={3}
    >
      <View style={styles.overlay}>
        <Text style={styles.header}>BEM-VINDO À ACADEMIA</Text>
        <Text style={styles.subHeader}>Transforme seu corpo, transforme sua vida</Text>

        <View style={styles.buttonContainer}>
          {/* Botão 1 */}
          <TouchableOpacity 
            style={[styles.button, { backgroundColor: '#FF6B6B' }]}
            onPress={() => navigation.navigate('CompraSuplementos')}
          >
            <FontAwesome5 name="dumbbell" size={24} color="white" />
            <Text style={styles.buttonText}>Suplementos</Text>
          </TouchableOpacity>

          {/* Botão 2 */}
          <TouchableOpacity 
            style={[styles.button, { backgroundColor: '#4ECDC4' }]}
            onPress={() => navigation.navigate('InformacoesAcademia')}
          >
            <Ionicons name="information-circle" size={24} color="white" />
            <Text style={styles.buttonText}>Sobre Nós</Text>
          </TouchableOpacity>

          {/* Botão 3 */}
          <TouchableOpacity 
            style={[styles.button, { backgroundColor: '#FFA07A' }]}
            onPress={() => navigation.navigate('DicasTreino')}
          >
            <MaterialIcons name="fitness-center" size={24} color="white" />
            <Text style={styles.buttonText}>Dicas de Treino</Text>
          </TouchableOpacity>

          {/* Botão 4 */}
          <TouchableOpacity 
            style={[styles.button, { backgroundColor: '#6A5ACD' }]}
            onPress={() => navigation.navigate('PlanosAssinatura')}
          >
            <Feather name="dollar-sign" size={24} color="white" />
            <Text style={styles.buttonText}>Planos</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 10,
    textShadowColor: 'rgba(0, 0, 0, 0.5)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
  },
  subHeader: {
    fontSize: 16,
    color: 'white',
    marginBottom: 40,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    maxWidth: 400,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 25,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 10,
  },
});