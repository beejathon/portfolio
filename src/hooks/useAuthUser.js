import { useEffect, useState } from "react"

export const useAuthUser = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user) setAuthUser(user);
  }, [])

  return authUser;
}