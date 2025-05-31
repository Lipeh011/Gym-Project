import React from 'react';
import { View, Text, ScrollView, StyleSheet, ImageBackground, TouchableOpacity, Dimensions, Image, Linking } from 'react-native';
import { Ionicons, FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

const suplementos = [
  {
    id: 1,
    nome: "Whey Protein",
    marca: "Gold Standard",
    preco: 120.00,
    rating: 4.7,
    promocao: true,
    imagem: require('../assets/imagens/whey.webp'),
  },
  {
    id: 2,
    nome: "Creatina Monohidratada",
    marca: "Creapure",
    preco: 80.00,
    rating: 4.8,
    imagem: require('../assets/imagens/creatina.png'),
  },
  {
    id: 3,
    nome: "Hipercalórico Mass Gain",
    marca: "NutriWeight",
    preco: 150.00,
    rating: 4.5,
    promocao: false,
    imagem: require('../assets/imagens/hyper_calorico.webp'),
  },
  {
    id: 4,
    nome: "Pré-Treino Explosivo",
    marca: "Black Fire",
    preco: 90.00,
    rating: 4.6,
    promocao: true,
    imagem: require('../assets/imagens/pre_treino.webp'),
  },
  {
    id: 5,
    nome: "BCAA em Pó",
    marca: "Amino Fuel",
    preco: 70.00,
    rating: 4.4,
    imagem: require('../assets/imagens/bcca.webp'),
  },
  {
    id: 6,
    nome: "Glutamina Premium",
    marca: "Recovery Pro",
    preco: 65.00,
    rating: 4.3,
    promocao: true,
    imagem: require('../assets/imagens/glutamina.webp'),
  },
  {
    id: 8,
    nome: "Barra Proteica",
    marca: "ProteinBar",
    preco: 8.00,
    rating: 4.1,
    promocao: true,
    imagem: require('../assets/imagens/barra_proteica.jpg'),
  },
];


export default function CompraSuplementos({ navigation }) {
  const [itensCarrinho, setItensCarrinho] = React.useState(2);

  const handleAcao = (acao, item) => {
    // Sua lógica de ações aqui
  };

  return (
    <View style={styles.containerMaster}>
      <ImageBackground
        source={{ uri: 'https://images.unsplash.com/photo-1605296867424-35fc25c9212a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80' }}
        style={styles.backgroundImage}
        blurRadius={3}
      >
        <ScrollView 
          style={styles.mainScrollView}
          contentContainerStyle={styles.scrollContentContainer}
          showsVerticalScrollIndicator={false}
        >
          {/* Header */}
          <View style={styles.headerContainer}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="arrow-back" size={24} color="white" />
            </TouchableOpacity>
            
            <View>
              <Text style={styles.header}>LOJA DE SUPLEMENTOS</Text>
              <Text style={styles.subHeader}>Melhores marcas do mercado</Text>
            </View>

            <TouchableOpacity 
              style={styles.carrinhoButton}
              onPress={() => handleAcao('carrinho', { nome: 'Carrinho' })}
            >
              <FontAwesome5 name="shopping-cart" size={24} color="white" />
              <View style={styles.carrinhoBadge}>
                <Text style={styles.carrinhoBadgeText}>{itensCarrinho}</Text>
              </View>
            </TouchableOpacity>
          </View>

          {/* Filtros */}
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            style={styles.horizontalScrollView}
            contentContainerStyle={styles.horizontalScrollContent}
          >
            {['Todos', 'Proteínas', 'Pré-Treino', 'Creatina', 'Hipercalóricos', 'Vitaminas'].map((item, index) => (
              <TouchableOpacity 
                key={index} 
                style={[
                  styles.filtroButton,
                  index === 0 && styles.filtroAtivo
                ]}
                onPress={() => handleAcao('filtro', item)}
              >
                <Text style={styles.filtroText}>{item}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Lista de Produtos */}
          <View style={styles.produtosListContainer}>
            {suplementos.map((item) => (
              <TouchableOpacity 
                key={item.id} 
                style={styles.produtoCard}
                onPress={() => handleAcao('detalhes', item)}
                activeOpacity={0.7}
              >
                {item.promocao && (
                  <View style={styles.promoTag}>
                    <Text style={styles.promoText}>20% OFF</Text>
                  </View>
                )}
                
                <Image 
                  source={item.imagem} 
                  style={styles.produtoImagem}
                  resizeMode="cover"
                />
                
                <View style={styles.produtoInfo}>
                  <Text style={styles.produtoMarca}>{item.marca}</Text>
                  <Text style={styles.produtoNome}>{item.nome}</Text>
                  
                  <View style={styles.ratingContainer}>
                    <Ionicons name="star" size={16} color="#FFD700" />
                    <Text style={styles.ratingText}>{item.rating}</Text>
                  </View>
                  
                  <Text style={styles.produtoPreco}>
                    {item.promocao ? (
                      <>
                        <Text style={styles.precoOriginal}>R$ {(item.preco * 1.25).toFixed(2).replace('.', ',')}</Text>
                        {'\n'}
                        <Text style={styles.precoPromo}>R$ {item.preco.toFixed(2).replace('.', ',')}</Text>
                      </>
                    ) : (
                      `R$ ${item.preco.toFixed(2).replace('.', ',')}`
                    )}
                  </Text>
                  
                  <TouchableOpacity 
                    style={styles.comprarButton}
                    onPress={(e) => {
                      e.stopPropagation();
                      handleAcao('carrinho', item);
                    }}
                  >
                    <Text style={styles.comprarButtonText}>COMPRAR</Text>
                    <MaterialCommunityIcons name="cart-plus" size={20} color="white" />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            ))}
          </View>

          <View style={{ height: 80 }} />
        </ScrollView>

        {/* Botão WhatsApp */}
        <TouchableOpacity 
          style={styles.whatsappButton}
          onPress={() => handleAcao('whatsapp')}
        >
          <FontAwesome5 name="whatsapp" size={24} color="white" />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  containerMaster: {
    flex: 1,
    backgroundColor: '#0A0A0A',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    backgroundColor: '#121212',
  },
  mainScrollView: {
    flex: 1,
  },
  scrollContentContainer: {
    paddingBottom: 150, // Aumentado para evitar corte
    minHeight: SCREEN_HEIGHT,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255, 255, 255, 0.2)',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.8)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  subHeader: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.8)',
    textAlign: 'center',
  },
  horizontalScrollView: {
    maxHeight: 50,
  },
  horizontalScrollContent: {
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  filtroButton: {
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 10,
    backgroundColor: '#1A1A1A',
    borderWidth: 1,
    borderColor: '#333',
  },
  filtroAtivo: {
    backgroundColor: '#6A5ACD', // Alterado para roxo
    borderColor: '#6A5ACD',
  },
  filtroText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
  },
  produtosListContainer: {
    padding: 15,
  },
  produtoCard: {
    backgroundColor: '#1A1A1A',
    borderRadius: 12,
    marginBottom: 20,
    overflow: 'hidden',
    flexDirection: 'row',
    minHeight: 160, // Altura mínima ajustável
    elevation: 3,
    borderWidth: 1,
    borderColor: '#333',
  },
  promoTag: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: '#1A1A1A',
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 10,
    zIndex: 2,
    borderWidth: 1,
    borderColor: '#6A5ACD', // Roxo
  },
  promoText: {
    color: '#6A5ACD', // Roxo
    fontWeight: 'bold',
    fontSize: 12,
  },
  produtoImagem: {
    width: 140, // Reduzido para melhor layout
    height: '100%',
  },
  produtoInfo: {
    flex: 1,
    padding: 15,
    justifyContent: 'space-between',
    paddingBottom: 12,
  },
  produtoMarca: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: 12,
    fontWeight: '300',
  },
  produtoNome: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 3,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  ratingText: {
    color: 'white',
    marginLeft: 5,
    fontSize: 14,
  },
  produtoPreco: {
    color: '#6A5ACD', // Roxo
    fontSize: 18,
    fontWeight: 'bold',
  },
  precoOriginal: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontSize: 14,
    textDecorationLine: 'line-through',
  },
  precoPromo: {
    color: '#6A5ACD', // Roxo
    fontSize: 18,
    fontWeight: 'bold',
  },
  comprarButton: {
    backgroundColor: '#6A5ACD', // Roxo
    borderRadius: 6,
    paddingVertical: 10, // Aumentado
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 8,
  },
  comprarButtonText: {
    color: 'white', // Texto em branco
    fontWeight: 'bold',
    marginRight: 5,
    fontSize: 14,
  },
  whatsappButton: {
    position: 'absolute',
    bottom: 30,
    right: 20,
    backgroundColor: '#32CD32',
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  carrinhoButton: {
    position: 'relative',
    padding: 10,
  },
  carrinhoBadge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: '#6A5ACD', // Roxo
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  carrinhoBadgeText: {
    color: 'white', // Texto em branco
    fontSize: 12,
    fontWeight: 'bold',
  },
});