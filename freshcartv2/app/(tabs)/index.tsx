import { View, Text, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import dummyData from '@/constants/dummyData';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#f8f8f8' }}>
      
      {/* Banner Image */}
      <Image 
        source={{ uri: 'https://img.freepik.com/free-vector/grocery-store-sale-banner-template_23-2151089846.jpg' }} 
        style={{ width: '100%', height: 200, borderRadius: 12, marginBottom: 15 }}
      />

      <View style={{ paddingHorizontal: 16 }}>
        {/* Categories Section */}
        <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 10, color: '#333' }}>Categories</Text>
        <FlatList
          horizontal
          data={dummyData.categories}
          keyExtractor={(item) => item.id.toString()}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={{ 
                alignItems: 'center', 
                marginRight: 15, 
                backgroundColor: '#fff',
                padding: 10,
                borderRadius: 12,
                shadowColor: '#000',
                shadowOpacity: 0.1,
                shadowRadius: 5,
                elevation: 3
              }} 
              onPress={() => router.push(`/category/${item.id}`)}
            >
              <Image source={{ uri: item.image }} style={{ width: 70, height: 70, borderRadius: 50 }} />
              <Text style={{ fontSize: 14, fontWeight: '500', marginTop: 5, color: '#444' }}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>

      {/* Product Grid */}
      <View style={{ paddingHorizontal: 16, marginTop: 20 }}>
        <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 10, color: '#333' }}>Fresh Grocery</Text>
        <FlatList
          data={dummyData.products}
          keyExtractor={(item) => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={{ 
                flex: 1, 
                margin: 8, 
                backgroundColor: '#fff', 
                padding: 12, 
                borderRadius: 12,
                shadowColor: '#000',
                shadowOpacity: 0.1,
                shadowRadius: 5,
                elevation: 3
              }}
              onPress={() => router.push(`/product/${item.id}`)}
            >
              <Image source={{ uri: item.image }} style={{ width: '100%', height: 140, borderRadius: 8 }} />
              <Text style={{ fontWeight: 'bold', marginTop: 8, fontSize: 16, color: '#333' }}>{item.name}</Text>
              <Text style={{ color: 'green', fontSize: 16, fontWeight: 'bold' }}>₹{item.price}</Text>
            </TouchableOpacity>
          )}
        />
      </View>

    </ScrollView>
  );
}
