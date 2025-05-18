import { NavLink, useLocation } from "react-router-dom";
import css from "./AdditionalInfo.module.css";
import clsx from "clsx";

const buildLinkClass = ({ isActive }) =>
  clsx(css.itemLink, isActive && css.active);
function AdditionalInfo() {
  const location = useLocation();
  return (
    <div className={css.additionalCont}>
      <h3 className={css.title}>Additional Info</h3>
      <ul className={css.list}>
        <li className={css.item}>
          <NavLink to={"cast"} state={location} className={buildLinkClass}>
            Cast
          </NavLink>
        </li>
        <li className={css.item}>
          <NavLink to={"reviews"} state={location} className={buildLinkClass}>
            Reviews
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default AdditionalInfo;
