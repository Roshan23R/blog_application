import { useLocation } from 'react-router'
import './singlePost.css'
import axios from 'axios'
import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';

export default function SinglePost() {
    const PF = "http://localhost:5000/images/";
    const location = useLocation();
    const path = (location.pathname.split("/")[2]);
    // console.log(path);
    const [post, setPost] = useState({});
    const { user } = useContext(Context);

    useEffect(() => {
        const getPost = async () => {
            const res = await axios.get("/posts/" + path);
            setPost(res.data);
        };
        getPost();
    }, [path]);
    
    const handleDelete = async () => { 
        try {
             await axios.delete(`/posts/${post._id}`, {
             data: { username: user.username },
      });
      window.location.replace("/");
    } catch (err) {}
    }
return (
    <div className='singlePost'>
        
        <div className="singlePostWrapper">
            {post.photo && (<img
            className="singlePostImg"
            src={PF + post.photo}
            alt=""/> )}
            
            <h1 className="singlePostTitle">
                {post.title}
                {post.username === user?.username && (
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt" onClick={handleDelete}></i>
                    </div>)
                }
            </h1>

            <div className="singlePostInfo">
                <span>
                    Author:
                    <Link to={`/?user=${post.username}`}  className="link">
                        <b className="singlePostAuthor">
                            {post.username}
                        </b>
                    </Link> 
                </span>
                <span>1{new Date(post.createdAt).toDateString()}</span>
            </div>

            <p className="singlePostDesc">
                {post.desc}
            </p>
        </div>
    </div>
    )
};
