import { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";

function CreateReview() {
  const [text, setText] = useState("");

  const navigate = useNavigate();

  const reviewCollectionRef = collection(db, "reviews");
  //must be async, in order to communicate with the Firebase datastore
  const createReview = async () => {
    await addDoc(reviewCollectionRef, {
      review: text,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
    });
    navigate("/");
  };

  useEffect(() => {
    if (!auth.currentUser) {
      navigate("/");
    }
  }, [navigate]);

  return (
    <div>
      <h2>Create a Review</h2>
      <div className="review-box">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          cols="30"
          rows="10"
          placeholder="review.."
        />
        <button onClick={createReview}>submit review</button>
      </div>
    </div>
  );
}

export default CreateReview;
