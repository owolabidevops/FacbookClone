import { Avatar } from "@material-ui/core";
import { InsertEmoticon, PhotoLibrary, Videocam } from "@material-ui/icons";
import React, { useState } from "react";
import { useStateValue } from './Stateprovider';
import "./MessageSender.css";
import db from "./firebase"
import firebase from "firebase"

function MessageSender() {
  const [{user}, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
   db.collection("posts").add({
     message:input,
      timestamp:firebase.firestore.FieldValue.serverTimestamp(),
      profilePic:user.photoURL,
      username: user.displayName,
      image:imageUrl,
   });



    setInput("");
    setImageUrl("");

  };

  return (
    <div className="message-sender">
      <div className="message-sender-top">
        <Avatar src={user.photoURL}/>
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="messagesender-input"
            placeholder={`What's on your mind, ${user.displayName}?`}
          />
          <input
           value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
           placeholder="Image URL (optional)" />
          <button onClick={handleSubmit} type="submit">
            Hidden Submit
          </button>
        </form>
      </div>

      <div className="message-sender-botton">
        <div className="mesaagesender-option">
          <Videocam style={{ color: "red" }} />

          <h3> Live Video</h3>
        </div>
        <div className="mesaagesender-option">
          <PhotoLibrary style={{ color: "green" }} />

          <h3>Photo/Video</h3>
        </div>
        <div className="mesaagesender-option">
          <InsertEmoticon style={{ color: "orange" }} />

          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
