import React from 'react';
import {View, Text, TextInput, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const SearchBar = ({term, onTermChange, onTermSubmit}) => {
    return (
        <View style={style.background}> 
            <FontAwesome name='search' style={style.iconStyle}/>
            <TextInput style={style.inputStyle} placeholder='Search'
                value={term}
                autoCapitalize='none'
                autoCorrect={false}
                onChangeText={onTermChange}
                onEndEditing={onTermSubmit}
            />

        </View>
    )
}

export default SearchBar;

const style = StyleSheet.create({

    background:{
        marginVertical: 15,
        backgroundColor: '#F0FEFE',
        height:50,
        borderRadius: 5,
        flexDirection: 'row',
        
    },

    inputStyle:{
        fontSize: 18,
        flex: 1
    },
    iconStyle:{
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal:15
    }
    
})