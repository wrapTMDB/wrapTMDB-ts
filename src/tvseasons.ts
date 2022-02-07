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
export class TVseason {
  /********************
   * 1.GET /tv/{tv_id}/season/{season_number}
   * @description Get the TV season details by id.
   * @param {number|string} tv_id
   * @param {number|string} season_number
   * @param {string} language (optional)
   * @param {string} append_to_response (optional)
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/tv-seasons/get-tv-season-details
   ********************/
  async GetDetails(
    tv_id: number | string,
    season_number: number | string,
    language?: string,
    append_to_response?: string
  ): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL +
      c_module.Route.TV +
      `${tv_id}/` +
      'season/' +
      `${season_number}` +
      `?api_key=${token}`;
    if (language !== '' && language !== undefined)
      targetURL += `&language=${language}`;
    if (append_to_response !== '' && append_to_response !== undefined)
      targetURL += `&append_to_response=${append_to_response}`;
    if (token === 'UnitTest_api_key') {
      return targetURL;
    }
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
  /********************
   * 2.GET /tv/{tv_id}/season/{season_number}/account_states
   * @description Returns all of the user ratings for the season's episodes.
   * @param {number|string} tv_id
   * @param {number|string} season_number
   * @param {string} session_id (optional)
   * @param {string} guest_session_id (optional)
   * @param {string} language (optional)
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/tv-seasons/get-tv-season-account-states
   ********************/
  async GetAccountStates(
    tv_id: number | string,
    season_number: number | string,
    session_id: string,
    language?: string,
    guest_session_id?: string
  ): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL +
      c_module.Route.TV +
      `${tv_id}/` +
      'season/' +
      `${season_number}` +
      '/account_states' +
      `?api_key=${token}`;
    if (session_id !== '' && session_id !== undefined)
      targetURL += `&session_id=${session_id}`;
    if (language !== '' && language !== undefined)
      targetURL += `&language=${language}`;
    if (guest_session_id !== '' && guest_session_id !== undefined)
      targetURL += `&guest_session_id=${guest_session_id}`;
    if (token === 'UnitTest_api_key') {
      return targetURL;
    }
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
  /********************
   * 3.GET /tv/{tv_id}/season/{season_number}/aggregate_credits
   * @description Get the aggregate credits for TV season.
   * @param {number|string} tv_id
   * @param {number|string} season_number
   * @param {string} language (optional)
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/tv-seasons/get-tv-season-aggregate-credits
   ********************/
  async GetAggregateCredits(
    tv_id: number | string,
    season_number: number | string,
    language?: string
  ): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL +
      c_module.Route.TV +
      `${tv_id}/` +
      'season/' +
      `${season_number}` +
      '/aggregate_credits' +
      `?api_key=${token}`;
    if (language !== '' && language !== undefined)
      targetURL += `&language=${language}`;
    if (token === 'UnitTest_api_key') {
      return targetURL;
    }
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
  /********************
   * 4.GET /tv/season/{season_id}/changes
   * @description Get the changes for a TV season. By default only the last 24 hours are returned.
   * @param {number|string} season_id
   * @param {string} start_date (optional)
   * @param {string} end_date (optional)
   * @param {number} page (optional)
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/tv-seasons/get-tv-season-changes
   ********************/
  async GetChanges(
    season_id: number | string,
    start_date?: string,
    end_date?: string,
    page?: number
  ): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL +
      c_module.Route.TV +
      'season/' +
      `${season_id}` +
      '/changes' +
      `?api_key=${token}`;
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
   * 5.GET /tv/{tv_id}/season/{season_number}/credits
   * @description Get the credits for TV season.
   * @param {number|string} tv_id
   * @param {number|string} season_number
   * @param {string} language (optional)
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/tv-seasons/get-tv-season-credits
   ********************/
  async GetCredits(
    tv_id: number | string,
    season_number: number | string,
    language?: string
  ): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL +
      c_module.Route.TV +
      `${tv_id}/` +
      'season/' +
      `${season_number}` +
      '/credits' +
      `?api_key=${token}`;
    if (language !== '' && language !== undefined)
      targetURL += `&language=${language}`;
    if (token === 'UnitTest_api_key') {
      return targetURL;
    }
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
  /********************
   * 6.GET /tv/{tv_id}/season/{season_number}/external_ids
   * @description Get the external ids for a TV season. We currently support the following external sources.
   * @param {number|string} tv_id
   * @param {number|string} season_number
   * @param {string} language (optional)
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/tv-seasons/get-tv-season-external-ids
   ********************/
  async GetExternalIDs(
    tv_id: number | string,
    season_number: number | string,
    language?: string
  ): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL +
      c_module.Route.TV +
      `${tv_id}/` +
      'season/' +
      `${season_number}` +
      '/external_ids' +
      `?api_key=${token}`;
    if (language !== '' && language !== undefined)
      targetURL += `&language=${language}`;
    if (token === 'UnitTest_api_key') {
      return targetURL;
    }
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
  /********************
   * 7.GET /tv/{tv_id}/season/{season_number}/images
   * @description Get the images that belong to a TV season.
   * @param {number|string} tv_id
   * @param {number|string} season_number
   * @param {string} language (optional)
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/tv-seasons/get-tv-season-images
   ********************/
  async GetImages(
    tv_id: number | string,
    season_number: number | string,
    language?: string
  ): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL +
      c_module.Route.TV +
      `${tv_id}/` +
      'season/' +
      `${season_number}` +
      '/images' +
      `?api_key=${token}`;
    if (language !== '' && language !== undefined)
      targetURL += `&language=${language}`;
    if (token === 'UnitTest_api_key') {
      return targetURL;
    }
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
  /********************
   * 8.GET /tv/{tv_id}/season/{season_number}/translations
   * @description Get the credits for TV season.
   * @param {number|string} tv_id
   * @param {number|string} season_number
   * @param {string} language (optional)
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/tv-seasons/get-tv-season-translations
   ********************/
  async GetTranslations(
    tv_id: number | string,
    season_number: number | string,
    language?: string
  ): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL +
      c_module.Route.TV +
      `${tv_id}/` +
      'season/' +
      `${season_number}` +
      '/translations' +
      `?api_key=${token}`;
    if (language !== '' && language !== undefined)
      targetURL += `&language=${language}`;
    if (token === 'UnitTest_api_key') {
      return targetURL;
    }
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
  /********************
   * 9.GET /tv/{tv_id}/season/{season_number}/videos
   * @description Get the videos that have been added to a TV season.
   * @param {number|string} tv_id
   * @param {number|string} season_number
   * @param {string} language (optional)
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/tv-seasons/get-tv-season-videos
   ********************/
  async GetVideos(
    tv_id: number | string,
    season_number: number | string,
    language?: string
  ): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL +
      c_module.Route.TV +
      `${tv_id}/` +
      'season/' +
      `${season_number}` +
      '/videos' +
      `?api_key=${token}`;
    if (language !== '' && language !== undefined)
      targetURL += `&language=${language}`;
    if (token === 'UnitTest_api_key') {
      return targetURL;
    }
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
}
/*
  1.GET Get Details
  2.GET Get Account States
  3.GET Get Aggregate Credits
  4.GET Get Changes
  5.GET Get Credits
  6.GET Get External IDs
  7.GET Get Images
  8.GET Get Translations
  9.GET Get Videos
*/
