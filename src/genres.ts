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

export class Genres {
  /********************
   * 1.GET /genre/movie/list
   * @description Get the list of official genres for movies.
   * @param {string} language (optional)
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/genres/get-movie-list
   ********************/
  async GetMovieList(language?: string): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL +
      c_module.Route.GENRE +
      c_module.Route.MOVIE +
      'list' +
      `?api_key=${token}`;
    if (language !== '' || language !== undefined)
      targetURL += `&language=${language}`;
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
  /********************
   * 2.GET /genre/movie/list
   * @description Get the list of official genres for TV shows.
   * @param {string} language (optional)
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/genres/get-tv-list
   ********************/
  async GetTVList(language?: string): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL +
      c_module.Route.GENRE +
      c_module.Route.TV +
      'list' +
      `?api_key=${token}`;
    if (language !== '' || language !== undefined)
      targetURL += `&language=${language}`;
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
}
