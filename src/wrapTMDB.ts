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
const movie_entry = new movie_module.Movie();
const tv_entry = new tv_module.TV();
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
    //TV:25
    TVGetDetails: tv_entry.GetDetails,
    TVGetAccountStates: tv_entry.GetAccountStates,
    TVGetAggregateCredits: tv_entry.GetAggregateCredits,
    TVGetAlternativetitles: tv_entry.GetAlternativetitles,
    TVGetChanges: tv_entry.GetChanges,
    TVGetContentRatings: tv_entry.GetContentRatings,
    TVGetCredits: tv_entry.GetCredits,
    TVGetEpisodeGroup: tv_entry.GetEpisodeGroup,
    TVGetExternalIDs: tv_entry.GetExternalIDs,
    TVGetImages: tv_entry.GetImages,
    TVGetKeywords: tv_entry.GetKeywords,
    TVGetRecommendations: tv_entry.GetRecommendations,
    TVGetReviews: tv_entry.GetReviews,
    TVGetScreenedTheatrically: tv_entry.GetScreenedTheatrically,
    TVGetSimilarTVShows: tv_entry.GetSimilarTVShows,
    TVGetTranslations: tv_entry.GetTranslations,
    TVGetVideos: tv_entry.GetVideos,
    TVGetWatchProviders: tv_entry.GetWatchProviders,
    TVPostRateTVShow: tv_entry.PostRateTVShow,
    TVDeleteRating: tv_entry.DeleteRating,
    TVGetLatest: tv_entry.GetLatest,
    TVGetTVAiringToday: tv_entry.GetTVAiringToday,
    TVGetTVOnTheAir: tv_entry.GetTVOnTheAir,
    TVGetPopular: tv_entry.GetPopular,
    TVGetTopRated: tv_entry.GetTopRated,
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
  /********************
   * 7.Querying images with a language parameter will filter the results.
   * If you want to include a fallback language (especially useful for backdrops)
   * you can use the include_image_language parameter.
   * This should be a comma seperated value like so: include_image_language=en,null.
   * @param {number|string} movie_id  Movie ID in TMDB
   * @param {string} language (optional)
   * @param {string} include_image_language (optional)
   * @doc https://developers.themoviedb.org/3/movies/get-movie-images
   ********************/
  export function GetImage(
    movie_id: number | string,
    language?: string,
    include_image_language?: string
  ) {
    return Validator.MOVIEGetImage(movie_id, language, include_image_language);
  }
  /********************
   * 8.Get the keywords that have been added to a movie.
   * @param {number|string} movie_id  Movie ID in TMDB
   * @doc https://developers.themoviedb.org/3/movies/get-movie-keywords
   ********************/
  export function GetKeywords(movie_id: number | string) {
    return Validator.MOVIEGetKeywords(movie_id);
  }
  /********************
   * 9.Get a list of lists that this movie belongs to.
   * @param {number|string} movie_id  Movie ID in TMDB
   * @param {string} language(optional)  Language to request
   * @param {number} page (optional)
   * @doc https://developers.themoviedb.org/3/movies/get-movie-lists
   ********************/
  export function GetLists(
    movie_id: number | string,
    language?: string,
    page?: number
  ) {
    return Validator.MOVIEGetLists(movie_id, language, page);
  }
  /********************
   *10.Get a list of recommended movies for a movie.
   * @param {number|string} movie_id  Movie ID in TMDB
   * @doc https://developers.themoviedb.org/3/movies/get-movie-recommendations
   ********************/
  export function GetRecommendations(
    movie_id: number | string,
    language?: string,
    page?: number
  ) {
    return Validator.MOVIEGetRecommendations(movie_id, language, page);
  }
  /********************
   *11.Get the release date along with the certification for a movie.
   * Release dates support different types:
       1.Premiere
       2.Theatrical (limited)
       3.Theatrical
       4.Digital
       5.Physical
       6.TV
   * @param {number|string} movie_id  Movie ID in TMDB
   * @doc https://developers.themoviedb.org/3/movies/get-movie-release-dates
   ********************/
  export function GetReleaseDates(movie_id: number | string) {
    return Validator.MOVIEGetReleaseDates(movie_id);
  }
  /********************
   *12.Get the user reviews for a movie.
   * @param {number|string} movie_id  Movie ID in TMDB
   * @param {string} language(optional)  Language to request
   * @param {number} page (optional)
   * @doc https://developers.themoviedb.org/3/movies/get-movie-reviews
   ********************/
  export function GetReviews(
    movie_id: number | string,
    language?: string,
    page?: number
  ) {
    return Validator.MOVIEGetReviews(movie_id, language, page);
  }
  /********************
   *13.Get a list of similar movies. This is "not" the same as the "Recommendation" system you see on the website.
   * These items are assembled by looking at keywords and genres.
   * @param {number|string} movie_id  Movie ID in TMDB
   * @param {string} language(optional)  Language to request
   * @param {number} page (optional)
   * @doc https://developers.themoviedb.org/3/movies/get-similar-movies
   ********************/
  export function GetSimilar(
    movie_id: number | string,
    language?: string,
    page?: number
  ) {
    return Validator.MOVIEGetSimilar(movie_id, language, page);
  }
  /********************
   *14.Get a list of translations that have been created for a movie.
   * @param {number|string} movie_id  Movie ID in TMDB
   * @doc https://developers.themoviedb.org/3/movies/get-movie-translations
   ********************/
  export function GetTranslations(movie_id: number | string) {
    return Validator.MOVIEGetTranslations(movie_id);
  }
  /********************
   *15.Get the videos that have been added to a movie.
   * @param {number|string} movie_id  Movie ID in TMDB
   * @param {string} language(optional)  Language to request
   * @doc https://developers.themoviedb.org/3/movies/get-movie-videos
   ********************/
  export function GetVideos(movie_id: number | string, language?: string) {
    return Validator.MOVIEGetVideos(movie_id, language);
  }
  /********************
   *16.Powered by JustWatch, you can query this method to get a list of the availabilities per country by provider.
    This is not going to return full deep links, but rather, it's just enough information to display what's available where.
    You can link to the provided TMDB URL to help support TMDB and provide the actual deep links to the content.
   * @param {number|string} movie_id  Movie ID in TMDB
   * @doc https://developers.themoviedb.org/3/movies/get-movie-watch-providers
   ********************/
  export function GetWatchProviders(movie_id: number | string) {
    return Validator.MOVIEGetWatchProviders(movie_id);
  }
  /********************
   *17.Rate a movie.
   * A valid session or guest session ID is required.
   * @param {number|string} movie_id  Movie ID in TMDB
   * @param {any} query POST query
   * @param {string} guest_session_id (optional)
   * @param {string} session_id (optional)
   * @doc https://developers.themoviedb.org/3/movies/rate-movie
   * @example query {
   *  "value":8.5
   * }
   ********************/
  export function PostRateMovie(movie_id: number | string, query: any) {
    return Validator.MOVIEPostRateMovie(movie_id, query);
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
  export function DeleteRating(
    movie_id: number | string,
    session_id?: string,
    guest_session_id?: string
  ) {
    return Validator.DeleteRating(movie_id, session_id, guest_session_id);
  }
  /********************
   * 19.GET /movie/latest
   * @description Get the most newly created movie. This is a live response and will continuously change.
   * @param {string} language(optional)  Language to request
   * @doc https://developers.themoviedb.org/3/movies/get-latest-movie
   ********************/
  export function GetLatest(language?: string) {
    return Validator.MOVIEGetLatest(language);
  }
  /********************
   * 20.GET /movie/now_playing
   * @description Get a list of movies in theatres.
   * This is a release type query that looks for all movies that have a release type of 2 or 3 within the specified date range.
   * You can optionally specify a region prameter which will narrow the search to only look for theatrical release dates within the specified country.
   * @param {string} language(optional)  Language to request
   * @param {number} page(optional)
   * @param {string} region(optional)
   * @doc https://developers.themoviedb.org/3/movies/get-latest-movie
   ********************/
  export function GetNowPlaying(
    language?: string,
    page?: number,
    region?: string
  ) {
    return Validator.MOVIEGetNowPlaying(language, page, region);
  }
  /********************
   * 21.Get a list of the current popular movies on TMDB. This list updates daily.
   * @param {string} language(optional)  Language to request
   * @param {number} page(optional)
   * @param {string} region(optional)
   * @doc https://developers.themoviedb.org/3/movies/get-popular-movies
   ********************/
  export function GetPopular(
    language?: string,
    page?: number,
    region?: string
  ) {
    return Validator.MOVIEGetPopular(language, page, region);
  }
  /********************
   * 22.Get the top rated movies on TMDB.
   * @param {string} language(optional)  Language to request
   * @param {number} page(optional)
   * @param {string} region(optional)
   * @doc https://developers.themoviedb.org/3/movies/get-top-rated-movies
   ********************/
  export function GetTopRated(
    language?: string,
    page?: number,
    region?: string
  ) {
    return Validator.MOVIEGetTopRated(language, page, region);
  }
  /********************
   * 23.Get a list of upcoming movies in theatres.
   * This is a release type query that looks for all movies that have a release type of 2 or 3 within the specified date range.
   * You can optionally specify a region prameter which will narrow the search to only look for theatrical release dates within the specified country.
   * @param {string} language(optional)  Language to request
   * @param {number} page(optional)
   * @param {string} region(optional)
   * @doc https://developers.themoviedb.org/3/movies/get-upcoming
   ********************/
  export function GetUpcoming(
    language?: string,
    page?: number,
    region?: string
  ) {
    return Validator.MOVIEGetUpcoming(language, page, region);
  }
}

