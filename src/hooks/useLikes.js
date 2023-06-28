import { useEffect, useState } from "react";

export const useLikes = ({ postid }) => {
  const [likes, setLikes] = useState(null);

  useEffect(() => {
    const uri = 'https://blog-boyz.up.railway.app/api';
    function fetchData() {
      fetch(`${uri}/posts/${postid}/likes`, {
        method: 'GET',
        mode: 'cors',
        cache: 'default',
      })
      .then(data => data.json())
      .then(data => setLikes(data))
      .catch(err => console.log(err))
    }
    
    fetchData();
  }, [postid])

  return likes;
}