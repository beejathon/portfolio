import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";

const uri = import.meta.env.VITE_API_URI;

const PostPage = () => {
  const data = useLoaderData();

  useEffect(() => {
    console.log(data);
  });

  return (
    <div>
      <h1>Post Page</h1>
    </div>
  );
};

export const postLoader = async (id: string | undefined) => {
  const res1 = await fetch(`${uri}/posts/${id}`, {
    method: "GET",
    mode: "cors",
    cache: "default",
  });
  const post = await res1.json();
  const res2 = await fetch(`${uri}/posts/${id}/likes`, {
    method: "GET",
    mode: "cors",
    cache: "default",
  });
  const likes = await res2.json();
  return { post, likes };
};

export default PostPage;
