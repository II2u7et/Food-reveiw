import React from 'react';
import {View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import {withNavigation} from 'react-navigation';
import ResultsDetail from './ResultsDetail';


const ResultList = ({title, results, navigation}) => {

    if (!results.length) {return null;}
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
                    <TouchableOpacity onPress={() => navigation.navigate('ResultShow', {id: item.id})}>
                        <ResultsDetail result={item} />
                    </TouchableOpacity>
                  
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

export default withNavigation(ResultList);