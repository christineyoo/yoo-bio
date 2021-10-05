import postStyles from '../styles/Post.module.css'
import Link from 'next/link'
import {server} from '../config/index'
import {useState} from 'react'

const PostItem = ({post}) => {
    const [posts, setPosts] = useState([])

    const fetchPosts = async () => {
        const response = await fetch(`${server}/api/departments`)
        const data = await response.json()
        setPosts(data)
    }
    
    const deletePost = async (post) => {
        const response = await fetch(`${server}/api/departments/${post.id}`, {
            method: 'DELETE'
        })
        const data = response.json()
        fetchPosts()
    }

    return (
    <Link href='/articles/[id]' as={`/articles/${post.id}`}>
        <section className={postStyles.card}>
            <h2>{post.name}</h2>
            <p>{post.description}</p>
            <button onClick={() => deletePost(post)}>Delete</button>
        </section>
    </Link>
    )
}

export default PostItem