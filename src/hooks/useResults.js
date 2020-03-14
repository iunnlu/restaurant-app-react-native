import {useEffect, useState} from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    
    const searchApi = (searchTerm) => {
        yelp.get('/search', {
            params: {
                limit: 50,
                term: searchTerm,
                location: 'san jose'
            }
        }).then((response) => {
            setResults(response.data.businesses);
        }).catch((err) => {
            setErrorMessage('Something went wrong!');
        })
    }

    useEffect(() => {
        searchApi("pasta");
    }, []);

    return [searchApi, results, errorMessage];
}