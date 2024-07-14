import { useEffect, useState } from "react";
import Posts from "../../components/Posts/Posts";


import "./blog.css";
import axios from "axios";
import { useLocation } from "react-router";

export default function Blog1() {
    const [posts, setPosts] = useState([]);
    const {search} = useLocation();
    console.log(search);
  
    useEffect(() => {
      const fetchPosts = async () => {
        const res = await axios.get("/posts"+ search);
        setPosts(res.data);
      };
      fetchPosts();
    }, [search]);
    return (
      <>
     
        <div className="home">
          <Posts posts={posts} />
       
        </div>
      </>
    );
}
