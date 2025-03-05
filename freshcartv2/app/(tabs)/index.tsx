import { View, Text, FlatList, Image, TouchableOpacity, ScrollView, TextInput, Dimensions } from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import dummyData from '@/constants/dummyData';



const { width } = Dimensions.get('window');

export default function HomeScreen() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  // Ensure products are grouped correctly by category ID
  const groupedProducts = dummyData.products.reduce((acc, product) => {
    if (!acc[product.category]) {
      acc[product.category] = [];
    }
    acc[product.category].push(product);
    return acc;
  }, {} as Record<string, any[]>);

  return (
    <ScrollView style={{ flex: 1, backgroundColor: '#f8f8f8', paddingBottom: 20 }}>
      {/* Header */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          padding: 10,
          backgroundColor: '#fff',
          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowRadius: 5,
          elevation: 3,
          marginTop: 50,
        }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
          <View style={{ flex: 1 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Delivery in 8 minutes</Text>
            <Text style={{ fontSize: 12, color: 'gray' }}>B62, Pocket B, South City I, Sector 30, G...</Text>
          </View>
          <Ionicons name="chevron-down" size={16} color="black" style={{ marginLeft: 5 }} />
        </View>
        <TouchableOpacity style={{ marginLeft: 10 }}>
          <Ionicons name="person-circle-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#f0f0f0',
          borderRadius: 10,
          paddingHorizontal: 12,
          marginHorizontal: 10,
          marginTop: 10,
          marginBottom: 10,
          width: width * 0.95,
          alignSelf: 'center',
        }}>
        <Ionicons name="search" size={18} color="gray" style={{ marginRight: 5 }} />
        <TextInput
          placeholder='Search "egg"'
          style={{ flex: 1, fontSize: 14, paddingVertical: 8 }}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>

      {/* Banner Image */}
      <Image
        source={{ uri: 'https://img.freepik.com/free-vector/grocery-store-sale-banner-template_23-2151089846.jpg' }}
        style={{ width: '100%', height: 200 }}
      />

      {/* Categories Section */}
      <Text style={{ fontSize: 22, fontWeight: 'bold', margin: 10, color: '#333' }}>Shop by Categories</Text>
      <FlatList
        data={dummyData?.categories || []}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        scrollEnabled={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              flex: 1,
              padding: 10,
              backgroundColor: '#fff',
              borderRadius: 12,
              margin: 5,
              elevation: 3,
              alignItems: 'center'
            }}>
            <Image
              source={{ uri: item.image }}
              style={{ width: 60, height: 60, borderRadius: 50 }}
            />
            <Text style={{ fontSize: 14, textAlign: 'center', marginTop: 5 }}>
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />

      {/* Three Card Views */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginVertical: 10 }}>
        {["Offer Zone", "Best Sellers", "New Arrivals"].map((title, index) => (
          <TouchableOpacity key={index} style={{ backgroundColor: '#fff', padding: 15, borderRadius: 10, shadowColor: '#000', shadowOpacity: 0.1, elevation: 3 }}>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>{title}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Render Categories and Products */}
      {dummyData.categories.map((category, index) => {
        const products = groupedProducts[category.id] || [];

        if (products.length === 0) return null;

        return (
          <View key={category.id} style={{ marginTop: 20 }}>
            <Text style={{ fontSize: 22, fontWeight: 'bold', margin: 10, color: '#333' }}>
              {category.name}
            </Text>
            <FlatList
  data={products}
  keyExtractor={(item) => item.id.toString()}
  horizontal
  showsHorizontalScrollIndicator={false}
  renderItem={({ item }) => (
    <TouchableOpacity
      style={{
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 10,
        margin: 5,
        elevation: 4,
        width: 160,
        position: 'relative',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 3 },
      }}>
      {/* Discount Tag */}
      {item.discount && (
        <View
          style={{
            position: 'absolute',
            top: 5,
            left: 5,
            backgroundColor: '#007bff',
            paddingHorizontal: 6,
            paddingVertical: 2,
            borderRadius: 5,
          }}>
          <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold' }}>
            {item.discount}% OFF
          </Text>
        </View>
      )}

      {/* Product Image */}
      <Image
        source={{ uri: item.image }}
        style={{ width: 120, height: 120, borderRadius: 10, alignSelf: 'center' }}
      />

      <Text style={{ fontSize: 12, color: 'gray', marginTop: 5 }}>🕒 8 MINS</Text>

      {/* Product Name */}
      <Text style={{ fontSize: 14, fontWeight: 'bold', marginTop: 5 }}>{item.name}</Text>

      {/* Weight */}
      <Text style={{ fontSize: 12, color: 'gray' }}>{item.weight}</Text>

      {/* Price */}
      <Text style={{ fontSize: 16, fontWeight: 'bold', marginTop: 5, color: '#333' }}>
        ₹{item.price}
      </Text>

      {/* Add Button */}
      <TouchableOpacity
        style={{
          marginTop: 10,
          backgroundColor: '#28a745',
          paddingVertical: 5,
          borderRadius: 5,
          alignItems: 'center',
        }}>
        <Text style={{ color: '#fff', fontSize: 14, fontWeight: 'bold' }}>Add</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  )}
/>
          </View>
        );
      })}
      {/* Blinkit Last Minute App Banner */}
<View
  style={{
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    backgroundColor: '#f8f8f8',
  }}>
  <Text style={{ fontSize: 40, fontWeight: 'bold', color: '#333' , marginBottom: 70 , justifyContent : 'center', textAlign: 'center'}}>
    India's last minute app
    <Text style={{ color: 'red' }}> ❤️</Text>
  </Text>
  <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#ddd', marginTop: 5,  marginBottom: 70}}>
    Freshcart
  </Text>
</View>
    </ScrollView>
  );
}
