import QuoraBox from "./QuoraBox"
import '../css/Feed.css'
import Post from "./Post"
import { useEffect, useState } from "react"
import axios from 'axios'

const Feed = () => {
  const [posts , setPosts] = useState([])
  useEffect( ()=>{
axios.get('http://localhost:3000/api/question')
.then((res)=>{
  console.log(res.data);
  setPosts(res.data.reverse())
} )
  }, [])
  return (
    <div className="feed">
        <QuoraBox/>
        {
        posts.map((post , index)=>{
         return (
          <Post key={index} post={post}/>
         )
        })
        }
        {/* <Post/>
        <Post/>
        <Post/> */}
    </div>
  )
}
export default Feed