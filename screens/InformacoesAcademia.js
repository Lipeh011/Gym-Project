import React from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  TouchableOpacity, 
  StyleSheet, 
  Image, 
  Dimensions, 
  Linking,
  Platform 
} from 'react-native';
import { Ionicons, MaterialCommunityIcons, FontAwesome5, MaterialIcons, FontAwesome } from '@expo/vector-icons';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const InformacoesAcademia = ({ navigation }) => {
  // Configuração para esconder o header padrão
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

  const features = [
    { icon: 'clock', title: 'Horário', desc: 'Seg-Sex: 5h às 23h\nSáb-Dom: 7h às 20h', color: '#FF6B6B' },
    { icon: 'map-marker', title: 'Localização', desc: 'Rua Fitness, 123\nCentro - SP', color: '#4ECDC4' },
    { icon: 'dumbbell', title: 'Equipamentos', desc: '200+ máquinas modernas', color: '#FFD166' },
    { icon: 'pool', title: 'Piscina', desc: 'Aquecida o ano todo', color: '#06D6A0' },
    { icon: 'wifi', title: 'Wi-Fi', desc: 'Grátis para alunos', color: '#A78BFA' },
    { icon: 'parking', title: 'Estacionamento', desc: 'Coberto gratuito', color: '#F8A5C2' },
  ];

  const photos = [
    { id: 1, uri: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' },
    { id: 2, uri: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' },
    { id: 3, uri: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1075&q=80' },
  ];

  const openWhatsApp = () => {
    Linking.openURL('whatsapp://send?phone=5511987654321&text=Olá, gostaria de informações sobre a academia!');
  };

  const openGoogleMaps = () => {
    Linking.openURL('https://www.google.com/maps?q=Rua+Fitness,123,Centro,SP');
  };

  return (
    <View style={styles.background}>
      <ScrollView 
        contentContainerStyle={styles.container}
        style={styles.scrollView}
      >
        {/* Header com botão funcional */}
        <View style={styles.headerContainer}>
          <TouchableOpacity 
            onPress={handleGoBack} 
            style={styles.backButton}
            activeOpacity={0.7}
            hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
          >
            <Ionicons name="arrow-back" size={28} color="white" />
          </TouchableOpacity>
          
          <View style={styles.headerTextContainer}>
            <Text style={styles.header}>NOSSA ESTRUTURA</Text>
            <Text style={styles.subHeader}>Tudo para sua evolução fitness</Text>
          </View>
        </View>

        {/* Carrossel */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.carousel}
          pagingEnabled
        >
          {photos.map((photo) => (
            <Image
              key={photo.id}
              source={{ uri: photo.uri }}
              style={styles.carouselImage}
            />
          ))}
        </ScrollView>

        {/* Features Grid */}
        <View style={styles.featuresGrid}>
          {features.map((item, index) => (
            <View key={index} style={[styles.featureCard, { backgroundColor: item.color }]}>
              <View style={styles.iconContainer}>
                {item.icon === 'clock' && <Ionicons name="time-outline" size={28} color="white" />}
                {item.icon === 'map-marker' && <FontAwesome5 name="map-marker-alt" size={28} color="white" />}
                {item.icon === 'dumbbell' && <FontAwesome5 name="dumbbell" size={28} color="white" />}
                {item.icon === 'pool' && <MaterialCommunityIcons name="pool" size={28} color="white" />}
                {item.icon === 'wifi' && <Ionicons name="wifi" size={28} color="white" />}
                {item.icon === 'parking' && <FontAwesome5 name="parking" size={28} color="white" />}
              </View>
              <Text style={styles.featureTitle}>{item.title}</Text>
              <Text style={styles.featureDesc}>{item.desc}</Text>
            </View>
          ))}
        </View>

        {/* Mapa */}
        <TouchableOpacity style={styles.mapButton} onPress={openGoogleMaps}>
          <Text style={styles.sectionTitle}>ONDE ESTAMOS</Text>
          <Image
            source={{ uri: 'https://maps.googleapis.com/maps/api/staticmap?center=Rua+Fitness,123,Centro,SP&zoom=15&size=600x300&maptype=roadmap&markers=color:red%7C-23.5505,-46.6333&key=SUA_CHAVE_API' }}
            style={styles.mapImage}
          />
          <Text style={styles.mapText}>Toque para abrir no Maps →</Text>
        </TouchableOpacity>

        {/* Contato */}
        <View style={styles.contactBox}>
          <Text style={styles.contactTitle}>FALE CONOSCO</Text>
          <View style={styles.contactItem}>
            <Ionicons name="call" size={20} color="#FFFFFF" />
            <Text style={styles.contactText}>(11) 98765-4321</Text>
          </View>
          <View style={styles.contactItem}>
            <MaterialIcons name="email" size={20} color="#FFFFFF" />
            <Text style={styles.contactText}>contato@academiaelite.com</Text>
          </View>
        </View>
      </ScrollView>

      {/* Botão Flutuante WhatsApp */}
      <TouchableOpacity 
        style={styles.whatsappButton} 
        onPress={openWhatsApp}
        activeOpacity={0.7}
      >
        <FontAwesome name="whatsapp" size={28} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    backgroundColor: '#121212',
    ...Platform.select({
      web: {
        height: '100vh',
        overflow: 'hidden',
      },
    }),
  },
  scrollView: {
    flex: 1,
    ...Platform.select({
      web: {
        height: '100%',
        overflowY: 'auto',
      },
    }),
  },
  container: {
    paddingBottom: 30,
    alignItems: 'center',
    paddingTop: 50,
    ...Platform.select({
      web: {
        minHeight: '100%',
      },
    }),
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
    paddingHorizontal: 15,
  },
  backButton: {
    padding: 10,
    zIndex: 1,
  },
  headerTextContainer: {
    flex: 1,
    alignItems: 'center',
    marginLeft: -28,
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  subHeader: {
    fontSize: 16,
    color: '#CCCCCC',
    marginBottom: 40,
    textAlign: 'center',
  },
  carousel: {
    height: 200,
    marginVertical: 20,
  },
  carouselImage: {
    width: SCREEN_WIDTH - 40,
    height: '100%',
    marginHorizontal: 5,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#333333',
  },
  featuresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '90%',
    marginBottom: 25,
  },
  featureCard: {
    width: '48%',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  iconContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  featureTitle: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 5,
  },
  featureDesc: {
    color: 'white',
    textAlign: 'center',
    fontSize: 14,
  },
  mapButton: {
    width: '90%',
    marginBottom: 25,
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    padding: 15,
    borderWidth: 1,
    borderColor: '#333333',
  },
  mapImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#333333',
  },
  mapText: {
    color: '#4ECDC4',
    marginTop: 5,
    fontStyle: 'italic',
  },
  sectionTitle: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  contactBox: {
    width: '90%',
    backgroundColor: '#1E1E1E',
    borderRadius: 15,
    padding: 20,
    borderWidth: 1,
    borderColor: '#333333',
  },
  contactTitle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 15,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: 10,
    borderRadius: 8,
    width: '100%',
  },
  contactText: {
    color: 'white',
    fontSize: 16,
    marginLeft: 10,
  },
  whatsappButton: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    backgroundColor: '#25D366',
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 10,
  },
});

export default InformacoesAcademia;