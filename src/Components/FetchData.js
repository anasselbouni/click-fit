import React, { useState, useEffect } from 'react'
export default function FetchData() {
  const [post, getPost] = useState([])
  const API = 'http://numbersapi.com/1/30/date?json';
  const fetchPost = () => {
    fetch(API)
      .then((res) => res.json())
      .then((res) => {
        console.log(res.text)
        getPost(res)
      })
  }
  useEffect(() => {
    fetchPost()
  }, [])
  return (
    <p class="trainer_wrapper trainer_body">{post.year} : {post.text}</p>
  )
}