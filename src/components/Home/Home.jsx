import { useEffect, useState } from 'react';
import { fetchHomePage } from '../api';
import MoviesList from '../MoviesList/MoviesList';
import { Quotation, PulsarTitle } from './Home.styled';
import { Loader } from '../Loader/Loader';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    const getMoviesList = async () => {
      try {
        setIsLoading(true);
        setIsError(null);
        const trendInfo = await fetchHomePage({
          signal: abortController.signal,
        });
        setMovies(trendInfo);
      } catch (error) {
        setIsError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    getMoviesList();

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <>
      <PulsarTitle>Trending today</PulsarTitle>
      {isLoading && <Loader />}
      {isError && <p>Error loading movies. Please try again later.</p>}
      <Quotation>
        <strong>
          I hate even this moment that is passing. 
          <br /> I guess we changed. I guess that’s how everything is.
        </strong>
        <br />
        <span>BTS</span>
      </Quotation>
      {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
    </>
  );
};

export default Home;