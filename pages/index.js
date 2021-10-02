import { useState } from 'react'
import styles from '../styles/Home.module.css';
import PostList from '../components/PostList'

export default function Home({ posts }) {

  const [comments, setComments] = useState([])

  const fetchComments = async () => {
    const response = await fetch('/api/comments')
    const data = await response.json()
    setComments(data)
  }

  const clearComments = () => {
    setComments([])
  }

  return (
    <div className={styles.container}>
      <h1>My blog</h1>
      <button onClick={fetchComments}>Load Comments</button>
      <ul>
        {comments.map(comment => {
          return (
            <li key={comment.id}>{comment.id} {comment.text}</li>
          )
        })}
      </ul>
      {comments.length > 0 ? <button onClick={clearComments}>Clear Comments</button> : ''}
      <PostList posts={posts} />
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10`);
  const posts = await res.json();

  return {
    props: {
      posts
    }
  };
};