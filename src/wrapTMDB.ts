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
    GetToken: GetToken,
    //MOVIE:23
    MOVIEGetDetails: movie_entry.GetDetails,
    MOVIEGetAccountStates: movie_entry.GetAccountStates,
    MOVIEGetAlternativetitles: movie_entry.GetAlternativetitles,
    MOVIEGetChanges: movie_entry.GetChanges,
    MOVIEGetCredits: movie_entry.GetCredits,
    MOVIEGetExternalIDs: movie_entry.GetExternalIDs,
    MOVIEGetImage: movie_entry.GetImage,
    MOVIEGetKeywords: movie_entry.GetKeywords,
    MOVIEGetLists: movie_entry.GetLists,
    MOVIEGetRecommendations: movie_entry.GetRecommendations,
    MOVIEGetReleaseDates: movie_entry.GetReleaseDates,
    MOVIEGetReviews: movie_entry.GetReviews,
    MOVIEGetSimilar: movie_entry.GetSimilar,
    MOVIEGetTranslations: movie_entry.GetTranslations,
    MOVIEGetVideos: movie_entry.GetVideos,
    MOVIEGetWatchProviders: movie_entry.GetWatchProviders,
    MOVIEPostRateMovie: movie_entry.PostRateMovie,
    MOVIEDeleteRating: movie_entry.DeleteRating,
    MOVIEGetLatest: movie_entry.GetLatest,
    MOVIEGetNowPlaying: movie_entry.GetNowPlaying,
    MOVIEGetPopular: movie_entry.GetPopular,
    MOVIEGetTopRated: movie_entry.GetTopRated,
    MOVIEGetUpcoming: movie_entry.GetUpcoming,

    //TV
    GetTVDetails: tv_entry.GetDetails,
  },
  {
    get: function (obj: any, props: any) {
      return function (...params: any) {
        if (c_module.GetToken() === '') {
          throw 'Error: non-TOKEN, Call "Init" function at first before calling other functions';
        }
        return obj[props].apply(null, params);
      };
    },
  }
);

//============functions definition============
/********************
 * Init: must call Init function first before using any other functions, or all func throw errors.
 * @param {string}token  enter your_token
 ********************/
export function Init(token: string) {
  c_module.SetToken(token);
}
/********************
 * Debug: get TOKEN
 * @returns {string} Common.TOKEN
 ********************/
function GetToken(): string {
  return c_module.GetToken();
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
    return Validator.MOVIEGetDetails(...parms);
  }
  export function GetAccountStates(...parms: any) {
    return Validator.MOVIEGetAccountStates(...parms);
  }
  export function GetAlternativetitles(...parms: any) {
    return Validator.MOVIEGetAlternativetitles(...parms);
  }
  export function GetChanges(...parms: any) {
    return Validator.MOVIEGetChanges(...parms);
  }
  export function GetCredits(...parms: any) {
    return Validator.MOVIEGetCredits(...parms);
  }
  export function GetExternalIDs(...parms: any) {
    return Validator.MOVIEGetExternalIDs(...parms);
  }
  export function GetKeywords(...parms: any) {
    return Validator.MOVIEGetKeywords(...parms);
  }
  export function GetLists(...parms: any) {
    return Validator.MOVIEGetLists(...parms);
  }
  export function GetRecommendations(...parms: any) {
    return Validator.MOVIEGetRecommendations(...parms);
  }
  export function GetReleaseDates(...parms: any) {
    return Validator.MOVIEGetReleaseDates(...parms);
  }
  export function GetReviews(...parms: any) {
    return Validator.MOVIEGetReviews(...parms);
  }
  export function GetSimilar(...parms: any) {
    return Validator.MOVIEGetSimilar(...parms);
  }
  export function GetTranslations(...parms: any) {
    return Validator.MOVIEGetTranslations(...parms);
  }
  export function GetVideos(...parms: any) {
    return Validator.MOVIEGetVideos(...parms);
  }
  export function GetWatchProviders(...parms: any) {
    return Validator.MOVIEGetWatchProviders(...parms);
  }
  export function PostRateMovie(...parms: any) {
    return Validator.MOVIEPostRateMovie(...parms);
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
  export function GetLatest(...parms: any) {
    return Validator.GetMovieDetails(...parms);
  }
  export function GetNowPlaying(...parms: any) {
    return Validator.GetMovieDetails(...parms);
  }
  export function GetPopular(...parms: any) {
    return Validator.GetMovieDetails(...parms);
  }
  export function GetTopRated(...parms: any) {
    return Validator.GetMovieDetails(...parms);
  }
  export function GetUpcoming(...parms: any) {
    return Validator.GetMovieDetails(...parms);
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
  export function GetAccountStates(...parms: any) {
    return Validator.GetMovieDetails(...parms);
  }
  export function GetAlternativetitles(...parms: any) {
    return Validator.GetMovieDetails(...parms);
  }
  export function GetChanges(...parms: any) {
    return Validator.GetMovieDetails(...parms);
  }
  export function GetCredits(...parms: any) {
    return Validator.GetMovieDetails(...parms);
  }
  export function GetExternalIDs(...parms: any) {
    return Validator.GetMovieDetails(...parms);
  }
  export function GetKeywords(...parms: any) {
    return Validator.GetMovieDetails(...parms);
  }
  export function GetLists(...parms: any) {
    return Validator.GetMovieDetails(...parms);
  }
  export function GetRecommendations(...parms: any) {
    return Validator.GetMovieDetails(...parms);
  }
  export function GetReleaseDates(...parms: any) {
    return Validator.GetMovieDetails(...parms);
  }
  export function GetReviews(...parms: any) {
    return Validator.GetMovieDetails(...parms);
  }
  export function GetSimilar(...parms: any) {
    return Validator.GetMovieDetails(...parms);
  }
  export function GetTranslations(...parms: any) {
    return Validator.GetMovieDetails(...parms);
  }
  export function GetVideos(...parms: any) {
    return Validator.GetMovieDetails(...parms);
  }
  export function GetWatchProviders(...parms: any) {
    return Validator.GetMovieDetails(...parms);
  }
  export function PostRateMovie(...parms: any) {
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
  export function GetLatest(...parms: any) {
    return Validator.GetMovieDetails(...parms);
  }
  export function GetNowPlaying(...parms: any) {
    return Validator.GetMovieDetails(...parms);
  }
  export function GetPopular(...parms: any) {
    return Validator.GetMovieDetails(...parms);
  }
  export function GetTopRated(...parms: any) {
    return Validator.GetMovieDetails(...parms);
  }
  export function GetUpcoming(...parms: any) {
    return Validator.GetMovieDetails(...parms);
  }
}
