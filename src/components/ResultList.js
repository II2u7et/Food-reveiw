import React from 'react';
import {View, Text, StyleSheet, FlatList } from 'react-native';
import ResultsDetail from './ResultsDetail';

const ResultList = ({title, results}) => {
    return(
        <View >
            <Text style={style.title}>{'\n'} {title} {'\n'} </Text>
            <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false} 
            data={results}
            keyExtractor={(results) => results.id}
            renderItem={({item} )=> {
                return (
                  <ResultsDetail result={item} />
                )
            }}
            />
        </View>

    )
};

const style = StyleSheet.create({

    title:{
        fontSize: 18,
        fontWeight: 'bold'
    },
   
})

export default ResultList;