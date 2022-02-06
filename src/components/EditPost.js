import React, { useState } from 'react';

//Getting single post title and body to a popup and able to edit in a textarea and can submit to the api
const EditPost = props => {
    const [newTitle, setNewTitle] = useState()
    const [newBody, setNewBody] = useState()

    //submitting data to the api
    const handleSubmit = () => {
        const finalData = {
            id : props.newPost ? props.posts.length + 1 : props.updatePostId,
            title : props.newPost ? newTitle : props.editTitle,
            body : props.newPost ? newBody : props.editBody,
            userId : props.newPost ? 1 : props.updateUserId
        }
        if(props.newPost){
            props.createPost(finalData)
            props.setIsOpen(!props.isOpen)
        }else{
            props.updatePost(props.updatePostId,finalData)
            props.setEditIsOpen(!props.editIsOpen)
        }
    }

    //handling change of the title
    const handleTitleChange = (e) =>{
        if(props.newPost){
            setNewTitle(e.target.value)
        }else{
            props.setEditTitle(e.target.value)
        }
    }

    //handline change of the body
    const handleBodyChange = (e) =>{
        if(props.newPost){
            setNewBody(e.target.value)
        }else{
         props.setEditBody(e.target.value)
        }
    }

    const handleClose = () => {
        if(props.newPost){
            props.setIsOpen(!props.isOpen)
        }else{
            props.setEditIsOpen(!props.editIsOpen)
        }
    }

    return(
        <div className='popup'>
            <div className='popup_inner'>
                <div className='form-alignment'>
                    <div className='display-flex'>
                        <span>Title :</span>
                        <textarea type="text" name="title" rows="4" value = {props.editTitle ? props.editTitle : newTitle} onChange = {(e) => handleTitleChange(e)} className='form-inputs '/>
                    </div>
                    <div className='display-flex'>
                        <span>Body :</span>
                        <textarea type="text" name="body" rows="4" value = {props.editBody ? props.editBody : newBody} onChange = {(e) => handleBodyChange(e)} className='form-inputs'/>
                    </div>
                    <input type="submit" value="Submit" className='edit' onClick={() => handleSubmit()}/>
                    <button onClick={() => handleClose()} className="delete">Close</button>
                </div>
            </div>
        </div>
    )
}

export default EditPost;