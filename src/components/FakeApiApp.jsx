import { useEffect, useMemo, useState } from "react";
import PostForm from "./PostForm.jsx";
import PostsContainer from "./PostsContainer.jsx";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

export default function FakeApiApp() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState({ title: "", body: "" });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Load initial posts
  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        if (alive) setPosts(data.slice(0, 15));
      } catch (e) {
        if (alive) setError("Failed to load posts. Try again.");
        console.error(e);
      } finally {
        if (alive) setLoading(false);
      }
    })();
    return () => { alive = false; };
  }, []);

  // Form change handler (expected by your PostForm)
  const handleOnFormChange = (e) => {
    const { name, value } = e.target;
    setNewPost((p) => ({ ...p, [name]: value }));
  };

  // Add new local post (expected by your PostForm)
  const handleAddNewPost = (e) => {
    e.preventDefault();
    const title = newPost.title.trim();
    const body = newPost.body.trim();
    if (!title || !body) return;

    const local = { id: `local-${Date.now()}`, title, body, _local: true };
    setPosts((prev) => [local, ...prev]);
    setNewPost({ title: "", body: "" });
  };

  // Show newest first (locals first, then by id desc as a simple heuristic)
  const ordered = useMemo(() => {
    return posts.slice().sort((a, b) => {
      if (a._local && !b._local) return -1;
      if (!a._local && b._local) return 1;
      return (b.id ?? 0) - (a.id ?? 0);
    });
  }, [posts]);

  return (
    <div className="container" style={{ padding: 16 }}>
      <h2>Post Form</h2>

      <PostForm
        newPost={newPost}
        onChange={handleOnFormChange}
        onSubmit={handleAddNewPost}
      />

      {loading && <p>Loading posts…</p>}
      {error && <p style={{ color: "tomato" }}>{error}</p>}
      {!loading && !error && <PostsContainer posts={ordered} />}
    </div>
  );
}
