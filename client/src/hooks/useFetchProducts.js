import { useEffect, useState } from "react"
import { getProducts } from "../helpers/getProducts";

export const useFetchProducts = (category) => {


   const [state, setState] = useState({
       data: []
   });

   useEffect(() =>{
       getProducts( category )
                .then(prods => {

                    setState({
                        data: prods,
                    });
                });
   }, [category]);

   return state;
    
}