import { useEffect, useState } from "react";

export const useAuthToken = () => {
  const [authToken, setAuthToken] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) setAuthToken(token)
  }, [])

  return authToken;
}