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
export class Configuration {
  /********************
   * 1.GET /configuration
   * @description Get the system wide configuration information.
   * Some elements of the API require some knowledge of this configuration data.
   * The purpose of this is to try and keep the actual API responses as light as possible.
   * It is recommended you cache this data within your application and check for updates every few days.
   * @returns JSON
   * @example To build an image URL, you will need 3 pieces of data. The base_url, size and file_path.
   * Simply combine them all and you will have a fully qualified URL. Here’s an example URL:
   * https://image.tmdb.org/t/p/w500/8uO0gUM8aNqYLs1OsTBQiXu0fEv.jpg
   * @doc https://developers.themoviedb.org/3/configuration/get-api-configuration
   ********************/
  async GetAPIConfiguration(): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    const targetURL: string =
      baseURL + c_module.Route.CONFIGURATION + `?api_key=${token}`;

    if (token === 'UnitTest_api_key') {
      return targetURL;
    }
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
  /********************
   * 2.GET /configuration/countries
   * @description Get the list of countries (ISO 3166-1 tags) used throughout TMDB.
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/configuration/get-countries
   ********************/
  async GetCountries(): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    const targetURL: string =
      baseURL +
      c_module.Route.CONFIGURATION +
      'countries' +
      `?api_key=${token}`;
    if (token === 'UnitTest_api_key') {
      return targetURL;
    }
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
  /********************
   * 3.GET /configuration/jobs
   * @description Get a list of the jobs and departments we use on TMDB.
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/configuration/get-jobs
   ********************/
  async GetJobs(): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    const targetURL: string =
      baseURL + c_module.Route.CONFIGURATION + 'jobs' + `?api_key=${token}`;
    if (token === 'UnitTest_api_key') {
      return targetURL;
    }
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
  /********************
   * 4.GET /configuration/languages
   * @description Get the list of languages (ISO 639-1 tags) used throughout TMDB.
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/configuration/get-languages
   ********************/
  async GetLanguages(): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    const targetURL: string =
      baseURL +
      c_module.Route.CONFIGURATION +
      'languages' +
      `?api_key=${token}`;
    if (token === 'UnitTest_api_key') {
      return targetURL;
    }
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
  /********************
   * 5.GET /configuration/primary_translations
   * @description Get a list of the officially supported translations on TMDB.
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/configuration/get-primary-translations
   ********************/
  async GetPrimaryTranslations(): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    const targetURL: string =
      baseURL +
      c_module.Route.CONFIGURATION +
      'primary_translations' +
      `?api_key=${token}`;
    if (token === 'UnitTest_api_key') {
      return targetURL;
    }
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }

  /********************
   * 6.GET /configuration/timezones
   * @description Get the list of timezones used throughout TMDB.
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/configuration/get-timezones
   ********************/
  async GetTimezones(): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    const targetURL: string =
      baseURL +
      c_module.Route.CONFIGURATION +
      'timezones' +
      `?api_key=${token}`;
    if (token === 'UnitTest_api_key') {
      return targetURL;
    }
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
}
/*
1.GET Get API Configuration
2.GET Get Countries
3.GET Get Jobs
4.GET Get Languages
5.GET Get Primary Translations
6.GET Get Timezones
*/
