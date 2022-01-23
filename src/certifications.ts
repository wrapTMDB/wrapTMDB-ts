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

export class Certifications {
  /********************
   * 1.GET /certification/movie/list
   * @description Get an up to date list of the officially supported movie certifications on TMDB.
   * @returns {any} JSON
   * @doc https://developers.themoviedb.org/3/certifications/get-movie-certifications
   ********************/
  async GetMovieCertifications(): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    const targetURL: string =
      baseURL +
      c_module.Route.CERTIFICATION +
      c_module.Route.MOVIE +
      'list' +
      `?api_key=${token}`;
    if (token === 'UnitTest_api_key') {
      return targetURL;
    }
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
  /********************
   * 2.GET /certification/tv/list
   * @description Get your account details.
   * @returns {any} JSON
   * @doc https://developers.themoviedb.org/3/account/get-account-details
   ********************/
  async GetTVCertifications(): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    const targetURL: string =
      baseURL +
      c_module.Route.CERTIFICATION +
      c_module.Route.TV +
      'list' +
      `?api_key=${token}`;
    if (token === 'UnitTest_api_key') {
      return targetURL;
    }
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
}
/*
  1.GET Get Movie Certifications
  2.GET Get TV Certifications
*/
