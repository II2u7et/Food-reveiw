import React from 'react';
import {View, Image, Text, StyleSheet } from 'react-native';

const ResultDetails = ({result}) => {
    return(
        <View style={styles.container}>
        
            <Image style = {styles.image}
                source={{uri: result.image_url}}/>

            <Text style={styles.name}>{result.name}</Text>
            <Text style={styles.review}>Rating: {result.rating}, {result.review_count} reviews </Text>
            

        </View>
    )
}

const styles = StyleSheet.create({

    image:{
        width: 250,
        height:120,
        borderRadius: 4
    },
    name:{
        fontWeight: 'bold',
        fontSize: 14,
        marginVertical: 5
    },
    review:{
        color: 'gray',
        fontSize: 11,
    },
    container:{
        marginHorizontal: 5
    }

})

export default ResultDetails;