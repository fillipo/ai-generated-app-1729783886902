import React from 'react';
import { View, Text, FlatList } from 'react-native';

interface Product {
  id: number;
  name: string;
  price: number;
}

const products: Product[] = [
  { id: 1, name: 'Organic Tomatoes', price: 2.99 },
  { id: 2, name: 'Fresh Lettuce', price: 1.99 },
  { id: 3, name: 'Free-Range Eggs', price: 4.99 },
];

const ProductList = () => {
  return (
    <FlatList
      data={products}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View>
          <Text>{item.name}</Text>
          <Text>${item.price}</Text>
        </View>
      )}
    />
  );
};

export { ProductList };