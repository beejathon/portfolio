import { useEffect, useState } from "react";

export const useComments = ({ postid }) => {
  const [comments, setComments] = useState();

  useEffect(() => {
    const uri = 'https://blog-boyz.up.railway.app/api';
    async function fetchData() {
      fetch(`${uri}/posts/${postid}/comments`, {
        method: 'GET',
        mode: 'cors',
        cache: 'default',
      })
      .then(res => res.json())
      .then(res => setComments(res))
      .catch(err => console.log(err));
    }
    
    fetchData();
  }, [postid])

  return comments;
}