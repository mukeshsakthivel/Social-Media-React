import React from 'react'

const NewPost = ({handleSubmit,postTitle,postBody,setPosttitle,setPostBody}) => {
  return (
    <main className="NewPost">
        <form className="newPostForm" onSubmit={(e)=>handleSubmit(e)}>
            <label htmlFor="postTitle">Title</label>
            < input 
                id="postTitle" 
                type="text" 
                required 
                value={postTitle}
                onChange={(e)=>setPosttitle(e.target.value)}
            />
            <label htmlFor="postBody">Post</label>
            <textarea 
                id="postBody"
                required
                value={postBody}
                onChange={(e)=>setPostBody(e.target.value)}
            />
            <button type="submit">Submit</button>

        </form>
    </main>
  )
}

export default NewPost