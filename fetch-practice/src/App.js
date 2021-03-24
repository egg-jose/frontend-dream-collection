import React, {useState, useEffect} from 'react';

import './App.css';
import Card from './Card';

function App() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    const fetchPosts = async() => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json()
        setPosts(data);
      } catch(e) {
        console.error(e);
      }
    }
    fetchPosts();
  })
  return (
    <div className="App">
      {
        posts.map( (post) => {
          const {userId, id, title, body} = post
          return <Card userId = {userId} id = {id} title = {title} body = {body} key={id}/>
        })
      }
    </div>
  );
}

export default App;
