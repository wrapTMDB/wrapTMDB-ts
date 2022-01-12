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
export class TVEpisodes {
  /********************
   * 1.GET /tv/{tv_id}/season/{season_number}/episode/{episode_number}
   * @description Get the TV season details by id.
   * @param {number|string} tv_id
   * @param {number|string} season_number
   * @param {number|string} episode_number
   * @param {string} language (optional)
   * @param {string} append_to_response (optional)
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/tv-episodes/get-tv-episode-details
   ********************/
  async GetDetails(
    tv_id: number | string,
    season_number: number | string,
    episode_number: number | string
  ): Promise<any>;
  async GetDetails(
    tv_id: number | string,
    season_number: number | string,
    episode_number: number | string,
    language: string
  ): Promise<any>;
  async GetDetails(
    tv_id: number | string,
    season_number: number | string,
    episode_number: number | string,
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
      `${season_number}/` +
      'episode/' +
      `${episode_number}` +
      `?api_key=${token}`;
    if (language !== '' || language !== undefined)
      targetURL += `&language=${language}`;
    if (append_to_response !== '' || append_to_response !== undefined)
      targetURL += `&append_to_response=${append_to_response}`;
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
  /********************
   * 2.GET /tv/{tv_id}/season/{season_number}/episode/{episode_number}/account_states
   * @description Get your rating for a episode.
   * @param {number|string} tv_id
   * @param {number|string} season_number
   * @param {number|string} episode_number
   * @param {string} guest_session_id (optional)
   * @param {string} session_id (optional)
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/tv-episodes/get-tv-episode-account-states
   ********************/
  async GetAccountStates(
    tv_id: number | string,
    season_number: number | string,
    episode_number: number | string
  ): Promise<any>;
  async GetAccountStates(
    tv_id: number | string,
    season_number: number | string,
    episode_number: number | string
  ): Promise<any>;
  async GetAccountStates(
    tv_id: number | string,
    season_number: number | string,
    episode_number: number | string,
    guest_session_id?: string,
    session_id?: string
  ): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL +
      c_module.Route.TV +
      `${tv_id}/` +
      'season/' +
      `${season_number}/` +
      'episode/' +
      `${episode_number}/` +
      'account_states' +
      `?api_key=${token}`;
    if (guest_session_id !== '' || guest_session_id !== undefined)
      targetURL += `&guest_session_id=${guest_session_id}`;
    if (session_id !== '' || session_id !== undefined)
      targetURL += `&session_id=${session_id}`;
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }

