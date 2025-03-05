import { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, Button, StyleSheet } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import dummyData from '@/constants/dummyData';

export default function ProductDetailScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  // Convert id to number to match dummyData
  const product = dummyData.products.find((p) => p.id === Number(id));

  // Available weight variants
  const variants = [
    { label: '1kg', multiplier: 1 },
    { label: '5kg', multiplier: 5 },
    { label: '10kg', multiplier: 10 }
  ];

  // State to track selected variant
  const [selectedVariant, setSelectedVariant] = useState(variants[0]);

  if (!product) return <Text style={styles.errorText}>Product not found</Text>;

  // Handle add to cart logic
  const handleAddToCart = () => {
    alert(`${product.name} (${selectedVariant.label}) added to cart!`);
    // Implement cart logic here
  };

  return (
    <View style={styles.container}>
      {/* Product Image */}
      <Image source={{ uri: product.image }} style={styles.productImage} />

      {/* Product Name & Price */}
      <Text style={styles.productName}>{product.name}</Text>
      <Text style={styles.productPrice}>₹{product.price * selectedVariant.multiplier}</Text>

      {/* Variants Selection */}
      <Text style={styles.variantTitle}>Select Variant:</Text>
      <FlatList
        horizontal
        data={variants}
        keyExtractor={(item) => item.label}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.variantButton,
              selectedVariant.label === item.label && styles.variantSelected
            ]}
            onPress={() => setSelectedVariant(item)}
          >
            <Text style={styles.variantText}>{item.label}</Text>
          </TouchableOpacity>
        )}
      />

      {/* Add to Cart Button */}
      <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
        <Text style={styles.addToCartText}>Add to Cart</Text>
      </TouchableOpacity>

      {/* Go Back Button */}
      <Button title="Go Back" onPress={() => router.back()} />
    </View>
  );
}

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  productImage: {
    width: '100%',
    height: 250,
    borderRadius: 10,
  },
  productName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  productPrice: {
    fontSize: 20,
    color: 'green',
  },
  variantTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
  },
  variantButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginVertical: 10,
    marginRight: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  variantSelected: {
    backgroundColor: '#007bff',
    borderColor: '#007bff',
  },
  variantText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  addToCartButton: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 20,
  },
  addToCartText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  errorText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
    color: 'red',
  },
});

