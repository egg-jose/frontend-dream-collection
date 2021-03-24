import React, {useState, useEffect, useRef} from 'react';

import './App.css';
import Card from './Card';

function App() {
  const inputRef = useRef(null)
  const [posts, setPosts] = useState([])
  const [inputValue, setInputValue] = useState(null)
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
  const handleChange = (e) => {
    setInputValue(inputRef.current.value);
  }
  return (
    <React.Fragment>\
      <center>
        <label>User ID: </label>
        <input ref={inputRef} type="number" onChange={handleChange} style={{margin: '0 auto'}}/>
      </center>
      <div className="App">
        {
          inputValue ?
            posts.map( (post) => {
              const {userId, id, title, body} = post 
              if(userId.toString() === inputValue) {
                return <Card userId = {userId} id = {id} title = {title} body = {body} key={id}/>
              }
              return null;
            }) :
            posts.map( (post) => {
              const {userId, id, title, body} = post
                return <Card userId = {userId} id = {id} title = {title} body = {body} key={id}/>
            })
        }
      </div>
    </React.Fragment>
  );
}

export default App;
