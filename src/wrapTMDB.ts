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
const keywords_entry = new keywords_module.KeyWords();
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
    AUTHENTICATIONDeleteDeleteSession: authentication_entry.DeleteDeleteSession,
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
  /********************
   * 1.This method will let you create a new guest session.
   * Guest sessions are a type of session that will let a user rate movies and TV shows
   * but not require them to have a TMDB user account.
   * @returns {any} JSON
   * @doc https://developers.themoviedb.org/3/authentication/create-guest-session
   ********************/
  export function GetCreateGuestSession() {
    return Validator.AUTHENTICATIONGetCreateGuestSession();
  }
  /********************
   * 2.Create a temporary request token that can be used to validate a TMDB user login.
   * @returns {number} JSON
   * @doc https://developers.themoviedb.org/3/authentication/create-request-token
   ********************/
  export function GetCreateRequestToken() {
    return Validator.AUTHENTICATIONGetCreateRequestToken();
  }
  /********************
   * 3.You can use this method to create a fully valid session ID once a user has validated the request token.
   * @param {any} query
   * @returns {number} JSON
   * @example query{
   *     "request_token": "6bc047b88f669d1fb86574f06381005d93d3517a"
   * }
   * @doc https://developers.themoviedb.org/3/authentication/create-session
   ********************/
  export function PostCreateSession(query?: any) {
    return Validator.AUTHENTICATIONPostCreateSession(query);
  }
  /********************
   * 4.This method allows an application to validate a request token by entering a username and password.
   * @param {any} query
   * @returns {number} JSON
   * @example query{
   *    "username": "johnny_appleseed",
   *    "password": "test123",
   *    "request_token": "1531f1a558c8357ce8990cf887ff196e8f5402ec"
   * }
   * @doc hhttps://developers.themoviedb.org/3/authentication/validate-request-token
   ********************/
  export function PostCreateSessionWithLogin(query: any) {
    return Validator.AUTHENTICATIONPostCreateSessionWithLogin(query);
  }
  /********************
   * 5.Use this method to create a v3 session ID if you already have a valid v4 access token.
   * The v4 token needs to be authenticated by the user.
   * Your standard "read token" will not validate to create a session ID.
   * @param {any} query
   * @returns {number} JSON
   * @doc https://developers.themoviedb.org/3/authentication/create-session-from-v4-access-token
   ********************/
  //export function DELETEDeleteSession(){}
  /********************
   * 6.If you would like to delete (or "logout") from a session, call this method with a valid session ID.
   * @param {any} query
   * @returns {number} JSON
   * @example query{
   *    "session_id": "2629f70fb498edc263a0adb99118ac41f0053e8c"
   * }
   * @doc https://developers.themoviedb.org/3/account/get-account-details
   ********************/
  export function DeleteDeleteSession(query: any) {
    return Validator.AUTHENTICATIONDeleteDeleteSession(query);
  }
}
export namespace Certifications {
  /********************
   * 1.Get an up to date list of the officially supported movie certifications on TMDB.
   * @returns {any} JSON
   * @doc https://developers.themoviedb.org/3/certifications/get-movie-certifications
   ********************/
  export function GetMovieCertifications() {
    return Validator.CERTIFICATIONSGetMovieCertifications();
  }
  /********************
   * 2.Get your account details.
   * @returns {any} JSON
   * @doc https://developers.themoviedb.org/3/account/get-account-details
   ********************/
  export function GetTVCertifications() {
    return Validator.CERTIFICATIONSGetTVCertifications();
  }
}
export namespace Change {
  /********************
   * 1.Get a list of all of the movie ids that have been changed in the past 24 hours.
   * You can query it for up to 14 days worth of changed IDs at a time with
   * the "start_date" and "end_date" query parameters. 100 items are returned per page.
   * @param {number|string} start_date (optional)
   * @param {number|string} end_date (optional)
   * @param {number} page (optional)
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/changes/get-person-change-list
   ********************/
  export function GetMovieChangeList(
    start_date?: string,
    end_date?: string,
    page?: number
  ) {
    return Validator.CHANGESGetMovieChangeList(start_date, end_date, page);
  }
  /********************
   * 2.Get a list of all of the TV show ids that have been changed in the past 24 hours.
   * You can query it for up to 14 days worth of changed IDs at a time
   * with the "start_date" and "end_date" query parameters. 100 items are returned per page.
   * @param {number|string} start_date (optional)
   * @param {number|string} end_date (optional)
   * @param {number} page (optional)
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/changes/get-person-change-list
   ********************/
  export function GetTVChangeList(
    start_date?: string,
    end_date?: string,
    page?: number
  ) {
    return Validator.CHANGESGetTVChangeList(start_date, end_date, page);
  }
  /********************
   * 3.Get a list of all of the person ids that have been changed in the past 24 hours.
   * You can query it for up to 14 days worth of changed IDs at a time
   * with the "start_date" and "end_date" query parameters. 100 items are returned per page.
   * @param {number|string} start_date (optional)
   * @param {number|string} end_date (optional)
   * @param {number} page (optional)
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/changes/get-person-change-list
   ********************/
  export function GetPersonChangeList(
    start_date?: string,
    end_date?: string,
    page?: number
  ) {
    return Validator.CHANGESGetPersonChangeList(start_date, end_date, page);
  }
}
export namespace Collections {
  /********************
   * 1.Get collection details by id.
   * @param {number|string} collection_id
   * @param {string} language (optional)
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/collections/get-collection-details
   ********************/
  export function GetDetails(
    collection_id: string | number,
    language?: string
  ) {
    return Validator.COLLECTIONSGetDetails(collection_id, language);
  }
  /********************
   * 2.Get collection details by id.
   * @param {number|string} collection_id
   * @param {string} language (optional)
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/collections/get-collection-images
   ********************/
  export function GetImages(collection_id: string | number, language?: string) {
    return Validator.COLLECTIONSGetImages(collection_id, language);
  }
  /********************
   * 3.Get the list translations for a collection by id.
   * @param {number|string} collection_id
   * @param {string} language (optional)
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/collections/get-collection-translations
   ********************/
  export function GetTranslations(
    collection_id: string | number,
    language?: string
  ) {
    return Validator.COLLECTIONSGetTranslations(collection_id, language);
  }
}
export namespace Companies {
  /********************
   * 1.Get a companies details by id.
   * @param {number|string} company_id
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/companies/get-company-details
   ********************/
  export function GetDetails(company_id: number | string) {
    return Validator.COMPANIESGetDetails(company_id);
  }
  /********************
   * 2.Get the alternative names of a company.
   * @param {number|string} company_id
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/companies/get-company-details
   ********************/
  export function GetAlternativeNames(company_id: number | string) {
    return Validator.COMPANIESGetAlternativeNames(company_id);
  }
  /********************
   * 3.Get a companies logos by id.
   * @param {number|string} company_id
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/companies/get-company-details
   ********************/
  export function GetImages(company_id: number | string) {
    return Validator.COMPANIESGetImages(company_id);
  }
}
export namespace Configuration {
  /********************
   * 1.Get the system wide configuration information.
   * Some elements of the API require some knowledge of this configuration data.
   * The purpose of this is to try and keep the actual API responses as light as possible.
   * It is recommended you cache this data within your application and check for updates every few days.
   * @returns JSON
   * @example To build an image URL, you will need 3 pieces of data. The base_url, size and file_path.
   * Simply combine them all and you will have a fully qualified URL. Here’s an example URL:
   * https://image.tmdb.org/t/p/w500/8uO0gUM8aNqYLs1OsTBQiXu0fEv.jpg
   * @doc https://developers.themoviedb.org/3/changes/get-person-change-list
   ********************/
  export function GetAPIConfiguration() {
    return Validator.CONFIGURATIONGetAPIConfiguration();
  }
  /********************
   * 2.Get the list of countries (ISO 3166-1 tags) used throughout TMDB.
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/configuration/get-countries
   ********************/
  export function GetCountries() {
    return Validator.CONFIGURATIONGetCountries();
  }
  /********************
   * 3.Get a list of the jobs and departments we use on TMDB.
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/configuration/get-jobs
   ********************/
  export function GetJobs() {
    return Validator.CONFIGURATIONGetJobs();
  }
  /********************
   * 4.Get the list of languages (ISO 639-1 tags) used throughout TMDB.
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/configuration/get-languages
   ********************/
  export function GetLanguages() {
    return Validator.CONFIGURATIONGetLanguages();
  }
  /********************
   * 5.Get a list of the officially supported translations on TMDB.
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/configuration/get-primary-translations
   ********************/
  export function GetPrimaryTranslations() {
    return Validator.CONFIGURATIONGetPrimaryTranslations();
  }
  /********************
   * 6.Get the list of timezones used throughout TMDB.
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/configuration/get-timezones
   ********************/
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
  /********************
   * 1.Get the list of official genres for movies.
   * @param {string} language (optional)
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/genres/get-movie-list
   ********************/
  export function GetMovieList(language?: string) {
    return Validator.GENRESGetMovieList(language);
  }
  /********************
   * 2.Get the list of official genres for TV shows.
   * @param {string} language (optional)
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/genres/get-tv-list
   ********************/
  export function GetTVList(language?: string) {
    return Validator.GENRESGetTVList(language);
  }
}
export namespace GuestSessions {
  /********************
   * 1.Get the rated movies for a guest session.
   * @param {number|string} guest_session_id
   * @param {string} language (optional)
   * @param {string} sort_by (optional) "created_at.asc" or "created_at.desc"
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/guest-sessions/get-guest-session-rated-movies
   ********************/
  export function GetRatedMovies(
    guest_session_id: string,
    language?: string,
    sort_by?: string
  ) {
    return Validator.GUESTSESSIONSGetRatedMovies(
      guest_session_id,
      language,
      sort_by
    );
  }
  /********************
   * 2.Get the rated TV shows for a guest session.
   * @param {number|string} guest_session_id
   * @param {string} language (optional)
   * @param {string} sort_by (optional) "created_at.asc" or "created_at.desc"
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/guest-sessions/get-guest-session-rated-tv-shows
   ********************/
  export function GetRatedTVShows(
    guest_session_id: string,
    language?: string,
    sort_by?: string
  ) {
    return Validator.GUESTSESSIONSGetRatedTVShows(
      guest_session_id,
      language,
      sort_by
    );
  }
  /********************
   * 3.the rated TV episodes for a guest session.
   * @param {number|string} guest_session_id
   * @param {string} language (optional)
   * @param {string} sort_by (optional) "created_at.asc" or "created_at.desc"
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/guest-sessions/get-guest-session-rated-tv-shows
   ********************/
  export function GetRatedTVEpisodes(
    guest_session_id: string,
    language?: string,
    sort_by?: string
  ) {
    return Validator.GUESTSESSIONSGetRatedTVEpisodes(
      guest_session_id,
      language,
      sort_by
    );
  }
}
export namespace KeyWords {
  /********************
   * 1.GET /keyword/{keyword_id}
   * @description
   * @param {number|string} keyword_id
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/keywords/get-keyword-details
   ********************/
  export function GetDetails(keyword_id: number | string) {
    return Validator.KETWORDSGetDetails(keyword_id);
  }
  /********************
   * 2.GET /keyword/{keyword_id}/movies
   * @description Get the movies that belong to a keyword.
   * We highly recommend using 'movie discover' instead of this method as it is much more flexible.
   * @param {number|string} keyword_id
   * @param {number|string} language(optional)
   * @param {boolean} include_adult(optional)
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/keywords/get-keyword-details
   ********************/
  export function GetMovies(
    keyword_id: number | string,
    language?: string,
    include_adult?: boolean
  ) {
    return Validator.KETWORDSGetMovies(keyword_id, language, include_adult);
  }
}
export namespace Lists {
  /********************
   * 1.Get the details of a list.
   * @param {number|string} list_id
   * @param {number|string} language(optional)
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/lists/get-list-details
   ********************/
  export function GetDetails(list_id: number | string, language?: string) {
    return Validator.LISTSGetDetails(list_id, language);
  }
  /********************
   * 2.You can use this method to check if a movie has already been added to the list.
   * @param {number|string} list_id
   * @param {number|string} movie_id
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/lists/check-item-status
   ********************/
  export function GetCheckItemStatus(
    list_id: number | string,
    movie_id: number | string
  ) {
    return Validator.LISTSGetCheckItemStatus(list_id, movie_id);
  }
  /********************
   * 3.Create a list.
   * @param {any} query
   * @param {number|string} session_id
   * @example query{
   *    "name": "This is my awesome test list.",
   *    "description": "Just an awesome list dawg.",
   *    "language": "en"
   * }
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/lists/create-list
   ********************/
  export function PostCreateList(query: any, session_id: number | string) {
    return Validator.LISTSPostCreateList(query, session_id);
  }
  /********************
   * 4.Add a movie to a list.
   * @param {any} query
   * @param {number|string} list_id
   * @param {number|string} session_id
   * @example query{
   *    "media_id": 18
   * }
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/lists/add-movie
   ********************/
  export function PostAddMovie(
    query: any,
    list_id: number | string,
    session_id: number | string
  ) {
    return Validator.LISTSPostAddMovie(query, list_id, session_id);
  }
  /********************
   * 5.Remove a movie from a list.
   * @param {any} query
   * @param {number|string} list_id
   * @param {number|string} session_id
   * @example query{
   *    "media_id": 12
   * }
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/lists/remove-movie
   ********************/
  export function PostRemoveMovie(
    query: any,
    list_id: number | string,
    session_id: number | string
  ) {
    return Validator.LISTSPostRemoveMovie(query, list_id, session_id);
  }
  /********************
   * 6.Clear all of the items from a list.
   * @param {number|string} list_id
   * @param {number|string} session_id
   * @param {boolean} confirm
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/lists/create-list
   ********************/
  export function PostClearList(
    list_id: number | string,
    confirm: boolean,
    session_id: number | string
  ) {
    return Validator.LISTSPostClearList(list_id, confirm, session_id);
  }
  /********************
   * 7.Delete  a list.
   * @param {number|string} list_id
   * @param {number|string} session_id
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/lists/delete-list
   ********************/
  export function DeleteDeleteList(
    list_id: number | string,
    session_id: number | string
  ) {
    return Validator.LISTSDeleteDeleteList(list_id, session_id);
  }
}
export namespace Network {
  /********************
   * 1.Get the details of a network.
   * @param {number|string} network_id
   * @returns {any} JSON
   * @doc https://developers.themoviedb.org/3/networks/get-network-details
   ********************/
  export function GetDetails(network_id: string | number) {
    return Validator.NETWORKGetDetails(network_id);
  }
  /********************
   * 2.Get the alternative names of a network.
   * @param {number|string} network_id
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/networks/get-network-alternative-names
   ********************/
  export function GetAlternativeNames(network_id: string | number) {
    return Validator.NETWORKGetAlternativeNames(network_id);
  }
  /********************
   * 3.Get the TV network logos by id.
   * @param {number|string} network_id
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/networks/get-network-images
   ********************/
  export function GetImages(network_id: string | number) {
    return Validator.NETWORKGetImages(network_id);
  }
}
export namespace People {
  /********************
   * 1.Get the primary person details by id.
   * @param {number|string} person_id
   * @param {string} language
   * @returns {any} JSON
   * @doc https://developers.themoviedb.org/3/people/get-person-details
   ********************/
  export function GetDetails(
    person_id: number | string,
    language?: string,
    append_to_response?: string
  ) {
    return Validator.PEOPLEGetDetails(person_id, language, append_to_response);
  }
  /********************
   * 2.Get the changes for a person. By default only the last 24 hours are returned.
   * @param {number|string} person_id
   * @param {string} end_date (optional)
   * @param {number} page (optional)
   * @param {string} start_date (optional)
   * @returns {any} JSON
   * @doc https://developers.themoviedb.org/3/people/get-person-changes
   ********************/
  export function GetChanges(
    person_id: number | string,
    start_date?: string,
    end_date?: number | string,
    page?: number
  ) {
    return Validator.PEOPLEGetChanges(person_id, start_date, end_date, page);
  }
  /********************
   * 3.Get the movie credits for a person.
   * @param {number|string} person_id
   * @param {string} language(optional)
   * @returns {any} JSON
   * @doc https://developers.themoviedb.org/3/people/get-person-movie-credits
   ********************/
  export function GetMovieCredits(
    person_id: number | string,
    language?: string
  ) {
    return Validator.PEOPLEGetMovieCredits(person_id, language);
  }
  /********************
   * 4.Get the TV show credits for a person.
   * @param {number|string} person_id
   * @param {string} language(optional)
   * @returns {any} JSON
   * @doc https://developers.themoviedb.org/3/people/get-person-tv-credits
   ********************/
  export function GetTVCredits(person_id: number | string, language?: string) {
    return Validator.PEOPLEGetTVCredits(person_id, language);
  }
  /********************
   * 5.Get the movie and TV credits together in a single response.
   * @param {number|string} person_id
   * @param {string} language(optional)
   * @returns {any} JSON
   * @doc https://developers.themoviedb.org/3/people/get-person-combined-credits
   ********************/
  export function GetCombinedCredits(
    person_id: number | string,
    language?: string
  ) {
    return Validator.PEOPLEGetCombinedCredits(person_id, language);
  }
  /********************
   * 6.Get the external ids for a person. We currently support the following external sources.
   * @param {number|string} person_id
   * @param {string} language(optional)
   * @returns {any} JSON
   * @doc https://developers.themoviedb.org/3/people/get-person-external-ids
   ********************/
  export function GetExternalIDs(
    person_id: number | string,
    language?: string
  ) {
    return Validator.PEOPLEGetExternalIDs(person_id, language);
  }
  /********************
   * 7.Get the images for a person.
   * @param {number|string} person_id
   * @returns {any} JSON
   * @doc https://developers.themoviedb.org/3/people/get-person-images
   ********************/
  export function GetImages(person_id: number | string) {
    return Validator.PEOPLEGetImages(person_id);
  }
  /********************
   * 8.Get the primary person details by id.
   * @param {number|string} person_id
   * @param {string} language(optional)
   * @param {number} page(optional)
   * @returns {any} JSON
   * @doc https://developers.themoviedb.org/3/people/get-tagged-images
   ********************/
  export function GetTaggedImages(
    person_id: number | string,
    language?: string,
    page?: number
  ) {
    return Validator.PEOPLEGetTaggedImages(person_id, language, page);
  }
  /********************
   * 9.Get a list of translations that have been created for a person.
   * @param {number|string} person_id
   * @param {string} language(optional)
   * @returns {any} JSON
   * @doc https://developers.themoviedb.org/3/people/get-person-translations
   ********************/
  export function GetTranslations(
    person_id: number | string,
    language?: string
  ) {
    return Validator.PEOPLEGetTranslations(person_id, language);
  }
  /********************
   * 10.Get the most newly created person. This is a live response and will continuously change.
   * @param {string} language(optional)
   * @returns {any} JSON
   * @doc https://developers.themoviedb.org/3/people/get-latest-person
   ********************/
  export function GetLatest(language?: string) {
    return Validator.PEOPLEGetLatest(language);
  }
  /********************
   * 11.Get the primary person details by id.
   * @param {string} language(optional)
   * @param {number} page(optional)
   * @returns {any} JSON
   * @doc https://developers.themoviedb.org/3/people/get-person-details
   ********************/
  export function GetPopular(language?: string, page?: number) {
    return Validator.PEOPLEGetPopular(language, page);
  }
}
export namespace Reviews {
  /********************
   * 1.GET /review/{review_id}
   * @description Retrieve the details of a movie or TV show review.
   * @param {number|string} review_id
   * @returns {any} JSON
   * @doc https://developers.themoviedb.org/3/reviews/get-review-details
   ********************/
  export function GetDeatils(review_id: number | string) {
    return Validator.REVIEWSGetDetails(review_id);
  }
}
export namespace Search {
  /********************
   * 1.Search for companies.
   * @param {string} query keywords
   * @param {number} page (optional)
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/search/search-companies
   ********************/
  export function GetSearchCompanies(query: string, page?: number) {
    return Validator.SEARCHGetSearchCompanies(query, page);
  }
  /********************
   * 2.GET /search/collection
   * @description Search for collections.
   * @param {string} language(optional)
   * @param {string} query keywords
   * @param {number} page (optional)
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/search/search-collections
   ********************/
  export function GetSearchCollections(
    query: string,
    language?: string,
    page?: number
  ) {
    return Validator.SEARCHGetSearchCollections(query, language, page);
  }
  /********************
   * 3.Search for keywords.
   * @param {string} query keywords
   * @param {number} page (optional)
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/search/search-keywords
   ********************/
  export function GetSearchKeywords(query: string, page?: number) {
    return Validator.SEARCHGetSearchKeywords(query, page);
  }
  /********************
   * 4.Search for movies.
   * @param {string} language(optional)
   * @param {string} query
   * @param {boolen} include_adult (optional)
   * @param {string} region (optional)
   * @param {number} year (optional)
   * @param {number} primary_release_year (optional)
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/search/search-movies
   ********************/
  export function GetSearchMovies(
    query: string,
    language?: string,
    page?: number,
    include_adult?: boolean,
    region?: string,
    year?: number,
    primary_release_year?: number
  ) {
    return Validator.SEARCHGetSearchMovies(
      query,
      language,
      page,
      include_adult,
      region,
      year,
      primary_release_year
    );
  }
  /********************
   * 5.Search multiple models in a single request.
   * Multi search currently supports searching for movies, tv shows and people in a single request.
   * @param {string} query
   * @param {string} language(optional)
   * @param {number} page (optional)
   * @param {boolen} include_adult (optional)
   * @param {string} region (optional)
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/search/multi-search
   ********************/
  export function GetMultiSearch(
    query: string,
    language?: string,
    page?: number,
    include_adult?: boolean,
    region?: string
  ) {
    return Validator.SEARCHGetMultiSearch(
      query,
      language,
      page,
      include_adult,
      region
    );
  }
  /********************
   * 6.Search for people.
   * @param {string} language(optional)
   * @param {string} query
   * @param {number} page (optional)
   * @param {boolen} include_adult (optional)
   * @param {string} region (optional)
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/search/search-people
   ********************/
  export function GetSearchPeople(
    query: string,
    language?: string,
    page?: number,
    include_adult?: boolean,
    region?: string
  ) {
    return Validator.SEARCHGetSearchPeople(
      query,
      language,
      page,
      include_adult,
      region
    );
  }
  /********************
   * 7.Search for a TV show.
   * @param {string} language(optional)
   * @param {number} page (optional)
   * @param {string} query
   * @param {boolen} include_adult (optional)
   * @param {number} first_air_date_year (optional)
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/search/search-tv-shows
   ********************/
  export function GetSearchTVShows(
    query: string,
    language?: string,
    page?: number,
    include_adult?: boolean,
    first_air_date_year?: number
  ) {
    return Validator.SEARCHGetSearchTVShows(
      query,
      language,
      page,
      include_adult,
      first_air_date_year
    );
  }
}
export namespace Trending {
  /********************
   * 1.Get the daily or weekly trending items.
   * The daily trending list tracks items over the period of a day while items have a 24 hour half life.
   * The weekly list tracks items over a 7 day period, with a 7 day half life.
   * @param {string} media_type ("all" || "movie" || "tv" || "person")
   * @param {string} time_window ("day" || "week")
   * @returns {any} JSON
   * @doc https://developers.themoviedb.org/3/trending/get-trending
   ********************/
  export function GetTrending(media_type: string, time_window: string) {
    return Validator.TRENDINGGetTrending(media_type, time_window);
  }
}
export namespace TVEpisodes {
  /********************
   * 1.Get the TV season details by id.
   * @param {number|string} tv_id
   * @param {number|string} season_number
   * @param {number|string} episode_number
   * @param {string} language (optional)
   * @param {string} append_to_response (optional)
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/tv-episodes/get-tv-episode-details
   ********************/
  export function GetDetails(
    tv_id: number | string,
    season_number: number | string,
    episode_number: number | string,
    language?: string,
    append_to_response?: string
  ) {
    return Validator.TVEPISODESGetDetails(
      tv_id,
      season_number,
      episode_number,
      language,
      append_to_response
    );
  }
  /********************
   * 2.Get your rating for a episode.
   * @param {number|string} tv_id
   * @param {number|string} season_number
   * @param {number|string} episode_number
   * @param {string} guest_session_id (optional)
   * @param {string} session_id (optional)
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/tv-episodes/get-tv-episode-account-states
   ********************/
  export function GetAccountStates(
    tv_id: number | string,
    season_number: number | string,
    episode_number: number | string,
    session_id?: string,
    guest_session_id?: string
  ) {
    return Validator.TVEPISODESGetAccountStates(
      tv_id,
      season_number,
      episode_number,
      guest_session_id,
      session_id
    );
  }
  /********************
   * 3.Get the changes for a TV season. By default only the last 24 hours are returned.
   * @param {number|string} episode_id
   * @param {string} start_date (optional)
   * @param {string} end_date (optional)
   * @param {number} page (optional)
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/tv-episodes/get-tv-episode-changes
   ********************/
  export function GetChanges(
    episode_id: number | string,
    start_date?: string,
    end_date?: string,
    page?: number
  ) {
    return Validator.TVEPISODESGetChanges(
      episode_id,
      start_date,
      end_date,
      page
    );
  }
  /********************
   * 4.GET /tv/{tv_id}/season/{season_number}/episode/{episode_number}/credits
   * @description Get the credits (cast, crew and guest stars) for a TV episode.
   * @param {number|string} tv_id
   * @param {number|string} season_number
   * @param {number|string} episode_number
   * @param {string} language (optional)
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/tv-episodes/get-tv-episode-credits
   ********************/
  export function GetCredits(
    tv_id: number | string,
    season_number: number | string,
    episode_number: number | string,
    language?: string
  ) {
    return Validator.TVEPISODESGetCredits(
      tv_id,
      season_number,
      episode_number,
      language
    );
  }
  /********************
   * 5.GET /tv/{tv_id}/season/{season_number}/episode/{episode_number}/external_ids
   * @description Get the TV season details by id.
   * @param {number|string} tv_id
   * @param {number|string} season_number
   * @param {number|string} episode_number
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/tv-episodes/get-tv-episode-external-ids
   ********************/
  export function GetExternalIDs(
    tv_id: number | string,
    season_number: number | string,
    episode_number: number | string
  ) {
    return Validator.TVEPISODESGetExternalIDs(
      tv_id,
      season_number,
      episode_number
    );
  }
  /********************
   * 6.GET /tv/{tv_id}/season/{season_number}/episode/{episode_number}/images
   * @description Get the images that belong to a TV episode.
   * @param {number|string} tv_id
   * @param {number|string} season_number
   * @param {number|string} episode_number
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/tv-episodes/get-tv-episode-images
   ********************/
  export function GetImages(
    tv_id: number | string,
    season_number: number | string,
    episode_number: number | string
  ) {
    return Validator.TVEPISODESGetImages(tv_id, season_number, episode_number);
  }
  /********************
   * 7.GET /tv/{tv_id}/season/{season_number}/episode/{episode_number}/translations
   * @description Get the translation data for an episode.
   * @param {number|string} tv_id
   * @param {number|string} season_number
   * @param {number|string} episode_number
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/tv-episodes/get-tv-episode-translations
   ********************/
  export function GetTranslations(
    tv_id: number | string,
    season_number: number | string,
    episode_number: number | string
  ) {
    return Validator.TVEPISODESGetTranslations(
      tv_id,
      season_number,
      episode_number
    );
  }
  /********************
   * 8.Rate a TV episode.
   * @param {number|string} tv_id
   * @param {number|string} season_number
   * @param {number|string} episode_number
   * @param {any} query
   * @param {string} session_id (optional)
   * @param {string} guest_session_id (optional)
   * @returns JSON
   * @example query{
   *    "value": 8.5
   * }
   * @doc https://developers.themoviedb.org/3/tv-episodes/rate-tv-episode
   ********************/
  export function PostRateTVEpisode(
    tv_id: number | string,
    season_number: number | string,
    episode_number: number | string,
    query: any,
    session_id?: string,
    guest_session_id?: string
  ) {
    return Validator.TVEPISODESPostRateTVEpisode(
      tv_id,
      season_number,
      episode_number,
      query,
      session_id,
      guest_session_id
    );
  }
  /********************
   * 9.Remove your rating for a TV episode.
   * @param {number|string} tv_id
   * @param {number|string} season_number
   * @param {number|string} episode_number
   * @param {string} session_id (optional)
   * @param {string} guest_session_id (optional)
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/tv-episodes/delete-tv-episode-rating
   ********************/
  export function DeleteDeleteRating(
    tv_id: number | string,
    season_number: number | string,
    episode_number: number | string,
    session_id?: string,
    guest_session_id?: string
  ) {
    return Validator.TVEPISODESDeleteDeleteRating(
      tv_id,
      season_number,
      episode_number,
      session_id,
      guest_session_id
    );
  }
  /********************
   * 10.Get the videos that have been added to a TV episode.
   * @param {number|string} tv_id
   * @param {number|string} season_number
   * @param {number|string} episode_number
   * @param {string} language (optional)
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/tv-episodes/get-tv-episode-videos
   ********************/
  export function GetVideos(
    tv_id: number | string,
    season_number: number | string,
    episode_number: number | string,
    language?: string
  ) {
    return Validator.TVEPISODESGetVideos(
      tv_id,
      season_number,
      episode_number,
      language
    );
  }
}
export namespace TVepisodesgroups {
  /********************
   * 1.Get the details of a TV episode group. Groups support 7 different types which are enumerated as the following:
   * 1.Original air date
   * 2.Absolute
   * 3.DVD
   * 4.Digital
   * 5.Story arc
   * 6.Production
   * 7.TV
   * @param {number|string} id
   * @returns {any} JSON
   * @doc https://developers.themoviedb.org/3/tv-episode-groups/get-tv-episode-group-details
   ********************/
  export function GetDeatils(id: number | string, language?: string) {
    return Validator.TVEPISODESGROUPSGetDetails(id, language);
  }
}
export namespace TVseason {
  /********************
   * 1.Get the TV season details by id.
   * @param {number|string} tv_id
   * @param {number|string} season_number
   * @param {string} language (optional)
   * @param {string} append_to_response (optional)
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/tv-seasons/get-tv-season-details
   ********************/
  export function GetDetails(
    tv_id: number | string,
    season_number: number | string,
    language?: string,
    append_to_response?: string
  ) {
    return Validator.TVSEASONSGetDetails(
      tv_id,
      season_number,
      language,
      append_to_response
    );
  }
  /********************
   * 2.Returns all of the user ratings for the season's episodes.
   * @param {number|string} tv_id
   * @param {number|string} season_number
   * @param {string} session_id (optional)
   * @param {string} guest_session_id (optional)
   * @param {string} language (optional)
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/tv-seasons/get-tv-season-details
   ********************/
  export function GetAccountStates(
    tv_id: number | string,
    season_number: number | string,
    session_id?: string,
    guest_session_id?: string,
    language?: string
  ) {
    return Validator.TVSEASONSGetAccountStates(
      tv_id,
      season_number,
      session_id,
      guest_session_id,
      language
    );
  }
  /********************
   * 3.Get the aggregate credits for TV season.
   * @param {number|string} tv_id
   * @param {number|string} season_number
   * @param {string} language (optional)
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/tv-seasons/get-tv-season-aggregate-credits
   ********************/
  export function GetAggregateCredits(
    tv_id: number | string,
    season_number: number | string,
    language?: string
  ) {
    return Validator.TVSEASONSGetAggregateCredits(
      tv_id,
      season_number,
      language
    );
  }
  /********************
   * 4.GET /tv/{tv_id}/season/{season_id}/changes
   * @description Get the changes for a TV season. By default only the last 24 hours are returned.
   * @param {number|string} season_id
   * @param {string} start_date (optional)
   * @param {string} end_date (optional)
   * @param {number} page (optional)
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/tv-seasons/get-tv-season-changes
   ********************/
  export function GetChanges(
    season_id: number | string,
    start_date?: string,
    end_date?: string,
    page?: number
  ) {
    return Validator.TVSEASONSGetChanges(season_id, start_date, end_date, page);
  }
  /********************
   * 5.Get the credits for TV season.
   * @param {number|string} tv_id
   * @param {number|string} season_id
   * @param {string} language (optional)
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/tv-seasons/get-tv-season-credits
   ********************/
  export function GetCredits(
    tv_id: number | string,
    season_number: number | string,
    language?: string
  ) {
    return Validator.TVSEASONSGetCredits(tv_id, season_number, language);
  }
  /********************
   * 6.Get the TV season details by id.
   * @param {number|string} tv_id
   * @param {number|string} season_number
   * @param {string} language (optional)
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/tv-seasons/get-tv-season-details
   ********************/
  export function GetExternalIDs(
    tv_id: number | string,
    season_number: number | string,
    language?: string
  ) {
    return Validator.TVSEASONSGetExternalIDs(tv_id, season_number, language);
  }
  /********************
   * 7.Get the images that belong to a TV season.
   * @param {number|string} tv_id
   * @param {number|string} season_number
   * @param {string} language (optional)
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/tv-seasons/get-tv-season-images
   ********************/
  export function GetImages(
    tv_id: number | string,
    season_number: number | string,
    language?: string
  ) {
    return Validator.TVSEASONSGetImages(tv_id, season_number, language);
  }
  /********************
   * 8.Get the credits for TV season.
   * @param {number|string} tv_id
   * @param {number|string} season_number
   * @param {string} language (optional)
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/tv-seasons/get-tv-season-translations
   ********************/
  export function GetTranslations(
    tv_id: number | string,
    season_number: number | string,
    language?: string
  ) {
    return Validator.TVSEASONSGetTranslations(tv_id, season_number, language);
  }
  /********************
   * 9.Get the videos that have been added to a TV season.
   * @param {number|string} tv_id
   * @param {number|string} season_number
   * @param {string} language (optional)
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/tv-seasons/get-tv-season-videos
   ********************/
  export function GetVideos(
    tv_id: number | string,
    season_number: number | string,
    language?: string
  ) {
    return Validator.TVSEASONSGetVideos(tv_id, season_number, language);
  }
}
export namespace Watchproviders {
  /********************
   * 1.Returns a list of all of the countries we have watch provider (OTT/streaming) data for.
   * @param {string} language(optional)
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/watch-providers/get-available-regions
   ********************/
  export function GetAvailableRegions(language?: string) {
    return Validator.WATCHPROVIDERSGetAvailableRegions(language);
  }
  /********************
   * 2.Returns a list of the watch provider (OTT/streaming) data we have available for movies.
   * You can specify a watch_region param if you want to further filter the list by country.
   * @param {string} language(optional)
   * @param {string} watch_region(optional)
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/watch-providers/get-movie-providers
   ********************/
  export function GetMovieProviders(language?: string, watch_region?: string) {
    return Validator.WATCHPROVIDERSGetMovieProviders(language, watch_region);
  }
  /********************
   * 3.Returns a list of the watch provider (OTT/streaming) data we have available for TV series.
   * You can specify a watch_region param if you want to further filter the list by country.
   * @param {string} language(optional)
   * @param {string} watch_region(optional)
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/watch-providers/get-tv-providers
   ********************/
  export function GetTVProviders(language?: string, watch_region?: string) {
    return Validator.WATCHPROVIDERSGetTVProviders(language, watch_region);
  }
}
