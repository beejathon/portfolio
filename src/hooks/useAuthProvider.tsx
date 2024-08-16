import React, { useContext, useEffect, useState } from 'react'
import { jwtDecode, JwtPayload } from 'jwt-decode'

const Context = React.createContext<{
  user: any
  setUser: React.Dispatch<React.SetStateAction<any>>
  token: string | null
  setToken: React.Dispatch<React.SetStateAction<string | null>>
} | null>(null)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any>(null)
  const [token, setToken] = useState<string | null>(null)

  useEffect(() => {
    const localUser = localStorage.getItem('user')
    const localToken = localStorage.getItem('token')
    let decoded: JwtPayload
    let expiration: number | undefined

    if (localToken) {
      decoded = jwtDecode<JwtPayload>(localToken)
      expiration = decoded.exp !== undefined ? decoded.exp * 1000 : undefined
    }

    // check token expiry
    if (
      localUser !== null &&
      expiration !== undefined &&
      expiration >= Date.now()
    ) {
      setToken(localToken)
      setUser(JSON.parse(localUser))
    } else {
      setToken(null)
      setUser(null)
    }
  }, [])

  return (
    <Context.Provider value={{ user, setUser, token, setToken }}>
      {children}
    </Context.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(Context)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
