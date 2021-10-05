import styles from '../styles/Home.module.css'
import PostList from '../components/PostList'

export default function Home({ posts }) {

  return (
    <div className={styles.container}>
      <h1>My blog</h1>
      <PostList posts={posts} />
    </div>
  )
}

export const getStaticProps = async () => {
  try {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`);
      const posts = await res.json();

      return {
        props: {
          posts
        }
      }
  } catch {
    res.statusCode = 404
    return {
      props: {}
    }
  }
}