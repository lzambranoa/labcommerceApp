export const getProducts = async (category) => {

    const url = `https://api.mercadolibre.com/sites/MLA/search?q=${encodeURI(category)}`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const products = data.map(product => {
        return {
            id: product.id,
            title: product.title,
            price: product.price,
            currency_id: product.currency_id,
            available_quantity: product.available_quantity,
            thumbnail: product.thumbnail,
            condition: product.condition
        }
    })

    return products;
}