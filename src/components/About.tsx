import { InView } from './InView'

const aboutContent = [
  {
    content: `I'm a full-stack web developer based in Glasgow, Scotland with a unique blend of technical expertise and creative flair. My journey into the world of web development is built on a foundation in education and creative writing, which has shaped my approach to coding and design in distinct and meaningful ways.`,
  },
  {
    content: `Before diving into the tech world, I spent several years immersed in education, where I developed a keen understanding of how to communicate complex ideas clearly and effectively. My experience in teaching has not only honed my ability to break down technical concepts for diverse audiences but also fueled my passion for creating user-friendly, intuitive web experiences.`,
  },
  {
    content: `In parallel, my background in creative writing has been instrumental in shaping my approach to web development. Writing taught me the power of narrative and the importance of engaging an audience—a lesson I carry into every project I undertake. Whether crafting compelling content for websites or designing interactive elements that tell a story, I leverage my writing skills to create web solutions that resonate with users on a deeper level.`,
  },
  {
    content: `As a developer, I am proficient in HTML, CSS, JavaScript, and various modern frameworks. I thrive on bringing ideas to life through clean, efficient code and innovative design. My unique combination of skills allows me to approach web development from a holistic perspective, ensuring that each project I work on is not only technically sound but also rich in creativity and user engagement.`,
  },
  {
    content: `I’m always eager to learn and embrace new challenges. Whether you're looking to build a dynamic website, improve your digital presence, or create content that connects with your audience, I'm here to help bring your vision to life. Let’s build something amazing together!`,
  },
]

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col items-center justify-center gap-20 py-10 font-mono text-2xl leading-10 text-mountain-mist-100"
    >
      <h1 className="text-4xl uppercase">About Me</h1>
      {aboutContent.map((content, index) => (
        <InView
          key={index}
          variants={{
            hidden: { opacity: 0, y: 100, filter: 'blur(4px)' },
            visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
          }}
          viewOptions={{ margin: '0px 0px 0px 0px' }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          {content.content}
        </InView>
      ))}
    </div>
  )
}

export default About
