import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/Layout'
import ErrorPage from '../pages/ErrorPage'
import HomePage from '../pages/HomePage'
import ProjectsPage from '../pages/ProjectsPage'
import BlogPage, { blogLoader } from '../pages/BlogPage'
import PostPage, { postLoader } from '../pages/PostPage'
import SignInPage, { signInAction } from '../pages/SignInPage'

export const uri =
  process.env.NODE_ENV === 'production'
    ? import.meta.env.VITE_API_URI
    : 'http://localhost:8080/api'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: '/projects',
        element: <ProjectsPage />,
      },
      {
        path: '/blog',
        element: <BlogPage />,
        loader: async () => {
          return blogLoader()
        },
      },
      {
        path: '/blog/:id',
        element: <PostPage />,
        loader: async ({ params }) => {
          return postLoader(params.id)
        },
      },
      {
        path: '/signin',
        element: <SignInPage />,
        action: signInAction,
      },
    ],
  },
])
