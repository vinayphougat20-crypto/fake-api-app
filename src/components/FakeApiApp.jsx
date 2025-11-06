import {useState, useEffect} from "react";
import PostsContainer from "./PostsContainer";
import PostForm from "./PostForm";

const URL = "https://jsonplaceholder.typicode.com/posts";

export default function FakeApiApp() {
     
    const [posts, setPosts] = useState([]); 
    const [newPost, setNewPost] = useState({ 
        title: "",
        body: "",
    })
    const [isLoading, setIsLoading] = useState(true);

    const grabPosts = async () => {
        const response = await fetch(URL); 
        const data = await response.json();

        setPosts(data.map((post) => {
            return {id: post.id, ...post}
        }));
        setIsLoading(false); 
    }

    useEffect(() => grabPosts, []); 

    
    const handleOnFormChange = (e) => {
        setNewPost((prevNewPost) => {
            return {...prevNewPost, [e.target.name]: e.target.value};
        })
        return;
    }


    const handleAddNewPost = (e) => {
        e.preventDefault();
        setPosts((prevPosts) => {
            return [newPost, ...prevPosts] 
        })
        setNewPost({ title: "", body: ""})
    }

    return <div>
        <h1>Forum App</h1>
        {isLoading && <h2>Loading...</h2> }
        <PostForm newPost={newPost} 
            handleOnFormChange={handleOnFormChange}
            handleAddNewPost={handleAddNewPost}/>
        <p>Number of Posts: {posts.length}</p>
        <PostsContainer posts={posts}/>
    </div>
}