export namespace TV {
  /********************
   * 1.Get the primary TV show details by id.
   * @param {number|string} tv_id  Series/TV ID in TMDB
   * @param {string} language(optional)  Language to request
   * @returns {number} JSON
   * @doc https://developers.themoviedb.org/3/tv/get-tv-details
   ********************/
  export function GetDetails(tv_id: number | string, language?: string) {
    return Validator.TVGetDetails(tv_id, language);
  }
  /********************
   * 2.Grab the following account states for a session:
      ‧TV show rating
      ‧If it belongs to your watchlist
      ‧If it belongs to your favourite list
   * @param {number|string} tv_id  TV ID in TMDB
   * @param {string} session_id
   * @param {string} guest_session_id (optional)
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/tv/get-tv-account-states
   ********************/
  export function GetAccountStates(
    tv_id: number | string,
    session_id: string,
    guest_session_id?: string
  ) {
    return Validator.TVGetAccountStates(tv_id, session_id, guest_session_id);
  }
  /********************
   * 3.Get the aggregate credits (cast and crew) that have been added to a TV show.
   * This call differs from the main credits call in that it does not return the newest season but rather,
   * is a view of all the entire cast & crew for all episodes belonging to a TV show.
   * @param {number|string} tv_id  TV ID in TMDB
   * @param {string} language
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/tv/get-tv-aggregate-credits
   ********************/
  export function GetAggregateCredits(
    tv_id: number | string,
    language?: string
  ) {
    return Validator.TVGetAggregateCredits(tv_id, language);
  }
  /********************
   * 4.Returns all of the alternative titles for a TV show.
   * @param {number|string} tv_id  TV ID in TMDB
   * @param {string} language
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/tv/get-tv-alternative-titles
   ********************/
  export function GetAlternativetitles(
    tv_id: number | string,
    language?: string
  ) {
    return Validator.TVGetAlternativetitles(tv_id, language);
  }
  /********************
   * 5.Get the changes for a movie. By default only the last 24 hours are returned.
   * You can query up to 14 days in a single query by using the start_date and end_date query parameters.
   * @param {number|string} tv_id  TV ID in TMDB
   * @param {number|string} start_date (optional)
   * @param {number|string} end_date (optional)
   * @param {number} page (optional)
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/tv/get-tv-changes
   ********************/
  export function GetChanges(
    tv_id: number | string,
    start_date?: string,
    end_date?: string,
    page?: number
  ) {
    return Validator.TVGetChanges(tv_id, start_date, end_date, page);
  }
  /********************
   * 6.Get the list of content ratings (certifications) that have been added to a TV show.
   * @param {number|string} tv_id  TV ID in TMDB
   * @param {string} language(optional)  Language to request
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/tv/get-tv-content-ratings
   ********************/
  export function GetContentRatings(tv_id: number | string, language?: string) {
    return Validator.TVGetContentRatings(tv_id, language);
  }
  /********************
   * 7.Get the cast and crew for a movie.
   * @param {number|string} tv_id  TV ID in TMDB
   * @param {string} language(optional)  Language to request
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/movies/get-movie-changes
   ********************/
  export function GetCredits(tv_id: number | string, language?: string) {
    return Validator.TVGetCredits(tv_id, language);
  }
  /********************
   * 8.Get all of the episode groups that have been created for a TV show.
   * With a group ID you can call the GetTVEpisodeGroup method.
   * @param {number|string} tv_id  TV ID in TMDB
   * @param {string} language(optional)  Language to request
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/tv/get-tv-episode-groups
   ********************/
  export function GetEpisodeGroup(tv_id: number | string, language?: string) {
    return Validator.TVGetEpisodeGroup(tv_id, language);
  }
  /********************
   * 9.Get the external ids for a TV show. We currently support the following external sources.
   * @param {number|string} tv_id  tv ID in TMDB
   * @param {string} language(optional)  Language to request
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/tv/get-tv-external-ids
   ********************/
  export function GetExternalIDs(tv_id: number | string, language?: string) {
    return Validator.TVGetExternalIDs(tv_id, language);
  }
  /********************
   * 10.Get the images that belong to a TV show.
   * @param {number|string} tv_id  tv ID in TMDB
   * @param {string} language (optional)
   * @doc https://developers.themoviedb.org/3/tv/get-tv-images
   ********************/
  export function GetImages(tv_id: number | string, language?: string) {
    return Validator.TVGetImages(tv_id, language);
  }
  /********************
   * 11.Get the keywords that have been added to a TV show.
   * @param {number|string} tv_id  tv ID in TMDB
   * @doc https://developers.themoviedb.org/3/tv/get-tv-keywords
   ********************/
  export function GetKeywords(tv_id: number | string) {
    return Validator.TVGetKeywords(tv_id);
  }
  /********************
   * 12.Get the list of TV show recommendations for this item.
   * @param {number|string} tv_id  tv ID in TMDB
   * @param {string} language (optional)
   * @param {number} page (optional)
   * @doc https://developers.themoviedb.org/3/tv/get-tv-recommendations
   ********************/
  export function GetRecommendations(
    tv_id: number | string,
    language?: string,
    page?: number
  ) {
    return Validator.TVGetRecommendations(tv_id, language, page);
  }
  /********************
   *13.Get the reviews for a TV show.
   * @param {number|string} tv_id  tv ID in TMDB
   * @param {string} language(optional)  Language to request
   * @param {number} page (optional)
   * @doc https://developers.themoviedb.org/3/tv/get-tv-reviews
   ********************/
  export function GetReviews(
    tv_id: number | string,
    language?: string,
    page?: number
  ) {
    return Validator.TVGetReviews(tv_id, language, page);
  }
  /********************
   *14.Get a list of seasons or episodes that have been screened in a film festival or theatre.
   * @param {number|string} tv_id  tv ID in TMDB
   * @doc https://developers.themoviedb.org/3/tv/get-screened-theatrically
   ********************/
  export function GetScreenedTheatrically(tv_id: number | string) {
    return Validator.TVGetScreenedTheatrically(tv_id);
  }
  /********************
   *15.Get a list of similar TV shows. These items are assembled by looking at keywords and genres.
   * @param {number|string} tv_id  tv ID in TMDB
   * @param {string} language(optional)  Language to request
   * @param {number} page (optional)
   * @doc https://developers.themoviedb.org/3/tv/get-similar-tv-shows
   ********************/
  export function GetSimilarTVShows(tv_id: number | string) {
    return Validator.TVGetSimilarTVShows(tv_id);
  }
  /********************
   *16.Get a list of the translations that exist for a TV show.
   * @param {number|string} tv_id  tv ID in TMDB
   * @doc https://developers.themoviedb.org/3/movies/get-movie-translations
   ********************/
  export function GetTranslations(tv_id: number | string, language?: string) {
    return Validator.TVGetTranslations(tv_id, language);
  }
  /********************
   *17.GET /tv/{tv_id}/videos
   * @description Get the videos that have been added to a TV show.
   * @param {number|string} tv_id  tv ID in TMDB
   * @param {string} language(optional)  Language to request
   * @doc https://developers.themoviedb.org/3/tv/get-tv-videos
   ********************/
  export function GetVideos(tv_id: number | string, language?: string) {
    return Validator.TVGetVideos(tv_id, language);
  }
  /********************
    *18.Powered by JustWatch, you can query this method to get a list of the availabilities per country by provider.
     This is not going to return full deep links, but rather, it's just enough information to display what's available where.
     You can link to the provided TMDB URL to help support TMDB and provide the actual deep links to the content.
    * @param {number|string} tv_id  tv ID in TMDB
    * @doc https://developers.themoviedb.org/3/movies/get-movie-watch-providers
    ********************/
  export function GetWatchProviders(tv_id: number | string) {
    return Validator.TVGetWatchProviders(tv_id);
  }
  /********************
   *19.Rate a TV show.
   * A valid session or guest session ID is required.
   * @param {number|string} tv_id  tv ID in TMDB
   * @param {any} query POST query
   * @param {string} guest_session_id (optional)
   * @param {string} session_id (optional)
   * @doc https://developers.themoviedb.org/3/tv/rate-tv-show
   * @example query {
   *  "value":8.5
   * }
   ********************/
  export function PostRateTVShow(
    tv_id: number | string,
    query: any,
    session_id: string,
    guest_session_id?: string
  ) {
    return Validator.TVPostRateTVShow(
      tv_id,
      query,
      session_id,
      guest_session_id
    );
  }

