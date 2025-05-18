import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import css from "./MovieDetailsPage.module.css";
import { IoReturnUpBackOutline } from "react-icons/io5";
import { Suspense, useEffect, useRef, useState } from "react";
import { movieDetails } from "../../api";
import Container from "../../components/Container/Container";
import FilmCard from "../../components/FilmCard/FilmCard";
import AdditionalInfo from "../../components/AdditionalInfo/AdditionalInfo";
import Loader from "../../components/Loader/Loader";

function MovieDetailsPage() {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkRef = useRef(location.state ?? "/");

  const [film, setFilm] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    async function fetchData(id) {
      try {
        setIsError(false);
        setIsLoading(true);
        const data = await movieDetails(id);
        setFilm(data);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData(movieId);
  }, [movieId]);
  return (
    <section className={css.details}>
      <Container>
        <Link to={backLinkRef.current} className={css.backBtn}>
          <IoReturnUpBackOutline className={css.backIcon} /> Go back
        </Link>
        {!isLoading ? film && <FilmCard film={film} /> <AdditionalInfo />}
        <Loader isLoading={isLoading} />
        {isError && <Error />}
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Container>
    </section>
  );
}

export default MovieDetailsPage;
