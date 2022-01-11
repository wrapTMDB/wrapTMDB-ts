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
export class TVepisodesgroups {
  /********************
   * 1.GET /tv/episode_group/{id}
   * @description Get the details of a TV episode group. Groups support 7 different types which are enumerated as the following:
   * 1.Original air date
   * 2.Absolute
   * 3.DVD
   * 4.Digital
   * 5.Story arc
   * 6.Production
   * 7.TV
   * @param {number|string} id
   * @returns {any} JSON
   * @doc https://developers.themoviedb.org/3/tv-episode-groups/get-tv-episode-group-details
   ********************/
  async GetDetails(id: number | string): Promise<any>;
  async GetDetails(id: number | string, language?: string): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL +
      c_module.Route.TV +
      c_module.Route.EPISODEGROUPS +
      `${id}` +
      `?api_key=${token}`;
    if (language !== '' || language !== undefined)
      targetURL += `&language=${language}`;
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
}
