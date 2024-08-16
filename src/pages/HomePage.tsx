import About from '../components/About'
import Hero from '../components/Hero'

const HomePage = () => {
  return (
    <div className="md:px-30 px-10 sm:px-20 lg:px-40 xl:px-72">
      <Hero />
      <About />
    </div>
  )
}

export default HomePage
