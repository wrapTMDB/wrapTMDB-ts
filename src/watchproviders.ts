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
export class Watchproviders {
  /********************
   * 1.GET /watch/providers/regions
   * @description Returns a list of all of the countries we have watch provider (OTT/streaming) data for.
   * @param {string} language(optional)
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/watch-providers/get-available-regions
   ********************/
  async GetAvailableRegions(language?: string): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL + c_module.Route.WATCHPROVIDERS + 'regions' + `?api_key=${token}`;
    if (language !== '' || language !== undefined)
      targetURL += `&language=${language}`;
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
  /********************
   * 2.GET /watch/providers/movie
   * @description Returns a list of the watch provider (OTT/streaming) data we have available for movies.
   * You can specify a watch_region param if you want to further filter the list by country.
   * @param {string} language(optional)
   * @param {string} watch_region(optional)
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/watch-providers/get-movie-providers
   ********************/
  async GetMovieProviders(
    language?: string,
    watch_region?: string
  ): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL +
      c_module.Route.WATCHPROVIDERS +
      c_module.Route.MOVIE +
      `?api_key=${token}`;
    if (language !== '' || language !== undefined)
      targetURL += `&language=${language}`;
    if (watch_region !== '' || watch_region !== undefined)
      targetURL += `&watch_region=${watch_region}`;
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
  /********************
   * 3.GET /watch/providers/tv
   * @description Returns a list of the watch provider (OTT/streaming) data we have available for TV series.
   * You can specify a watch_region param if you want to further filter the list by country.
   * @param {string} language(optional)
   * @param {string} watch_region(optional)
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/watch-providers/get-tv-providers
   ********************/
  async GetTVProviders(language?: string, watch_region?: string): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL +
      c_module.Route.WATCHPROVIDERS +
      c_module.Route.TV +
      `?api_key=${token}`;
    if (language !== '' || language !== undefined)
      targetURL += `&language=${language}`;
    if (watch_region !== '' || watch_region !== undefined)
      targetURL += `&watch_region=${watch_region}`;
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
}
/*
  1.GET GetAvailableRegions
  2.GET GetMovieProviders
  3.GET GetTVProviders
*/
