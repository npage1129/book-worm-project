import React, {useEffect, useState} from "react";
import Comments from './Comments';
import DisplayComments from './AllComments';
import "./CommentPage.css";

function CommentPage() {
  const [complaints, setComplaints] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/books")
      .then((resp) => resp.json())
      .then((data) => setComplaints(data));
  }, []);
  let comments = complaints.map((comment)=> (
  comment.comments
 
  ))
  console.log(comments)
  return (
    <div>  
        {complaints?.map((comment) =>  ( 
        <DisplayComments item={comment} />
       
       ))} 
   
      </div>
  )
  
}
export default CommentPage;
