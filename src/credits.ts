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

export class Credits {
  /********************
   * 1.GET /credit/{credit_id}
   * @description Get a movie or TV credit details by id.
   * @param {number|string} credit_id
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/credits/get-credit-details
   ********************/
  async GetDetails(credit_id: number | string): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    const targetURL: string =
      baseURL + c_module.Route.CREDIT + `${credit_id}` + `?api_key=${token}`;
    if (token === 'UnitTest_api_key') {
      return targetURL;
    }
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
}
/*
1. GET Get Details
*/