  /********************
   * 3.GET /tv/episode/{episode_id}/changes
   * @description Get the changes for a TV season. By default only the last 24 hours are returned.
   * @param {number|string} episode_id
   * @param {string} start_date (optional)
   * @param {string} end_date (optional)
   * @param {number} page (optional)
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/tv-episodes/get-tv-episode-changes
   ********************/
  async GetChanges(episode_id: number | string): Promise<any>;
  async GetChanges(
    episode_id: number | string,
    start_date?: string,
    end_date?: string,
    page?: number
  ): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL +
      c_module.Route.TV +
      'episode/' +
      `${episode_id}` +
      '/changes' +
      `?api_key=${token}`;
    if (start_date !== '' || start_date !== undefined)
      targetURL += `&start_date=${start_date}`;
    if (end_date !== '' || end_date !== undefined)
      targetURL += `&end_date=${start_date}`;
    if (page !== undefined) {
      targetURL += `&page=${page}`;
    }
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
  /********************
   * 4.GET /tv/{tv_id}/season/{season_number}/episode/{episode_number}/credits
   * @description Get the credits (cast, crew and guest stars) for a TV episode.
   * @param {number|string} tv_id
   * @param {number|string} season_number
   * @param {number|string} episode_number
   * @param {string} language (optional)
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/tv-episodes/get-tv-episode-credits
   ********************/
  async GetCredits(
    tv_id: number | string,
    season_number: number | string,
    episode_number: number | string
  ): Promise<any>;
  async GetCredits(
    tv_id: number | string,
    season_number: number | string,
    episode_number: number | string,
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
      '/episode' +
      `${episode_number}` +
      '/credits' +
      `?api_key=${token}`;
    if (language !== '' || language !== undefined)
      targetURL += `&language=${language}`;
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
  /********************
   * 5.GET /tv/{tv_id}/season/{season_number}/episode/{episode_number}/external_ids
   * @description Get the TV season details by id.
   * @param {number|string} tv_id
   * @param {number|string} season_number
   * @param {number|string} episode_number
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/tv-episodes/get-tv-episode-external-ids
   ********************/
  async GetExternalIDs(
    tv_id: number | string,
    season_number: number | string,
    episode_number: number | string
  ): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    const targetURL: string =
      baseURL +
      c_module.Route.TV +
      `${tv_id}/` +
      'season/' +
      `${season_number}/` +
      'episode/' +
      `${episode_number}` +
      '/external_ids' +
      `?api_key=${token}`;
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
  /********************
   * 6.GET /tv/{tv_id}/season/{season_number}/episode/{episode_number}/images
   * @description Get the images that belong to a TV episode.
   * @param {number|string} tv_id
   * @param {number|string} season_number
   * @param {number|string} episode_number
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/tv-episodes/get-tv-episode-images
   ********************/
  async GetImages(
    tv_id: number | string,
    season_number: number | string,
    episode_number: number | string
  ): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    const targetURL: string =
      baseURL +
      c_module.Route.TV +
      `${tv_id}/` +
      'season/' +
      `${season_number}/` +
      'episode/' +
      `${episode_number}` +
      '/images' +
      `?api_key=${token}`;

    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
  /********************
   * 7.GET /tv/{tv_id}/season/{season_number}/episode/{episode_number}/translations
   * @description Get the translation data for an episode.
   * @param {number|string} tv_id
   * @param {number|string} season_number
   * @param {number|string} episode_number
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/tv-episodes/get-tv-episode-translations
   ********************/
  async GetTranslations(
    tv_id: number | string,
    season_number: number | string,
    episode_number: number | string
  ): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    const targetURL: string =
      baseURL +
      c_module.Route.TV +
      `${tv_id}/` +
      'season/' +
      `${season_number}/` +
      'episode/' +
      `${episode_number}` +
      '/translations' +
      `?api_key=${token}`;

    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
  /********************
   * 8.POST /tv/{tv_id}/season/{season_number}/episode/{episode_number}/rating
   * @description Rate a TV episode.
   * @param {number|string} tv_id
   * @param {number|string} season_number
   * @param {number|string} episode_number
   * @param {any} query
   * @param {string} guest_session_id (optional)
   * @param {string} session_id (optional)
   * @returns JSON
   * @example query{
   *    "value": 8.5
   * }
   * @doc https://developers.themoviedb.org/3/tv-episodes/rate-tv-episode
   ********************/
  async PostRateTVEpisode(
    tv_id: number | string,
    season_number: number | string,
    episode_number: number | string,
    query: any,
    guest_session_id?: string,
    session_id?: string
  ): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL +
      c_module.Route.TV +
      `${tv_id}/` +
      'season/' +
      `${season_number}/` +
      'episode/' +
      `${episode_number}` +
      '/rating' +
      `?api_key=${token}`;
    if (guest_session_id !== '' || guest_session_id !== undefined)
      targetURL += `&guest_session_id=${guest_session_id}`;
    if (session_id !== '' || session_id !== undefined)
      targetURL += `&end_date=${session_id}`;

    const data: any = await axios.post(targetURL, query, header);
    return data.data;
  }
  /********************
   * 9.DELETE /tv/{tv_id}/season/{season_number}/episode/{episode_number}/rating
   * @description Remove your rating for a TV episode.
   * @param {number|string} tv_id
   * @param {number|string} season_number
   * @param {number|string} episode_number
   * @param {string} guest_session_id (optional)
   * @param {string} session_id (optional)
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/tv-episodes/delete-tv-episode-rating
   ********************/
  async DeleteDeleteRating(
    tv_id: number | string,
    season_number: number | string,
    episode_number: number | string,
    guest_session_id?: string,
    session_id?: string
  ): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL +
      c_module.Route.TV +
      `${tv_id}/` +
      'season/' +
      `${season_number}/` +
      'episode/' +
      `${episode_number}` +
      '/rating' +
      `?api_key=${token}`;
    if (guest_session_id !== '' || guest_session_id !== undefined)
      targetURL += `&guest_session_id=${guest_session_id}`;
    if (session_id !== '' || session_id !== undefined)
      targetURL += `&end_date=${session_id}`;

    const data: any = await axios.delete(targetURL, {}, header);
    return data.data;
  }
  /********************
   * 10.GET /tv/{tv_id}/season/{season_number}/episode/{episode_number}/videos
   * @description Get the videos that have been added to a TV episode.
   * @param {number|string} tv_id
   * @param {number|string} season_number
   * @param {number|string} episode_number
   * @param {string} language (optional)
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/tv-episodes/get-tv-episode-videos
   ********************/
  async GetVideos(
    tv_id: number | string,
    season_number: number | string,
    episode_number: number | string
  ): Promise<any>;
  async GetVideos(
    tv_id: number | string,
    season_number: number | string,
    episode_number: number | string,
    language?: string
  ): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL +
      c_module.Route.TV +
      `${tv_id}/` +
      'season/' +
      `${season_number}/` +
      'episode/' +
      `${episode_number}` +
      '/videos' +
      `?api_key=${token}`;
    if (language !== '' || language !== undefined)
      targetURL += `&language=${language}`;
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
}
