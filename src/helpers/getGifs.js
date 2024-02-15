export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=U5pvOF6Zge2URcjC86D5W3yia8VCk38Q`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(img => {
        return {
        id: img.id,
        title: img.title,
        url: img.images?.downsized.url
        }
    })

    return gifs;


    }