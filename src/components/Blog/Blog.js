import React from "react";
import { usePosts } from "../../hooks/PostsProvider";

export const Blog = () => {
  const posts = usePosts();

  if (!posts) return 'Loading...'

  return (
    <div className="blog">
      {posts.map((post) => {
        return (
          <>
            <div>{post.title}</div>
            <div>{post.content}</div>
          </>
        )
      })}
    </div>
  )
}