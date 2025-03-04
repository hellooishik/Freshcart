import { View, Text, FlatList, Button } from 'react-native';
import { useState, useEffect } from 'react';
import dummyData from '../../constants/dummyData';

// Define Type for Cart Items
type CartItem = {
  id: number;
  name: string;
  price: number;
  image: string;
};

export default function CartScreen() {
  const [cart, setCart] = useState<CartItem[]>([]); // Define Type Here

  // Simulating added items (Replace this with real cart logic)
  useEffect(() => {
    setCart([
      {
        id: 1,
        name: "Apple",
        price: 50,
        image: "https://via.placeholder.com/150",
      },
      {
        id: 2,
        name: "Banana",
        price: 30,
        image: "https://via.placeholder.com/150",
      },
    ]);
  }, []);

  return (
    <View style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>Your Cart</Text>

      {cart.length === 0 ? (
        <Text>Your cart is empty</Text>
      ) : (
        <FlatList
          data={cart}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderBottomWidth: 1 }}>
              <Text style={{ fontSize: 16 }}>{item.name}</Text>
              <Text style={{ fontSize: 16, color: 'green' }}>₹{item.price}</Text>
            </View>
          )}
        />
      )}

      <Button
        title="Proceed to Checkout"
        disabled={cart.length === 0}
        onPress={() => alert("Proceeding to Payment")}
      />
    </View>
  );
}
