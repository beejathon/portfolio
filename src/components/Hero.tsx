import { TextEffect } from './TextEffect'

const Hero = () => {
  return (
    <div className="m-auto flex min-h-screen flex-col items-center gap-10 pt-10 lg:flex-row lg:justify-center lg:p-0">
      <div className="rounded-full bg-mountain-mist-500">
        <img
          src="https://res.cloudinary.com/dgclfs5cd/image/upload/f_auto,q_auto/slwq02fofmxbbd1plvrd"
          className="h-60 w-60 rounded-full object-cover lg:h-80 lg:w-80"
          alt="Bee-jay Paiz"
        />
      </div>
      <div className="flex flex-col gap-4 text-center font-mono text-chatelle-50 lg:text-left">
        <span className="text-3xl font-extralight">
          <TextEffect per="word" preset="blur">
            Hello, I'm
          </TextEffect>
        </span>
        <h1 className="text-5xl font-extrabold uppercase text-eucalyptus-500">
          <TextEffect per="word" preset="blur">
            BEE-JAY PAIZ
          </TextEffect>
        </h1>
        <p className="text-3xl font-light text-eucalyptus-600">
          <TextEffect per="word" preset="blur">
            Full-stack Web Developer in Glasgow
          </TextEffect>
        </p>
      </div>
    </div>
  )
}

export default Hero
