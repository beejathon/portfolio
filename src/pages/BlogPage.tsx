import { Link, useLoaderData } from 'react-router-dom'
import { uri } from '../routes/router'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../components/ui/Card'
import { useAuth } from '@/hooks/useAuthProvider'

const BlogPage = () => {
  const posts: any = useLoaderData()
  const { user } = useAuth()
  const { setToken, setUser } = useAuth()

  return (
    <div className="md:px-30 flex flex-col items-center justify-center px-10 py-10 sm:px-20 lg:px-40 xl:px-72">
      {!user ? (
        <Link to="/signin">
          <button className="rounded-lg bg-mountain-mist-700 px-4 py-2 text-eucalyptus-600">
            Sign In
          </button>
        </Link>
      ) : (
        ''
      )}
      {user ? (
        <button
          className="rounded-lg bg-mountain-mist-700 px-4 py-2 text-eucalyptus-600"
          value="Sign Out"
          onClick={() => {
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            setToken('')
            setUser(null)
          }}
        >
          Sign Out
        </button>
      ) : (
        ''
      )}
      <h1 className="my-10 text-center font-mono text-4xl font-bold uppercase text-eucalyptus-500">
        Recent Posts
      </h1>
      <div className="my-20 flex flex-col items-center justify-center gap-20">
        {posts
          .slice(0)
          .reverse()
          .map((post: any) => {
            if (post.published === true) {
              return (
                <Link to={`/blog/${post._id}`}>
                  <PostCard post={post} />
                </Link>
              )
            }
          })}
      </div>
    </div>
  )
}

const PostCard = ({ post }: any) => {
  return (
    <Card key={post.title} className="m-auto w-full max-w-xl">
      <CardHeader>
        <img
          src={post.image}
          alt={post.title}
          className="self-center object-cover"
        />
        <CardTitle>{post.title}</CardTitle>
        <CardDescription className="flex justify-between">
          <span>{post.date_formatted}</span>
          <span>by {post.author.userName}</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="line-clamp-4 overflow-hidden">{post.content}</div>
      </CardContent>
      <CardFooter className="flex justify-start gap-4">
        <span>
          {post.commentCount} {post.commentCount === 1 ? 'comment' : 'comments'}
        </span>
        <span>
          {post.likeCount} {post.likeCount === 1 ? 'like' : 'likes'}
        </span>
      </CardFooter>
    </Card>
  )
}

export const blogLoader = async () => {
  return fetch(`${uri}/posts`, {
    method: 'GET',
    mode: 'cors',
    cache: 'default',
  })
}

export default BlogPage
