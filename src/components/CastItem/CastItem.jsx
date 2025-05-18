import { baseImgURL } from "../../baseUrlImg";
import css from "./CastItem.module.css";

function CastItem({ actor }) {
  return (
    <>
      <img
        src={baseImgURL + actor.profile_path}
        alt={actor.name}
        loading="lazy"
      />
      <div className={css.aboutContainer}>
        <h3>{actor.name}</h3>
        <h4 className={css.infoTitle}>Character :{actor.character}</h4>
      </div>
    </>
  );
}

export default CastItem;
