export const getProducts = async( category ) => {

    const url = `https://api.mercadolibre.com/sites/MLA/search?q=${encodeURI(category)}`;
    const resp = await fetch( url );
    const {data} = await resp.json();

    const products = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return products;
}