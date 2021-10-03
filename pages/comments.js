import { useState } from 'react'

const Comments = () => {
    const [comments, setComments] = useState([])
    const [comment, setComment] = useState('')

    const fetchComments = async () => {
        const response = await fetch('/api/comments')
        const data = await response.json()
        setComments(data)
    }

    const submitComment = async () => {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ comment }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const data = await response.json()
        console.log(data)
        fetchComments()
    }

    const deleteComment = async (commentId) => {
        const response = await fetch(`/api/comments/${commentId}`, {
            method: 'DELETE'
        })
        const data = response.json()
        console.log(data)
        fetchComments()
    }

    return (
        <>
            <h1>Comments Page</h1>
            <button onClick={fetchComments}>Load Comments</button>
            <ul>
                {comments.map(comment => {
                return (
                    <li key={comment.id}>{comment.id} {comment.text}
                        <button onClick={() => deleteComment(comment.id)}>Delete</button>
                    </li>
                    
                )
                })}
            </ul>
            {comments.length > 0 ? <button onClick={() => setComments([])}>Clear Comments</button> : ''}
            <input type='text' value={comment} onChange={e => setComment(e.target.value)} />
            <button onClick={submitComment}>Submit Comment</button>
        </>
    )
}

export default Comments