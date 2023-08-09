import { useState } from "react"
import { updateComment, deleteComment } from "../../../utils/backend"

export default function Comment({ data, refreshComments }) {
    const [showEditForm, setShowEditForm] = useState(false)
    const [editFormData, setEditFormData] = useState({
        name: data.name,
        comment: data.comment
        
    })


    function handleInputChange(event) {
        setEditFormData({
            ...editFormData,
            [event.target.name]: event.target.value
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
        setShowEditForm(false)
        updateComment(editFormData, data._id)
            .then(() => refreshComments())
    }

    function handleDelete() {
        deleteComment(data._id)
            .then(() => refreshComments())
    }


    let commentElement = 
    
    <div>
    
        <br></br>

            <section>
            <p>{data.name}</p>
            <p>{data.comment}</p>
            </section>

         <br></br>
        
            <div>
                <button onClick={() => { setShowEditForm(true) }}>Edit</button>

                <button onClick={handleDelete}> Delete </button>
            </div>
    
    </div>

    if (showEditForm) {
        commentElement = <form
            onSubmit={handleSubmit}>
            
            <input
                name="name"
                placeholder="name"
                value={editFormData.name}
                onChange={handleInputChange}/>
            <br />

                    <textarea
                        name="comment"
                        placeholder="Have you been to this event? How was it?"
                        value={editFormData.comment}
                        onChange={handleInputChange}/>

                                <div>
                                    <button onClick={() => { setShowEditForm(false) }}>Close</button>
                                            
                                    <button type="submit">Post</button>
                                </div>
    
    </form>
   
}

                                    return commentElement
}
