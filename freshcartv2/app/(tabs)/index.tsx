import { View, Text, FlatList, Image, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import dummyData from '../../constants/dummyData';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: '#fff' }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>Fresh Grocery</Text>
      
      <FlatList
        data={dummyData.products}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={{ flex: 1, margin: 8, backgroundColor: '#f5f5f5', padding: 10, borderRadius: 8 }}
            onPress={() => router.push(`/product/${item.id}`)}
          >
            <Image source={{ uri: item.image }} style={{ width: '100%', height: 120, borderRadius: 8 }} />
            <Text style={{ fontWeight: 'bold', marginTop: 5 }}>{item.name}</Text>
            <Text style={{ color: 'green' }}>₹{item.price}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