  /********************
   * 20.Remove your rating for a TV show.
   * A valid session or guest session ID is required
   * @param {number|string} tv_id  tv ID in TMDB
   * @param {string} session_id
   * @param {string} guest_session_id (optional)
   * @doc https://developers.themoviedb.org/3/tv/delete-tv-show-rating
   ********************/
  export function DeleteRating(
    tv_id: number | string,
    session_id: string,
    guest_session_id?: string
  ) {
    return Validator.TVDeleteRating(tv_id, session_id, guest_session_id);
  }
  /********************
   * 21.Get the most newly created TV show. This is a live response and will continuously change.
   * @param {string} language(optional)  Language to request
   * @doc https://developers.themoviedb.org/3/tv/get-latest-tv
   ********************/
  export function GetLatest(language?: string) {
    return Validator.TVGetLatest(language);
  }
  /********************
   * 22.Get a list of TV shows that are airing today. This query is purely day based as we do not currently support airing times.
   * You can specify a timezone to offset the day calculation.
   * Without a specified timezone, this query defaults to EST (Eastern Time UTC-05:00).
   * @param {string} language(optional)  Language to request
   * @param {number} page(optional)
   * @doc https://developers.themoviedb.org/3/tv/get-tv-airing-today
   ********************/
  export function GetTVAiringToday(language?: string, page?: number) {
    return Validator.TVGetTVAiringToday(language, page);
  }
  /********************
   * 23.Get a list of shows that are currently on the air.
   * This query looks for any TV show that has an episode with an air date in the next 7 days.
   * @param {string} language(optional)  Language to request
   * @param {number} page(optional)
   * @doc https://developers.themoviedb.org/3/tv/get-tv-on-the-air
   ********************/
  export function GetTVOnTheAir(language?: string, page?: number) {
    return Validator.TVGetTVOnTheAir(language, page);
  }
  /********************
   * 24.Get a list of the current popular TV shows on TMDB. This list updates daily.
   * @param {string} language(optional)  Language to request
   * @param {number} page(optional)
   * @doc https://developers.themoviedb.org/3/tv/get-popular-tv-shows
   ********************/
  export function GetPopular(language?: string, page?: number) {
    return Validator.TVGetPopular(language, page);
  }
  /********************
   * 25.Get a list of the top rated TV shows on TMDB.
   * @param {string} language(optional)  Language to request
   * @param {number} page(optional)
   * @doc https://developers.themoviedb.org/3/tv/get-top-rated-tv
   ********************/
  export function GetTopRated(language?: string, page?: number) {
    return Validator.TVGetTopRated(language, page);
  }
}
