export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=gCqdfdP66ZNiCQyCO6b1mi7AhsW3fFDm&limit=12&q=${encodeURI(
    category
  )}`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map(({ id, title, images }) => {
    return {
      id,
      title,
      url: images?.downsized_medium.url,
    };
  });

  return gifs;
};
