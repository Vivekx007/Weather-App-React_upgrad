import React, { useState } from "react";

export default function Comment(props) {
  const [comment, setComment] = useState({
    comments: [],
    userComment: null,
  });

  const updateUserComment = (e) => {
    // this.setState({ userComment: e.target.value });
    setComment((prevState) => {
      return { ...prevState, userComment: e.target.value };
    });
  };

  const postComment = () => {
    if (comment.userComment.length) {
      setComment((prevState) => {
        return { ...prevState, userComment: "" };
      });
      console.log("postComment fired");
      comment.comments.push(comment.userComment);
    }
  };
  const listOfComments = comment.comments.map((eachComment) => (
    <p style={{ textAlign: "left" }}>
      <i class="fa fa-user" aria-hidden="true"></i> {eachComment}
    </p>
  ));
  return (
    <div>
      <div style={{}}>
        <div>
          <div
            style={{
              border: "1px solid white",
              padding: "10px",
              fontFamily: " Roboto,sans-serif",
            }}
          >
            <textarea
              placeholder="Enter your comment here..."
              value={comment.userComment}
              style={{
                fontSize: "24px",
                background: "#f7f2ff",
                width: "97%",
                border: "1px solid #E5E5E5",
                borderRadius: "4px",
                padding: "10px",
                marginRight: "20px",
              }}
              onChange={(e) => updateUserComment(e)}
            ></textarea>
            <br />
            <button
              onClick={postComment}
              style={{
                background: "#3251ED",
                color: "white",
                fontSize: "24px",
                cursor: "pointer",
                float: "left",
              }}

              //  style={{ fontSize: '24px', background: '#fff' , cursor: 'pointer', float: 'left'}}
            >
              Comment
            </button>
            <br />
            <br />
            <div style={{ background: "#f7f2ff", padding: "10px" }}>
              <p
                style={{
                  textAlign: "left",
                  display: "block",
                  color: "rgb(80, 80, 80)",
                }}
              >
                <b>Comments ({listOfComments.length})</b>{" "}
              </p>
              {listOfComments}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
