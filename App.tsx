import React from 'react';
import { View, Text } from 'react-native';
import { ProductList } from './components/ProductList';

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Welcome to the Farm-to-Table App!</Text>
      <ProductList />
    </View>
  );
};

export default App;