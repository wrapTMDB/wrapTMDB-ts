/*
 * The MIT License (MIT)
 *
 * Copyright (c) kwangsing3
 *
 * https://github.com/wrapTMDB/wrapTMDB-ts
 *
 */
import * as movie_module from './movie';
import * as tv_module from './tv';
import * as c_module from './common';
//============Validator (function decorator)============
const movie_entry = new movie_module.MovieInfos();
const tv_entry = new tv_module.TVInfos();
const Validator = new Proxy(
  {
    GetToken,
    GetMovieDetails: movie_entry.GetDetails,
    DeleteMovieRating: movie_entry.DeleteRating,
    GetTVDetails: tv_entry.GetDetails,
  },
  {
    get: function (obj: any, props: any) {
      return function (...params: any) {
        if (c_module.GetToken() === '') {
          throw 'NONE TOKEN, please call "Init" function at first before calling other functions';
        }
        return obj[props].apply(null, params);
      };
    },
    /*set: function (obj: any, props: any, value: any) {
      return (obj[props] = value);
    },*/
  }
);

//============functions definition============

/********************
 * Debug: get TOKEN
 * @returns {string} Common.TOKEN
 ********************/
function GetToken(): string {
  return c_module.GetToken();
}

/********************
 * Init: must call Init function first before using any other functions, or all func throw errors.
 * @param {string}token  enter your_token
 ********************/
export function Init(token: string) {
  c_module.SetToken(token);
}

/********************
 * Header: Set HTTP header, it's optional, but should have it.
 * @param {string} header object
 * @example
 * {
      'User-Agent': 'npm package-dev',
      Referer: 'wraptmdb-ts',
  }
 ********************/
export function SetHeader(input: any) {
  c_module.SetHeader(input);
}

export namespace MOVIE {
  /********************
   * 1.Get the primary information about a movie.
   * @param {number|string} movie_id  Movie_ID for TMDB
   * @param {string} language(optional)  Language to request
   * @example wraptmdb.MOVIE.GetDetails(624860);
   *          wraptmdb.MOVIE.GetDetails(624860,'en-US');
   ********************/
  export function GetDetails(...parms: any) {
    return Validator.GetMovieDetails(...parms);
  }
  /********************
   * 18.Remove your rating for a movie.
   * A valid session or guest session ID is required
   * @param {number|string} movie_id  Movie ID in TMDB
   * @param {string} guest_session_id
   * @param {string} session_id
   * @doc https://developers.themoviedb.org/3/movies/delete-movie-rating
   *
   ********************/
  export function DeleteRating(...parms: any) {
    return Validator.DeleteRating(...parms);
  }
}

export namespace TV {
  /********************
   * 1.Get the primary information about a movie.
   * @param {number|string} movie_id  Movie_ID for TMDB
   * @param {string} language(optional)  Language to request
   * @example wraptmdb.MOVIE.GetDetails(624860);
   *          wraptmdb.MOVIE.GetDetails(624860,'en-US');
   ********************/
  export function GetDetails(...parms: any) {
    return Validator.GetTVDetails(...parms);
  }
}
