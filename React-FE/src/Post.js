import React from 'react'
import { Link } from 'react-router-dom'

const Post = ({posts}) => {
  return (
<>
    <article className="post">
      <Link to={`post/${posts.id}`}>
        <h2>{posts.title}</h2>
        <p className="postDate">{posts.datetime}</p>
        <p className="postBody">{
            (posts.body).length <=25? posts.body:`${(posts.body).slice(0,25)}.....`
            }
        </p>
        </Link>


    </article>


</>
  )
}

export default Post