import React,  { useState } from 'react';
import {View, ScrollView, Text, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar';
import ResultList from '../components/ResultList';
import useResult from '../hooks/useResult';


const SearchSreen = () => {

    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResult( term);

    const filterResultsByPrice = (price) => {
        return results.filter(results => {
            return results.price === price;
        });
    };

    return (
        <View style = {style.overall}> 
            <SearchBar term={term} 
            onTermChange={setTerm} 
            onTermSubmit= {() => searchApi(term)} />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>We have found: {results.length} results</Text>

            <ScrollView>

                <ResultList results={filterResultsByPrice('$')} title="COST EFFECTIVE"/>

                <ResultList results={filterResultsByPrice('$$')} title="BIT PRICIER"/>

                <ResultList results={filterResultsByPrice('$$$')} title="BIG SPENDER"/>

            </ScrollView>

        </View>
    )
}

export default SearchSreen;

const style = StyleSheet.create({
    overall:{
        marginHorizontal: 15,
        flex: 1
    }

    
})