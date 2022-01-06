/* eslint-disable @typescript-eslint/no-explicit-any */
/*
 * The MIT License (MIT)
 *
 * Copyright (c) kwangsing3
 *
 * https://github.com/wrapTMDB/wrapTMDB-ts
 *
 */
const axios = require('axios');
const header = {
  'User-Agent': '',
  Referer: '',
};
const Common = {
  TOKEN: '',
  BASE_URL: 'https://api.themoviedb.org/3',
  HEADER: header,
};

const Route = {
  MOVIE: '/movie',
  TV: '/tv',
};

/********************functions definition********************/

/********************
 * Init: must call Init function first before using any other functions, or all func will throw errors.
 ********************/
function Init(token: string) {
  Common.TOKEN = token;
}
/********************
 * Header: Set HTTP header, it's optional, but better
 ********************/
function SetHeader(input: any) {
  Common.HEADER['User-Agent'] =
    'User-Agent' in input ? input['User-Agent'] : '';

  Common.HEADER['Referer'] = 'Referer' in input ? input['Referer'] : '';
}
/********************
 * Debug function to get TOKEN
 * @returns {string} Common.TOKEN
 ********************/
function GetToken() {
  return Common.TOKEN;
}

/********************
 * REST Get Movie infomation
 * @param {number} movie_id  Movie ID in TMDB
 * @param {string} language(optional)  Language to request
 * @returns {number} JSON
 ********************/
class GetMovieInfo {
  async GetMovieInfo(movie_id: string): Promise<any>;
  async GetMovieInfo(movie_id: string, language: string): Promise<any>;
  async GetMovieInfo(movie_id: string, language?: string): Promise<any> {
    const url: string = Common.BASE_URL + Route.MOVIE + '/' + movie_id;
    let targetURL: string = url + `?api_key=${Common.TOKEN}`;
    if (language !== undefined) {
      targetURL += `&language=${language}`;
    }
    const data: any = await axios.get(targetURL, Common.HEADER);
    return data.data;
  }
}
/********************
 * REST Get Series/TV infomation
 * @param {number} tv_id  Series/TV ID in TMDB
 * @param {string} language(optional)  Language to request
 * @returns {number} JSON
 ********************/
class GetTVInfo {
  async GetTVInfo(tv_id: string): Promise<any>;
  async GetTVInfo(tv_id: string, language: string): Promise<any>;
  async GetTVInfo(tv_id: string, language?: string): Promise<any> {
    const url: string = Common.BASE_URL + Route.TV + '/' + tv_id;
    let targetURL: string = url + `?api_key=${Common.TOKEN}`;
    if (language !== undefined) {
      targetURL += `&language=${language}`;
    }
    const data: any = await axios.get(targetURL, Common.HEADER);
    return data.data;
  }
}
/********************TMDB Validator********************/
const TheMovieTMDB = new Proxy(
  {
    GetToken,
    GetMovieInfo: new GetMovieInfo().GetMovieInfo,
    GetTVInfo: new GetTVInfo().GetTVInfo,
  },
  {
    get: function (obj: any, props: any) {
      return function (...params: any) {
        if (Common.TOKEN === '') {
          throw 'No TOKEN';
        }
        return obj[props].apply(null, params);
      };
    },
    /*set: function (obj: any, props: any, value: any) {
      return (obj[props] = value);
    },*/
  }
);
/********************module exports********************/
// if (typeof module !== 'undefined' && module.exports) {
//     module.exports = TheMovieTMDB;
// }
module.exports.Init = Init;
module.exports.SetHeader = SetHeader;
module.exports.GetToken = TheMovieTMDB.GetToken;
module.exports.GetMovieInfo = TheMovieTMDB.GetMovieInfo;
module.exports.GetTVInfo = TheMovieTMDB.GetTVInfo;
