import styles from '../styles/Home.module.css'
import PostList from '../components/PostList'
import {server} from '../config/index'

export default function Home({ posts }) {

  return (
    <div className={styles.container}>
      <h1>My blog</h1>
      <PostList posts={posts} />
    </div>
  )
}

export const getStaticProps = async () => {
      const res = await fetch(`${server}/api/departments`);
      const posts = await res.json();

      return {
        props: {
          posts
        }
      }
}

