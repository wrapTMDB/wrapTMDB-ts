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

export class Authentication {
  /********************
   * 1.GET /authentication/guest_session/new
   * @description This method will let you create a new guest session.
   * Guest sessions are a type of session that will let a user rate movies and TV shows
   * but not require them to have a TMDB user account.
   * @returns {any} JSON
   * @doc https://developers.themoviedb.org/3/authentication/create-guest-session
   ********************/
  async GetCreateGuestSession(): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    const targetURL: string =
      baseURL +
      c_module.Route.AUTHENTICATION +
      'guest_session/new' +
      `?api_key=${token}`;
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
  /********************
   * 2.GET /authentication/token/new
   * @description Create a temporary request token that can be used to validate a TMDB user login.
   * @returns {number} JSON
   * @doc https://developers.themoviedb.org/3/authentication/create-request-token
   ********************/
  async GetCreateRequestToken(): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    const targetURL: string =
      baseURL +
      c_module.Route.AUTHENTICATION +
      'token/new' +
      `?api_key=${token}`;
    const data: any = await axios.get(targetURL, header);
    return data.data;
  }
  /********************
   * 3.POST /authentication/session/new
   * @description You can use this method to create a fully valid session ID once a user has validated the request token.
   * @param {any} query
   * @returns {number} JSON
   * @example query{
   *     "request_token": "6bc047b88f669d1fb86574f06381005d93d3517a"
   * }
   * @doc https://developers.themoviedb.org/3/authentication/create-session
   ********************/
  async PostCreateSession(query?: any): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    const targetURL: string =
      baseURL +
      c_module.Route.AUTHENTICATION +
      'session/new' +
      `?api_key=${token}`;
    if (query === {} || query === undefined) {
      query = {
        request_token: token,
      };
    }
    const data: any = await axios.post(targetURL, query, header);
    return data.data;
  }
  /********************
   * 4.POST /authentication/token/validate_with_login
   * @description This method allows an application to validate a request token by entering a username and password.
   * @param {any} query
   * @returns {number} JSON
   * @example query{
   *    "username": "johnny_appleseed",
   *    "password": "test123",
   *    "request_token": "1531f1a558c8357ce8990cf887ff196e8f5402ec"
   * }
   * @doc hhttps://developers.themoviedb.org/3/authentication/validate-request-token
   ********************/
  async PostCreateSessionWithLogin(query: any): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    const targetURL: string =
      baseURL +
      c_module.Route.AUTHENTICATION +
      'token/validate_with_login' +
      `?api_key=${token}`;
    const data: any = await axios.post(targetURL, query, header);
    return data.data;
  }
  /********************
   * 5.POST /authentication/session/convert/4
   * @description Use this method to create a v3 session ID if you already have a valid v4 access token.
   * The v4 token needs to be authenticated by the user.
   * Your standard "read token" will not validate to create a session ID.
   * @param {any} query
   * @returns {number} JSON
   * @doc https://developers.themoviedb.org/3/authentication/create-session-from-v4-access-token
   ********************/
  /********************
   * 6.DELETE /authentication/session
   * @description If you would like to delete (or "logout") from a session, call this method with a valid session ID.
   * @param {any} query
   * @returns {number} JSON
   * @example query{
   *    "session_id": "2629f70fb498edc263a0adb99118ac41f0053e8c"
   * }
   * @doc https://developers.themoviedb.org/3/account/get-account-details
   ********************/
  async DeleteSession(query: any): Promise<any> {
    const token = c_module.GetToken();
    const header = c_module.GetHeader();
    const targetURL: string =
      baseURL + c_module.Route.AUTHENTICATION + 'session' + `?api_key=${token}`;
    const data: any = await axios.delete(targetURL, query, header);
    return data.data;
  }
}
/*
1.GET Create Guest Session
2.GET Create Request Token
3.POST Create Session
4.POST Create Session With Login
5.POST Create Session (from v4 access token)
6.DELETE Delete Session
*/
