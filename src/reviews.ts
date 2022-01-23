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
export class Reviews {
  /********************
   * 1.GET /review/{review_id}
   * @description Retrieve the details of a movie or TV show review.
   * @param {number|string} review_id
   * @returns {any} JSON
   * @doc https://developers.themoviedb.org/3/reviews/get-review-details
   ********************/
  async GetDetails(review_id: number | string): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    const targetURL: string =
      baseURL + c_module.Route.REVIEWS + `${review_id}` + `?api_key=${token}`;
    if (token === 'UnitTest_api_key') {
      return targetURL;
    }
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
}
/*
1. GET Get Reviews
*/
