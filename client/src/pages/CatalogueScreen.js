
import React, { useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { searchProducts } from '../actions/action';
import { Card } from '../components/Card';
import Categories from '../components/Categories';

export const CatalogueScreen = () => {

    const results = useSelector( state => state.product.results );
    console.log(results);
    const dispatch = useDispatch();
    const location = useLocation();

    const params = new URLSearchParams(location.pathname.slice(1));
    let item = params.get('item');
    let condition = params.get('condition');
    let sort = params.get('sort');
    let page = params.get('page');

    useEffect(() => {
        window.scrollTo(0, 0);

        item && dispatch(searchProducts(item, condition, sort, page));
    }, [item, sort, condition, page, dispatch]);


    return(
        <div className="container">
            <div className="row" >

            <div className="col-2" >
                <Categories />  
            </div>
            <div className="col-10" >
            <Container fluid className="grid card-columns animate__animated animate__fadeIn">
                <Row>
                        {results.results &&
                            results.results.map((product) => {
                                return <Card product={product} />;
                            })}
                </Row>
            </Container>
            {/* <NewPagination
                total={
                    results.paging && results.paging.total < 1000
                        ? results.paging.total
                        : 1029
                }
            /> */}
            </div>
            </div>
        </div>
    );
    
}