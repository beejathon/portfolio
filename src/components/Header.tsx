import { NavLink } from 'react-router-dom'
import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from './ui/Drawer'
import AuthButton from './AuthButton'
import cv from '../assets/bj_cv_webdev.pdf'

const Header = () => {
  return (
    <header className="flex w-full justify-between py-4">
      <div className="ml-10 flex items-center gap-10">
        <NavLink to="/" className="text-2xl font-bold text-eucalyptus-500">
          Bee-jay Paiz
        </NavLink>
        <nav className="hidden gap-10 lg:flex">
          <NavLink
            to="/#about"
            className="text-xl font-light text-eucalyptus-500"
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className="text-xl font-light text-eucalyptus-500"
          >
            Projects
          </NavLink>
          <button
            onClick={() => window.open(cv)}
            className="text-xl font-light text-eucalyptus-500"
          >
            CV
          </button>
        </nav>
      </div>
      <div className="mr-10 hidden items-center gap-10 lg:flex">
        <NavLink to="/blog" className="text-xl font-light text-eucalyptus-500">
          Blog
        </NavLink>
        <AuthButton />
      </div>
      <div className="mr-10 flex items-center gap-10 lg:hidden">
        <Drawer>
          <DrawerTrigger>
            <span className="material-symbols-outlined text-4xl text-eucalyptus-500">
              menu
            </span>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerClose>
              <div className="mr-10 flex justify-end font-bold text-eucalyptus-500">
                <span className="material-symbols-outlined">close</span>
              </div>
            </DrawerClose>
            <nav className="mt-10 flex flex-col justify-evenly gap-10 pl-6">
              <NavLink
                to="/#about"
                className="text-xl font-light text-eucalyptus-500"
              >
                About
              </NavLink>
              <NavLink
                to="/projects"
                className="text-xl font-light text-eucalyptus-500"
              >
                Projects
              </NavLink>
              <NavLink
                to="/"
                className="text-xl font-light text-eucalyptus-500"
              >
                CV
              </NavLink>
              <NavLink
                to="/blog"
                className="text-xl font-light text-eucalyptus-500"
              >
                Blog
              </NavLink>
              <div>
                <AuthButton />
              </div>
            </nav>
          </DrawerContent>
        </Drawer>
      </div>
    </header>
  )
}

export default Header
