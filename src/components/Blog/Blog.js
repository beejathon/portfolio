import React, { useEffect, useState } from "react";
import { usePosts } from "../../hooks/usePosts";
import { PostCard } from "../PostCard/PostCard";
import { Link } from "react-router-dom";
import "./Blog.css"
import { useAuthUser } from "../../hooks/useAuthUser";

export const Blog = () => {
  const user = useAuthUser();
  const posts = usePosts();
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const signOut = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  }

  useEffect(() => {
    if (user) {
      setIsLoggedIn(true)
    }
  }, [user])

  if (!posts) return 'Loading...'

  return (
    <div className="blog">
      <div className="sign-in-link">
        { isLoggedIn ? (
          <>
            <button onClick={signOut}>Sign Out</button>
          </>
        ) 
        : ( 
          <>
            <Link to={'/portfolio/blog/signin'}>
              <button>Sign In</button>
            </Link>
          </>
        )}
      </div>
      <div className="posts">
      {posts.map((post) => {
        return (
          <>
            <Link to={`/portfolio/blog/${post._id}`} className="post-link">
              <PostCard key={post._id} post={post} />
            </Link>
          </>
        )
      })}
      </div>
    </div>
  )
}