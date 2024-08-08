import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const BlogPage = () => {
  const posts = useLoaderData();

  useEffect(() => {
    console.log(posts);
  });

  return (
    <div>
      <h1>Blog</h1>
      <p>Blog content goes here...</p>
    </div>
  );
};

export default BlogPage;
