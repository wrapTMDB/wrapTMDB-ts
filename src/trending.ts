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
export class Trending {
  /********************
   * 1.GET /trending/{media_type}/{time_window}
   * @description Get the daily or weekly trending items.
   * The daily trending list tracks items over the period of a day while items have a 24 hour half life.
   * The weekly list tracks items over a 7 day period, with a 7 day half life.
   * @param {string} media_type ("all" || "movie" || "tv" || "person")
   * @param {string} time_window ("day" || "week")
   * @returns {any} JSON
   * @doc https://developers.themoviedb.org/3/trending/get-trending
   ********************/
  async GetTrending(media_type: string, time_window: string): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    const targetURL: string =
      baseURL +
      c_module.Route.TRENDING +
      `${media_type}/` +
      `${time_window}` +
      `?api_key=${token}`;
    if (token === 'UnitTest_api_key') {
      return targetURL;
    }
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
}
/*
1.GET Get Trending
*/
