import React from 'react'
import './Card.css'

export default function Card({userId, id, title, body}) {
  return (
    <div className="card">
      <p className="user-id">User ID: {userId}</p>
      <p className="id">Post ID: {id}</p>
      <h3 className="title">Titulo: {title}</h3>
      <p className="body">{body}</p>
    </div>
  )
}
