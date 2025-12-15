import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Part } from '../data/sampleParts';

export type PartCardProps = {
  part: Part;
  onPress: (part: Part) => void;
  onAddToCart: (part: Part) => void;
};

export const PartCard: React.FC<PartCardProps> = ({ part, onPress, onAddToCart }) => (
  <TouchableOpacity style={styles.card} onPress={() => onPress(part)}>
    <Image source={{ uri: part.image }} style={styles.thumbnail} />
    <View style={styles.content}>
      <Text style={styles.name}>{part.name}</Text>
      <Text style={styles.meta}>{part.vehicle} • {part.condition}</Text>
      <Text style={styles.price}>${part.price.toFixed(2)}</Text>
      <View style={styles.footer}>
        <Text style={styles.location}>{part.location}</Text>
        <TouchableOpacity style={styles.cta} onPress={() => onAddToCart(part)}>
          <Text style={styles.ctaText}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#111827',
    borderRadius: 16,
    padding: 12,
    flexDirection: 'row',
    gap: 12,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 12,
    elevation: 4
  },
  thumbnail: {
    width: 96,
    height: 96,
    borderRadius: 12,
    backgroundColor: '#1f2937'
  },
  content: {
    flex: 1,
    gap: 6
  },
  name: {
    color: '#f9fafb',
    fontWeight: '600',
    fontSize: 16
  },
  meta: {
    color: '#9ca3af',
    fontSize: 13
  },
  price: {
    color: '#34d399',
    fontWeight: '700',
    fontSize: 16
  },
  location: {
    color: '#e5e7eb',
    fontSize: 13
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 4
  },
  cta: {
    backgroundColor: '#2563eb',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 9999
  },
  ctaText: {
    color: '#f9fafb',
    fontWeight: '700'
  }
});
