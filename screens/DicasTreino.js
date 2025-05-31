import React from 'react';
import { 
  View, 
  Text, 
  ScrollView, 
  TouchableOpacity, 
  StyleSheet, 
  Image,
  Dimensions
} from 'react-native';
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {
  const workoutCategories = [
    { 
      title: 'Musculação',
      icon: 'dumbbell',
      color: '#FF6B6B',
      desc: '12 programas disponíveis'
    },
    { 
      title: 'Cardio',
      icon: 'running',
      color: '#4ECDC4',
      desc: '8 equipamentos modernos'
    },
    { 
      title: 'Yoga',
      icon: 'yoga',
      color: '#A78BFA',
      desc: 'Aulas guiadas'
    },
    { 
      title: 'Alongamento',
      icon: 'stretch',
      color: '#FFD166',
      desc: 'Rotinas diárias'
    },
  ];

  return (
    <ScrollView 
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.greetingText}>Bem-vindo de volta,</Text>
          <Text style={styles.userName}>João!</Text>
        </View>
        <TouchableOpacity 
          style={styles.profileButton}
          onPress={() => navigation.navigate('Profile')}
        >
          <Ionicons name="person-circle-outline" size={34} color="#2D2D2D" />
        </TouchableOpacity>
      </View>

      {/* Destaque do Treino */}
      <View style={styles.workoutCard}>
        <View style={styles.workoutContent}>
          <Text style={styles.workoutTag}>TREINO ATIVO</Text>
          <Text style={styles.workoutTitle}>Peito e Tríceps</Text>
          
          <View style={styles.workoutStats}>
            <View style={styles.statItem}>
              <Ionicons name="time-outline" size={20} color="white" />
              <Text style={styles.statText}>45 minutos</Text>
            </View>
            <View style={styles.statItem}>
              <MaterialCommunityIcons name="lightning-bolt" size={20} color="white" />
              <Text style={styles.statText}>Avançado</Text>
            </View>
          </View>

          <TouchableOpacity 
            style={styles.startButton}
            activeOpacity={0.9}
          >
            <Text style={styles.startButtonText}>INICIAR TREINO</Text>
            <FontAwesome5 name="play" size={16} color="white" />
          </TouchableOpacity>
        </View>
        
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' }}
          style={styles.workoutImage}
        />
      </View>

      {/* Seção de Categorias */}
      <Text style={styles.sectionTitle}>Categorias de Treino</Text>
      <View style={styles.categoriesGrid}>
        {workoutCategories.map((item, index) => (
          <TouchableOpacity 
            key={index} 
            style={[styles.categoryCard, { backgroundColor: item.color }]}
            activeOpacity={0.9}
          >
            <View style={styles.categoryIcon}>
              {item.icon === 'dumbbell' && <FontAwesome5 name="dumbbell" size={24} color="white" />}
              {item.icon === 'running' && <FontAwesome5 name="running" size={24} color="white" />}
              {item.icon === 'yoga' && <MaterialCommunityIcons name="yoga" size={24} color="white" />}
              {item.icon === 'stretch' && <MaterialCommunityIcons name="stretch" size={24} color="white" />}
            </View>
            <Text style={styles.categoryTitle}>{item.title}</Text>
            <Text style={styles.categoryDesc}>{item.desc}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Dica do Dia */}
      <View style={styles.tipCard}>
        <Text style={styles.tipTitle}>Dica do Dia 💡</Text>
        <Text style={styles.tipText}>
          Mantenha o core ativado durante os exercícios de levantamento para melhorar 
          sua estabilidade e prevenir lesões.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  contentContainer: {
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },
  greetingText: {
    fontSize: 18,
    color: '#6B7280',
  },
  userName: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1F2937',
    marginTop: 4,
  },
  profileButton: {
    backgroundColor: '#F3F4F6',
    padding: 10,
    borderRadius: 12,
    elevation: 2,
  },
  workoutCard: {
    backgroundColor: '#6366f1',
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 25,
    flexDirection: 'row',
    height: 200,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  workoutContent: {
    flex: 1,
    padding: 24,
    justifyContent: 'space-between',
  },
  workoutTag: {
    color: 'rgba(255,255,255,0.8)',
    fontSize: 14,
    fontWeight: '600',
    letterSpacing: 0.8,
  },
  workoutTitle: {
    color: 'white',
    fontSize: 24,
    fontWeight: '700',
    marginTop: 8,
  },
  workoutStats: {
    flexDirection: 'row',
    gap: 20,
    marginTop: 15,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  statText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
  workoutImage: {
    width: SCREEN_WIDTH * 0.35,
    height: '100%',
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  startButton: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    paddingVertical: 14,
    borderRadius: 12,
    marginTop: 20,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
  },
  startButtonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 15,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 20,
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 15,
    marginBottom: 25,
  },
  categoryCard: {
    width: (SCREEN_WIDTH - 50) / 2,
    borderRadius: 16,
    padding: 20,
    aspectRatio: 1,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
  categoryIcon: {
    backgroundColor: 'rgba(0,0,0,0.15)',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  categoryTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 6,
    textAlign: 'center',
  },
  categoryDesc: {
    color: 'rgba(255,255,255,0.9)',
    fontSize: 13,
    textAlign: 'center',
    lineHeight: 18,
  },
  tipCard: {
    backgroundColor: '#F3F4F6',
    borderRadius: 16,
    padding: 20,
  },
  tipTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1F2937',
    marginBottom: 12,
  },
  tipText: {
    color: '#4B5563',
    fontSize: 15,
    lineHeight: 24,
  },
});

export default HomeScreen;