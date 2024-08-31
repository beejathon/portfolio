const Footer = () => {
  return (
    <footer className="flex flex-col items-center gap-2">
      <h2 className="font-mono text-xl font-bold uppercase text-eucalyptus-500">
        Get in touch:
      </h2>
      <div className="flex items-center justify-center gap-10">
        <a href="mailto:beejay@paiz.dev">
          <span className="material-symbols-outlined pt-1 text-[48px] text-white">
            send
          </span>
        </a>
        <a href="https://github.com/beejathon" target="_blank" rel="noreferrer">
          <img
            className="h-10"
            src="https://res.cloudinary.com/dgclfs5cd/image/upload/f_auto,q_auto/oejvfeio5urqc8b0q2xj"
            alt=""
          />
        </a>
        <a
          href="https://www.linkedin.com/in/bee-jay-paiz-aa20253a/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            className="h-10"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
            alt=""
          />
        </a>
      </div>

      <p className="text-eucalyptus-400">&copy; 2024</p>
    </footer>
  )
}

export default Footer
