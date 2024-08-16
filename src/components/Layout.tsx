import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const Layout = () => {
  return (
    <div className="flex min-h-screen w-screen max-w-[1600px] flex-col bg-mountain-mist-950">
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
