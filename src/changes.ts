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
export class Change {
  /********************
   * 1.GET /movie/changes
   * @description Get a list of all of the movie ids that have been changed in the past 24 hours.
   * You can query it for up to 14 days worth of changed IDs at a time with
   * the "start_date" and "end_date" query parameters. 100 items are returned per page.
   * @param {number|string} start_date (optional)
   * @param {number|string} end_date (optional)
   * @param {number} page (optional)
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/changes/get-movie-change-list
   ********************/
  async GetMovieChangeList(
    start_date?: string,
    end_date?: string,
    page?: number
  ): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL + c_module.Route.MOVIE + 'changes' + `?api_key=${token}`;
    if (start_date !== '' && start_date !== undefined)
      targetURL += `&start_date=${start_date}`;
    if (end_date !== '' && end_date !== undefined)
      targetURL += `&end_date=${end_date}`;
    if (page !== undefined) {
      targetURL += `&page=${page}`;
    }
    if (token === 'UnitTest_api_key') {
      return targetURL;
    }
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }

  /********************
   * 2.GET /tv/changes
   * @description Get a list of all of the TV show ids that have been changed in the past 24 hours.
   * You can query it for up to 14 days worth of changed IDs at a time
   * with the "start_date" and "end_date" query parameters. 100 items are returned per page.
   * @param {number|string} start_date (optional)
   * @param {number|string} end_date (optional)
   * @param {number} page (optional)
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/changes/get-tv-change-list
   ********************/
  async GetTVChangeList(
    start_date?: string,
    end_date?: string,
    page?: number
  ): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL + c_module.Route.TV + 'changes' + `?api_key=${token}`;
    if (start_date !== '' && start_date !== undefined)
      targetURL += `&start_date=${start_date}`;
    if (end_date !== '' && end_date !== undefined)
      targetURL += `&end_date=${end_date}`;
    if (page !== undefined) {
      targetURL += `&page=${page}`;
    }
    if (token === 'UnitTest_api_key') {
      return targetURL;
    }
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }

  /********************
   * 3.GET /person/changes
   * @description Get a list of all of the person ids that have been changed in the past 24 hours.
   * You can query it for up to 14 days worth of changed IDs at a time
   * with the "start_date" and "end_date" query parameters. 100 items are returned per page.
   * @param {number|string} start_date (optional)
   * @param {number|string} end_date (optional)
   * @param {number} page (optional)
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/changes/get-person-change-list
   ********************/
  async GetPersonChangesList(
    start_date?: string,
    end_date?: string,
    page?: number
  ): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL + 'person' + '/changes' + `?api_key=${token}`;
    if (start_date !== '' && start_date !== undefined)
      targetURL += `&start_date=${start_date}`;
    if (end_date !== '' && end_date !== undefined)
      targetURL += `&end_date=${end_date}`;
    if (page !== undefined) {
      targetURL += `&page=${page}`;
    }
    if (token === 'UnitTest_api_key') {
      return targetURL;
    }
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
}
/*
//1.GET Get Movie Change List
//2.GET Get TV Change List
3.GET Get Person Change List
*/
