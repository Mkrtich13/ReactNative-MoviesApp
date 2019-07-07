import React from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';

class Search extends React.Component {
  render() {
    return (
      <View style={styles.mt3}>
        <TextInput style={ styles.textinput } placeholder="Titre du film" />
        <Button title="Rechercher" onPress={ () => {  } }/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  },
  mt3 : {
    marginTop: 30
  }
})

export default Search;
