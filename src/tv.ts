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

export class TVInfos {
  /********************
   * REST Get Series/TV infomation
   * @param {number} tv_id  Series/TV ID in TMDB
   * @param {string} language(optional)  Language to request
   * @returns {number} JSON
   ********************/
  async GetDetails(tv_id: string): Promise<any>;
  async GetDetails(tv_id: string, language: string): Promise<any>;
  async GetDetails(tv_id: string, language?: string): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL + c_module.Route.TV + '/' + tv_id + `?api_key=${token}`;

    if (language !== undefined) {
      targetURL += `&language=${language}`;
    }
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
  /********************
   * 2.GET /tv/{tv_id}/account_states
   * @description Grab the following account states for a session:
      ‧TV show rating
      ‧If it belongs to your watchlist
      ‧If it belongs to your favourite list
   * @param {number|string} tv_id  TV ID in TMDB
   * @param {string} session_id
   * @param {string} guest_session_id (optional)
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/tv/get-tv-account-states
   ********************/
  async GetAccountStates(tv_id: string, session_id: string): Promise<any>;
  async GetAccountStates(
    tv_id: string,
    session_id: string,
    guest_session_id: string
  ): Promise<any>;
  async GetAccountStates(
    tv_id: string,
    session_id: string,
    guest_session_id?: string
  ): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL +
      c_module.Route.TV +
      tv_id +
      '/account_states' +
      `?api_key=${token}`;
    if (guest_session_id !== '' || guest_session_id !== undefined)
      targetURL += `&guest_session_id=${session_id}`;
    if (session_id !== '' || session_id !== undefined)
      targetURL += `&session_id=${session_id}`;
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
  /********************
   * 3.GET /tv/{tv_id}/aggregate_credits
   * @description Get the aggregate credits (cast and crew) that have been added to a TV show.
   * This call differs from the main credits call in that it does not return the newest season but rather,
   * is a view of all the entire cast & crew for all episodes belonging to a TV show.
   * @param {number|string} tv_id  TV ID in TMDB
   * @param {string} language
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/tv/get-tv-aggregate-credits
   ********************/
  async GetAggregate_credits(tv_id: string): Promise<any>;
  async GetAggregate_credits(tv_id: string, language?: string): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL +
      c_module.Route.TV +
      tv_id +
      '/aggregate_credits' +
      `?api_key=${token}`;
    if (language !== '' || language !== undefined)
      targetURL += `&language=${language}`;
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
  /********************
   * 4.GET /tv/{tv_id}/alternative_titles
   * @description Returns all of the alternative titles for a TV show.
   * @param {number|string} tv_id  TV ID in TMDB
   * @param {string} language
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/tv/get-tv-alternative-titles
   ********************/
  async GetAlternativetitles(tv_id: string): Promise<any>;
  async GetAlternativetitles(tv_id: string, country?: string): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL +
      c_module.Route.TV +
      tv_id +
      '/alternative_titles' +
      `?api_key=${token}`;
    if (country !== '' || country !== undefined)
      targetURL += `&country=${country}`;
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
  /********************
   * 5.GET /tv/{tv_id}/changes
   * @description Get the changes for a movie. By default only the last 24 hours are returned.
   * You can query up to 14 days in a single query by using the start_date and end_date query parameters.
   * @param {number|string} tv_id  TV ID in TMDB
   * @param {number|string} start_date (optional)
   * @param {number|string} end_date (optional)
   * @param {number} page (optional)
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/tv/get-tv-changes
   ********************/
  async GetChanges(tv_id: string): Promise<any>;
  async GetChanges(
    tv_id: string,
    start_date: string,
    end_date: string
  ): Promise<any>;
  async GetChanges(
    tv_id: string,
    start_date?: string,
    end_date?: string,
    page?: number
  ): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL + c_module.Route.TV + tv_id + '/changes' + `?api_key=${token}`;
    if (start_date !== '' || start_date !== undefined)
      targetURL += `&start_date=${start_date}`;
    if (end_date !== '' || end_date !== undefined)
      targetURL += `&end_date=${end_date}`;
    if (page !== undefined) {
      targetURL += `&page=${page}`;
    }
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
  /********************
   * 6.GET /tv/{tv_id}/content_ratings
   * @description Get the list of content ratings (certifications) that have been added to a TV show.
   * @param {number|string} tv_id  TV ID in TMDB
   * @param {string} language(optional)  Language to request
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/tv/get-tv-content-ratings
   ********************/
  async GetContentRatings(tv_id: string): Promise<any>;
  async GetContentRatings(tv_id: string, language?: string): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL +
      c_module.Route.TV +
      tv_id +
      '/content_ratings' +
      `?api_key=${token}`;
    if (language !== undefined) {
      targetURL += `&language=${language}`;
    }
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
  /********************
   * 7.GET /tv/{tv_id}/credits
   * @description Get the cast and crew for a movie.
   * @param {number|string} tv_id  TV ID in TMDB
   * @param {string} language(optional)  Language to request
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/movies/get-movie-changes
   ********************/
  async GetCredits(tv_id: string): Promise<any>;
  async GetCredits(tv_id: string, language?: string): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL + c_module.Route.TV + tv_id + '/credits' + `?api_key=${token}`;
    if (language !== undefined) {
      targetURL += `&language=${language}`;
    }
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }

  /********************
   * 8.GET /tv/{tv_id}/episode_groups
   * @description Get all of the episode groups that have been created for a TV show.
   * With a group ID you can call the GetTVEpisodeGroup method.
   * @param {number|string} tv_id  TV ID in TMDB
   * @param {string} language(optional)  Language to request
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/tv/get-tv-episode-groups
   ********************/
  async GetEpisodeGroup(tv_id: string): Promise<any>;
  async GetEpisodeGroup(tv_id: string, language?: string): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL +
      c_module.Route.TV +
      tv_id +
      '/episode_groups' +
      `?api_key=${token}`;
    if (language !== undefined) {
      targetURL += `&language=${language}`;
    }
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
  /********************
   * 9.GET /tv/{tv_id}/external_ids
   * @description Get the external ids for a TV show. We currently support the following external sources.
   * @param {number|string} tv_id  tv ID in TMDB
   * @param {string} language(optional)  Language to request
   * @returns JSON
   * @doc https://developers.themoviedb.org/3/tv/get-tv-external-ids
   ********************/
  async GetExternalIDs(tv_id: string): Promise<any>;
  async GetExternalIDs(tv_id: string, language?: string): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL +
      c_module.Route.TV +
      tv_id +
      '/external_ids' +
      `?api_key=${token}`;
    if (language !== undefined) {
      targetURL += `&language=${language}`;
    }
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }

  /********************
   * 10.GET /tv/{tv_id}/images
   * @description Get the images that belong to a TV show.
   * @param {number|string} tv_id  tv ID in TMDB
   * @param {string} language (optional)
   * @doc https://developers.themoviedb.org/3/tv/get-tv-images
   ********************/
  async GetImage(tv_id: string): Promise<any>;
  async GetImage(tv_id: string, language?: string): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL + c_module.Route.TV + tv_id + '/images' + `?api_key=${token}`;
    if (language !== undefined) {
      targetURL += `&language=${language}`;
    }

    const data: any = await axios.get(targetURL, header);
    return data.data;
  }

  /********************
   * 11.GET /tv/{tv_id}/keywords
   * @description Get the keywords that have been added to a TV show.
   * @param {number|string} tv_id  tv ID in TMDB
   * @doc https://developers.themoviedb.org/3/tv/get-tv-keywords
   ********************/
  async GetKeywords(tv_id: string): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    const targetURL: string =
      baseURL + c_module.Route.TV + tv_id + '/keywords' + `?api_key=${token}`;
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }

  /********************
   * 12.GET /tv/{tv_id}/recommendations
   * @description Get the list of TV show recommendations for this item.
   * @param {number|string} tv_id  tv ID in TMDB
   * @param {string} language (optional)
   * @param {number} page (optional)
   * @doc https://developers.themoviedb.org/3/tv/get-tv-recommendations
   ********************/
  async GetRecommendations(tv_id: string): Promise<any>;
  async GetRecommendations(tv_id: string, language: string): Promise<any>;
  async GetRecommendations(
    tv_id: string,
    language?: string,
    page?: number
  ): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL +
      c_module.Route.TV +
      tv_id +
      '/recommendations' +
      `?api_key=${token}`;
    if (language !== undefined) {
      targetURL += `&language=${language}`;
    }
    if (page !== undefined) {
      targetURL += `&page=${page}`;
    }
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }

  /********************
   *13.GET /tv/{tv_id}/reviews
   * @description Get the reviews for a TV show.
   * @param {number|string} tv_id  tv ID in TMDB
   * @param {string} language(optional)  Language to request
   * @param {number} page (optional)
   * @doc https://developers.themoviedb.org/3/tv/get-tv-reviews
   ********************/
  async GetReviews(tv_id: string): Promise<any>;
  async GetReviews(tv_id: string, language: string): Promise<any>;
  async GetReviews(
    tv_id: string,
    language?: string,
    page?: number
  ): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL + c_module.Route.TV + tv_id + '/reviews' + `?api_key=${token}`;
    if (language !== undefined) {
      targetURL += `&language=${language}`;
    }
    if (page !== undefined) {
      targetURL += `&page=${page}`;
    }
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
  /********************
   *14.GET /tv/{tv_id}/screened_theatrically
   * @description Get a list of seasons or episodes that have been screened in a film festival or theatre.
   * @param {number|string} tv_id  tv ID in TMDB
   * @doc https://developers.themoviedb.org/3/tv/get-screened-theatrically
   ********************/
  async GetScreenedTheatrically(tv_id: string): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    const targetURL: string =
      baseURL +
      c_module.Route.TV +
      tv_id +
      '/screened_theatrically' +
      `?api_key=${token}`;

    const data: any = await axios.get(targetURL, header);
    return data.data;
  }

  /********************
   *15.GET /tv/{tv_id}/similar
   * @description Get a list of similar TV shows. These items are assembled by looking at keywords and genres.
   * @param {number|string} tv_id  tv ID in TMDB
   * @param {string} language(optional)  Language to request
   * @param {number} page (optional)
   * @doc https://developers.themoviedb.org/3/tv/get-similar-tv-shows
   ********************/
  async GetSimilarTVShows(tv_id: string): Promise<any>;
  async GetSimilarTVShows(tv_id: string, language: string): Promise<any>;
  async GetSimilarTVShows(
    tv_id: string,
    language?: string,
    page?: number
  ): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL + c_module.Route.TV + tv_id + '/similar' + `?api_key=${token}`;
    if (language !== undefined) {
      targetURL += `&language=${language}`;
    }
    if (page !== undefined) {
      targetURL += `&page=${page}`;
    }
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
  /********************
   *16.GET /tv/{tv_id}/translations
   * @description Get a list of the translations that exist for a TV show.
   * @param {number|string} tv_id  tv ID in TMDB
   * @doc https://developers.themoviedb.org/3/movies/get-movie-translations
   ********************/
  async GetTranslations(tv_id: string): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    const targetURL: string =
      baseURL +
      c_module.Route.TV +
      tv_id +
      '/translations' +
      `?api_key=${token}`;
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
  /********************
   *17.GET /tv/{tv_id}/videos
   * @description Get the videos that have been added to a TV show.
   * @param {number|string} tv_id  tv ID in TMDB
   * @param {string} language(optional)  Language to request
   * @doc https://developers.themoviedb.org/3/tv/get-tv-videos
   ********************/
  async GetVideos(tv_id: string): Promise<any>;
  async GetVideos(tv_id: string, language?: string): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL + c_module.Route.TV + tv_id + '/videos' + `?api_key=${token}`;
    if (language !== undefined) {
      targetURL += `&language=${language}`;
    }
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }

  /********************
    *18.GET /tv/{tv_id}/watch/providers
    * @description Powered by JustWatch, you can query this method to get a list of the availabilities per country by provider.
     This is not going to return full deep links, but rather, it's just enough information to display what's available where.
     You can link to the provided TMDB URL to help support TMDB and provide the actual deep links to the content.
    * @param {number|string} tv_id  tv ID in TMDB
    * @doc https://developers.themoviedb.org/3/movies/get-movie-watch-providers
    ********************/
  async GetWatchProviders(tv_id: string): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    const targetURL: string =
      baseURL +
      c_module.Route.TV +
      tv_id +
      '/watch/providers' +
      `?api_key=${token}`;
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
  /********************
   *19.POST /tv/{tv_id}/rating
   * @description Rate a TV show.
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
  async PostRateTVShow(tv_id: string, query: any): Promise<any>;
  async PostRateTVShow(
    tv_id: string,
    query: any,
    session_id?: string,
    guest_session_id?: string
  ): Promise<any> {
    const token = c_module.GetToken();
    let targetURL: string =
      baseURL + c_module.Route.TV + tv_id + '/rating' + `?api_key=${token}`;
    if (guest_session_id !== '' || guest_session_id !== undefined)
      targetURL += `&guest_session_id=${session_id}`;
    if (session_id !== '' || session_id !== undefined)
      targetURL += `&session_id=${session_id}`;
    const header = {
      api_key: token,
    };

    const data: any = await axios.post(targetURL, query, header);
    return data.data;
  }
  /********************
   * 20.DELETE /tv/{tv_id}/rating
   * @description Remove your rating for a TV show.
   * A valid session or guest session ID is required
   * @param {number|string} tv_id  tv ID in TMDB
   * @param {string} guest_session_id (optional)
   * @param {string} session_id (optional)
   * @doc https://developers.themoviedb.org/3/tv/delete-tv-show-rating
   ********************/
  async DeleteRating(tv_id: string, session_id: string): Promise<any>;
  async DeleteRating(
    tv_id: string,
    session_id?: string,
    guest_session_id?: string
  ): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    const baseURL = c_module.GetURL();
    let targetURL: string =
      baseURL + c_module.Route.TV + tv_id + '/rating' + `?api_key=${token}`;
    if (guest_session_id !== '' || guest_session_id !== undefined)
      targetURL += `&guest_session_id=${session_id}`;
    if (session_id !== '' || session_id !== undefined)
      targetURL += `&session_id=${session_id}`;
    await axios.delete(targetURL, header);
    /*no respone*/
  }
  /********************
   * 21.GET /tv/latest
   * @description Get the most newly created TV show. This is a live response and will continuously change.
   * @param {string} language(optional)  Language to request
   * @doc https://developers.themoviedb.org/3/tv/get-latest-tv
   ********************/
  async GetLatest(language?: string): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL + c_module.Route.TV + '/latest' + `?api_key=${token}`;
    if (language !== undefined) {
      targetURL += `&language=${language}`;
    }
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
  /********************
   * 22.GET /tv/airing_today
   * @description Get a list of TV shows that are airing today. This query is purely day based as we do not currently support airing times.
   * You can specify a timezone to offset the day calculation.
   * Without a specified timezone, this query defaults to EST (Eastern Time UTC-05:00).
   * @param {string} language(optional)  Language to request
   * @param {number} page(optional)
   * @doc https://developers.themoviedb.org/3/tv/get-tv-airing-today
   ********************/
  async GetTVAiringToday(): Promise<any>;
  async GetTVAiringToday(language: string): Promise<any>;
  async GetTVAiringToday(language?: string, page?: number): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL + c_module.Route.TV + '/airing_today' + `?api_key=${token}`;
    if (language !== undefined) {
      targetURL += `&language=${language}`;
    }
    if (page !== undefined) {
      targetURL += `&page=${page}`;
    }
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
  /********************
   * 23.GET /tv/on_the_air
   * @description Get a list of shows that are currently on the air.
   * This query looks for any TV show that has an episode with an air date in the next 7 days.
   * @param {string} language(optional)  Language to request
   * @param {number} page(optional)
   * @doc https://developers.themoviedb.org/3/tv/get-tv-on-the-air
   ********************/
  async GetOnTheAir(): Promise<any>;
  async GetOnTheAir(language: string): Promise<any>;
  async GetOnTheAir(language?: string, page?: number): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL + c_module.Route.TV + '/on_the_air' + `?api_key=${token}`;
    if (language !== undefined) {
      targetURL += `&language=${language}`;
    }
    if (page !== undefined) {
      targetURL += `&page=${page}`;
    }
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
  /********************
   * 24.GET /tv/popular
   * @description Get a list of the current popular TV shows on TMDB. This list updates daily.
   * @param {string} language(optional)  Language to request
   * @param {number} page(optional)
   * @doc https://developers.themoviedb.org/3/tv/get-popular-tv-shows
   ********************/
  async GetPopular(): Promise<any>;
  async GetPopular(language: string): Promise<any>;
  async GetPopular(language?: string, page?: number): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL + c_module.Route.TV + '/popular' + `?api_key=${token}`;
    if (language !== undefined) {
      targetURL += `&language=${language}`;
    }
    if (page !== undefined) {
      targetURL += `&page=${page}`;
    }

    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
  /********************
   * 25.GET /tv/top_rated
   * @description Get a list of the top rated TV shows on TMDB.
   * @param {string} language(optional)  Language to request
   * @param {number} page(optional)
   * @doc https://developers.themoviedb.org/3/tv/get-top-rated-tv
   ********************/
  async GetTopRated(): Promise<any>;
  async GetTopRated(language: string): Promise<any>;
  async GetTopRated(language?: string, page?: number): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    let targetURL: string =
      baseURL + c_module.Route.TV + '/top_rated' + `?api_key=${token}`;
    if (language !== undefined) {
      targetURL += `&language=${language}`;
    }
    if (page !== undefined) {
      targetURL += `&page=${page}`;
    }
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
}

/*
TV
1.GET Get Details
2.GET Get Account States
3.GET Get Aggregate Credits
4.GET Get Alternative Titles
5.GET Get Changes
6.GET Get Content Ratings
7.GET Get Credits
8.GET Get Episode Groups
9.GET Get External IDs
10.GET Get Images
11.GET Get Keywords
12.GET Get Recommendations
13.GET Get Reviews
14.GET Get Screened Theatrically
15.GET Get Similar TV Shows
16.GET Get Translations
17.GET Get Videos
18.GET Get Watch Providers
19.POST Rate TV Show
20.DELETE Delete Rating
21.GET Get Latest
22.GET Get TV Airing Today
23.GET Get TV On The Air
24.GET Get Popular
25.GET Get Top Rated
*/
