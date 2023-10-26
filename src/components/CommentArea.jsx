import CommentList from "./CommentList";
import AddComment from "./AddComment";
import { Component } from "react";

class CommentArea extends Component {
   state = {
      comments: [],
   };

   getComments = () => {
      fetch("https://striveschool-api.herokuapp.com/api/comments/0316438960", {
         headers: {
            "Content-Type": "application/json",
            Authorization:
               "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTNhNzVkYWY2ZTNkZDAwMTQ5NWU0OWQiLCJpYXQiOjE2OTgzMzAwNzQsImV4cCI6MTY5OTUzOTY3NH0.tYZsMhhS_yqnCH1v4ULCoAeBdA9DXGK1tTakH4XmpPM",
         },
      })
         .then((response) => {
            if (!response.ok) {
               throw new Error("Error getting comments!");
            } else {
               return response.json();
            }
         })
         .then((data) => {
            console.log("Fetch went fine and data is collected", data);
            this.setState({
               comments: data,
            });
         })
         .catch((error) => {
            console.log("ERROR!", error);
         });
   };

   componentDidMount() {
      this.getComments();
   }
   render() {
      return (
         <div className="m-3">
            <CommentList commets={this.state.comments} />
            <AddComment />
         </div>
      );
   }
}

export default CommentArea;
