import { useState } from 'react'

const UpdateForm =  ({selectedComment, onUpdate }) => {
    const [comment, setComment] = useState('')
    
    const updateComment = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch(`/api/comments/${selectedComment.id}`, {
                method: 'PATCH',
                body: JSON.stringify({ id: selectedComment.id, text: comment }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await response.json()
            setComment(data.text)
            onUpdate({ id: selectedComment.id, text: comment })
        } catch {
            response.statusCode = 400
            return {
                props: selectedComment
            }
        }
    }

    return (
        <>
            <h1>Update Comment {selectedComment.id}</h1>
            <form>
                <label htmlFor='content'>Update Content:</label>
                <input type='text' name='content' value={comment} onChange={e => setComment(e.target.value)} />
                <button onClick={e => updateComment(e)}>Update Comment</button>
            </form>
        </>
    )
}

export default UpdateForm