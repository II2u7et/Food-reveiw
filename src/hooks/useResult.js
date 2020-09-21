import React,  { useState, useEffect } from 'react';
import yelp from '../api/yelp';

const useResult = (searchTerm) =>{

    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
   
    const searchApi = async (searchTerm) => {
        try {
            const reponse = await yelp.get('/search',{
                params:{
                    limit: 50,
                    term: searchTerm,
                    location: 'Wellington',
                    country: 'NZ'
                }
            });
            setResults(reponse.data.businesses);
        } catch(err){
            setErrorMessage('Something went wrong')
        }
       
    };

    useEffect(() => {
        searchApi(searchTerm);
    }, []);

    return[searchApi, results, errorMessage];
}

export default useResult;