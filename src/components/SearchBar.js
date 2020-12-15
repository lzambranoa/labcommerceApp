import React from 'react';


export const SearchBar = () => {

    return (
        <div className="nav container">
            <div className="row" >
                <div className="col-md-4" >
                    <h1>LabCommerce App</h1>
                </div>
                <div className="col-md-8" >
                    <input 
                    type="text" 
                    placeholder="Busca tus productos..."
                    />
                    <button>Buscar</button>
                </div>
            </div>
        </div>
    )
}