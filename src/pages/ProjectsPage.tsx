import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../components/ui/Card'

const ProjectsPage = () => {
  return (
    <div className="md:px-30 px-10 py-10 sm:px-20 lg:px-40 xl:px-72">
      <h1 className="my-10 text-center font-mono text-4xl font-bold uppercase text-eucalyptus-500">
        Recent Projects
      </h1>
      <div className="my-20 flex flex-col items-center gap-20">
        {projectsContent.map((project) => (
          <Card key={project.title}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <img src={project.gifPreview} alt={project.title} />
              <CardDescription>{project.description}</CardDescription>
            </CardContent>
            <CardFooter>
              {project.techIcons.map((icon) => (
                <img key={icon} src={icon} alt="tech icon" className="h-14" />
              ))}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

const projectsContent = [
  {
    title: 'galore',
    description: `Landing page for a circular fashion company. Took Figma design from concept to completion. Utilized Nuxt.js for SSR and DaisyUI / Tailwind CSS for styling.`,
    gifPreview: 'https://via.placeholder.com/150',
    ghRepo: '',
    link: 'galore.club',
    techIcons: [
      `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nuxtjs/nuxtjs-plain-wordmark.svg`,
      'https://res.cloudinary.com/dgclfs5cd/image/upload/f_auto,q_auto/sttocfxsaaaexjtdbthv',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
    ],
  },
  {
    title: 'MERN Blog',
    description: `Full-stack blogging app utilizing a REST API only backend. Built with two front-ends: a client for reading and commenting and a second CMS for publishing and editing posts/comments.`,
    gifPreview: 'https://via.placeholder.com/150',
    ghRepo: 'https://github.com/beejathon/blog-api',
    link: '/blog',
    techIcons: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original-wordmark.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
    ],
  },
  {
    title: 'notbadreads',
    description: `A goodreads clone where users can search a database of books, organize a personal library, write reviews and interact with other users. Built with React and utilizes Firebase for backend-as-a-service.`,
    gifPreview: 'https://via.placeholder.com/150',
    techIcons: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
    ],
  },
]

export default ProjectsPage
