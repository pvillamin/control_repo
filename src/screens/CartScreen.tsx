import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Part } from '../data/sampleParts';

export type CartItem = Part;

export type CartScreenProps = {
  cart: CartItem[];
  onRemove: (part: Part) => void;
};

export const CartScreen: React.FC<CartScreenProps> = ({ cart, onRemove }) => {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <ScrollView style={styles.container} contentInsetAdjustmentBehavior="automatic">
      <Text style={styles.heading}>Your cart</Text>
      {cart.length === 0 && <Text style={styles.empty}>No items yet. Add a part to get started.</Text>}

      {cart.map((item) => (
        <View key={item.id} style={styles.item}>
          <View style={{ flex: 1 }}>
            <Text style={styles.itemName}>{item.name}</Text>
            <Text style={styles.meta}>{item.vehicle} • {item.condition}</Text>
          </View>
          <Text style={styles.price}>${item.price.toFixed(2)}</Text>
          <TouchableOpacity onPress={() => onRemove(item)} style={styles.remove}>
            <Text style={styles.removeText}>Remove</Text>
          </TouchableOpacity>
        </View>
      ))}

      {cart.length > 0 && (
        <View style={styles.summary}>
          <Text style={styles.summaryLabel}>Subtotal</Text>
          <Text style={styles.summaryValue}>${total.toFixed(2)}</Text>
          <TouchableOpacity style={styles.checkout}>
            <Text style={styles.checkoutText}>Proceed to checkout</Text>
          </TouchableOpacity>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0b1220',
    padding: 16
  },
  heading: {
    color: '#f9fafb',
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 12
  },
  empty: {
    color: '#9ca3af'
  },
  item: {
    backgroundColor: '#111827',
    borderRadius: 12,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#1f2937'
  },
  itemName: {
    color: '#f9fafb',
    fontWeight: '600'
  },
  meta: {
    color: '#9ca3af'
  },
  price: {
    color: '#34d399',
    fontWeight: '700'
  },
  remove: {
    padding: 8
  },
  removeText: {
    color: '#ef4444'
  },
  summary: {
    backgroundColor: '#111827',
    borderRadius: 12,
    padding: 16,
    gap: 8,
    borderWidth: 1,
    borderColor: '#1f2937'
  },
  summaryLabel: {
    color: '#e5e7eb',
    fontWeight: '600'
  },
  summaryValue: {
    color: '#f9fafb',
    fontSize: 20,
    fontWeight: '700'
  },
  checkout: {
    backgroundColor: '#2563eb',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 8
  },
  checkoutText: {
    color: '#f9fafb',
    fontWeight: '700'
  }
});
