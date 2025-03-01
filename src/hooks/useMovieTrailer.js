import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS } from '../utils/constants';
import { addTrailerVideo } from '../utils/movieSlice';
import { useEffect } from 'react';

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  const trailerVideo = useSelector((store) => store.movie?.trailerVideo);
  const getMovieVideo = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/' +
        movieId +
        '/videos?language=en-US',
      API_OPTIONS
    );
    const json = await data.json();
    const filteredVideo = json.results.filter(
      (movie) => movie.type === 'Trailer'
    );
    const trailer = filteredVideo.length
      ? filteredVideo?.[0]
      : json.results[0] || '';
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMovieVideo();
  }, []);

  return trailerVideo;
};

export default useMovieTrailer;
