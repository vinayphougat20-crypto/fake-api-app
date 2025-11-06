import {useState, useEffect} from "react";
import PostForm from "./PostForm";
import PostsContainer from "./PostsContainer";

export default function FakeApiApp() {
    const URL = "https://jsonplaceholder.typicode.com/posts";

    
    const [data, setData] = useState([]);
    const [newPost, setNewPost] = useState({
        title: "",
        body: ""    
    });

    useEffect(()=> {
        fetchData(); 
    
    }, []);

    const fetchData = async () => {         
        const response = await fetch(URL);
        const posts = await response.json();
        setData(posts);
    };

    
    const handleOnChange = (e) => {
        setNewPost((prevPost) => {
            return {
                ...prevPost, 
                [e.target.name]: e.target.value
            };
        });
    };

    
    const handleAddPost = (e) => {
        e.preventDefault(); 
        if (newPost.title ==="" || newPost.body ===""){
            alert("Please fill out both title and body");
        } else {
            setData((prevData) => {
                return [newPost, ...prevData];
            });

        setNewPost({
            title: "",
            body: ""
        });
        }
    };

    
    return (
        <div>
            <h1>Fake API Posts</h1>
            <PostForm
                handleAddPost={handleAddPost}
                handleOnChange={handleOnChange}
                newPost={newPost}
            />
            <PostsContainer
                posts={data}
            />
        </div>
    );

}
