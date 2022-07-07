import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "../firebase-config";

function MyReviews({ isAuth }) {
  const [reviews, setReviews] = useState([]);
  const reviewCollectionRef = collection(db, "reviews");

  useEffect(() => {
    const getReviews = async () => {
      const data = await getDocs(reviewCollectionRef);
      setReviews(
        data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }))
      );
    };
    getReviews();
  }, [reviewCollectionRef]);

  const deleteReview = async (id) => {
    //specify what review to delete
    const reviewDocDelete = doc(db, "reviews", id);
    await deleteDoc(reviewDocDelete);
  };

  return (
    <div className="pageContainer">
      <h2>Reviews</h2>
      <div>
        <Link to="/">Back</Link>
      </div>

      <ul style={{ listStyle: "none" }}>
        {reviews.map((review) => (
          <div className="review-block" key={review.id}>
            <li>
              {isAuth && review.author.id === auth.currentUser.uid && (
                <div className="deleteReview">
                  <button onClick={() => deleteReview(review.id)}>
                    &#128465;
                  </button>
                </div>
              )}

              <p>{review.review}</p>
              <p>@ {review.author.name}</p>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default MyReviews;
