import React, { useContext, useEffect, useState } from "react";
import { useAuth } from "./useAuthProvider";

const Context = React.createContext(null)

export const LikesProvider = ({ children }) => {
  const [liked, setLiked] = useState(false);
  const [likeId, setLikeId] = useState(null);
  const [postId, setPostId] = useState(null);
  const { user } = useAuth();

  useEffect(() => {
    const uri = process.env.REACT_APP_API_URI;
    async function checkLikes() {
      try {
        const res = await fetch(`${uri}/posts/${postId}/likes`, {
          method: 'GET',
          mode: 'cors',
          cache: 'default',
        })
        const likes = await res.json();
        if (likes.length > 0 && user) {
          likes.forEach((like) => {
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