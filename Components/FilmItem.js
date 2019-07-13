import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { getImageFromApi } from '../API/TMDBApi';


class FilmItem extends React.Component {
    render() {
        const Film = this.props.film;
        const displayDetailForFilm = this.props.displayDetailForFilm; 

        return (
            <TouchableOpacity style={styles.main_container} onPress={() => displayDetailForFilm(Film.id)}>
                <Image
                    style={styles.image_movie}
                    source={{uri: getImageFromApi(Film.poster_path)}}
                />

                <View style={styles.data_movie}>
                    <View style={styles.data_movie_header}>
                        <Text style={styles.title_text}>{Film.title}</Text>
                        <Text style={styles.vote_text}>{Film.vote_average}</Text>
                    </View>

                    <View style={styles.description_container}>
                        <Text style={styles.overview_text} numberOfLines={6}>{Film.overview}</Text>
                    </View>

                    <View style={styles.date_container}>
                        <Text style={styles.release_date}>Film sorti le {Film.release_date}</Text>
                    </View>
                </View>
                
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        height: 190,
        marginTop: 25,
        flexDirection: "row",
    },
    image_movie: {
        padding: 5,
        flex: 1

    },
    data_movie: {
        flexDirection: 'column',
        padding: 5,
        flex: 2
    },
    data_movie_header: {
        flex: 2,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    vote_text: {
        fontSize: 18,
        color: 'grey'
    },
    description_container: {
        flex: 7
    },
    date_container: {
        flex: 1
    },
    overview_text: {
        fontStyle: 'italic'
    },
    release_date: {
        textAlign: 'right'
    },
    title_text: {
        flexWrap: 'wrap',
        fontWeight: 'bold',
        fontSize: 15
    }
});

export default FilmItem;