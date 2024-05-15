
import Headers from './Headers'
import Home from './Home';
import Nav from './Nav'
import NewPost from './NewPost';
import About from './About'
import Missing from './Missing'
import PostPage from './PostPage';
import EditPost from './EditPost'
import api from './api/posts'    //given path value ah access pannalam using of its name api ,we can be give other name also
import useWindowSize from './hooks/useWindowSize';


import { useEffect, useState } from 'react';
import { format, set} from "date-fns"
import { Route, Router, Routes, useNavigate } from 'react-router-dom';

function App() 
{
  const [search,setSearch]=useState('')
  const [serachResult,setSearchResult]=useState([])
  const [postTitle,setPosttitle] =useState('')
  const [postBody,setPostBody]=useState('')
  const [editTitle ,setEditTitle]=useState('')
  const [editBody,setEditBody]=useState('')

  const navigate=useNavigate()
  const {width}=useWindowSize()   //is a custom hook //it return an windowsize object in the object we taken a width only 

  const [posts,setPosts]=useState([])
// using api to get data from a json server 
  useEffect(()=>{
      const  featchPost=async()=>{
        try{
          const responce= await api.get("/posts")
          setPosts(responce.data)//nama json la JSON.stringfy kudupom ax la data kudutha pothum 
        }
        catch (err)
        {
          console.log(`Error${err.message}`)
        }

      }
      featchPost();

  },[]
  )
  useEffect(() => {
    console.log("sjdbn")
    console.log({search})
    const filterecord = posts.filter((post) =>
      (post.body && post.body.toLowerCase().includes(search.toLowerCase())) ||
      (post.title && post.title.toLowerCase().includes(search.toLowerCase()))
    );
    setSearchResult(filterecord.reverse());
  }, [posts, search]);
  


  const handleSubmit=async(e)=>
    {
      e.preventDefault()
      const ids= posts.length? posts[posts.length-1].id+1:1
      const datetimes=format(new Date(),'MMMM dd,yyyypp')
      const newPost={ id:ids,title:postTitle,datetime:datetimes,body:postBody}
      console.log("Submitting new post:", newPost);
      const postDataUrl= await api.post("/posts",newPost)
      const allPost=[...posts,postDataUrl.data]
        console.log("Post submitted:");
      setPosts(allPost)
      setPosttitle('')
      setPostBody('')
      navigate('/');
     
    }


  const handledelete = async (id) => {
  try {
    await api.delete(`/posts/${id}`)
   
  } catch (err) {
    console.log(`Error: ${err.message}`);
  }
  const deleteResult = posts.filter((post) => post.id !== id);
  setPosts(deleteResult);
  navigate('/');
  };
  
  const handleEdit=async (id)=>{
    try{
      const datetime=format(new Date(),'MMMM dd,yyyyypp')
      const editPost={id,title:editTitle,datetime,body:editBody}

      const editDataUrl=await api.put(`/posts`,editPost)
      setPosts(posts.map((posts)=>posts.id===id?{...editDataUrl.data}:posts))
      setEditTitle('')
      setEditBody('')
      navigate('/')

    }
    catch (err) {
      console.log(`Error: ${err.message}`);
    }

  }


  return (
    <div>
    <Headers title="Social Media" width={width}/>
    <Nav 
      search={search} 
      setSearch={setSearch}
    />
    <Routes>
      <Route path="/"    element={ <Home posts={serachResult}/> }/>
      <Route path="post">
        <Route index element={ <NewPost 
                                handleSubmit={handleSubmit}
                                postBody={postBody}
                                postTitle={postTitle}
                                setPostBody={setPostBody}
                                setPosttitle={setPosttitle} />
                              } 
        />
        <Route path=":id" element={<PostPage
                                    posts={posts}
                                    handledelete={handledelete}/>
                                  }
        />
      </Route>
      <Route path="edit/:id" element={ <EditPost
                                        posts={posts}
                                        handleEdit={handleEdit}
                                        editTitle={editTitle}
                                        editBody={editBody}
                                        setEditBody={setEditBody}
                                        setEditTitle={setEditTitle}/>
                                      }
      />                                
      <Route path="about" element={ <About/>}/>
      <Route path="*"     element={ <Missing/>}/>
    </Routes>
   
    
    </div>
  );
}

export default App;
