import React from 'react';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';

const isAndroid = Platform.OS === 'android';

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.navbar}>
          <Text>Navbar</Text>
        </View>
        <View style={styles.main}>
          <Text>Main</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  navbar: {
    backgroundColor: 'red',
    padding: 16,
  },
  main: {
    flex: 1,
    backgroundColor: 'blue',
    padding: 16,
  },
});
