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

export class Find {
  /********************
   * 1.GET /find/{external_id}
   * @description The find method makes it easy to search for objects in TMDB database by an external id.
   * @param {number|string} external_id
   * @param {string} external_source (default: imdb_id)
   * @param {string} language (optional)
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/find/find-by-id
   ********************/
  async GetFindByID(
    external_id: number | string,
    language?: string,
    external_source?: string
  ): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL + c_module.Route.FIND + `${external_id}` + `?api_key=${token}`;
    if (language !== '' && language !== undefined)
      targetURL += `&language=${language}`;
    if (external_source !== undefined) {
      targetURL += `&external_source=${external_source}`;
    }
    if (token === 'UnitTest_api_key') {
      return targetURL;
    }
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
}
/*
  1.GET Find by ID
*/
