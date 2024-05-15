import React from 'react'
import { Link, useParams } from 'react-router-dom'

const PostPage = ({posts,handledelete}) => {
    const {id}=useParams()
    const post=posts.find((posts)=>(posts.id).toString()===id)
  return (
    <main className="PostPage">
        <article className="post">
            {post && 
             <> <h2>{post.title}</h2>
                <p className='postDate'>{post.datetime}</p>
                <p className='postTime'>{post.body}</p>
                <Link to={`/edit/${post.id}`}>
                  <button className='editButton'>Edit Post</button>
                </Link>
                <button className='deleteButton' onClick={()=>handledelete(post.id)}>Delete</button>
             </>
            }
            {!post &&
            <> <h2>Post not Foumnd</h2>
            
            </>

            }
        </article>
    </main>
  )
}

export default PostPage