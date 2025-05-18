import { Link } from "react-router-dom";
import Container from "../../components/Container/Container";
import css from "./NotFound.module.css";
import { FcHome } from "react-icons/fc";

function NotFound() {
  return (
    <section className={css.notFound}>
      <Container>
        <h1 className={css.header}>
          <span className={css.frstN}>4</span>
          <span className={css.scndN}>0</span>
          <span className={css.thrdN}>4</span> Page not found
        </h1>
        <Link to={"/"} className={css.linkHome}>
          <span className={css.linkSpan}>Oops!</span> Go back home{" "}
          <FcHome className={css.linkIcon} />
        </Link>
      </Container>
    </section>
  );
}

export default NotFound;
