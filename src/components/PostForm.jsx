export default function PostForm({ title, body, newChange,newSubmit }) {
return (
<form onSubmit={newSubmit}>
<div >
<label>Title:  </label>
<input name="title" value={title} onChange={newChange} /> {/*gets the titile from the user */}
</div>
<br></br>
<div>
<label  >Body: </label>
<textarea name="body" value={body} onChange={newChange}/>{/*gets the body from the user */}
<br></br>
<button type="submit" >Submit</button> {}
</div>

</form>
);
}