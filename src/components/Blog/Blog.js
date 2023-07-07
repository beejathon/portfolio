import React, { useEffect, useState } from "react";
import { PostCard } from "../PostCard/PostCard";
import { Link } from "react-router-dom";
import "./Blog.css"
import { useAuth } from "../../hooks/useAuthProvider";
import { usePosts } from "../../hooks/usePosts";

export const Blog = () => {
  const { 
    user,
    setUser,
    setToken
  } = useAuth();
  const posts = usePosts();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const signOut = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setUser(null);
    setToken(null);
    setIsLoggedIn(false);
  }

  useEffect(() => {
    if (user) {
      setIsLoggedIn((true))
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
            <Link to={'/signin'}>
              <button>Sign In</button>
            </Link>
          </>
        )}
      </div>
      <h2 className="heading">latest posts</h2>
      <div className="posts">
      {posts.slice(0).reverse().map((post) => {
        if (post.published === true) {
          return (
            <div key={post._id}>
              <Link to={`/blog/${post._id}`} className="post-link">
                <PostCard post={post} />
              </Link>
            </div>
          )
        } else {
          return null;
        }
      })}
      </div>
    </div>
  )
}