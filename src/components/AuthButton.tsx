import { useAuth } from '@/hooks/useAuthProvider'
import { Link } from 'react-router-dom'

const AuthButton = () => {
  const { user } = useAuth()
  const { setToken, setUser } = useAuth()
  return (
    <>
      {!user ? (
        <Link to="/signin">
          <button className="transform rounded-lg bg-mountain-mist-700 px-4 py-2 text-eucalyptus-600 transition duration-500 ease-in-out hover:scale-105">
            Sign In
          </button>
        </Link>
      ) : (
        ''
      )}
      {user ? (
        <button
          className="transform rounded-lg bg-mountain-mist-700 px-4 py-2 text-eucalyptus-600 transition duration-500 ease-in-out hover:scale-105"
          value="Sign Out"
          onClick={() => {
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            setToken('')
            setUser(null)
          }}
        >
          Sign Out
        </button>
      ) : (
        ''
      )}
    </>
  )
}

export default AuthButton
