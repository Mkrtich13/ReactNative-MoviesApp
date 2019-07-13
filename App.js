import React, {Fragment} from 'react';
import { StyleSheet, ScrollView, View, Text, StatusBar } from 'react-native';
import { Header, Colors, DebugInstructions, ReloadInstructions } from 'react-native/Libraries/NewAppScreen';

// Custom Component
import Navigation from './Navigation/Navigation';

const App = () => {
  return (
    <Navigation />
  );
};

const styles = StyleSheet.create({
  main_container: {
    flex: 1
  }
});

export default App;
