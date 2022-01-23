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

export class Account {
  /********************
   * 1.GET /account
   * @description Get your account details.
   * @param {string|number} session_id
   * @returns {any} JSON
   * @doc https://developers.themoviedb.org/3/account/get-account-details
   ********************/
  async GetDetails(session_id: string | number): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    const targetURL: string =
      baseURL +
      c_module.Route.ACCOUNT +
      `?api_key=${token}` +
      `&session_id=${session_id}`;
    if (token === 'UnitTest_api_key') {
      return targetURL;
    }
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
  /********************
   * 2.GET /account/{account_id}/lists
   * @description Get all of the lists created by an account. Will invlude private lists if you are the owner.
   * @param {string| number} account_id your account ID
   * @param {string} session_id authentication ID
   * @param {string} language(optional)  Language to request
   * @param {number} page(optional)
   * @returns {any} JSON
   * @doc https://developers.themoviedb.org/3/account/get-created-lists
   ********************/
  async GetCreatedLists(
    account_id: string | number,
    session_id: string,
    language?: string,
    page?: number
  ): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    let targetURL: string = baseURL + c_module.Route.ACCOUNT;
    if (account_id !== '' && account_id !== undefined) {
      targetURL += `${account_id}/`;
    }
    targetURL += 'lists';
    targetURL += `?api_key=${token}` + `&session_id=${session_id}`;
    if (language !== undefined) {
      targetURL += `&language=${language}`;
    }
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
   * 3.GET /account/{account_id}/favorite/movies
   * @description Get the list of your favorite movies.
   * @param {string| number} account_id
   * @param {string} session_id
   * @param {string} language(optional)  Language to request
   * @param {string} sort_by(optional) "created_at.asc" or "created_at.desc"
   * @param {number} page(optional)
   * @returns {any} JSON
   * @doc https://developers.themoviedb.org/3/account/get-favorite-movies
   ********************/

