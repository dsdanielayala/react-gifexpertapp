export const getGifs = async ( category ) => {
    const apiKey = 'B2QPTDuJ8DnxTWDaMYLKC3Vw0ER3GQHa';
    const url = `http://api.giphy.com/v1/gifs/search?q=${ encodeURI(category) }&limit=10&api_key=${apiKey}`;
    const resp = await fetch(url);
    const {data} = await resp.json();
    
    const gifs = data.map( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    return gifs;
}