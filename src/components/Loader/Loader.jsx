import { CircleLoader } from "react-spinners";
import css from "./Loader.module.css";

function Loader({ isLoading = true }) {
  if (!isLoading) {
    return null;
  }
  return (
    <div className={css.loaderContainer}>
      <CircleLoader
        className={css.loader}
        color="#09032f"
        size={100}
        speedMultiplier={0.8}
      />
      <p className={css.loaderText}>"Just a moment, loading..."</p>
    </div>
  );
}

export default Loader;
