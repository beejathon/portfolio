import { Drawer, DrawerClose, DrawerContent, DrawerTrigger } from './ui/Drawer'

const Header = () => {
  return (
    <header className="flex w-full justify-between py-4">
      <div className="ml-10 flex items-center gap-10">
        <a href="/" className="text-2xl font-bold text-eucalyptus-500">
          Bee-jay Paiz
        </a>
        <nav className="hidden gap-10 lg:flex">
          <a href="/#about" className="text-xl font-light text-eucalyptus-500">
            About
          </a>
          <a
            href="/projects"
            className="text-xl font-light text-eucalyptus-500"
          >
            Projects
          </a>
          <a href="/" className="text-xl font-light text-eucalyptus-500">
            Contact
          </a>
        </nav>
      </div>
      <div className="mr-10 hidden items-center gap-10 lg:flex">
        <a href="/" className="text-xl font-light text-eucalyptus-500">
          Resume
        </a>
        <a href="/blog" className="text-xl font-light text-eucalyptus-500">
          Blog
        </a>
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
              <a
                href="/#about"
                className="text-xl font-light text-eucalyptus-500"
              >
                About
              </a>
              <a
                href="/projects"
                className="text-xl font-light text-eucalyptus-500"
              >
                Projects
              </a>
              <a href="/" className="text-xl font-light text-eucalyptus-500">
                Contact
              </a>
              <a href="/" className="text-xl font-light text-eucalyptus-500">
                Resume
              </a>
              <a
                href="/blog"
                className="text-xl font-light text-eucalyptus-500"
              >
                Blog
              </a>
            </nav>
          </DrawerContent>
        </Drawer>
      </div>
    </header>
  )
}

export default Header
