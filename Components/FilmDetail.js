import React from 'react';
import { StyleSheet, Text, View, ActivityIndicator, ScrollView, Image } from 'react-native';
import { getFilmDetailFromApi } from '../API/TMDBApi';
import { getImageFromApi } from '../API/TMDBApi';

class FilmDetail extends React.Component {
    constructor(props) {
        super(props)
        this.separator = ''
        this.genresValue = ''
        this.companiesValue = ''
        this.state = {
            film: undefined,
            isLoading: true,
            genres: '',
            companies: ''
        }
    }

    // Cycle de vie apres render(), pour récuperer les films aprés le rendu du component
    componentDidMount() {
        getFilmDetailFromApi(this.props.navigation.state.params.idFilm).then(data => {
            // Mettre un séparateur si plusieurs genres
            data.genres.map((item, key) => {
                if(key>0 && key<data.genres.length)this.separator = ' / ';
                this.genresValue += this.separator+item.name
            })
            
            this.separator = '';

            data.production_companies.map((item, key) => {
                if(key>0 && key<data.genres.length)this.separator = ' / ';
                this.companiesValue += this.separator+item.name
            })

            this.setState({
                film: data,
                isLoading: false,
                genres: this.genresValue,
                companies: this.companiesValue
            })
        })
    }

    _displayLoading() {
        if(this.state.isLoading) {
            return (
            <View style={styles.loading_container}>
                <ActivityIndicator size="large"/>
            </View>
            )
        }
    }

    _displayFilm() {
        if(this.state.film != undefined) {
            console.log(this.state.film)
            return (
                <View style={styles.detail_container}>
                    <Image 
                        style={ styles.image_background }
                        source={{uri: getImageFromApi(this.state.film.backdrop_path)}}
                    />
                    <View style={styles.film_detail_view}>
                        <Text style={styles.film_title}>{ this.state.film.title }</Text>
                        
                        <ScrollView style={styles.detail_movie}>
                            <Text style={styles.detail_text}>{ this.state.film.overview }</Text>
                        </ScrollView>    
                    </View>
                    <View style={styles.film_information}>
                        <Text>Sorti : {this.state.film.release_date} </Text>
                        <Text>Note : {this.state.film.vote_average} / 10</Text>
                        <Text>Nombre de votes : {this.state.film.vote_count}</Text>
                        <Text>Budget : {this.state.film.budget} $</Text>
                        <Text>Genre(s) : {this.state.genres} </Text>
                        <Text>Compagnie(s) : { this.state.companies }</Text>
                    </View>

                </View>
                
            )
        }
    }

    render() {
        const idFilm = this.props.navigation.state.params.idFilm;
        return (
            <View style={styles.main_container}>
                { this._displayLoading() }
                { this._displayFilm() }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1
    },
    loading_container: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },
    image_background: {
        flex: 1,
        padding: 5
    },
    detail_container: {
        flex: 1
    },
    film_title: {
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold',
        padding: 15,
        flexWrap: 'wrap'
    },
    film_detail_view: {
        flex: 2,
        padding: 10
    },
    detail_text: {
        fontStyle: 'italic',
        color: 'grey'
    },
    film_information: {
        flex: 1,
        padding: 10

    }
})

export default FilmDetail;
