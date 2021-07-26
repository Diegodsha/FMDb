/* eslint-disable no-unused-vars */
import { getMostPopularMovies, getTop250Movies, allMovies } from '../API/api';
import types from './Types';

export const fetchMoviesAction = (movies) => ({
  type: types.fetchMovies,
  movies,
});

export const fetchSeriesAction = (series) => ({
  type: types.fetchSeries,
  series,
});

export const fetchMovies = () => async (dispatch) => {
  const movies = await allMovies;
  //   console.log(movies);
  dispatch(fetchMoviesAction(movies));
};