import React, {Fragment} from 'react';
import { StyleSheet, ScrollView, View, Text, StatusBar } from 'react-native';
import { Header, Colors, DebugInstructions, ReloadInstructions } from 'react-native/Libraries/NewAppScreen';

// Custom Component
import Search from './Components/Search';

const App = () => {
  return (
    <View>
      <Search />
    </View>
  );
};

const styles = StyleSheet.create({
  
});

export default App;
