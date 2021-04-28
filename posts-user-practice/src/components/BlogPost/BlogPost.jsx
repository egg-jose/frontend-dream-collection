import React, { useEffect, useState } from "react";
import styled from "styled-components";

import fetchUser from "../../API/Users";
import fetchImage from "../../API/Images";

import defaultPic from "../../images/cat.jpg"

const BlogPostStyled = styled.div`
  border: 1px solid;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  font-size: ${({ primary }) => ( primary ? "18px": "14px")};
  justify-content: space-between;
  height: 300px;
  margin: 20px 10px;
  overflow: hidden;
  width: ${({ primary }) => (primary ? "30%" : " 15%")};
  .header-banner {
    height: 16%;
    width: 100%;
    background-color: ${({ headerColor }) => (headerColor)};
  }
  .content {
    padding: 10px;
    max-height: 50%;
    overflow: auto;
    &::-webkit-scrollbar-track
    {
      -webkit-box-shadow: inset 0 0 6px #cabfbf;
      box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
      background-color: #F5F5F5;
    }
    &::-webkit-scrollbar
    {
      width: 6px;
      background-color: #F5F5F5;
    }
    &::-webkit-scrollbar-thumb
    {
      background-color: #000000;
    }

    .title {
      margin: 10px 0;
      font-size: 1.1em;
    }
    .body {
      overflow: hidden;
      font-size: 1em;
      line-height: 1.1em;
    }
  }
  .post-footer {
    display: flex;
    height: ${({primary}) => (primary ? "25%" : "10%")};
    padding: 0 10px;
    align-items: center;
    .profile-pic {
      border-radius: 50%;
      height: 50px;
      object-fit: cover;
      width: 50px;
      margin-right: 25px;
    }
    .user-name {
      margin-left: 5px;
    }
  }
`;

export default function BlogPost({ title, body, userId, primary, headerColor= '#000' }) {
  const [user, setUser] = useState({});
  useEffect(() => {
    const usersResult = async () => {
      try {
        let data = await fetchUser(userId);
        if(primary) {
          const picture = await fetchImage();
          console.log(picture);
          data = {...data,picture}
        }
        setUser(data);
      } catch (error) {
        console.error(`Error: ${error}`);
      }
    };
    usersResult();
  }, [userId, primary]);
  return (
    <BlogPostStyled data-testid="blog-post-styled" primary={primary} headerColor={headerColor}>
      <div className='header-banner' />
      <article className='content'>
        <h3 className='title'>{title}</h3>
        <p className='body'>{body}</p>
      </article>
      <div className='post-footer'>
        {primary && (<img class='profile-pic' alt='user profile' src={user.picture ? user.picture.urls.small : defaultPic} />)}
        <h3 className='user-name'>{user.name}</h3>
      </div>
    </BlogPostStyled>
  );
}
