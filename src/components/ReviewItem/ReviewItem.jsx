import { RxAvatar } from "react-icons/rx";
import { baseImgURL } from "../../baseUrlImg";
import css from "./ReviewItem.module.css";

function ReviewItem({
  review: { author, author_details, content, updated_at, url },
}) {
  const dateUpdate = new Date(updated_at);
  return (
    <>
      <div className={css.reviewAuthor}>
        {author_details.avatar_path ? (
          <img
            className={css.authorAvatar}
            src={baseImgURL + author_details.avatar_path}
            alt={`User avatar of ${author}`}
          />
        ) : (
          <RxAvatar className={css.authorAvatar} />
        )}
        <h2 className={css.authorName}>{author}</h2>
      </div>
      <div className={css.reviewContent}>
        <p className={css.reviewTime}>
          {dateUpdate.toLocaleDateString() +
            ` ${dateUpdate.toLocaleTimeString()}`}
        </p>
        <p className={css.reviewText}>{content}</p>
        <a className={css.reviewLink} href={url} target="_blank">
          View original
        </a>
      </div>
    </>
  );
}

export default ReviewItem;
