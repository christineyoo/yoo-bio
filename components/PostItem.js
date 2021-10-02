import postStyles from '../styles/Post.module.css'

const PostItem = ({post}) => {
    return (
    <section className={postStyles.card}>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
    </section>
    )
}

export default PostItem