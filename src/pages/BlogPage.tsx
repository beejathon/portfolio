import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'
import { uri } from '../routes/router'

const BlogPage = () => {
  const posts = useLoaderData()

  useEffect(() => {
    console.log(posts)
  })

  return (
    <div>
      <h1>Blog</h1>
      <p>Blog content goes here...</p>
    </div>
  )
}

export const blogLoader = async () => {
  return fetch(`${uri}/posts`, {
    method: 'GET',
    mode: 'cors',
    cache: 'default',
  })
}

export default BlogPage
