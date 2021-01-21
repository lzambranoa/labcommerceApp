import React from 'react';

export const Card = ({ product }) => {

    const url = product.permalink;

    return (
        <div className="card m-2" style={{ maxWidth: 320 }}>
            <div className="row g-0 no-gutters">
                <div className="col-md-4">
                    <img src={product.thumbnail} alt={product.title} className="card-img pt-2" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{product.title}</h5>
                        <p className="card-text">Precio: ${product.price}</p>
                        <p className="card-text">Estado: {product.condition}</p>
                        <p className="card-text">Stock: {product.available_quantity}</p>
                        <a href={url}>Más Información...</a>
                    </div>
                </div>
            </div>
        </div>
    )
}