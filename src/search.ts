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
export class Search {
  /********************
   * 1.GET /search/company
   * @description Search for companies.
   * @param {string} query keywords
   * @param {number} page (optional)
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/search/search-companies
   ********************/
  async GetSearchCompanies(query: string, page?: number): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL +
      c_module.Route.SEARCH +
      c_module.Route.COMPANY +
      `?api_key=${token}`;
    if (query !== '' && query !== undefined) {
      targetURL += `&query=${query}`;
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
   * 2.GET /search/collection
   * @description Search for collections.
   * @param {string} language(optional)
   * @param {string} query keywords
   * @param {number} page (optional)
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/search/search-collections
   ********************/
  async GetSearchCollections(
    query: string,
    language?: string,
    page?: number
  ): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL +
      c_module.Route.SEARCH +
      c_module.Route.COLLECTION +
      `?api_key=${token}`;
    if (query !== '' && query !== undefined) {
      targetURL += `&query=${query}`;
    }
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
   * 3.GET /search/keyword
   * @description Search for keywords.
   * @param {string} query keywords
   * @param {number} page (optional)
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/search/search-keywords
   ********************/
  async GetSearchKeywords(query: string, page?: number): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL +
      c_module.Route.SEARCH +
      c_module.Route.KEYWORD +
      `?api_key=${token}`;
    if (query !== '' && query !== undefined) {
      targetURL += `&query=${query}`;
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
   * 4.GET /search/movie
   * @description Search for movies.
   * @param {string} language(optional)
   * @param {string} query
   * @param {boolen} include_adult (optional)
   * @param {string} region (optional)
   * @param {number} year (optional)
   * @param {number} primary_release_year (optional)
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/search/search-movies
   ********************/
  async GetSearchMovies(
    query: string,
    language?: string,
    page?: number,
    include_adult?: boolean,
    region?: string,
    year?: number,
    primary_release_year?: number
  ): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL +
      c_module.Route.SEARCH +
      c_module.Route.MOVIE +
      `?api_key=${token}`;
    if (query !== '' && query !== undefined) {
      targetURL += `&query=${query}`;
    }
    if (language !== '' && language !== undefined) {
      targetURL += `&language=${language}`;
    }
    if (page !== undefined) {
      targetURL += `&page=${page}`;
    }
    if (include_adult !== undefined) {
      targetURL += `&include_adult=${include_adult}`;
    }
    if (region !== undefined) {
      targetURL += `&region=${region}`;
    }
    if (year !== undefined) {
      targetURL += `&year=${year}`;
    }
    if (region !== undefined) {
      targetURL += `&primary_release_year=${primary_release_year}`;
    }
    if (token === 'UnitTest_api_key') {
      return targetURL;
    }
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
  /********************
   * 5.GET /search/multi
   * @description Search multiple models in a single request.
   * Multi search currently supports searching for movies, tv shows and people in a single request.
   * @param {string} query
   * @param {string} language(optional)
   * @param {number} page (optional)
   * @param {boolen} include_adult (optional)
   * @param {string} region (optional)
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/search/multi-search
   ********************/
  async GetMultiSearch(
    query: string,
    language?: string,
    page?: number,
    include_adult?: boolean,
    region?: string
  ): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL + c_module.Route.SEARCH + 'multi' + `?api_key=${token}`;
    if (query !== '' && query !== undefined) {
      targetURL += `&query=${query}`;
    }
    if (language !== '' && language !== undefined) {
      targetURL += `&language=${language}`;
    }
    if (page !== undefined) {
      targetURL += `&page=${page}`;
    }
    if (include_adult !== undefined) {
      targetURL += `&include_adult=${include_adult}`;
    }
    if (region !== undefined) {
      targetURL += `&region=${region}`;
    }
    if (token === 'UnitTest_api_key') {
      return targetURL;
    }
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
  /********************
   * 6.GET /search/person
   * @description Search for people.
   * @param {string} language(optional)
   * @param {string} query
   * @param {number} page (optional)
   * @param {boolen} include_adult (optional)
   * @param {string} region (optional)
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/search/search-people
   ********************/
  async GetSearchPeople(
    query: string,
    language?: string,
    page?: number,
    include_adult?: boolean,
    region?: string
  ): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL +
      c_module.Route.SEARCH +
      c_module.Route.PEOPLE +
      `?api_key=${token}`;
    if (query !== '' && query !== undefined) {
      targetURL += `&query=${query}`;
    }
    if (language !== '' && language !== undefined) {
      targetURL += `&language=${language}`;
    }
    if (page !== undefined) {
      targetURL += `&page=${page}`;
    }
    if (include_adult !== undefined) {
      targetURL += `&include_adult=${include_adult}`;
    }
    if (region !== undefined) {
      targetURL += `&region=${region}`;
    }
    if (token === 'UnitTest_api_key') {
      return targetURL;
    }
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
  /********************
   * 7.GET /search/tv
   * @description Search for a TV show.
   * @param {string} language(optional)
   * @param {number} page (optional)
   * @param {string} query
   * @param {boolen} include_adult (optional)
   * @param {number} first_air_date_year (optional)
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/search/search-tv-shows
   ********************/
  async GetSearchTVShows(
    query: string,
    language?: string,
    page?: number,
    include_adult?: boolean,
    first_air_date_year?: number
  ): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL + c_module.Route.SEARCH + c_module.Route.TV + `?api_key=${token}`;
    if (query !== '' && query !== undefined) {
      targetURL += `&query=${query}`;
    }
    if (language !== '' && language !== undefined) {
      targetURL += `&language=${language}`;
    }
    if (page !== undefined) {
      targetURL += `&page=${page}`;
    }
    if (include_adult !== undefined) {
      targetURL += `&include_adult=${include_adult}`;
    }
    if (first_air_date_year !== undefined) {
      targetURL += `&first_air_date_year=${first_air_date_year}`;
    }
    if (token === 'UnitTest_api_key') {
      return targetURL;
    }
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
}
/*
1.GET Search Companies
2.GET Search Collections
3.GET Search Keywords
4.GET Search Movies
5.GET Multi Search
6.GET Search People
7.GET Search TV Shows
*/
