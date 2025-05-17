import Container from "../../components/Container/Container";
import css from "./MoviesPage.module.css";

function MoviesPage() {
  return (
    <section className={css.moviePage}>
      <Container>
        <h2>Search the Film</h2>
      </Container>
    </section>
  );
}

export default MoviesPage;
