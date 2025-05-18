import ReviewItem from "../ReviewItem/ReviewItem";
import css from "./ReviewsList.module.css";

function ReviewsList({ reviews }) {
  return (
    <ul className={css.reviewsList}>
      {reviews.map((review) => (
        <li className={css.reviewItem} key={review.id}>
          <ReviewItem review={review} />
        </li>
      ))}
    </ul>
  );
}

export default ReviewsList;
