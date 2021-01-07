import React from 'react';
import { useFetchProducts } from '../hooks/useFetchProducts';

export const ProductGrid = ({category}) => {

    const {data:products} = useFetchProducts(category)

    return(
        <>
            <h3>{ category }</h3>

            {
                products.map((prod) => 
                    <li>{prod.title}</li>
                )
            }
        </>
    )
}