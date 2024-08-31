import { InView } from './ui/InView'

const aboutContent = [
  {
    content: `I'm a full-stack web developer based in Glasgow, Scotland with a unique blend of technical expertise and creative flair. In past lives I've been a Math & ESL teacher, a poet, and a forklift driver. With a diverse set of skills and experiences I approach web development from a fresh perspective to deliver innovative solutions.`,
  },
  {
    content: `As a former educator, I bring a sensitivity to language, logic and structure that helps me to read and write code. My experience in teaching has not only honed my ability to break down technical concepts for diverse audiences but also underscored the importance of creating user-friendly, intuitive web experiences.`,
  },
  {
    content: `In parallel, my background in creative writing has taught me the power of narrative and the importance of engaging an audience. Whether crafting compelling content for websites or designing interactive elements that tell a story, I leverage my writing skills to create web solutions that will resonate with users. I also find my experience with proofreading and editing to be a valuable insight into debugging, testing and the general software development life cycle.`,
  },
  {
    content: `As a developer, I am proficient in HTML, CSS, JavaScript, TypeScript and various modern frameworks like React, Next, Vue and Nuxt. I thrive on bringing ideas to life through clean, efficient code and innovative design.`,
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
