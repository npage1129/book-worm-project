import React, { useState, useEffect } from "react";
import CommentPage from './CommentPage';

function DisplayComments({ item, setContent, content }) {
    const [ourComments, setOurComments] = useState([]);
    const [changingComment, setChangingComment] = useState([])



  function newComment(id) {
    let createComment = {
      comment: content,
      book_id: id,
    };
    fetch("http://localhost:9292/comments", {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      // Body data type must match "Content-Type" header
      body: JSON.stringify(createComment),
    })
      .then((data) => data.json())
      .then((data) => setOurComments([...ourComments, data]));

    setContent("");
  }

  let thisBooksComment = ourComments.filter(
    (comment) => comment.book_id == item.id
  );

 console.log(changingComment) 

  const comments = ourComments;
  useEffect(() => { 

    fetch("http://localhost:9292/comments")
      .then((resp) => resp.json())
      .then((data) => setOurComments(data),
      setChangingComment([...changingComment,thisBooksComment]));
  }, []);

function handleUpdate(){
    
    
}
function handleDelete(id){
let newSetOfComments = ourComments.filter((item) => item.id > 2)
fetch(`http://localhost:9292/comments/${id}`,{
      method: 'DELETE'
  })
  .then(res => res.json())
  .then(data => { console.log(data) })
  
  fetch("http://localhost:9292/comments")
      .then((resp) => resp.json())
      .then((data) => setOurComments(data))
}
  return (
    <div>
        <h1>{item.title}</h1>
      <p>
      
        {thisBooksComment.map((comment) => ( 
          <div><p>{comment.comment}</p> <button onClick={()=>handleUpdate(comment.id)}>Update</button> <button onClick={()=>handleDelete(comment.id)}>Delete</button></div>
        ))}
      </p>

      <p>Thoughts on this book? Comment Here:</p>
      <textarea
        onChange={(event) => setContent(event.target.value)}
        value={content}
        type="text"
        placeholder="I like this book because..."
      />
      <button
        onClick={() => newComment(item.id)}
        variant="primary"
        type="button"
      >
        Submit
      </button>
      <div>
      </div> 
    </div>
  );
}
export default DisplayComments;
