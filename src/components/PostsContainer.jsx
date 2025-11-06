import PostCard from "./PostCard";

export default function PostsContainer({posts}) {
    return(
        <div>
        {}
        {posts.map((post, index) => (
        <PostCard
        key={index}
        title={post.title}
        body={post.body}
        />
    ))}
    </div>
    );
}