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
export class Network {
  /********************
   * 1.GET /network/{network_id}
   * @description Get the details of a network.
   * @param {number|string} network_id
   * @returns {any} JSON
   * @doc https://developers.themoviedb.org/3/networks/get-network-details
   ********************/
  async GetDetails(network_id: string | number): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    const targetURL: string =
      baseURL + c_module.Route.NETWORK + `${network_id}` + `?api_key=${token}`;
    if (token === 'UnitTest_api_key') {
      return targetURL;
    }
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
  /********************
   * 2.GET /network/{network_id}/alternative_names
   * @description Get the alternative names of a network.
   * @param {number|string} network_id
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/networks/get-network-alternative-names
   ********************/
  async GetAlternativeNames(network_id: string | number): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    const targetURL: string =
      baseURL +
      c_module.Route.NETWORK +
      `${network_id}` +
      '/alternative_names' +
      `?api_key=${token}`;
    if (token === 'UnitTest_api_key') {
      return targetURL;
    }
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
  /********************
   * 3.GET /network/{network_id}/images
   * @description Get the TV network logos by id.
   * @param {number|string} network_id
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/networks/get-network-images
   ********************/
  async GetImages(network_id: string | number): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    const targetURL: string =
      baseURL +
      c_module.Route.NETWORK +
      `${network_id}` +
      '/images' +
      `?api_key=${token}`;
    if (token === 'UnitTest_api_key') {
      return targetURL;
    }
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
}
/*
  1.GET Get Details
  2.GET Get Alternative Names
  3.GET Get Images
*/
