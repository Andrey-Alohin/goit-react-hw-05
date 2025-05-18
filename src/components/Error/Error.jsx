import { TbError404 } from "react-icons/tb";
import css from "./Error.module.css";

export default function Error() {
  return (
    <div className={css.errorContainer}>
      <TbError404 className={css.errorIcon} />
      <p className={css.errorText}>
        Oops! Something went wrong. Please try again later.
      </p>
    </div>
  );
}
