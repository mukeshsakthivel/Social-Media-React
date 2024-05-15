import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const EditPost = ({posts,handleEdit,editBody,editTitle,setEditBody,setEditTitle}) => {
  const {id}=useParams();
  const post=posts.find((posts)=>(posts.id).toString()===id)

  useEffect(()=>{
    if(post){
    setEditTitle(post.title)
    setEditBody(post.body)}
  },[post,setEditBody,setEditTitle]
  )
  return (
    <main className="NewPost">
    <form className="newPostForm" onSubmit={(e)=>e.preventDefault()}>
        <label htmlFor="postTitle">Title</label>
        < input 
            id="postTitle" 
            type="text" 
            required 
            value={editTitle}
            onChange={(e)=>setEditTitle(e.target.value)}
        />
        <label htmlFor="postBody">Post</label>
        <textarea 
            id="postBody"
            required
            value={editBody}
            onChange={(e)=>setEditBody(e.target.value)}
        />
        <button type="submit" className="editButton" onClick={()=>handleEdit(post.id)}>Submit</button>

    </form>
</main>
  )
}

export default EditPost