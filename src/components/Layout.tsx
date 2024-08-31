import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Layout = () => {
  return (
    <div className="flex min-h-screen w-screen max-w-[1600px] flex-col bg-mountain-mist-950">
      <Header />
      <Outlet />
      <ToastContainer />
      <Footer />
    </div>
  )
}

export default Layout
