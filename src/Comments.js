import React, { useState, useEffect } from "react";
import CommentPage from './CommentPage'

function Comments({ item, setContent, content }) {
  const [ourComments, setOurComments] = useState([]);

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
  console.log(ourComments);
  let thisBooksComment = ourComments.filter(
    (comment) => comment.book_id == item.id
  );

  const comments = ourComments;
  useEffect(() => {
    fetch("http://localhost:9292/comments")
      .then((resp) => resp.json())
      .then((data) => setOurComments(data));
  }, []);

  return (
    <div>
      
        {thisBooksComment.map((comment) => ( 
          <><ol>
          <em>
            <strong>“{comment.comment}“</strong>
          </em>
        </ol> </>
        ))}
    <br/>

      <p>Thoughts on this book? Comment Here:</p>
      <textarea
      style={{ margin: 10 }}
        onChange={(event) => setContent(event.target.value)}
        value={content}
        type="text"
        placeholder="I like this book because..."
      />
        <br />
      <button
          style={{ margin: 10 }}
        onClick={() => newComment(item.id)}
        variant="primary"
        type="button"
      >
        Submit
      </button>
      <div>
      <h5 style={{ textAlign: "center"}}>
      Made a comment by mistake?
          <br />
          Delete on the Comment Page
          <br />
          <span role="img" aria-label="sheep">
          🐑
          </span>
          </h5>
        
      {/* <div><CommentPage key = {item.id} content = {content} item = {item} /></div> */}
      </div> 
    </div>
  );
}
export default Comments;
