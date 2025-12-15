import React, { useMemo, useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Part, PartCategory, sampleParts } from '../data/sampleParts';
import { PartCard } from '../components/PartCard';

export type PartsListScreenProps = {
  onSelectPart: (part: Part) => void;
  onAddToCart: (part: Part) => void;
};

const categories: (PartCategory | 'All')[] = ['All', 'Engine', 'Electrical', 'Body', 'Interior', 'Suspension'];

export const PartsListScreen: React.FC<PartsListScreenProps> = ({ onSelectPart, onAddToCart }) => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<(PartCategory | 'All')>('All');

  const results = useMemo(() => {
    const normalized = query.toLowerCase();
    return sampleParts.filter((part) => {
      const matchQuery = part.name.toLowerCase().includes(normalized) || part.vehicle.toLowerCase().includes(normalized);
      const matchCategory = category === 'All' || part.category === category;
      return matchQuery && matchCategory;
    });
  }, [query, category]);

  return (
    <ScrollView style={styles.container} contentInsetAdjustmentBehavior="automatic">
      <Text style={styles.heading}>Find pre-loved parts for less</Text>
      <Text style={styles.subhead}>Browse community listings with quality checks and seller messaging baked in.</Text>

      <TextInput
        placeholder="Search by part or vehicle"
        placeholderTextColor="#9ca3af"
        style={styles.search}
        value={query}
        onChangeText={setQuery}
      />

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filters} contentContainerStyle={{ gap: 8 }}>
        {categories.map((item) => (
          <TouchableOpacity
            key={item}
            onPress={() => setCategory(item)}
            style={[styles.filterChip, category === item && styles.filterChipActive]}
          >
            <Text style={[styles.filterText, category === item && styles.filterTextActive]}>{item}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.list}>
        {results.map((part) => (
          <PartCard key={part.id} part={part} onPress={onSelectPart} onAddToCart={onAddToCart} />
        ))}
        {results.length === 0 && (
          <Text style={styles.empty}>No listings found. Try a different keyword.</Text>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b1220',
    paddingTop: 16
  },
  heading: {
    color: '#f9fafb',
    fontSize: 24,
    fontWeight: '700',
    paddingHorizontal: 16
  },
  subhead: {
    color: '#9ca3af',
    paddingHorizontal: 16,
    marginTop: 4,
    marginBottom: 12
  },
  search: {
    backgroundColor: '#111827',
    color: '#e5e7eb',
    marginHorizontal: 16,
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: '#1f2937'
  },
  filters: {
    marginTop: 12,
    paddingHorizontal: 16
  },
  filterChip: {
    borderWidth: 1,
    borderColor: '#1f2937',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 9999,
    backgroundColor: '#0f172a'
  },
  filterChipActive: {
    backgroundColor: '#2563eb',
    borderColor: '#2563eb'
  },
  filterText: {
    color: '#e5e7eb'
  },
  filterTextActive: {
    color: '#f9fafb',
    fontWeight: '700'
  },
  list: {
    padding: 16
  },
  empty: {
    color: '#9ca3af',
    textAlign: 'center',
    marginTop: 32
  }
});
