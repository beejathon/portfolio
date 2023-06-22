import React, { useEffect } from "react";

const Context = React.createContext(null);

//custom provider
export const PostsProvider = ({ children }) => {
  const [posts, setPosts] = useState();


  useEffect(async () => {
    const uri = 'https://blog-boyz.up.railway.app/api';
    fetch(`${uri}/posts`, {
      method: 'GET',
      mode: 'cors',
      cache: 'default',
    })
    .then(data => data.json())
    .then(data => setPosts(data));
  }, [])

  return (
    <Context.Provider value={posts}>
      {children}
    </Context.Provider>
  )
}

//custom hook
export const usePosts = () => {
  const ctx = React.useContext(Context);

  if (!ctx) {
    throw new Error("usePosts must be used within the PostsProvider");
  }

  return ctx;
}