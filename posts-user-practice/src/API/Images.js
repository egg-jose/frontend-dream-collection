

const fetchImages = async() => {
  try {
    const response = await fetch(`https://api.unsplash.com/photos/random?client_id=Uo45_Jlr6o986ydgloQn42R_z0OWdd6g33L7odsFF8k&orientation=portrait`);
    const data = await response.json()
    return data;
  } catch(e) {
    console.error(e);
    throw new Error(e);
  }
}

export default fetchImages;