export default function PostForm({ newPost, onChange, onSubmit }) {
  return (
    <div className="post-form-container">
      <h1>Post Form</h1>
      <form onSubmit={onSubmit} className="post-form">
        <div className="form-row">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={newPost.title}
          onChange={onChange}
          className="post-input"
        />
        </div>
        <div className="form-row">
        <label htmlFor="body">Body:</label>
        <input
          type="text"
          id="body"
          name="body"
          value={newPost.body}
          onChange={onChange}
          className="post-input"
        />
        </div>
        
        <button type="submit" className="post-button">Submit</button>
      </form>
    </div>
  );
}