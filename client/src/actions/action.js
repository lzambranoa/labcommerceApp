export const searchProducts = (items, condition, sort, page) => {
    page ? (page = `&page=${page}`) : (page = '');

    return (dispatch) => {
        return fetch(`http://localhost:3001/api/search?query=${item}${page}`)
            .then((res) => res.json())
            .then((res) => {
                if(condition) {
                    res.results = res.results.filter((product) => product.condition === condition);
                }
                return res;
            })
            .then((res) => {
                if(sort){
                    sort === 'asc'
                        ? (res.results = res.results.sort((a,b) => a.price - b.price))
                        : (res.results = res.results.sort((a,b) => b.price - a.price))
                }
                return res;
            })
            .then((data) => {
                dispatch({
                    type: 'SEARCH_PRODUCTS',
                    payload: data,
                });
            });
    }
}

export const searchBycategory = (id) => {
    return (dispatch) =>{
        return fetch(`http://localhost:3001/api/search?category=${id}`)
            .then((res) => res.json())
            .then((res) => {
                dispatch({
                    type: 'SEARCH_BY_CATEGORY',
                    payload: res,
                });
            });
    };
}

export const getCategories = () => {
    return(dispatch) => {
        return fetch("http://localhost:3001/api/categories")
            .then((res) => res.json())
            .then((res) => {
                dispatch({
                    type: 'GET_CATEGORIES',
                    payload: res,
                });
            });
    }
}

