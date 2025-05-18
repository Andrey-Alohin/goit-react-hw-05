import { Link, useLocation } from "react-router-dom";
import css from "./AdditionalInfo.module.css";

function AdditionalInfo() {
  const location = useLocation();
  return (
    <div className={css.additionalCont}>
      <h3 className={css.title}>Additional Info</h3>
      <ul className={css.list}>
        <li className={css.item}>
          <Link to={"cast"} state={location} className={css.itemLink}>
            Cast
          </Link>
        </li>
        <li className={css.item}>
          <Link to={"reviews"} state={location} className={css.itemLink}>
            Reviews
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default AdditionalInfo;
