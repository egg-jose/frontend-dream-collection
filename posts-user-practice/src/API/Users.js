const fetchUser = async(userId) => {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const data = await response.json()
    return data;
  } catch(e) {
    console.error(e);
    throw new Error(e);
  }
}

export default fetchUser;