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
export class Companies {
  /********************
   * 1.GET /company/{company_id}
   * @description Get a companies details by id.
   * @param {number|string} company_id
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/companies/get-company-details
   ********************/
  async GetDetails(company_id: number | string): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    const targetURL: string =
      baseURL + c_module.Route.COMPANY + `${company_id}` + `?api_key=${token}`;
    if (token === 'UnitTest_api_key') {
      return targetURL;
    }
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
  /********************
   * 2.GET /company/{company_id}/alternative_names
   * @description Get the alternative names of a company.
   * @param {number|string} company_id
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/companies/get-company-alternative-names
   ********************/
  async GetAlternativeNames(company_id: number | string): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    const targetURL: string =
      baseURL +
      c_module.Route.COMPANY +
      `${company_id}` +
      '/alternative_names' +
      `?api_key=${token}`;
    if (token === 'UnitTest_api_key') {
      return targetURL;
    }
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
  /********************
   * 3.GET /company/{company_id}/images
   * @description Get a companies logos by id.
   * @param {number|string} company_id
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/companies/get-company-images
   ********************/
  async GetImages(company_id: number | string): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    const targetURL: string =
      baseURL +
      c_module.Route.COMPANY +
      `${company_id}` +
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
