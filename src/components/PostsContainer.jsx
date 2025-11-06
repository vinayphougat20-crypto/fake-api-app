import PostCard from "./PostCard";

export default function PostsContainer({posts, data, loading}) {
    if (loading) return <p>Loading Posts ... </p>;
    
     if (list.length === 0) return <p>No posts yet.</p>;

    return (
        <div className="posts-container">
            {list.map((post) => (
                <PostCard key={post.id} 
                title={post.title} 
                body={post.body} 
                />
            ))}
        </div>
    );
}