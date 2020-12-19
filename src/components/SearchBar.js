import React from 'react';
import { useForm } from '../hooks/useForm';


export const SearchBar = () => {

    const [ formValues, handleInputChange, reset ] = useForm({
        searchText: 'initial',
    });

    const { searchText } = formValues;

    const handleSearch = (e) => {
        e.preventDefault();
        console.log(e.target.value);
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