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
export class People {
  /********************
   * 1.GET /person/{person_id}
   * @description Get the primary person details by id.
   * @param {number|string} person_id
   * @param {string} language
   * @returns {any} JSON
   * @doc https://developers.themoviedb.org/3/people/get-person-details
   ********************/
  async GetDetails(person_id: number | string): Promise<any>;
  async GetDetails(person_id: number | string, language: string): Promise<any>;
  async GetDetails(
    person_id: number | string,
    language?: string,
    append_to_response?: string
  ): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL + c_module.Route.PEOPLE + `${person_id}` + `?api_key=${token}`;
    if (language !== '' || language !== undefined)
      targetURL += `&language=${language}`;
    if (append_to_response !== '' || append_to_response !== undefined)
      targetURL += `&append_to_response=${append_to_response}`;
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
  /********************
   * 2.GET /person/{person_id}/changes
   * @description Get the changes for a person. By default only the last 24 hours are returned.
   * @param {number|string} person_id
   * @param {string} end_date (optional)
   * @param {number} page (optional)
   * @param {string} start_date (optional)
   * @returns {any} JSON
   * @doc https://developers.themoviedb.org/3/people/get-person-changes
   ********************/
  async GetChanges(person_id: number | string): Promise<any>;
  async GetChanges(
    person_id: number | string,
    start_date?: string,
    end_date?: number | string,
    page?: number
  ): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL +
      c_module.Route.PEOPLE +
      `${person_id}/changes` +
      `?api_key=${token}`;
    if (start_date !== '' || start_date !== undefined)
      targetURL += `&start_date=${start_date}`;
    if (end_date !== '' || end_date !== undefined)
      targetURL += `&end_date=${start_date}`;
    if (page !== undefined) targetURL += `&page=${page}`;
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
  /********************
   * 3.GET /person/{person_id}/movie_credits
   * @description Get the movie credits for a person.
   * @param {number|string} person_id
   * @param {string} language(optional)
   * @returns {any} JSON
   * @doc https://developers.themoviedb.org/3/people/get-person-movie-credits
   ********************/
  async GetMovieCredits(person_id: number | string): Promise<any>;
  async GetMovieCredits(
    person_id: number | string,
    language?: string
  ): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL +
      c_module.Route.PEOPLE +
      `${person_id}/movie_credits` +
      `?api_key=${token}`;
    if (language !== '' || language !== undefined)
      targetURL += `&language=${language}`;
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
  /********************
   * 4.GET /person/{person_id}/tv_credits
   * @description Get the TV show credits for a person.
   * @param {number|string} person_id
   * @param {string} language(optional)
   * @returns {any} JSON
   * @doc https://developers.themoviedb.org/3/people/get-person-tv-credits
   ********************/
  async GetTVCredits(person_id: number | string): Promise<any>;
  async GetTVCredits(
    person_id: number | string,
    language?: string
  ): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL +
      c_module.Route.PEOPLE +
      `${person_id}/tv_credits` +
      `?api_key=${token}`;
    if (language !== '' || language !== undefined)
      targetURL += `&language=${language}`;
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
  /********************
   * 5.GET /person/{person_id}/combined_credits
   * @description Get the movie and TV credits together in a single response.
   * @param {number|string} person_id
   * @param {string} language(optional)
   * @returns {any} JSON
   * @doc https://developers.themoviedb.org/3/people/get-person-combined-credits
   ********************/
  async GetCombinedCredits(person_id: number | string): Promise<any>;
  async GetCombinedCredits(
    person_id: number | string,
    language?: string
  ): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL +
      c_module.Route.PEOPLE +
      `${person_id}/combined_credits` +
      `?api_key=${token}`;
    if (language !== '' || language !== undefined)
      targetURL += `&language=${language}`;
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
  /********************
   * 6.GET /person/{person_id}/external_ids
   * @description Get the external ids for a person. We currently support the following external sources.
   * @param {number|string} person_id
   * @param {string} language(optional)
   * @returns {any} JSON
   * @doc https://developers.themoviedb.org/3/people/get-person-external-ids
   ********************/
  async GetExternalIDs(person_id: number | string): Promise<any>;
  async GetExternalIDs(
    person_id: number | string,
    language?: string
  ): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL +
      c_module.Route.PEOPLE +
      `${person_id}/external_ids` +
      `?api_key=${token}`;
    if (language !== '' || language !== undefined)
      targetURL += `&language=${language}`;
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
  /********************
   * 7.GET /person/{person_id}/images
   * @description Get the images for a person.
   * @param {number|string} person_id
   * @returns {any} JSON
   * @doc https://developers.themoviedb.org/3/people/get-person-images
   ********************/
  async GetImages(person_id: number | string): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    const targetURL: string =
      baseURL +
      c_module.Route.PEOPLE +
      `${person_id}/images` +
      `?api_key=${token}`;
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
  /********************
   * 8.GET /person/{person_id}/tagged_images
   * @description Get the primary person details by id.
   * @param {number|string} person_id
   * @param {string} language(optional)
   * @param {number} page(optional)
   * @returns {any} JSON
   * @doc https://developers.themoviedb.org/3/people/get-tagged-images
   ********************/
  async GetTaggedImages(person_id: number | string): Promise<any>;
  async GetTaggedImages(
    person_id: number | string,
    language: string
  ): Promise<any>;
  async GetTaggedImages(
    person_id: number | string,
    language?: string,
    page?: number
  ): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL +
      c_module.Route.PEOPLE +
      `${person_id}/tagged_images` +
      `?api_key=${token}`;
    if (language !== '' || language !== undefined)
      targetURL += `&language=${language}`;
    if (page !== undefined) {
      targetURL += `&page=${page}`;
    }
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
  /********************
   * 9.GET /person/{person_id}/translations
   * @description Get a list of translations that have been created for a person.
   * @param {number|string} person_id
   * @param {string} language(optional)
   * @returns {any} JSON
   * @doc https://developers.themoviedb.org/3/people/get-person-translations
   ********************/
  async GetTranslations(person_id: number | string): Promise<any>;
  async GetTranslations(
    person_id: number | string,
    language?: string
  ): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL +
      c_module.Route.PEOPLE +
      `${person_id}/translations` +
      `?api_key=${token}`;
    if (language !== '' || language !== undefined)
      targetURL += `&language=${language}`;
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
  /********************
   * 10.GET /person/latest
   * @description Get the most newly created person. This is a live response and will continuously change.
   * @param {string} language(optional)
   * @returns {any} JSON
   * @doc https://developers.themoviedb.org/3/people/get-latest-person
   ********************/
  async GetLatest(): Promise<any>;
  async GetLatest(language?: string): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL + c_module.Route.PEOPLE + 'latest' + `?api_key=${token}`;
    if (language !== '' || language !== undefined)
      targetURL += `&language=${language}`;
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
  /********************
   * 11.GET /person/{person_id}
   * @description Get the primary person details by id.
   * @param {string} language(optional)
   * @param {number} page(optional)
   * @returns {any} JSON
   * @doc https://developers.themoviedb.org/3/people/get-person-details
   ********************/
  async GetPopular(): Promise<any>;
  async GetPopular(language?: string, page?: number): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL + c_module.Route.PEOPLE + 'popular' + `?api_key=${token}`;
    if (language !== '' || language !== undefined)
      targetURL += `&language=${language}`;
    if (page !== undefined) {
      targetURL += `&page=${page}`;
    }
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
}
