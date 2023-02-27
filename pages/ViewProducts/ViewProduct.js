import { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
const ViewProducts = () => {
  const list = useSelector((state) => state.userProducts.userProducts);
  const flatlistTest = ({ item }) => {
    return (
      <View>
        <Text>{item.name}</Text>
      </View>
    );
  };

  return (
    <View>
      <FlatList data={list} renderItem={flatlistTest} keyExtractor={(item) => item.id} />
    </View>
  );
};
export default ViewProducts;
