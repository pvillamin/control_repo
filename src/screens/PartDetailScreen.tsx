import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Part } from '../data/sampleParts';

export type PartDetailScreenProps = {
  part: Part;
  onBack: () => void;
  onAddToCart: (part: Part) => void;
};

export const PartDetailScreen: React.FC<PartDetailScreenProps> = ({ part, onBack, onAddToCart }) => (
  <ScrollView style={styles.container} contentInsetAdjustmentBehavior="automatic">
    <TouchableOpacity onPress={onBack} style={styles.backButton}>
      <Text style={styles.backText}>◀ Back to results</Text>
    </TouchableOpacity>

    <Image source={{ uri: part.image }} style={styles.hero} />
    <View style={styles.headerRow}>
      <View style={{ flex: 1, gap: 6 }}>
        <Text style={styles.title}>{part.name}</Text>
        <Text style={styles.subtitle}>{part.vehicle} • {part.condition}</Text>
        <Text style={styles.location}>{part.location}</Text>
      </View>
      <Text style={styles.price}>${part.price.toFixed(2)}</Text>
    </View>

    <Text style={styles.sectionLabel}>Description</Text>
    <Text style={styles.description}>{part.description}</Text>

    <Text style={styles.sectionLabel}>Buy with confidence</Text>
    <View style={styles.badges}>
      <Text style={styles.badge}>✓ Seller verified</Text>
      <Text style={styles.badge}>✓ 7-day return window</Text>
      <Text style={styles.badge}>✓ Messaging enabled</Text>
    </View>

    <TouchableOpacity style={styles.primaryButton} onPress={() => onAddToCart(part)}>
      <Text style={styles.primaryButtonText}>Add to cart</Text>
    </TouchableOpacity>
  </ScrollView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b1220'
  },
  backButton: {
    padding: 16
  },
  backText: {
    color: '#60a5fa',
    fontWeight: '600'
  },
  hero: {
    width: '100%',
    height: 240
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    padding: 16,
    gap: 12
  },
  title: {
    color: '#f9fafb',
    fontSize: 22,
    fontWeight: '700'
  },
  subtitle: {
    color: '#9ca3af',
    fontSize: 14
  },
  location: {
    color: '#e5e7eb',
    fontSize: 13
  },
  price: {
    color: '#34d399',
    fontSize: 20,
    fontWeight: '800'
  },
  sectionLabel: {
    color: '#f9fafb',
    fontWeight: '700',
    paddingHorizontal: 16,
    marginTop: 8,
    marginBottom: 4
  },
  description: {
    color: '#e5e7eb',
    paddingHorizontal: 16,
    lineHeight: 20
  },
  badges: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    paddingHorizontal: 16,
    marginBottom: 16
  },
  badge: {
    backgroundColor: '#111827',
    color: '#d1d5db',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 9999,
    borderWidth: 1,
    borderColor: '#1f2937'
  },
  primaryButton: {
    marginHorizontal: 16,
    marginBottom: 24,
    backgroundColor: '#2563eb',
    paddingVertical: 14,
    borderRadius: 12,
    alignItems: 'center'
  },
  primaryButtonText: {
    color: '#f9fafb',
    fontWeight: '700',
    fontSize: 16
  }
});
