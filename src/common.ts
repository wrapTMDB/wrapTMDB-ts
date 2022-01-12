/*
 * The MIT License (MIT)
 *
 * Copyright (c) kwangsing3
 *
 * https://github.com/wrapTMDB/wrapTMDB-ts
 *
 */
export const header = {
  'User-Agent': '',
  Referer: '',
};

const Common = {
  TOKEN: '',
  BASE_URL: 'https://api.themoviedb.org/3/',
  HEADER: header,
};

export const Route = {
  MOVIE: 'movie/',
  TV: 'tv/',
  ACCOUNT: 'account/',
  CERTIFICATION: 'certification/',
  AUTHENTICATION: 'Authentication/',
  COLLECTION: 'colleciton/',
  COMPANY: 'company/',
  CONFIGURATION: 'Configuration/',
  CREDIT: 'credit/',
  DISCOVER: 'discover/',
  FIND: 'find/',
  GENRE: 'genre/',
  GUESTSESSION: 'guest_session/',
  KEYWORD: 'keyword/',
  LIST: 'list/',
  NETWORK: 'network/',
  TRENDING: 'trending/',
  PEOPLE: 'person/',
  REVIEWS: 'reviews/',
  SEARCH: 'search/',
  EPISODEGROUPS: 'episode_group/',
  WATCHPROVIDERS: 'watch/providers/',
};
/********************
 * Set Token
 *********************/
export function SetToken(token: string) {
  Common.TOKEN = token;
}

/********************
 * Set RESTful request Header
 *********************/
export function SetHeader(input: any) {
  if (Object.prototype.hasOwnProperty.call(input, 'User-Agent'))
    Common.HEADER['User-Agent'] = input['User-Agent'];
  if (Object.prototype.hasOwnProperty.call(input, 'Referer'))
    Common.HEADER['Referer'] = input['Referer'];
}
/********************
 * Debug function to get TOKEN
 * @returns {string} Common.TOKEN
 ********************/
export function GetToken(): string {
  return Common.TOKEN;
}
/********************
 * Get Api hostname
 * @returns {string} TMDB API hostname
 ********************/
export function GetURL(): string {
  return Common.BASE_URL;
}
/********************
 * Debug function to get TOKEN
 * @returns {string} Common.TOKEN
 ********************/
export function GetHeader(): any {
  return Common.HEADER;
}

/*
  -axios-

  axios.get(url, config)
  axios.delete(url, config)
  axios.head(url, config)
  axios.post(url, data, config)
  axios.put(url, data, config)
  axios.patch(url, data, config)

*/
