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
export class Collections {
  /********************
   * 1.GET /collection/{collection_id}
   * @description Get collection details by id.
   * @param {number|string} collection_id
   * @param {string} language (optional)
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/collections/get-collection-details
   ********************/
  async GetDetails(collection_id: string | number): Promise<any>;
  async GetDetails(
    collection_id: string | number,
    language?: string
  ): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL +
      c_module.Route.COLLECTION +
      `${collection_id}` +
      `?api_key=${token}`;
    if (language !== '' || language !== undefined)
      targetURL += `&language=${language}`;
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
  /********************
   * 1.GET /collection/{collection_id}/images
   * @description Get collection details by id.
   * @param {number|string} collection_id
   * @param {string} language (optional)
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/collections/get-collection-images
   ********************/
  async GetImages(collection_id: string | number): Promise<any>;
  async GetImages(
    collection_id: string | number,
    language?: string
  ): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL +
      c_module.Route.COLLECTION +
      `${collection_id}` +
      '/images' +
      `?api_key=${token}`;
    if (language !== '' || language !== undefined)
      targetURL += `&language=${language}`;
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
  /********************
   * 1.GET /collection/{collection_id}/translations
   * @description Get the list translations for a collection by id.
   * @param {number|string} collection_id
   * @param {string} language (optional)
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/collections/get-collection-translations
   ********************/
  async GetTranslations(collection_id: string | number): Promise<any>;
  async GetTranslations(
    collection_id: string | number,
    language?: string
  ): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL +
      c_module.Route.COLLECTION +
      `${collection_id}` +
      '/translations' +
      `?api_key=${token}`;
    if (language !== '' || language !== undefined)
      targetURL += `&language=${language}`;
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
}
