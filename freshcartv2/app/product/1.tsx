import { View, Text, Image, Button } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import dummyData from '../../constants/dummyData';

export default function ProductDetailScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  const product = dummyData.products.find((p) => p.id.toString() === id);

  if (!product) return <Text>Applee</Text>;

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Image source={{ uri: product.image }} style={{ width: '100%', height: 200, borderRadius: 10 }} />
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginVertical: 10 }}>{product.name}</Text>
      <Text style={{ fontSize: 18, color: 'green' }}>₹{product.price}</Text>
      <Button title="Add to Cart" onPress={() => alert("Added to Cart")} />
      <Button title="Go Back" onPress={() => router.back()} />
    </View>
  );
}
