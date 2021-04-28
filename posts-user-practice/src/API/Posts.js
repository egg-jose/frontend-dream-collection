const fetchPosts = async() => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json()
    return data;
  } catch(e) {
    console.error(e);
    throw new Error(e);
  }
}

export default fetchPosts;