import React from 'react';
import { useForm } from '../hooks/useForm';


export const SearchBar = () => {

    const [ formValues, handleInputChange, reset ] = useForm({
        searchText: '',
    });

    const { searchText } = formValues;
    console.log(searchText);

    const handleSearch = (e) => {
        e.preventDefault();
        reset();
    }



    return (
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
    )
}