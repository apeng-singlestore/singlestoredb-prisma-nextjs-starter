import { useRouter } from 'next/router'
import Layout from '../../components/Layout'
import Post from '../../components/Post'
import prisma from '../../lib/prisma'
import { makeSerializable } from '../../lib/util'

const UserProfile = (props) => {
  const router = useRouter()
  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <Layout>
      <div className="page">
        <h1>{props.user.name}'s Profile</h1>
        <main>
          <h2>Posts by {props.user.name}</h2>
          {props.posts.map(post => (
            <div key={post.id} className="post">
              <Post post={post} />
            </div>
          ))}
        </main>
      </div>
      <style jsx>{`
        .post {
          background: white;
          transition: box-shadow 0.1s ease-in;
        }

        .post:hover {
          box-shadow: 1px 1px 3px #aaa;
        }

        .post + .post {
          margin-top: 2rem;
        }
      `}</style>
    </Layout>
  )
}

export const getServerSideProps = async ({ params }) => {
  const user = await prisma.user.findUnique({
    where: { id: params.id },
  })

  const posts = await prisma.post.findMany({
    where: { 
      author: { id: params.id },
      published: true
    },
    include: { author: true },
  })

  return {
    props: { 
      user: makeSerializable(user),
      posts: makeSerializable(posts)
    },
  }
}

export default UserProfile