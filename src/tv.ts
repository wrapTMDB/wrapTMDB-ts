/* eslint-disable @typescript-eslint/no-explicit-any */
const axios = require('axios');
import * as c_module from './common';

export class TVInfos {
  /********************
   * REST Get Series/TV infomation
   * @param {number} tv_id  Series/TV ID in TMDB
   * @param {string} language(optional)  Language to request
   * @returns {number} JSON
   ********************/
  async GetDetails(tv_id: string): Promise<any>;
  async GetDetails(tv_id: string, language: string): Promise<any>;
  async GetDetails(tv_id: string, language?: string): Promise<any> {
    const baseURL = c_module.GetURL();
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL + c_module.Route.TV + '/' + tv_id + `?api_key=${token}`;

    if (language !== undefined) {
      targetURL += `&language=${language}`;
    }
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
}

/*
TV
GET Get Details
GET Get Account States
GET Get Aggregate Credits
GET Get Alternative Titles
GET Get Changes
GET Get Content Ratings
GET Get Credits
GET Get Episode Groups
GET Get External IDs
GET Get Images
GET Get Keywords
GET Get Recommendations
GET Get Reviews
GET Get Screened Theatrically
GET Get Similar TV Shows
GET Get Translations
GET Get Videos
GET Get Watch Providers
POST Rate TV Show
DELETE Delete Rating
GET Get Latest
GET Get TV Airing Today
GET Get TV On The Air
GET Get Popular
GET Get Top Rated
*/
