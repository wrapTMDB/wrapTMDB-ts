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
   * @doc https://developers.themoviedb.org/3/movies/get-movie-details
   ********************/
  export function GetDetails(
    movie_id: number | string,
    language?: string
  ): any {
    return Validator.MOVIEGetDetails(movie_id, language);
  }
  /********************
   * 2.Grab the following account states for a session:
   *   ‧Movie rating
   *   ‧If it belongs to your watchlist
   *   ‧If it belongs to your favourite list
   * @param {number|string} movie_id  Movie ID in TMDB
   * @param {string} session_id Authentication ID
   * @param {string} guest_session_id (optional)
   * @example wraptmdb.MOVIE.GetAccountStates(624860,"session_id");
   *          wraptmdb.MOVIE.GetAccountStates(624860,"session_id","guest_session_id");
   * @doc https://developers.themoviedb.org/3/movies/get-movie-account-states
   ********************/
  export function GetAccountStates(
    movie_id: number | string,
    session_id: string,
    guest_session_id?: string
  ) {
    return Validator.MOVIEGetAccountStates(
      movie_id,
      session_id,
      guest_session_id
    );
  }
  /********************
   * 3.Get all of the alternative titles for a movie.
   * @param {number|string} movie_id  Movie ID in TMDB
   * @param {string} country (optional)
   * @example wraptmdb.MOVIE.GetAlternativetitles(624860);
   * @doc https://developers.themoviedb.org/3/movies/get-movie-alternative-titles
   ********************/
  export function GetAlternativetitles(movie_id: string, country?: string) {
    return Validator.MOVIEGetAlternativetitles(movie_id, country);
  }
  /********************
   * 4.Get the changes for a movie. By default only the last 24 hours are returned.
   * You can query up to 14 days in a single query by using the start_date and end_date query parameters.
   * @param {number|string} movie_id  Movie ID in TMDB
   * @param {string} start_date (optional)
   * @param {string} end_date (optional)
   * @param {number} page (optional)
   * @example wraptmdb.MOVIE.GetChanges(624860);
   * wraptmdb.MOVIE.GetChanges(624860,'2016-08-29');
   * @doc https://developers.themoviedb.org/3/movies/get-movie-changes
   ********************/
  export function GetChanges(
    movie_id: string,
    start_date?: string,
    end_date?: string,
    page?: number
  ) {
    return Validator.MOVIEGetChanges(movie_id, start_date, end_date, page);
  }
  /********************
   * 5.Get the cast and crew for a movie.
   * @param {number|string} movie_id  Movie ID in TMDB
   * @param {string} language(optional)  Language to request
   * @example wraptmdb.MOVIE.GetCredits(624860);
   *          wraptmdb.MOVIE.GetCredits(624860,'en-US');
   * @doc https://developers.themoviedb.org/3/movies/get-movie-credits
   ********************/
  export function GetCredits(movie_id: string, language?: string) {
    return Validator.MOVIEGetCredits(movie_id, language);
  }
  /********************
   * 6.GET /movie/{movie_id}/external_ids
   * @description Get the external ids for a movie. We currently support the following external sources.
   * @param {number|string} movie_id  Movie ID in TMDB
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/movies/get-movie-external-ids
   ********************/
  export function GetExternalIDs(movie_id: string) {
    return Validator.MOVIEGetExternalIDs(movie_id);
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
