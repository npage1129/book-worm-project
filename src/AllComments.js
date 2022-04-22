import React, { useState, useEffect } from "react";
import CommentPage from './CommentPage';

function DisplayComments({ item }) {
    const [ourComments, setOurComments] = useState([]);
    const [changingComment, setChangingComment] = useState([])
    const [content, setContent] = useState("")
    const [updatedComment, setUpdatedComment] = useState([])
   
  function newComment(id)   {
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



function handleUpdate(id){
  let updatedComment = {
      comment: content,
  }
  console.log(updatedComment + "looking for new updates")
  const content = updatedComment

    fetch(`http://localhost:9292/comments/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedComment),
        
      })
  
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


            <div>
                    <form >
                        <h3 >Update Comment:</h3>
                        <label for='comment'>To update input the ID number :</label>
                        <input type="text" id="id" name='Content'  value={content}   placeholder="Content" onChange={(event)=>{setContent(event.target.value)}}/>
                        <br></br>
                        <label for ='new comment'>Update your comment here:  </label>
                        <textarea className="allInput" id="description" name='content' value ={updatedComment}  placeholder="updated comment" rows="2" onChange={(event)=>{setUpdatedComment(event.target.value)}}/>
                        <br></br>
                        <input id="upButton" type="submit" value="Update" onClick={handleUpdate} /> 
                    </form>
                      
                      
                      <div>
                        {thisBooksComment.map((comment) => ( 
                          <div><h4>Comment id #: {comment.id} </h4> <p>{comment.comment}</p> <button onClick={()=>handleDelete(comment.id)}>Delete</button></div>
                        ))}
                     </div>
              </div>
            
    </div>
  );
}

export default DisplayComments;
