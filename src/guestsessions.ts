/*
 * The MIT License (MIT)
 *
 * Copyright (c) kwangsing3
 *
 * https://github.com/wrapTMDB/wrapTMDB-ts
 *
 */
const axios = require('axios');
import * as c_module from './common';

const baseURL = c_module.GetURL();

export class GuestSessions {
  /********************
   * 3.GET /guest_session/{guest_session_id}/rated/movies
   * @description Get the rated movies for a guest session.
   * @param {number|string} guest_session_id
   * @param {string} language (optional)
   * @param {string} sort_by (optional) "created_at.asc" or "created_at.desc"
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/guest-sessions/get-guest-session-rated-movies
   ********************/
  async GetRatedMovies(guest_session_id: string): Promise<any>;
  async GetRatedMovies(
    guest_session_id: string,
    language?: string,
    sort_by?: string
  ): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL +
      c_module.Route.GUESTSESSION +
      `${guest_session_id}/` +
      'rated/movies' +
      `?api_key=${token}`;
    if (language !== '' || language !== undefined)
      targetURL += `&language=${language}`;
    if (sort_by !== '' || sort_by !== undefined)
      targetURL += `&sort_by=${sort_by}`;
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
  /********************
   * 3.GET /guest_session/{guest_session_id}/rated/tv
   * @description Get the rated TV shows for a guest session.
   * @param {number|string} guest_session_id
   * @param {string} language (optional)
   * @param {string} sort_by (optional) "created_at.asc" or "created_at.desc"
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/guest-sessions/get-guest-session-rated-tv-shows
   ********************/
  async GetRatedTVShows(guest_session_id: string): Promise<any>;
  async GetRatedTVShows(
    guest_session_id: string,
    language?: string,
    sort_by?: string
  ): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL +
      c_module.Route.GUESTSESSION +
      `${guest_session_id}/` +
      'rated/tv' +
      `?api_key=${token}`;
    if (language !== '' || language !== undefined)
      targetURL += `&language=${language}`;
    if (sort_by !== '' || sort_by !== undefined)
      targetURL += `&sort_by=${sort_by}`;
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
  /********************
   * 3.GET /guest_session/{guest_session_id}/rated/tv/episodes
   * @descriptionGet the rated TV episodes for a guest session.
   * @param {number|string} guest_session_id
   * @param {string} language (optional)
   * @param {string} sort_by (optional) "created_at.asc" or "created_at.desc"
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/guest-sessions/get-guest-session-rated-tv-shows
   ********************/
  async GetRatedTVEpisodes(guest_session_id: string): Promise<any>;
  async GetRatedTVEpisodes(
    guest_session_id: string,
    language?: string,
    sort_by?: string
  ): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL +
      c_module.Route.GUESTSESSION +
      `${guest_session_id}/` +
      'rated/tv/episodes' +
      `?api_key=${token}`;
    if (language !== '' || language !== undefined)
      targetURL += `&language=${language}`;
    if (sort_by !== '' || sort_by !== undefined)
      targetURL += `&sort_by=${sort_by}`;
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
}
/*
1.GET Get Rated Movies
2.GET Get Rated TV Shows
3.GET Get Rated TV Episodes
*/
