import CastItem from "../CastItem/CastItem";
import css from "./CastList.module.css";

function CastList({ cast }) {
  return (
    <ul className={css.castList}>
      {cast.map((actor) => (
        <li className={css.castItem} key={actor.credit_id}>
          <CastItem actor={actor} />
        </li>
      ))}
    </ul>
  );
}

export default CastList;
