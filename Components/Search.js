import React from 'react';
import { View, Button, TextInput, StyleSheet, FlatList, Text } from 'react-native';
import films from '../Helpers/filmsData';
import FilmItem from './FilmItem';
import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi';

class Search extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      films: [],
      searched: ""
    }
  }

  _loadFilms() {
    getFilmsFromApiWithSearchedText(this.state.searched).then((data) => {
      this.setState({
        films: data.results
      })
    })
  }


  render() {
    return (
      <View style={styles.main_container}>
        <TextInput style={ styles.textinput } onChangeText={(text) => this.setState({searched: text})} placeholder="Titre du film" />
        <Button style={ {height: 50} } title="Rechercher" onPress={ () => { this._loadFilms() } }/>
        <FlatList 
          data={this.state.films} 
          keyExtractor={(item) =>  item.id.toString() }
          renderItem={({item}) => <FilmItem film={item} /> }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    marginTop: 50
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  }
})

export default Search;