  async GetFavoriteMovies(
    account_id: string | number,
    session_id: string,
    language?: string,
    sort_by?: string,
    page?: number
  ): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    let targetURL: string = baseURL + c_module.Route.ACCOUNT + `${account_id}/`;
    targetURL += 'favorite/movies';
    targetURL += `?api_key=${token}` + `&session_id=${session_id}`;
    if (language !== undefined) {
      targetURL += `&language=${language}`;
    }
    if (sort_by !== undefined) {
      targetURL += `&sort_by=${sort_by}`;
    }
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
   * 4.GET /account/{account_id}/favorite/tv
   * @description Get the list of your favorite TV shows.
   * @param {string| number} account_id
   * @param {string} session_id
   * @param {string} language(optional)  Language to request
   * @param {string} sort_by(optional) "created_at.asc" or "created_at.desc"
   * @param {number} page(optional)
   * @returns {any} JSON
   * @doc https://developers.themoviedb.org/3/account/get-favorite-tv-shows
   ********************/
  async GetFavoriteTVShows(
    account_id: string | number,
    session_id: string,
    language?: string,
    sort_by?: string,
    page?: number
  ): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    let targetURL: string = baseURL + c_module.Route.ACCOUNT + `${account_id}/`;
    targetURL += 'favorite/' + c_module.Route.TV;
    targetURL += `?api_key=${token}` + `&session_id=${session_id}`;
    if (language !== undefined) {
      targetURL += `&language=${language}`;
    }
    if (sort_by !== undefined) {
      targetURL += `&sort_by=${sort_by}`;
    }
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
   * 5.POST /account/{account_id}/favorite
   * @description This method allows you to mark a movie or TV show as a favorite item.
   * @param {string| number} account_id
   * @param {string} session_id
   * @returns {any} JSON
   * @example query{
   *  "media_type": "movie",
   *  "media_id": 550,
   *  "favorite": true
   * }
   * @doc https://developers.themoviedb.org/3/account/mark-as-favorite
   ********************/
  async PostMarkAsFavorite(
    query: any,
    account_id: string | number,
    session_id: string
  ): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    let targetURL: string = baseURL + c_module.Route.ACCOUNT + `${account_id}/`;
    targetURL += 'favorite';
    targetURL += `?api_key=${token}` + `&session_id=${session_id}`;
    if (token === 'UnitTest_api_key') {
      return targetURL;
    }
    const data: any = await axios.post(targetURL, query, header);
    return data.data;
  }
  /********************
   * 6.GET /account/{account_id}/rated/movies
   * @description Get a list of all the movies you have rated.
   * @param {string| number} account_id
   * @param {string} session_id
   * @param {string} language(optional)  Language to request
   * @param {string} sort_by(optional) "created_at.asc" or "created_at.desc"
   * @param {number} page(optional)
   * @returns {any} JSON
   * @doc https://developers.themoviedb.org/3/account/get-rated-movies
   ********************/
  async GetRatedMovies(
    account_id: string | number,
    session_id: string,
    language?: string,
    sort_by?: string,
    page?: number
  ): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    let targetURL: string = baseURL + c_module.Route.ACCOUNT + `${account_id}/`;

    targetURL += 'rated/' + 'movies';
    targetURL += `?api_key=${token}` + `&session_id=${session_id}`;
    if (language !== undefined) {
      targetURL += `&language=${language}`;
    }
    if (sort_by !== undefined) {
      targetURL += `&sort_by=${sort_by}`;
    }
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
   * 7.GET /account/{account_id}/rated/tv
   * @description Get a list of all the TV shows you have rated.
   * @param {string| number} account_id
   * @param {string} session_id
   * @param {string} language(optional)  Language to request
   * @param {string} sort_by(optional)
   * @param {number} page(optional)
   * @returns {any} JSON
   * @doc https://developers.themoviedb.org/3/account/get-rated-tv-shows
   ********************/
  async GetRatedTVShows(
    account_id: string | number,
    session_id: string,
    language?: string,
    sort_by?: string,
    page?: number
  ): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    let targetURL: string = baseURL + c_module.Route.ACCOUNT + `${account_id}/`;
    targetURL += 'rated/' + 'tv';
    targetURL += `?api_key=${token}` + `&session_id=${session_id}`;
    targetURL += language !== undefined ? `&language=${language}` : '';
    targetURL += sort_by !== undefined ? `&sort_by=${sort_by}` : '';
    targetURL += page !== undefined ? `&page=${page}` : '';
    if (token === 'UnitTest_api_key') {
      return targetURL;
    }
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
  /********************
   * 8.GET /account/{account_id}/rated/tv/episodes
   * @description Get a list of all the TV episodes you have rated.
   * @param {string| number} account_id
   * @param {string} session_id
   * @param {string} language(optional)  Language to request
   * @param {string} sort_by
   * @param {number} page(optional)
   * @returns {any} JSON
   * @doc https://developers.themoviedb.org/3/account/get-rated-tv-episodes
   ********************/
  async GetRatedTVEpisodes(
    account_id: string | number,
    session_id: string,
    language?: string,
    sort_by?: string,
    page?: number
  ): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    let targetURL: string = baseURL + c_module.Route.ACCOUNT + `${account_id}/`;
    targetURL += 'rated/' + c_module.Route.TV + 'episodes';
    targetURL += `?api_key=${token}` + `&session_id=${session_id}`;
    targetURL += language !== undefined ? `&language=${language}` : '';
    targetURL += sort_by !== undefined ? `&sort_by=${sort_by}` : '';
    targetURL += page !== undefined ? `&page=${page}` : '';
    if (token === 'UnitTest_api_key') {
      return targetURL;
    }
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
  /********************
   * 9.GET /account/{account_id}/watchlist/movies
   * @description Get a list of all the movies you have added to your watchlist.
   * @param {string| number} account_id
   * @param {string} session_id
   * @param {string} language(optional)  Language to request
   * @param {string} sort_by
   * @param {number} page(optional)
   * @returns {any} JSON
   * @doc https://developers.themoviedb.org/3/account/get-movie-watchlist
   ********************/
  async GetMovieWatchlist(
    account_id: string | number,
    session_id: string,
    language?: string,
    sort_by?: string,
    page?: number
  ): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    let targetURL: string = baseURL + c_module.Route.ACCOUNT + `${account_id}/`;
    targetURL += 'watchlist/' + 'movies';
    targetURL += `?api_key=${token}` + `&session_id=${session_id}`;
    targetURL +=
      language !== undefined && language !== '' ? `&language=${language}` : '';
    targetURL += sort_by !== undefined ? `&sort_by=${sort_by}` : '';
    targetURL += page !== undefined ? `&page=${page}` : '';
    if (token === 'UnitTest_api_key') {
      return targetURL;
    }
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
  /********************
   * 10.GET /account/{account_id}/watchlist/tv
   * @description Get a list of all the TV shows you have added to your watchlist.
   * @param {string| number} account_id
   * @param {string} session_id
   * @param {string} language(optional)  Language to request
   * @param {string} sort_by
   * @param {number} page(optional)
   * @returns {any} JSON
   * @doc https://developers.themoviedb.org/3/account/get-tv-show-watchlist
   ********************/
  async GetTVShowWatchlist(
    account_id: string | number,
    session_id: string,
    language?: string,
    sort_by?: string,
    page?: number
  ): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    let targetURL: string = baseURL + c_module.Route.ACCOUNT + `${account_id}/`;
    targetURL += 'watchlist/' + 'tv';
    targetURL += `?api_key=${token}` + `&session_id=${session_id}`;
    targetURL +=
      language !== undefined && language !== '' ? `&language=${language}` : '';
    targetURL += sort_by !== undefined ? `&sort_by=${sort_by}` : '';
    targetURL += page !== undefined ? `&page=${page}` : '';
    if (token === 'UnitTest_api_key') {
      return targetURL;
    }
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
  /********************
   * 11.POST /account/{account_id}/watchlist
   * @description Add a movie or TV show to your watchlist.
   * @param {any} query
   * @param {string|number} account_id
   * @param {string} session_id
   * @returns {any} JSON
   * @example query{
   *  "media_type": "movie",
   *  "media_id": 11,
   *  "watchlist": true
   * }
   * @doc https://developers.themoviedb.org/3/account/add-to-watchlist
   ********************/
  async PostAddToWatchlist(
    query: any,
    account_id: string | number,
    session_id: string
  ): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    let targetURL: string = baseURL + c_module.Route.ACCOUNT;
    if (account_id !== '' && account_id !== undefined) {
      targetURL += `${account_id}/`;
    }
    targetURL += 'watchlist';
    targetURL += `?api_key=${token}` + `&session_id=${session_id}`;
    if (token === 'UnitTest_api_key') {
      return targetURL;
    }
    const data: any = await axios.post(targetURL, query, header);
    return data.data;
  }
}

/*
1.GET Get Details
2.GET Get Created Lists
3.GET Get Favorite Movies
4.GET Get Favorite TV Shows
5.POST Mark as Favorite
6.GET Get Rated Movies
7.GET Get Rated TV Shows
8.GET Get Rated TV Episodes
9.GET Get Movie Watchlist
10.GET Get TV Show Watchlist
11.POST Add to Watchlist
*/
