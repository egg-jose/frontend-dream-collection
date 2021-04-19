import React, { useEffect, useState } from 'react'
import styled from "styled-components";

import fetchPosts from '../../API/Posts';
import BlogPost from '../BlogPost'

const PostContainerStyled = styled.div`
  background-color: ${({ darkMode }) => darkMode ? '#484848' : '#e3e3e3' };
  color: ${({ darkMode }) => darkMode ? '#fff' : '#000' };
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 100%;
  min-height: 100vh;
  padding: 0 10%;
`

export default function PostContainer({ darkMode = false }) {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    const postsResult = async () => {
      try {
        const data = await fetchPosts()
        setPosts(data.sort(() => 0.5 - Math.random()))
      } catch (error) {
        console.error(`Error: ${error}`)
      }
    }
    postsResult();

  }, [])
  return (
    <PostContainerStyled darkMode = {darkMode}>
      {
        posts.map((post, index) => <BlogPost {...post} key={index} primary={index <=2  ? true : false} headerColor={ index <=2 ? 'violet' : '#000'}/>)
      }
    </PostContainerStyled>
  )
}
