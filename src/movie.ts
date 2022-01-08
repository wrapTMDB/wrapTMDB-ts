/* eslint-disable @typescript-eslint/no-explicit-any */
const axios = require('axios');
import * as c_module from './common';

/********************
 *
 * @param
 * @returns
 ********************/

export class MovieInfos {
  /********************
   * 1.Get the primary information about a movie.
   * @param {number} movie_id  Movie ID in TMDB
   * @param {string} language(optional)  Language to request
   * @returns {number} JSON
   ********************/
  async GetDetails(movie_id: string): Promise<any>;
  async GetDetails(movie_id: string, language: string): Promise<any>;
  async GetDetails(movie_id: string, language?: string): Promise<any> {
    const baseURL = c_module.GetURL();
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL + c_module.Route.MOVIE + '/' + movie_id + `?api_key=${token}`;

    if (language !== undefined) {
      targetURL += `&language=${language}`;
    }
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }

  /********************
   * 18.Remove your rating for a movie.
   * A valid session or guest session ID is required
   * @param {number|string} movie_id  Movie ID in TMDB
   * @param {string} guest_session_id
   * @param {string} session_id
   * @doc https://developers.themoviedb.org/3/movies/delete-movie-rating
   ********************/
  async DeleteRating(movie_id: string, session_id: string): Promise<any>;
  async DeleteRating(
    movie_id: string,
    session_id: string,
    guest_session_id: string
  ): Promise<any>;
  async DeleteRating(
    movie_id: string,
    session_id?: string,
    guest_session_id?: string
  ): Promise<any> {
    const baseURL = c_module.GetURL();
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL +
      c_module.Route.MOVIE +
      movie_id +
      '/rating' +
      `?api_key=${token}`;
    if (guest_session_id !== '' || guest_session_id !== undefined)
      targetURL += `&guest_session_id=${session_id}`;
    if (session_id !== '' || session_id !== undefined)
      targetURL += `&session_id=${session_id}`;
    await axios.delete(targetURL, header);
    /*no respone*/
  }
}

/*
MOVIES
1.GET Get Details
2.GET Get Account States
3.GET Get Alternative Titles
4.GET Get Changes
5.GET Get Credits
6.GET Get External IDs
7.GET Get Images
8.GET Get Keywords
9.GET Get Lists
10.GET Get Recommendations
11.GET Get Release Dates
12.GET Get Reviews
13.GET Get Similar Movies
14.GET Get Translations
15.GET Get Videos
16.GET Get Watch Providers
17.POST Rate Movie
18.DELETE Delete Rating
19.GET Get Latest
20.GET Get Now Playing
21.GET Get Popular
22.GET Get Top Rated
23.GET Get Upcoming
*/
