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
import * as ac_module from './account';
import * as c_module from './common';
import * as authentication_module from './authentication';
import * as certifications_module from './certifications';
import * as changes_module from './changes';
import * as collections_module from './collections';
import * as companies_module from './companies';
import * as configuration_module from './configuration';
import * as credits_module from './credits';
import * as discover_module from './discover';
import * as find_module from './find';
import * as genres_module from './genres';
import * as guestsessions_module from './guestsessions';
import * as keywords_module from './keywords';
import * as lists_module from './lists';
import * as networks_module from './networks';
import * as people_module from './people';
import * as reviews_module from './reviews';
import * as search_module from './search';
import * as trending_module from './trending';
import * as tvepisodesgroups_module from './tvepisodesgroups';
import * as tvepisodes_module from './tvepisodes';
import * as tvseasons_module from './tvseasons';
import * as watchproviders_module from './watchproviders';
//#region
const movie_entry = new movie_module.Movie();
const tv_entry = new tv_module.TV();
const account_entry = new ac_module.Account();
const authentication_entry = new authentication_module.Authentication();
const certifications_entry = new certifications_module.Certifications();
const changes_entry = new changes_module.Change();
const collections_entry = new collections_module.Collections();
const companies_entry = new companies_module.Companies();
const configuration_entry = new configuration_module.Configuration();
const credits_entry = new credits_module.Credits();
const discover_entry = new discover_module.Discover();
const find_entry = new find_module.Find();
const genres_entry = new genres_module.Genres();
const guestsessions_entry = new guestsessions_module.GuestSessions();
const keywords_entry = new keywords_module.KeyWord();
const lists_entry = new lists_module.Lists();
const networks_entry = new networks_module.Network();
const people_entry = new people_module.People();
const reviews_entry = new reviews_module.Reviews();
const search_entry = new search_module.Search();
const trending_entry = new trending_module.Trending();
const tvepisodesgroups_entry = new tvepisodesgroups_module.TVepisodesgroups();
const tvepisodes_entry = new tvepisodes_module.TVEpisodes();
const tvseasons_entry = new tvseasons_module.TVseason();
const watchproviders_entry = new watchproviders_module.Watchproviders();
const Validator = new Proxy(
  {
    GetToken: GetToken,
    //#region Movie:23
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
    //#endregion
    //#region TV:25
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
    //#endregion
    //#region Account:11
    ACCOUNTGetDetails: account_entry.GetDetails,
    ACCOUNTGetCreatedLists: account_entry.GetCreatedLists,
    ACCOUNTGetFavoriteMovies: account_entry.GetFavoriteMovies,
    ACCOUNTGetFavoriteTVShows: account_entry.GetFavoriteTVShows,
    ACCOUNTPostMarkAsFavorite: account_entry.PostMarkAsFavorite,
    ACCOUNTGetRatedMovies: account_entry.GetRatedMovies,
    ACCOUNTGetRatedTVShows: account_entry.GetRatedTVShows,
    ACCOUNTGetRatedTVEpisodes: account_entry.GetRatedTVEpisodes,
    ACCOUNTGetMovieWatchlist: account_entry.GetMovieWatchlist,
    ACCOUNTGetTVShowWatchlist: account_entry.GetTVShowWatchlist,
    ACCOUNTPostAddToWatchlist: account_entry.PostAddToWatchlist,
    //#endregion
    //#region Authemtication:5(6)
    AUTHENTICATIONGetCreateGuestSession:
      authentication_entry.GetCreateGuestSession,
    AUTHENTICATIONGetCreateRequestToken:
      authentication_entry.GetCreateRequestToken,
    AUTHENTICATIONPostCreateSession: authentication_entry.PostCreateSession,
    AUTHENTICATIONPostCreateSessionWithLogin:
      authentication_entry.PostCreateSessionWithLogin,
    AUTHENTICATIONDeleteSession: authentication_entry.DeleteSession,
    //#endregion
    //#region Certifications:2
    CERTIFICATIONSGetMovieCertifications:
      certifications_entry.GetMovieCertifications,
    CERTIFICATIONSGetTVCertifications: certifications_entry.GetTVCertifications,
    //#endregion
    //#region Changes:3
    /*CHANGESGetMovieChangeList:movie_entry.GetChanges,
      CHANGESGetTVChangeList: tv_entry.GetChanges,*/
    CHANGESGetPersonChangeList: changes_entry.GetPersonChangesList,
    //#endregion
    //#region Collections:3
    COLLECTIONSGetDetails: collections_entry.GetDetails,
    COLLECTIONSGetImages: collections_entry.GetImages,
    COLLECTIONSGetTranslations: collections_entry.GetTranslations,
    //#endregion
    //#region Companies:3
    COMPANIESGetDetails: companies_entry.GetDetails,
    COMPANIESGetAlternativeNames: companies_entry.GetAlternativeNames,
    COMPANIESGetImages: companies_entry.GetImages,
    //#endregion
    //#region Configuration:6
    COMFIGURATIONGetAPIConfiguration: configuration_entry.GetAPIConfiguration,
    COMFIGURATIONGetCountries: configuration_entry.GetCountries,
    COMFIGURATIONGetJobs: configuration_entry.GetJobs,
    COMFIGURATIONGetLanguages: configuration_entry.GetLanguages,
    COMFIGURATIONGetPrimaryTranslations:
      configuration_entry.GetPrimaryTranslations,
    COMFIGURATIONGetTimezones: configuration_entry.GetTimezones,
    //#endregion
    //#region Credits:
    CREDITSGetDetails: credits_entry.GetDetails,
    //#endregion
    //#region Discover:2
    DISCOVERGetMovieDiscover: discover_entry.GetMovieDiscover,
    DISCOVERGetTVDiscover: discover_entry.GetTVDiscover,
    //#endregion
    //#region Find:1
    FINDGetFindByID: find_entry.GetFindByID,
    //#endregion
    //#region Genres:2
    GENRESGetMovieList: genres_entry.GetMovieList,
    GENRESGetTVList: genres_entry.GetTVList,
    //#endregion
    //#region Guestsessions:3
    GUESTSESSIONSGetRatedMovies: guestsessions_entry.GetRatedMovies,
    GUESTSESSIONSGetRatedTVShows: guestsessions_entry.GetRatedTVShows,
    GUESTSESSIONSGetRatedTVEpisodes: guestsessions_entry.GetRatedTVEpisodes,
    //#endregion
    //#region Keywords:2
    KETWORDSGetDetails: keywords_entry.GetDetails,
    KETWORDSGetMovies: keywords_entry.GetMovies,
    //#endregion
    //#region Lists:7
    LISTSGetDetails: lists_entry.GetDetails,
    LISTSGetCheckItemStatus: lists_entry.GetCheckItemStatus,
    LISTSPostCreateList: lists_entry.PostCreateList,
    LISTSPostAddMovie: lists_entry.PostAddMovie,
    LISTSPostRemoveMovie: lists_entry.PostRemoveMovie,
    LISTSPostClearList: lists_entry.PostClearList,
    LISTSDeleteDeleteList: lists_entry.DeleteDeleteList,
    //#endregion
    //#region Networks:3
    NETWORKSGetDetails: networks_entry.GetDetails,
    NETWORKSGetAlternativeNames: networks_entry.GetAlternativeNames,
    NETWORKSGetImages: networks_entry.GetImages,
    //#endregion
    //#region People:11
    PEOPLEGetDetails: people_entry.GetDetails,
    PEOPLEGetChanges: people_entry.GetChanges,
    PEOPLEGetMovieCredits: people_entry.GetMovieCredits,
    PEOPLEGetTVCredits: people_entry.GetTVCredits,
    PEOPLEGetCombinedCredits: people_entry.GetCombinedCredits,
    PEOPLEGetExternalIDs: people_entry.GetExternalIDs,
    PEOPLEGetImages: people_entry.GetImages,
    PEOPLEGetTaggedImages: people_entry.GetTaggedImages,
    PEOPLEGetTranslations: people_entry.GetTranslations,
    PEOPLEGetLatest: people_entry.GetLatest,
    PEOPLEGetPopular: people_entry.GetPopular,
    //#endregion
    //#region Reviews:1
    REVIEWSGetDetails: reviews_entry.GetDetails,
    //#endregion
    //#region Search:7
    SEARCHSearchCompanies: search_entry.GetSearchCompanies,
    SEARCHSearchCollections: search_entry.GetSearchCollections,
    SEARCHSearchKeywords: search_entry.GetSearchKeywords,
    SEARCHSearchMovies: search_entry.GetSearchMovies,
    SEARCHMultiSearch: search_entry.GetMultiSearch,
    SEARCHSearchPeople: search_entry.GetSearchPeople,
    SEARCHSearchTVShows: search_entry.GetSearchTVShows,
    //#endregion
    //#region Trending:1
    TRENDINGGetTrending: trending_entry.GetTrending,
    //#endregion
    //#region TVepisodes:10
    TVEPISODESGetDetails: tvepisodes_entry.GetDetails,
    TVEPISODESGetAccountStates: tvepisodes_entry.GetAccountStates,
    TVEPISODESGetChanges: tvepisodes_entry.GetChanges,
    TVEPISODESGetCredits: tvepisodes_entry.GetCredits,
    TVEPISODESGetExternalIDs: tvepisodes_entry.GetExternalIDs,
    TVEPISODESGetImages: tvepisodes_entry.GetImages,
    TVEPISODESGetTranslations: tvepisodes_entry.GetTranslations,
    TVEPISODESPostRateTVEpisode: tvepisodes_entry.PostRateTVEpisode,
    TVEPISODESDeleteDeleteRating: tvepisodes_entry.DeleteDeleteRating,
    TVEPISODESGetVideos: tvepisodes_entry.GetVideos,
    //#endregion
    //#region TVepisodesgroups:1
    TVEPISODESGROUPSGetDetails: tvepisodesgroups_entry.GetDetails,
    //#endregion
    //#region TVseasons:9
    TVSEASONSGetDetails: tvseasons_entry.GetDetails,
    TVSEASONSGetAccountStates: tvseasons_entry.GetAccountStates,
    TVSEASONSGetAggregateCredits: tvseasons_entry.GetAggregateCredits,
    TVSEASONSGetChanges: tvseasons_entry.GetChanges,
    TVSEASONSGetCredits: tvseasons_entry.GetCredits,
    TVSEASONSGetExternalIDs: tvseasons_entry.GetExternalIDs,
    TVSEASONSGetImages: tvseasons_entry.GetImages,
    TVSEASONSGetTranslations: tvseasons_entry.GetTranslations,
    TVSEASONSGetVideos: tvseasons_entry.GetVideos,
    //#endregion
    //#region Watchproviders:3
    WATCHPROVIDERSGetAvailableRegions: watchproviders_entry.GetAvailableRegions,
    WATCHPROVIDERSGetMovieProviders: watchproviders_entry.GetMovieProviders,
    WATCHPROVIDERSGetTVProviders: watchproviders_entry.GetTVProviders,

    //#endregion
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
//#endregion

//#region  functions definition
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
export function GetToken(): string {
  return Validator.GetToken();
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
//#endregion

// namespace
export namespace Movie {
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
export namespace Account {
  /********************
   * 1.Get your account details.
   * @param {string} session_id
   * @returns {any} JSON
   * @doc https://developers.themoviedb.org/3/account/get-account-details
   ********************/
  export function GetDetails(session_id: string) {
    return Validator.ACCOUNTGetDetails(session_id);
  }
  /********************
   * 2.Get all of the lists created by an account. Will invlude private lists if you are the owner.
   * @param {string} account_id your account ID
   * @param {string} session_id authentication ID
   * @param {string} language(optional)  Language to request
   * @param {number} page(optional)
   * @returns {any} JSON
   * @doc https://developers.themoviedb.org/3/account/get-created-lists
   ********************/
  export function GetCreatedLists(
    account_id: string,
    session_id: string,
    language?: string,
    page?: number
  ) {
    return Validator.ACCOUNTGetCreatedLists(
      account_id,
      session_id,
      language,
      page
    );
  }
  /********************
   * 3.Get the list of your favorite movies.
   * @param {string} session_id
   * @param {string} account_id
   * @param {string} language(optional)  Language to request
   * @param {string} sort_by(optional) "created_at.asc" or "created_at.desc"
   * @param {number} page(optional)
   * @returns {any} JSON
   * @doc https://developers.themoviedb.org/3/account/get-favorite-movies
   ********************/
  export function GetFavoriteMovies(
    account_id: string,
    session_id: string,
    language?: string,
    sort_by?: string,
    page?: number
  ) {
    return Validator.ACCOUNTGetFavoriteMovies(
      account_id,
      session_id,
      language,
      sort_by,
      page
    );
  }
  /********************
   * 4.Get the list of your favorite TV shows.
   * @param {string} account_id
   * @param {string} session_id
   * @param {string} language(optional)  Language to request
   * @param {string} sort_by(optional) "created_at.asc" or "created_at.desc"
   * @param {number} page(optional)
   * @returns {any} JSON
   * @doc https://developers.themoviedb.org/3/account/get-favorite-tv-shows
   ********************/
  export function GetFavoriteTVShows(
    account_id: string,
    session_id: string,
    language?: string,
    sort_by?: string,
    page?: number
  ) {
    return Validator.ACCOUNTGetFavoriteTVShows(
      account_id,
      session_id,
      language,
      sort_by,
      page
    );
  }
  /********************
   * 5.This method allows you to mark a movie or TV show as a favorite item.
   * @param {string} session_id
   * @param {string} account_id
   * @returns {any} JSON
   * @example query{
   *  "media_type": "movie",
   *  "media_id": 550,
   *  "favorite": true
   * }
   * @doc https://developers.themoviedb.org/3/account/mark-as-favorite
   ********************/
  export function PostMarkAsFavorite(
    query: any,
    account_id: string,
    session_id: string
  ) {
    return Validator.ACCOUNTPostMarkAsFavorite(query, account_id, session_id);
  }
  /********************
   * 6.Get a list of all the movies you have rated.
   * @param {string} session_id
   * @param {string} account_id
   * @param {string} language(optional)  Language to request
   * @param {string} sort_by(optional) "created_at.asc" or "created_at.desc"
   * @param {number} page(optional)
   * @returns {any} JSON
   * @doc https://developers.themoviedb.org/3/account/get-rated-movies
   ********************/
  export function GetRatedMovies(
    account_id: string,
    session_id: string,
    language?: string,
    sort_by?: string,
    page?: number
  ) {
    return Validator.ACCOUNTGetRatedMovies(
      account_id,
      session_id,
      language,
      sort_by,
      page
    );
  }
  /********************
   * 7.Get a list of all the TV shows you have rated.
   * @param {string} account_id
   * @param {string} session_id
   * @param {string} language(optional)  Language to request
   * @param {string} sort_by(optional)
   * @param {number} page(optional)
   * @returns {any} JSON
   * @doc https://developers.themoviedb.org/3/account/get-rated-tv-shows
   ********************/
  export function GetRatedTVShows(
    account_id: string,
    session_id: string,
    language?: string,
    sort_by?: string,
    page?: number
  ) {
    return Validator.ACCOUNTGetRatedTVShows(
      account_id,
      session_id,
      language,
      sort_by,
      page
    );
  }
  /********************
   * 8.Get a list of all the TV episodes you have rated.
   * @param {string} account_id
   * @param {string} session_id
   * @param {string} language(optional)  Language to request
   * @param {string} sort_by
   * @param {number} page(optional)
   * @returns {any} JSON
   * @doc https://developers.themoviedb.org/3/account/get-rated-tv-episodes
   ********************/
  export function GetRatedTVEpisodes(
    account_id: string,
    session_id: string,
    language?: string,
    sort_by?: string,
    page?: number
  ) {
    return Validator.ACCOUNTGetRatedTVEpisodes(
      account_id,
      session_id,
      language,
      sort_by,
      page
    );
  }
  /********************
   * 9.Get a list of all the movies you have added to your watchlist.
   * @param {string} account_id
   * @param {string} session_id
   * @param {string} language(optional)  Language to request
   * @param {string} sort_by
   * @param {number} page(optional)
   * @returns {any} JSON
   * @doc https://developers.themoviedb.org/3/account/get-movie-watchlist
   ********************/
  export function GetMovieWatchlist(
    account_id: string,
    session_id: string,
    language?: string,
    sort_by?: string,
    page?: number
  ) {
    return Validator.ACCOUNTGetMovieWatchlist(
      account_id,
      session_id,
      language,
      sort_by,
      page
    );
  }
  /********************
   * 10.Get a list of all the TV shows you have added to your watchlist.
   * @param {string} account_id
   * @param {string} session_id
   * @param {string} language(optional)  Language to request
   * @param {string} sort_by
   * @param {number} page(optional)
   * @returns {any} JSON
   * @doc https://developers.themoviedb.org/3/account/get-tv-show-watchlist
   ********************/
  export function GetTVShowWatchlist(
    account_id: string,
    session_id: string,
    language?: string,
    sort_by?: string,
    page?: number
  ) {
    return Validator.ACCOUNTGetTVShowWatchlist(
      account_id,
      session_id,
      language,
      sort_by,
      page
    );
  }
  /********************
   * 11.Add a movie or TV show to your watchlist.
   * @param {string} session_id
   * @param {any} query
   * @returns {any} JSON
   * @example query{
   *  "media_type": "movie",
   *  "media_id": 11,
   *  "watchlist": true
   * }
   * @doc https://developers.themoviedb.org/3/account/add-to-watchlist
   ********************/
  export function PostAddToWatchlist(
    session_id: string,
    query: any,
    account_id?: String
  ) {
    return Validator.ACCOUNTPostAddToWatchlist(session_id, query, account_id);
  }
}
export namespace Authentication {
  export function GETCreateGuestSession() {
    return Validator.AUTHENTICATIONGetCreateGuestSession();
  }
  export function GETCreateRequestToken() {
    return Validator.AUTHENTICATIONGetCreateRequestToken();
  }
  export function POSTCreateSession() {
    return Validator.AUTHENTICATIONPostCreateSession();
  }
  export function POSTCreateSessionWithLogin() {
    return Validator.AUTHENTICATIONPostCreateSessionWithLogin();
  }
  export function DELETEDeleteSession() {
    return Validator.AUTHENTICATIONDeleteSession();
  }
}
export namespace Certifications {
  export function GetMovieCertifications() {
    return Validator.CERTIFICATIONSGetMovieCertifications();
  }
  export function GetTVCertifications() {
    return Validator.CERTIFICATIONSGetTVCertifications();
  }
}
export namespace Change {
  export function GetMovieChangeList() {
    return Validator.MOVIEGetChanges();
  }
  export function GetTVChangeList() {
    return Validator.TVGetChanges();
  }
  export function GetPersonChangeList() {
    return Validator.CHANGESGetPersonChangeList();
  }
}
export namespace Collections {
  export function GetDetails() {
    return Validator.COLLECTIONSGetDetails();
  }
  export function GetImages() {
    return Validator.COLLECTIONSGetImages();
  }
  export function GetTranslations() {
    return Validator.COLLECTIONSGetTranslations();
  }
}
export namespace Companies {
  export function GetDetails() {
    return Validator.COMPANIESGetDetails();
  }
  export function GetAlternativeNames() {
    return Validator.COMPANIESGetAlternativeNames();
  }
  export function GetImages() {
    return Validator.COMPANIESGetImages();
  }
}
export namespace Configuration {
  export function GetAPIConfiguration() {
    return Validator.CONFIGURATIONGetAPIConfiguration();
  }
  export function GetCountries() {
    return Validator.CONFIGURATIONGetCountries();
  }
  export function GetJobs() {
    return Validator.CONFIGURATIONGetJobs();
  }
  export function GetLanguages() {
    return Validator.CONFIGURATIONGetLanguages();
  }
  export function GetPrimaryTranslations() {
    return Validator.CONFIGURATIONGetPrimaryTranslations();
  }
  export function GetTimezones() {
    return Validator.CONFIGURATIONGetTimezones();
  }
}
export namespace Credits {
  /********************
   * 1.Get a movie or TV credit details by id.
   * @param {number|string} credit_id
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/credits/get-credit-details
   ********************/
  export function GetDeatils(credit_id: number | string) {
    return Validator.CREDITSGetDetails(credit_id);
  }
}
export namespace Discover {
  /********************
   * 1.Discover movies by different types of data like average rating,
   * number of votes, genres and certifications.
   * You can get a valid list of certifications from the "certifications list" method.
   * @param {any} query
   * @example 'query' are more than 32 available properties.... see more in discover.ts
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/discover/movie-discover
   ********************/
  export function GetMovieDiscover(query?: any) {
    return Validator.DISCOVERGetMovieDiscover(query);
  }
  /********************
   * 2.Discover TV shows by different types of data like average rating,
   * number of votes, genres, the network they aired on and air dates.
   * @param {any} query
   * @example 'query' are more than 24 available properties.... see more in discover.ts
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/discover/tv-discover
   ********************/
  export function GetTVDiscover(query?: any) {
    return Validator.DISCOVERGetTVDiscover(query);
  }
}
export namespace Find {
  /********************
   * 1.The find method makes it easy to search for objects in TMDB database by an external id.
   * @param {number|string} external_id
   * @param {string} external_source (default: imdb_id)
   * @param {string} language (optional)
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/find/find-by-id
   ********************/
  export function FindByID(
    external_id: number | string,
    language?: string,
    external_source?: string
  ) {
    return Validator.FINDGetFindByID(external_id, language, external_source);
  }
}
export namespace Genres {
  export function GetMovieList() {
    return Validator.GENRESGetMovieList();
  }
  export function GetTVList() {
    return Validator.GENRESGetTVList();
  }
}
export namespace GuestSessions {
  export function GetRatedMovies() {
    return Validator.GUESTSESSIONSGetRatedMovies();
  }
  export function GetRatedTVShows() {
    return Validator.GUESTSESSIONSGetRatedTVShows();
  }
  export function GetRatedTVEpisodes() {
    return Validator.GUESTSESSIONSGetRatedTVEpisodes();
  }
}
export namespace KeyWord {
  export function GetDetails() {
    return Validator.KETWORDSGetDetails();
  }
  export function GetMovies() {
    return Validator.KETWORDSGetMovies();
  }
}
export namespace Lists {
  export function GetDetails() {
    return Validator.LISTSGetDetails();
  }
  export function GetCheckItemStatus() {
    return Validator.LISTSGetCheckItemStatus();
  }
  export function PostCreateList() {
    return Validator.LISTSPostCreateList();
  }
  export function PostAddMovie() {
    return Validator.LISTSPostAddMovie();
  }
  export function PostRemoveMovie() {
    return Validator.LISTSPostRemoveMovie();
  }
  export function PostClearList() {
    return Validator.LISTSPostClearList();
  }
  export function DeleteDeleteList() {
    return Validator.LISTSDeleteDeleteList();
  }
}
export namespace Network {
  export function GetDetails() {
    return Validator.NETWORKGetDetails();
  }
  export function GetAlternativeNames() {
    return Validator.NETWORKGetAlternativeNames();
  }
  export function GetImages() {
    return Validator.NETWORKGetImages();
  }
}
export namespace People {
  export function GetDetails() {
    return Validator.PEOPLEGetDetails();
  }
  export function GetChanges() {
    return Validator.PEOPLEGetChanges();
  }
  export function GetMovieCredits() {
    return Validator.PEOPLEGetMovieCredits();
  }
  export function GetTVCredits() {
    return Validator.PEOPLEGetTVCredits();
  }
  export function GetCombinedCredits() {
    return Validator.PEOPLEGetCombinedCredits();
  }
  export function GetExternalIDs() {
    return Validator.PEOPLEGetExternalIDs();
  }
  export function GetImages() {
    return Validator.PEOPLEGetImages();
  }
  export function GetTaggedImages() {
    return Validator.PEOPLEGetTaggedImages();
  }
  export function GetTranslations() {
    return Validator.PEOPLEGetTranslations();
  }
  export function GetLatest() {
    return Validator.PEOPLEGetLatest();
  }
  export function GetPopular() {
    return Validator.PEOPLEGetPopular();
  }
}
export namespace Reviews {
  export function GetDeatils() {
    return Validator.REVIEWSGetDetails();
  }
}
export namespace Search {
  export function GetSearchCompanies() {
    return Validator.SEARCHGetSearchCompanies();
  }
  export function GetSearchCollections() {
    return Validator.SEARCHGetSearchCollections();
  }
  export function GetSearchKeywords() {
    return Validator.SEARCHGetSearchKeywords();
  }
  export function GetSearchMovies() {
    return Validator.SEARCHGetSearchMovies();
  }
  export function GetMultiSearch() {
    return Validator.SEARCHGetMultiSearch();
  }
  export function GetSearchPeople() {
    return Validator.SEARCHGetSearchPeople();
  }
  export function GetSearchTVShows() {
    return Validator.SEARCHGetSearchTVShows();
  }
}
export namespace Trending {
  export function GetTrending() {
    return Validator.TRENDINGGetTrending();
  }
}
export namespace TVEpisodes {
  export function GetDetails() {
    return Validator.TVEPISODESGetDetails();
  }
  export function GetAccountStates() {
    return Validator.TVEPISODESGetAccountStates();
  }
  export function GetChanges() {
    return Validator.TVEPISODESGetChanges();
  }
  export function GetCredits() {
    return Validator.TVEPISODESGetCredits();
  }
  export function GetExternalIDs() {
    return Validator.TVEPISODESGetExternalIDs();
  }
  export function GetImages() {
    return Validator.TVEPISODESGetImages();
  }
  export function GetTranslations() {
    return Validator.TVEPISODESGetTranslations();
  }
  export function PostRateTVEpisode() {
    return Validator.TVEPISODESPostRateTVEpisode();
  }
  export function DeleteDeleteRating() {
    return Validator.TVEPISODESDeleteDeleteRating();
  }
  export function GetVideos() {
    return Validator.TVEPISODESGetVideos();
  }
}
export namespace TVepisodesgroups {
  export function GetDeatils() {
    return Validator.TVEPISODESGROUPSGetDetails();
  }
}
export namespace TVseason {
  export function GetDetails() {
    return Validator.TVSEASONSGetDetails();
  }
  export function GetAccountStates() {
    return Validator.TVSEASONSGetAccountStates();
  }
  export function GetAggregateCredits() {
    return Validator.TVSEASONSGetAggregateCredits();
  }
  export function GetChanges() {
    return Validator.TVSEASONSGetChanges();
  }
  export function GetCredits() {
    return Validator.TVSEASONSGetCredits();
  }
  export function GetExternalIDs() {
    return Validator.TVSEASONSGetExternalIDs();
  }
  export function GetImages() {
    return Validator.TVSEASONSGetImages();
  }
  export function GetTranslations() {
    return Validator.TVSEASONSGetTranslations();
  }
  export function GetVideos() {
    return Validator.TVSEASONSGetVideos();
  }
}
export namespace Watchproviders {
  export function GetAvailableRegions() {
    return Validator.WATCHPROVIDERSGetAvailableRegions();
  }
  export function GetMovieProviders() {
    return Validator.WATCHPROVIDERSGetMovieProviders();
  }
  export function GetTVProviders() {
    return Validator.WATCHPROVIDERSGetTVProviders();
  }
}
