import React, { useMemo, useState } from 'react';
import { SafeAreaView, StatusBar, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { PartsListScreen } from './src/screens/PartsListScreen';
import { PartDetailScreen } from './src/screens/PartDetailScreen';
import { CartScreen } from './src/screens/CartScreen';
import { Part } from './src/data/sampleParts';

export type TabKey = 'browse' | 'cart';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabKey>('browse');
  const [selectedPart, setSelectedPart] = useState<Part | null>(null);
  const [cart, setCart] = useState<Part[]>([]);

  const addToCart = (part: Part) => {
    setCart((prev) => (prev.find((item) => item.id === part.id) ? prev : [...prev, part]));
    setActiveTab('cart');
  };

  const removeFromCart = (part: Part) => {
    setCart((prev) => prev.filter((item) => item.id !== part.id));
  };

  const screen = useMemo(() => {
    if (activeTab === 'cart') {
      return <CartScreen cart={cart} onRemove={removeFromCart} />;
    }

    if (selectedPart) {
      return (
        <PartDetailScreen
          part={selectedPart}
          onBack={() => setSelectedPart(null)}
          onAddToCart={addToCart}
        />
      );
    }

    return (
      <PartsListScreen
        onSelectPart={(part) => setSelectedPart(part)}
        onAddToCart={addToCart}
      />
    );
  }, [activeTab, cart, selectedPart]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      {screen}
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'browse' && styles.tabButtonActive]}
          onPress={() => setActiveTab('browse')}
        >
          <Text style={[styles.tabLabel, activeTab === 'browse' && styles.tabLabelActive]}>Browse</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'cart' && styles.tabButtonActive]}
          onPress={() => setActiveTab('cart')}
        >
          <Text style={[styles.tabLabel, activeTab === 'cart' && styles.tabLabelActive]}>Cart ({cart.length})</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b1220'
  },
  tabBar: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#1f2937',
    backgroundColor: '#0f172a'
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 12
  },
  tabButtonActive: {
    backgroundColor: '#111827'
  },
  tabLabel: {
    color: '#9ca3af',
    fontWeight: '600'
  },
  tabLabelActive: {
    color: '#f9fafb'
  }
});

export default App;
