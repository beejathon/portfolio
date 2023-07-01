import React, { useContext, useEffect, useState } from "react";
import { useAuthUser } from "./useAuthUser";

const Context = React.createContext(null)

export const LikesProvider = ({ children }) => {
  const [liked, setLiked] = useState(false);
  const [likeId, setLikeId] = useState(null);
  const [postId, setPostId] = useState(null);
  const user = useAuthUser();

  useEffect(() => {
    const uri = 'https://blog-boyz.up.railway.app/api';
    async function checkLikes() {
      try {
        let likes = undefined;
        const res = await fetch(`${uri}/posts/${postId}/likes`, {
          method: 'GET',
          mode: 'cors',
          cache: 'default',
        })
        const data = await res.json();
        likes = data;
        if (likes.length && user) {
          likes?.forEach((like) => {
            if (like.liker === user._id) {
              setLiked(true);
              setLikeId(like._id);
            };
          })
        }
      } catch (err) {
        console.log(err);
      }
    }
    checkLikes();
  }, [postId, user])

  return (
    <Context.Provider 
      value={{ 
        liked, 
        setLiked, 
        likeId, 
        setLikeId,
        postId,
        setPostId,
       }}
    >
      {children}
    </Context.Provider>
  ) 
}

export const useLikes = () => useContext(Context);