import React from 'react';
import { View, Text, ScrollView, StyleSheet, ImageBackground, TouchableOpacity, Dimensions } from 'react-native';
import { MaterialIcons, FontAwesome5, Ionicons } from '@expo/vector-icons';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export default function PlanosAssinatura({ navigation }) {
  // Remove o header padrão
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false
    });
  }, [navigation]);

  // Função de navegação segura
  const handleGoBack = () => {
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      navigation.navigate('LandingPage');
    }
  };

  const planos = [
    {
      nome: "BÁSICO",
      preco: "R$ 99/mês",
      cor: "#4ECDC4",
      icone: "dumbbell",
      beneficios: [
        "Acesso à musculação",
        "Área de cardio",
        "Aulas em grupo básicas",
        "Horário limitado"
      ]
    },
    {
      nome: "PLUS",
      preco: "R$ 149/mês",
      cor: "#6A5ACD",
      icone: "fire",
      beneficios: [
        "Tudo do Básico +",
        "Aulas ilimitadas",
        "Acesso à piscina",
        "Horário estendido",
        "1 acompanhamento mensal"
      ],
      destaque: true
    },
    {
      nome: "PLUS++",
      preco: "R$ 199/mês",
      cor: "#FF6B6B",
      icone: "crown",
      beneficios: [
        "Tudo do Plus +",
        "Acesso 24h",
        "Personal trainer 2x/mês",
        "Cadeira de massagem",
        "Toalhas grátis",
        "Suplementos básicos"
      ]
    }
  ];

  return (
    <ImageBackground
      source={{ uri: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' }}
      style={styles.background}
      blurRadius={3}
    >
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header com botão de voltar ajustado */}
        <View style={styles.headerContainer}>
          <TouchableOpacity 
            onPress={handleGoBack} 
            style={styles.backButton}
            hitSlop={{ top: 25, bottom: 25, left: 25, right: 25 }}
          >
            <Ionicons name="arrow-back" size={28} color="white" />
          </TouchableOpacity>
          
          <View style={styles.headerTextContainer}>
            <Text style={styles.header}>PLANOS ELITE</Text>
            <Text style={styles.subHeader}>Escolha seu nível de evolução</Text>
          </View>
        </View>

        <View style={styles.planosContainer}>
          {planos.map((plano, index) => (
            <View 
              key={index} 
              style={[
                styles.planoCard, 
                { 
                  backgroundColor: plano.cor,
                  borderColor: plano.destaque ? 'gold' : 'transparent',
                  borderWidth: plano.destaque ? 3 : 0
                }
              ]}
            >
              {plano.destaque && (
                <View style={styles.destaqueTag}>
                  <Text style={styles.destaqueText}>POPULAR</Text>
                </View>
              )}
              
              <FontAwesome5 
                name={plano.icone} 
                size={32} 
                color="white" 
                style={styles.planoIcone}
              />
              
              <Text style={styles.planoNome}>{plano.nome}</Text>
              <Text style={styles.planoPreco}>{plano.preco}</Text>
              
              <View style={styles.beneficiosContainer}>
                {plano.beneficios.map((item, i) => (
                  <View key={i} style={styles.beneficioItem}>
                    <MaterialIcons name="check-circle" size={16} color="white" />
                    <Text style={styles.beneficioText}>{item}</Text>
                  </View>
                ))}
              </View>
              
              <TouchableOpacity style={styles.botaoAssinar}>
                <Text style={styles.botaoTexto}>ASSINAR AGORA</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
        
        <Text style={styles.aviso}>* Todos os planos incluem avaliação física gratuita</Text>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
  },
  container: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    minHeight: '100%',
    alignItems: 'center'
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginBottom: 20,
    paddingTop: 10,
  },
  backButton: {
    position: 'absolute',
    left: 10,
    top: 10,
    zIndex: 1,
    padding: 8,
  },
  headerTextContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 10,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 5,
    letterSpacing: 1,
  },
  subHeader: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.9)',
    textAlign: 'center',
    marginBottom: 30,
  },
  planosContainer: {
    width: '100%',
    maxWidth: 500,
  },
  planoCard: {
    borderRadius: 20,
    padding: 25,
    marginBottom: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    position: 'relative',
    overflow: 'hidden'
  },
  destaqueTag: {
    position: 'absolute',
    top: 15,
    right: -30,
    backgroundColor: 'gold',
    paddingVertical: 3,
    paddingHorizontal: 30,
    transform: [{ rotate: '45deg' }],
  },
  destaqueText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 12,
  },
  planoIcone: {
    alignSelf: 'center',
    marginBottom: 10,
  },
  planoNome: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  planoPreco: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  beneficiosContainer: {
    marginBottom: 25,
  },
  beneficioItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  beneficioText: {
    color: 'white',
    marginLeft: 8,
    fontSize: 14,
  },
  botaoAssinar: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    paddingVertical: 12,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.5)',
  },
  botaoTexto: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 16,
  },
  aviso: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 12,
    marginTop: 10,
    textAlign: 'center',
  },
});