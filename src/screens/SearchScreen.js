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
        <> 
            <SearchBar term={term} 
            onTermChange={setTerm} 
            onTermSubmit= {() => searchApi(term)} />
            {errorMessage ? <Text>{errorMessage}</Text> : null}
          

            <ScrollView>

                <ResultList results={filterResultsByPrice('$')} 
                title="COST EFFECTIVE"/>

                <ResultList results={filterResultsByPrice('$$')} 
                title="BIT PRICIER"/>

                <ResultList results={filterResultsByPrice('$$$')} 
                title="BIG SPENDER"/>

            </ScrollView>

        </>
    )
}

export default SearchSreen;

const style = StyleSheet.create({
    
})