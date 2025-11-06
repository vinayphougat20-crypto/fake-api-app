import PostCard from "./PostCard";

export default function PostsContainer({ posts}) {
    if (posts) return <p>Loading Posts ... </p>;
    

    return (
        <div className="posts-container">
            {data.map((post) => (
                <PostCard key={post.id} 
                title={post.title} 
                body={post.body} 
                />
            ))}
        </div>
    );
}