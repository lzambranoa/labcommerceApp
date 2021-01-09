import React from 'react';
import queryString from 'query-string';

import { useLocation } from 'react-router-dom';
import { useForm } from '../hooks/useForm';
import { Card } from './Card';


export const SearchBar = ({ history }) => {

    const location = useLocation();
    const { q = ''} = queryString.parse(location.search);

    const [ formValues, handleInputChange, reset ] = useForm({
        searchText: q,
    });

    const { searchText } = formValues;

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`);
        reset();
    }



    return (
        <div>
        <div className="container search__navegacion">
            <div className="row" >
                <div className="col-md-4" >
                    <h1>LabCommerce App</h1>
                </div>
                <div className="col-md-8" >
                    <form onSubmit={handleSearch} >
                        <input
                            className="search__input"
                            type="text"
                            placeholder="Busca tus productos..."
                            autoComplete='off'
                            name="searchText"
                            value={searchText}
                            onChange={handleInputChange}

                        />
                        <button
                            type="submit"
                            className="btn btn-personalized"
                        >Buscar</button>


                    </form>
                </div>
            </div>
           
        </div>
        <Card />

        </div>


        
    
    )
}