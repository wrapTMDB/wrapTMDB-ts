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

export class Lists {
  /********************
   * 1.GET /list/{list_id}
   * @description Get the details of a list.
   * @param {number|string} list_id
   * @param {number|string} language(optional)
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/lists/get-list-details
   ********************/
  async GetDetails(list_id: number | string): Promise<any>;
  async GetDetails(list_id: number | string, language?: string): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL + c_module.Route.LIST + `${list_id}` + `?api_key=${token}`;
    if (language !== '' || language !== undefined)
      targetURL += `&language=${language}`;
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
  /********************
   * 2.GET /list/{list_id}/item_status
   * @description You can use this method to check if a movie has already been added to the list.
   * @param {number|string} list_id
   * @param {number|string} movie_id
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/lists/check-item-status
   ********************/
  async GetCheckItemStatus(
    list_id: number | string,
    movie_id: number | string
  ): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL +
      c_module.Route.LIST +
      `${list_id}/` +
      'item_status' +
      `?api_key=${token}`;
    if (movie_id !== '' || movie_id !== undefined)
      targetURL += `&movie_id=${movie_id}`;
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
  /********************
   * 3.POST /list
   * @description Create a list.
   * @param {any} query
   * @param {number|string} session_id
   * @example query{
   *    "name": "This is my awesome test list.",
   *    "description": "Just an awesome list dawg.",
   *    "language": "en"
   * }
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/lists/create-list
   ********************/
  async PostCreateList(query: any, session_id: number | string): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    let targetURL: string = baseURL + c_module.Route.LIST + `?api_key=${token}`;
    if (session_id !== '' || session_id !== undefined)
      targetURL += `&session_id=${session_id}`;
    const data: any = await axios.post(targetURL, query, header);
    return data.data;
  }
  /********************
   * 4.POST /list/{list_id}/add_item
   * @description Add a movie to a list.
   * @param {any} query
   * @param {number|string} list_id
   * @param {number|string} session_id
   * @example query{
   *    "media_id": 18
   * }
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/lists/add-movie
   ********************/
  async PostAddMovie(
    query: any,
    list_id: number | string,
    session_id: number | string
  ): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL +
      c_module.Route.LIST +
      `${list_id}/add_item` +
      `?api_key=${token}`;
    if (session_id !== '' || session_id !== undefined)
      targetURL += `&session_id=${session_id}`;
    const data: any = await axios.post(targetURL, query, header);
    return data.data;
  }
  /********************
   * 5.POST /list/{list_id}/remove_item
   * @description Remove a movie from a list.
   * @param {any} query
   * @param {number|string} list_id
   * @param {number|string} session_id
   * @example query{
   *    "media_id": 12
   * }
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/lists/remove-movie
   ********************/
  async PostRemoveMovie(
    query: any,
    list_id: number | string,
    session_id: number | string
  ): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL +
      c_module.Route.LIST +
      `${list_id}/remove_item` +
      `?api_key=${token}`;
    if (session_id !== '' || session_id !== undefined)
      targetURL += `&session_id=${session_id}`;
    const data: any = await axios.post(targetURL, query, header);
    return data.data;
  }
  /********************
   * 6.POST /list/{list_id}/clear
   * @description Clear all of the items from a list.
   * @param {number|string} list_id
   * @param {number|string} session_id
   * @param {boolean} confirm
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/lists/create-list
   ********************/
  async PostClearList(
    list_id: number | string,
    confirm: boolean,
    session_id: number | string
  ): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL + c_module.Route.LIST + `${list_id}/clear` + `?api_key=${token}`;
    if (session_id !== '' || session_id !== undefined)
      targetURL += `&session_id=${session_id}`;
    if (confirm !== undefined) {
      targetURL += `&confirm=${confirm}`;
    }
    const data: any = await axios.post(targetURL, {}, header);
    return data.data;
  }
  /********************
   * 7.DELETE /list/{list_id}
   * @description Create a list.
   * @param {number|string} list_id
   * @param {number|string} session_id
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/lists/delete-list
   ********************/
  async DeleteDeleteList(
    list_id: number | string,
    session_id: number | string
  ): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL + c_module.Route.LIST + `${list_id}/` + `?api_key=${token}`;
    if (session_id !== '' || session_id !== undefined)
      targetURL += `&session_id=${session_id}`;

    const data: any = await axios.delete(targetURL, {}, header);
    return data.data;
  }
}
/*
  1.GET Get Details
  2.GET Check Item Status
  3.POST Create List
  4.POST Add Movie
  5.POST Remove Movie
  6.POST Clear List
  7.DELETE Delete List
*/
