import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';

import { RestaurantCard } from '../components/RestaurantCard';

const isAndroid = Platform.OS === 'android';

export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const onChangeSearch = (query: string) => setSearchQuery(query);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar
          onChangeText={onChangeSearch}
          value={searchQuery}
          placeholder="search"
        />
      </View>
      <View style={styles.main}>
        <RestaurantCard />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  search: {
    padding: 16,
    marginTop: isAndroid ? StatusBar.currentHeight : 0,
  },
  main: {
    flex: 1,
    backgroundColor: 'blue',
    padding: 16,
  },
});
