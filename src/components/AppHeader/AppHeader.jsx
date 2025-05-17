import css from "./AppHeader.module.css";
import Container from "../Container/Container";
import NavBar from "../NavBar/NavBar";

function AppHeader() {
  return (
    <header className={css.header}>
      <Container>
        <NavBar />
      </Container>
    </header>
  );
}

export default AppHeader;
