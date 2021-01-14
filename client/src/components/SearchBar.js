import React, { useState } from 'react';

import { Link, useHistory } from 'react-router-dom';


export const SearchBar = () => {

    const history = useHistory()
    const [input, setInput] = useState("");

    const handleChange = (e) => {
        e.preventDefault();
        setInput(e.target.value);
    }

    const handleSearch = () => {
        history.push(`item=${input}`)
    }


    return (
        <div>
        <div className="container search__navegacion">
            <div className="row mb-10" >
                <div className="col-md-4" >
                    <Link to="/" style={{textDecoration: 'none'}} >
                        <h1>LabCommerce App</h1>
                    </Link>
                </div>
                <div className="col-md-8" >
                    <form onSubmit={handleSearch} >
                        <input
                            className="search__input"
                            type="text"
                            placeholder="Busca tus productos..."
                            autoComplete='off'
                            value={input}
                            onChange={handleChange}

                        />
                        <button
                            type="submit"
                            className="btn btn-personalized"
                        >Buscar</button>


                    </form>
                </div>
            </div>
           
        </div>

        </div>


        
    
    )
}