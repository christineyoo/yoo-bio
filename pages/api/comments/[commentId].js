import {comments} from '../../../data/comments'

export default function handler(req, res) {
    const { commentId } = req.query
    if (req.method === 'GET') {
        const comment = comments.find(comment => comment.id === parseInt(commentId))
        res.status(200).json(comment)
    } else if (req.method === 'DELETE') {
        const deletedComment = comments.find(comment => comment.id === parseInt(commentId))
        const index = comments.indexOf(deletedComment)
        comments.splice(index, 1)
        res.status(200).json(deletedComment)
    } else if (req.method === 'PATCH') {
        const comment = req.body.text
        const updatedComment = comments.find(comment => comment.id === parseInt(commentId))
        const index = comments.indexOf(updatedComment)
        comments[index].text = comment
        res.status(200).json(updatedComment)
    }
}