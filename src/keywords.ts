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

export class KeyWord {
  /********************
   * 1.GET /keyword/{keyword_id}
   * @description
   * @param {number|string} keyword_id
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/keywords/get-keyword-details
   ********************/
  async GetDetails(keyword_id: number | string): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    const targetURL: string =
      baseURL + c_module.Route.KEYWORD + `${keyword_id}` + `?api_key=${token}`;

    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
  /********************
   * 2.GET /keyword/{keyword_id}/movies
   * @description Get the movies that belong to a keyword.
   * We highly recommend using 'movie discover' instead of this method as it is much more flexible.
   * @param {number|string} keyword_id
   * @param {number|string} language(optional)
   * @param {boolean} include_adult(optional)
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/keywords/get-keyword-details
   ********************/
  async GetMovies(keyword_id: number | string): Promise<any>;
  async GetMovies(keyword_id: number | string, language: string): Promise<any>;
  async GetMovies(
    keyword_id: number | string,
    language?: string,
    include_adult?: boolean
  ): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL +
      c_module.Route.KEYWORD +
      `${keyword_id}/` +
      'movies' +
      `?api_key=${token}`;
    if (language !== '' || language !== undefined)
      targetURL += `&language=${language}`;
    if (include_adult !== undefined) {
      targetURL += `&include_adult=${include_adult}`;
    }
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
}
