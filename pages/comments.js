import { useState } from 'react'
import UpdateForm from '../components/UpdateForm'

const Comments = () => {
    const [comments, setComments] = useState([])
    const [comment, setComment] = useState('')
    const [isBeingUpdated, setIsBeingUpdated] = useState(false)
    const [selectedComment, setSelectedComment] = useState({ id: null, text: ''})

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

    const updateComment = (commentObject) => {
        const { id, text } = commentObject
        setIsBeingUpdated(true)
        setSelectedComment({ id, text })
    }

    const handleUpdateComment = (updatedComment) => {
        const currentComments = comments.filter(c => c.id !== updatedComment.id)
        currentComments.push(updatedComment)
        setComments(currentComments)
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
                        <button onClick={() => updateComment({id: comment.id, text: comment.text})}>Update</button>
                    </li>
                )
                })}
            </ul>
            {comments.length > 0 ? <button onClick={() => setComments([])}>Clear Comments</button> : ''}
            <input type='text' value={comment} onChange={e => setComment(e.target.value)} />
            <button onClick={submitComment}>Submit Comment</button>
            {isBeingUpdated ? <UpdateForm selectedComment={selectedComment} onUpdate={handleUpdateComment} /> : ''}
        </>
    )
}

export default Comments