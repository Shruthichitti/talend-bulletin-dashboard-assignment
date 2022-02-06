import React, {useEffect, useState} from 'react';
import UserHeader from './UserHeader';
import Comments from './Comments';
import EditPost from './EditPost';

//Displaying posts with title,body

const PostListView = props => {
    const [editIsOpen, setEditIsOpen] = useState(false)
    const [editTitle, setEditTitle] = useState()
    const [editBody, setEditBody] = useState()
    const [updatePostId, setUpdatePostId] = useState()
    const [updateUserId, setUpdateUserId] = useState()

    //preparing data for editing post
    const handleEditPosts = (postId, title, body, userId) => {
        setEditBody(body)
        setEditTitle(title)
        setUpdatePostId(postId)
        setUpdateUserId(userId)
        setEditIsOpen(!editIsOpen)
    }
    
    return(
        <>
            <div className="item" key={props.postId}>
                <i className="large middle aligned icon user" />
                <div className="content">
                    <div className="description">
                        <h2>{props.title}</h2>
                        <p>{props.body}</p>
                    </div>
                    <UserHeader userId={props.userId}/>
                    <Comments postId = {props.postId} />
                    <div>
                        <button className='edit' onClick={(e) => handleEditPosts(props.postId,props.title, props.body, props.userId)}>Edit Post</button>
                        <button onClick={() => props.deletePost(props.postId)} className='delete'>Delete</button>
                    </div>
                </div>
            </div>
            {editIsOpen && <EditPost 
                editIsOpen = {editIsOpen}
                setEditIsOpen = {setEditIsOpen}
                editBody = {editBody}
                editTitle = {editTitle}
                updatePostId = {updatePostId}
                updateUserId = {updateUserId}
                setEditBody = {setEditBody}
                setEditTitle= {setEditTitle}
                updatePost = {props.updatePost}
            />}
        </>
    )
}

export default PostListView