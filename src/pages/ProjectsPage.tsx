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
              <CardTitle className="text-3xl">{project.title}</CardTitle>
              <div className="flex justify-end gap-4">
                {project.ghRepo && (
                  <a
                    href={project.ghRepo}
                    target="_blank"
                    rel="noreferrer"
                    className="text-eucalyptus-500"
                  >
                    <img
                      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                      alt=""
                      className="h-6"
                    />
                  </a>
                )}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-eucalyptus-500"
                >
                  <span className="material-symbols-outlined">open_in_new</span>
                </a>
              </div>
            </CardHeader>
            <CardContent>
              <video
                src={project.preview}
                autoPlay
                loop
                muted
                className="w-full pb-4"
              />
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
    title: 'galore Landing Page',
    description: `Landing page for a circular fashion startup. Took Figma design from concept to completion. Utilized Nuxt.js for SSR and DaisyUI / Tailwind CSS for styling.`,
    preview:
      'https://res.cloudinary.com/dgclfs5cd/video/upload/f_auto:video,q_auto/ryfpvw85ha7gaqfqtwcg',
    ghRepo: '',
    link: 'https://galore.club',
    techIcons: [
      `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nuxtjs/nuxtjs-plain-wordmark.svg`,
      'https://res.cloudinary.com/dgclfs5cd/image/upload/f_auto,q_auto/sttocfxsaaaexjtdbthv',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
    ],
  },
  {
    title: 'galore Shopify Headless Custom Storefront',
    description: `Custom storefront for a circular fashion startup. Frontend built with Vite + React utilizing Shopify Storefront API for business logic, Apollo Client to handle GraphQL data and Redux for state management. Styled with Tailwind CSS.`,
    preview:
      'https://res.cloudinary.com/dgclfs5cd/video/upload/f_auto:video,q_auto/xxrjvfdy7w44ltk9wvx7',
    ghRepo: '',
    link: 'https://galore-frontend-1ca0fcb7d916.herokuapp.com/',
    techIcons: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      'https://res.cloudinary.com/dgclfs5cd/image/upload/f_auto,q_auto/tcjvasc3one2l0pjv1s6',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
    ],
  },
  {
    title: 'MERN Blog',
    description: `Full-stack blogging app utilizing a REST API only backend. Built with two front-ends: a client for reading and commenting and a second CMS for publishing and editing posts/comments.`,
    preview:
      'https://res.cloudinary.com/dgclfs5cd/image/upload/v1724803153/asmrmdafcalpgsllkv9s.mp4',
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
    preview:
      'https://res.cloudinary.com/dgclfs5cd/image/upload/v1724803154/vj9bkcyzo7piblxnl38c.mp4',
    techIcons: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain-wordmark.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain-wordmark.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg',
    ],
  },
]

export default ProjectsPage
