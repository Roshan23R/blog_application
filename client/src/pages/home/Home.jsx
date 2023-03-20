import './home.css'
import { useEffect, useState } from 'react';
import { useLocation } from "react-router";
import Header from "../../components/header/Header";
import Sidebar from '../../components/sidebar/Sidebar';
import Posts from '../../components/posts/Posts';
import axios from "axios";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const {search} = useLocation();

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await axios.get("/posts" + search);
      console.log(res);
      setPosts(res.data);
    }
    fetchPosts()
  }, [search])

  
  return (
    <>
      <Header />
      <div className='home'>
        <Posts posts={posts}/>
        <Sidebar />
      </div>
    </>
  );
}
