import { useState, useEffect } from "react"
import { postComment, getComments } from "../../../utils/backend"
import Comment from "../Comment"

export default function commentSection({ eventId }) {

    const [comments, setComments] = useState([])
    const [showCreateForm, setShowCreateForm] = useState(false)
    const [createFormData, setCreateFormData] = useState({
        name: '',
        comment: ''
    })


    useEffect(() => {
        getComments(eventId)
            .then(comments => setComments(comments))
    }, [])

    function handleInputChange(event) {
        setCreateFormData({
            ...createFormData,
            [event.target.name]: event.target.value
        })
    }

    function toggleCreateForm() {
        setShowCreateForm(!showCreateForm)
    }

    function refreshComments() {
        getComments(eventId)
            .then(newCommentData => setComments(newCommentData))
    }

    function handleSubmit(event) {
        event.preventDefault()
        setCreateFormData({
            name: '',
            comment: ''
        }) 
        setShowCreateForm(false)
        postComment({ ...createFormData, eventId: eventId })
            .then(() => refreshComments())
    }


    let commentElements = <p key='0'>No comments yet. Be the first to comment!</p>

    if (comments.length > 0) {
        commentElements = comments.map(comment => {

            return <Comment
                key={comment._id}
                data={comment}
                refreshComments={refreshComments} />
        })
    }

    let btnText = 'Create'

    if (showCreateForm) {
        btnText = 'Close'
    
    }

    return (
        <div className="cmtSection">
            <h2>Been here?  Leave a Comment!</h2>

            <button onClick={toggleCreateForm} >
                {btnText}
            </button>
            <br></br>

            {showCreateForm && 

                <form onSubmit={handleSubmit}>

                    <input
                        name="name"
                        placeholder="Username"
                        value={createFormData.name}
                        onChange={handleInputChange}/>
                        <br></br>

                    <textarea
                        name="comment"
                        placeholder="Tell us about your experience..."
                        value={createFormData.comment}
                        onChange={handleInputChange} />
                        <br></br>
                        
                    <button type="submit"> Post </button>    
                    <br></br>
                    <br></br>

                </form>
            }
            
            {commentElements}

        </div>
        
    )
}