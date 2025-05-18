import { baseImgURL } from "../../baseUrlImg";
import css from "./CastItem.module.css";

function CastItem({ actor }) {
  return (
    <>
      <img
        className={css.actorImg}
        src={baseImgURL + actor.profile_path}
        alt={actor.name}
        loading="lazy"
      />
      <div className={css.aboutContainer}>
        <h3 className={css.actorName}>{actor.name}</h3>
        <h4 className={css.actorCharacter}>Character: {actor.character}</h4>
      </div>
    </>
  );
}

export default CastItem;
