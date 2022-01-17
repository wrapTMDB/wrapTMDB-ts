//#region
import * as movie_module from '../src/movie';
import * as tv_module from '../src/tv';
import * as ac_module from '../src/account';
import * as c_module from '../src/common';
import * as authentication_module from '../src/authentication';
import * as certifications_module from '../src/certifications';
import * as changes_module from '../src/changes';
import * as collections_module from '../src/collections';
import * as companies_module from '../src/companies';
import * as configuration_module from '../src/configuration';
import * as credits_module from '../src/credits';
import * as discover_module from '../src/discover';
import * as find_module from '../src/find';
import * as genres_module from '../src/genres';
import * as guestsessions_module from '../src/guestsessions';
import * as keywords_module from '../src/keywords';
import * as lists_module from '../src/lists';
import * as networks_module from '../src/networks';
import * as people_module from '../src/people';
import * as reviews_module from '../src/reviews';
import * as search_module from '../src/search';
import * as trending_module from '../src/trending';
import * as tvepisodesgroups_module from '../src/tvepisodesgroups';
import * as tvepisodes_module from '../src/tvepisodes';
import * as tvseasons_module from '../src/tvseasons';
import * as watchproviders_module from '../src/watchproviders';
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
const URL = c_module.GetURL();
const api_key = 'UnitTest_api_key';
c_module.SetToken(api_key);

/***
  @description To fetch and get function Params
  @returns string[]
  ***/
function GetParams(func: Function) {
  let str = func.toString();
  str = str
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .replace(/\/\/(.)*/g, '')
    .replace(/{[\s\S]*}/, '')
    .replace(/=>/g, '')
    .trim();
  const start = str.indexOf('(') + 1;
  const end = str.length - 1;
  const result = str.substring(start, end).split(', ');
  const params: string[] = [];
  result.forEach(element => {
    element = element.replace(/=[\s\S]*/g, '').trim();
    if (element.length > 0) {
      params.push(element);
    }
  });
  return params;
}
/***
  @description Combine url and paramters
  @returns string
  ***/
function GetReturnString(basic: string, parms: string[], value: any): string {
  let result = `?api_key=${api_key}`;

  for (let i = 0; i < parms.length; i++) {
    if (value[parms[i]] === undefined) {
      continue;
    }
    /* 如果有{}標籤 則使用替代方法 */
    if (basic.includes(value[parms[i]])) {
      continue;
    }
    result += '&' + parms[i] + '=' + value[parms[i]];
  }
  return basic + result;
}
//#endregion

describe('Get URLs that funciton request:', () => {
  test('Movies.GetDetails', async () => {
    const parms = GetParams(movie_entry.GetDetails);
    const cases = [
      {
        movie_id: 624860,
      },
      {
        movie_id: 624860,
        language: 'zh-TW',
      },
      {
        movie_id: 62486065463521864631233843384,
        language: 'asdasgsfgerersfg',
      },
    ];

    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.MOVIE + element.movie_id,
        parms,
        element
      );
      expect(
        await movie_entry.GetDetails(element.movie_id, element.language)
      ).toBe(answer);
    });
  });

  test('movie.GetAccountStates', async () => {
    const parems = GetParams(movie_entry.GetAccountStates);
    const cases = [
      {
        movie_id: 624860,
        session_id: 'asdas',
      },
      {
        movie_id: 62486065463521864631233843384,
        session_id: 'gsfgerersfg',
        guest_session_id: 'asdawduhanlfslilerk',
      },
      {
        movie_id: 62486065463521864631233843384,
        session_id: 'dasgsfgerersfg',
        guest_session_id: undefined,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.MOVIE + element.movie_id + '/account_states',
        parems,
        element
      );
      expect(
        await movie_entry.GetAccountStates(
          element.movie_id,
          element.session_id,
          element.guest_session_id
        )
      ).toBe(answer);
    });
  });
});

// test('movie.GetAlternativetitles', () => {
//   const parems = GetParams(movie_entry.GetAlternativetitles);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await movie_entry.GetAlternativetitles()).toBe(answer);
//   });
// });
// test('movie.GetChanges', () => {
//   const parems = GetParams(movie_entry.GetChanges);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await movie_entry.GetChanges()).toBe(answer);
//   });
// });
// test('movie.GetCredits', () => {
//   const parems = GetParams(movie_entry.GetCredits);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await movie_entry.GetCredits()).toBe(answer);
//   });
// });
// test('movie.GetExternalIDs', () => {
//   const parems = GetParams(movie_entry.GetExternalIDs);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await movie_entry.GetExternalIDs()).toBe(answer);
//   });
// });
// test('movie.GetImage', () => {
//   const parems = GetParams(movie_entry.GetImage);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await movie_entry.GetImage()).toBe(answer);
//   });
// });
// test('movie.GetKeywords', () => {
//   const parems = GetParams(movie_entry.GetKeywords);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await movie_entry.GetKeywords()).toBe(answer);
//   });
// });
// test('movie.GetLists', () => {
//   const parems = GetParams(movie_entry.GetLists);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await movie_entry.GetLists()).toBe(answer);
//   });
// });
// test('movie.GetRecommendations', () => {
//   const parems = GetParams(movie_entry.GetRecommendations);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await movie_entry.GetRecommendations()).toBe(answer);
//   });
// });
// test('movie.GetReleaseDates', () => {
//   const parems = GetParams(movie_entry.GetReleaseDates);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await movie_entry.GetReleaseDates()).toBe(answer);
//   });
// });
// test('movie.GetReviews', () => {
//   const parems = GetParams(movie_entry.GetReviews);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await movie_entry.GetReviews()).toBe(answer);
//   });
// });
// test('movie.GetSimilar', () => {
//   const parems = GetParams(movie_entry.GetSimilar);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await movie_entry.GetSimilar()).toBe(answer);
//   });
// });
// test('movie.GetTranslations', () => {
//   const parems = GetParams(movie_entry.GetTranslations);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await movie_entry.GetTranslations()).toBe(answer);
//   });
// });
// test('movie.GetVideos', () => {
//   const parems = GetParams(movie_entry.GetVideos);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await movie_entry.GetVideos()).toBe(answer);
//   });
// });
// test('movie.GetWatchProviders', () => {
//   const parems = GetParams(movie_entry.GetWatchProviders);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await movie_entry.GetWatchProviders()).toBe(answer);
//   });
// });
// test('movie.PostRateMovie', () => {
//   const parems = GetParams(movie_entry.PostRateMovie);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await movie_entry.PostRateMovie()).toBe(answer);
//   });
// });
// test('movie.DeleteRating', () => {
//   const parems = GetParams(movie_entry.DeleteRating);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await movie_entry.DeleteRating()).toBe(answer);
//   });
// });
// test('movie.GetLatest', () => {
//   const parems = GetParams(movie_entry.GetLatest);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await movie_entry.GetLatest()).toBe(answer);
//   });
// });
// test('movie.GetNowPlaying', () => {
//   const parems = GetParams(movie_entry.GetNowPlaying);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await movie_entry.GetNowPlaying()).toBe(answer);
//   });
// });
// test('movie.GetPopular', () => {
//   const parems = GetParams(movie_entry.GetPopular);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await movie_entry.GetPopular()).toBe(answer);
//   });
// });
// test('movie.GetTopRated', () => {
//   const parems = GetParams(movie_entry.GetTopRated);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await movie_entry.GetTopRated()).toBe(answer);
//   });
// });
// test('movie.GetUpcoming', () => {
//   const parems = GetParams(movie_entry.GetUpcoming);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await movie_entry.GetUpcoming()).toBe(answer);
//   });
// });
// test('tv.GetDetails', () => {
//   const parems = GetParams(tv_entry.GetDetails);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await tv_entry.GetDetails()).toBe(answer);
//   });
// });
// test('tv.GetAccountStates', () => {
//   const parems = GetParams(tv_entry.GetAccountStates);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await tv_entry.GetAccountStates()).toBe(answer);
//   });
// });
// test('tv.GetAggregateCredits', () => {
//   const parems = GetParams(tv_entry.GetAggregateCredits);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await tv_entry.GetAggregateCredits()).toBe(answer);
//   });
// });
// test('tv.GetAlternativetitles', () => {
//   const parems = GetParams(tv_entry.GetAlternativetitles);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await tv_entry.GetAlternativetitles()).toBe(answer);
//   });
// });
// test('tv.GetChanges', () => {
//   const parems = GetParams(tv_entry.GetChanges);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await tv_entry.GetChanges()).toBe(answer);
//   });
// });
// test('tv.GetContentRatings', () => {
//   const parems = GetParams(tv_entry.GetContentRatings);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await tv_entry.GetContentRatings()).toBe(answer);
//   });
// });
// test('tv.GetCredits', () => {
//   const parems = GetParams(tv_entry.GetCredits);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await tv_entry.GetCredits()).toBe(answer);
//   });
// });
// test('tv.GetEpisodeGroup', () => {
//   const parems = GetParams(tv_entry.GetEpisodeGroup);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await tv_entry.GetEpisodeGroup()).toBe(answer);
//   });
// });
// test('tv.GetExternalIDs', () => {
//   const parems = GetParams(tv_entry.GetExternalIDs);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await tv_entry.GetExternalIDs()).toBe(answer);
//   });
// });
// test('tv.GetImages', () => {
//   const parems = GetParams(tv_entry.GetImages);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await tv_entry.GetImages()).toBe(answer);
//   });
// });
// test('tv.GetKeywords', () => {
//   const parems = GetParams(tv_entry.GetKeywords);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await tv_entry.GetKeywords()).toBe(answer);
//   });
// });
// test('tv.GetRecommendations', () => {
//   const parems = GetParams(tv_entry.GetRecommendations);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await tv_entry.GetRecommendations()).toBe(answer);
//   });
// });
// test('tv.GetReviews', () => {
//   const parems = GetParams(tv_entry.GetReviews);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await tv_entry.GetReviews()).toBe(answer);
//   });
// });
// test('tv.GetScreenedTheatrically', () => {
//   const parems = GetParams(tv_entry.GetScreenedTheatrically);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await tv_entry.GetScreenedTheatrically()).toBe(answer);
//   });
// });
// test('tv.GetSimilarTVShows', () => {
//   const parems = GetParams(tv_entry.GetSimilarTVShows);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await tv_entry.GetSimilarTVShows()).toBe(answer);
//   });
// });
// test('tv.GetTranslations', () => {
//   const parems = GetParams(tv_entry.GetTranslations);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await tv_entry.GetTranslations()).toBe(answer);
//   });
// });
// test('tv.GetVideos', () => {
//   const parems = GetParams(tv_entry.GetVideos);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await tv_entry.GetVideos()).toBe(answer);
//   });
// });
// test('tv.GetWatchProviders', () => {
//   const parems = GetParams(tv_entry.GetWatchProviders);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await tv_entry.GetWatchProviders()).toBe(answer);
//   });
// });
// test('tv.PostRateTVShow', () => {
//   const parems = GetParams(tv_entry.PostRateTVShow);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await tv_entry.PostRateTVShow()).toBe(answer);
//   });
// });
// test('tv.DeleteRating', () => {
//   const parems = GetParams(tv_entry.DeleteRating);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await tv_entry.DeleteRating()).toBe(answer);
//   });
// });
// test('tv.GetLatest', () => {
//   const parems = GetParams(tv_entry.GetLatest);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await tv_entry.GetLatest()).toBe(answer);
//   });
// });
// test('tv.GetTVAiringToday', () => {
//   const parems = GetParams(tv_entry.GetTVAiringToday);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await tv_entry.GetTVAiringToday()).toBe(answer);
//   });
// });
// test('tv.GetTVOnTheAir', () => {
//   const parems = GetParams(tv_entry.GetTVOnTheAir);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await tv_entry.GetTVOnTheAir()).toBe(answer);
//   });
// });
// test('tv.GetPopular', () => {
//   const parems = GetParams(tv_entry.GetPopular);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await tv_entry.GetPopular()).toBe(answer);
//   });
// });
// test('tv.GetTopRated', () => {
//   const parems = GetParams(tv_entry.GetTopRated);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await tv_entry.GetTopRated()).toBe(answer);
//   });
// });
// test('account.GetDetails', () => {
//   const parems = GetParams(account_entry.GetDetails);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await account_entry.GetDetails()).toBe(answer);
//   });
// });
// test('account.GetCreatedLists', () => {
//   const parems = GetParams(account_entry.GetCreatedLists);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await account_entry.GetCreatedLists()).toBe(answer);
//   });
// });
// test('account.GetFavoriteMovies', () => {
//   const parems = GetParams(account_entry.GetFavoriteMovies);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await account_entry.GetFavoriteMovies()).toBe(answer);
//   });
// });
// test('account.GetFavoriteTVShows', () => {
//   const parems = GetParams(account_entry.GetFavoriteTVShows);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await account_entry.GetFavoriteTVShows()).toBe(answer);
//   });
// });
// test('account.PostMarkAsFavorite', () => {
//   const parems = GetParams(account_entry.PostMarkAsFavorite);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await account_entry.PostMarkAsFavorite()).toBe(answer);
//   });
// });
// test('account.GetRatedMovies', () => {
//   const parems = GetParams(account_entry.GetRatedMovies);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await account_entry.GetRatedMovies()).toBe(answer);
//   });
// });
// test('account.GetRatedTVShows', () => {
//   const parems = GetParams(account_entry.GetRatedTVShows);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await account_entry.GetRatedTVShows()).toBe(answer);
//   });
// });
// test('account.GetRatedTVEpisodes', () => {
//   const parems = GetParams(account_entry.GetRatedTVEpisodes);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await account_entry.GetRatedTVEpisodes()).toBe(answer);
//   });
// });
// test('account.GetMovieWatchlist', () => {
//   const parems = GetParams(account_entry.GetMovieWatchlist);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await account_entry.GetMovieWatchlist()).toBe(answer);
//   });
// });
// test('account.GetTVShowWatchlist', () => {
//   const parems = GetParams(account_entry.GetTVShowWatchlist);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await account_entry.GetTVShowWatchlist()).toBe(answer);
//   });
// });
// test('account.PostAddToWatchlist', () => {
//   const parems = GetParams(account_entry.PostAddToWatchlist);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await account_entry.PostAddToWatchlist()).toBe(answer);
//   });
// });
// test('authentication.GetCreateGuestSession', () => {
//   const parems = GetParams(authentication_entry.GetCreateGuestSession);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await authentication_entry.GetCreateGuestSession()).toBe(answer);
//   });
// });
// test('authentication.GetCreateRequestToken', () => {
//   const parems = GetParams(authentication_entry.GetCreateRequestToken);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await authentication_entry.GetCreateRequestToken()).toBe(answer);
//   });
// });
// test('authentication.PostCreateSession', () => {
//   const parems = GetParams(authentication_entry.PostCreateSession);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await authentication_entry.PostCreateSession()).toBe(answer);
//   });
// });
// test('authentication.PostCreateSessionWithLogin', () => {
//   const parems = GetParams(authentication_entry.PostCreateSessionWithLogin);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await authentication_entry.PostCreateSessionWithLogin()).toBe(
//       answer
//     );
//   });
// });
// test('authentication.DeleteDeleteSession', () => {
//   const parems = GetParams(authentication_entry.DeleteDeleteSession);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await authentication_entry.DeleteDeleteSession()).toBe(answer);
//   });
// });
// test('certifications.GetMovieCertifications', () => {
//   const parems = GetParams(certifications_entry.GetMovieCertifications);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await certifications_entry.GetMovieCertifications()).toBe(answer);
//   });
// });
// test('certifications.GetTVCertifications', () => {
//   const parems = GetParams(certifications_entry.GetTVCertifications);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await certifications_entry.GetTVCertifications()).toBe(answer);
//   });
// });
// test('changes.GetPersonChangesList', () => {
//   const parems = GetParams(changes_entry.GetPersonChangesList);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await changes_entry.GetPersonChangesList()).toBe(answer);
//   });
// });
// test('collections.GetDetails', () => {
//   const parems = GetParams(collections_entry.GetDetails);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await collections_entry.GetDetails()).toBe(answer);
//   });
// });
// test('collections.GetImages', () => {
//   const parems = GetParams(collections_entry.GetImages);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await collections_entry.GetImages()).toBe(answer);
//   });
// });
// test('collections.GetTranslations', () => {
//   const parems = GetParams(collections_entry.GetTranslations);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await collections_entry.GetTranslations()).toBe(answer);
//   });
// });
// test('companies.GetDetails', () => {
//   const parems = GetParams(companies_entry.GetDetails);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await companies_entry.GetDetails()).toBe(answer);
//   });
// });
// test('companies.GetAlternativeNames', () => {
//   const parems = GetParams(companies_entry.GetAlternativeNames);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await companies_entry.GetAlternativeNames()).toBe(answer);
//   });
// });
// test('companies.GetImages', () => {
//   const parems = GetParams(companies_entry.GetImages);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await companies_entry.GetImages()).toBe(answer);
//   });
// });
// test('configuration.GetAPIConfiguration', () => {
//   const parems = GetParams(configuration_entry.GetAPIConfiguration);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await configuration_entry.GetAPIConfiguration()).toBe(answer);
//   });
// });
// test('configuration.GetCountries', () => {
//   const parems = GetParams(configuration_entry.GetCountries);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await configuration_entry.GetCountries()).toBe(answer);
//   });
// });
// test('configuration.GetJobs', () => {
//   const parems = GetParams(configuration_entry.GetJobs);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await configuration_entry.GetJobs()).toBe(answer);
//   });
// });
// test('configuration.GetLanguages', () => {
//   const parems = GetParams(configuration_entry.GetLanguages);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await configuration_entry.GetLanguages()).toBe(answer);
//   });
// });
// test('configuration.GetPrimaryTranslations', () => {
//   const parems = GetParams(configuration_entry.GetPrimaryTranslations);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await configuration_entry.GetPrimaryTranslations()).toBe(answer);
//   });
// });
// test('configuration.GetTimezones', () => {
//   const parems = GetParams(configuration_entry.GetTimezones);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await configuration_entry.GetTimezones()).toBe(answer);
//   });
// });
// test('credits.GetDetails', () => {
//   const parems = GetParams(credits_entry.GetDetails);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await credits_entry.GetDetails()).toBe(answer);
//   });
// });
// test('discover.GetMovieDiscover', () => {
//   const parems = GetParams(discover_entry.GetMovieDiscover);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await discover_entry.GetMovieDiscover()).toBe(answer);
//   });
// });
// test('discover.GetTVDiscover', () => {
//   const parems = GetParams(discover_entry.GetTVDiscover);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await discover_entry.GetTVDiscover()).toBe(answer);
//   });
// });
// test('find.GetFindByID', () => {
//   const parems = GetParams(find_entry.GetFindByID);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await find_entry.GetFindByID()).toBe(answer);
//   });
// });
// test('genres.GetMovieList', () => {
//   const parems = GetParams(genres_entry.GetMovieList);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await genres_entry.GetMovieList()).toBe(answer);
//   });
// });
// test('genres.GetTVList', () => {
//   const parems = GetParams(genres_entry.GetTVList);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await genres_entry.GetTVList()).toBe(answer);
//   });
// });
// test('guestsessions.GetRatedMovies', () => {
//   const parems = GetParams(guestsessions_entry.GetRatedMovies);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await guestsessions_entry.GetRatedMovies()).toBe(answer);
//   });
// });
// test('guestsessions.GetRatedTVShows', () => {
//   const parems = GetParams(guestsessions_entry.GetRatedTVShows);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await guestsessions_entry.GetRatedTVShows()).toBe(answer);
//   });
// });
// test('guestsessions.GetRatedTVEpisodes', () => {
//   const parems = GetParams(guestsessions_entry.GetRatedTVEpisodes);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await guestsessions_entry.GetRatedTVEpisodes()).toBe(answer);
//   });
// });
// test('keywords.GetDetails', () => {
//   const parems = GetParams(keywords_entry.GetDetails);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await keywords_entry.GetDetails()).toBe(answer);
//   });
// });
// test('keywords.GetMovies', () => {
//   const parems = GetParams(keywords_entry.GetMovies);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await keywords_entry.GetMovies()).toBe(answer);
//   });
// });
// test('lists.GetDetails', () => {
//   const parems = GetParams(lists_entry.GetDetails);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await lists_entry.GetDetails()).toBe(answer);
//   });
// });
// test('lists.GetCheckItemStatus', () => {
//   const parems = GetParams(lists_entry.GetCheckItemStatus);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await lists_entry.GetCheckItemStatus()).toBe(answer);
//   });
// });
// test('lists.PostCreateList', () => {
//   const parems = GetParams(lists_entry.PostCreateList);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await lists_entry.PostCreateList()).toBe(answer);
//   });
// });
// test('lists.PostAddMovie', () => {
//   const parems = GetParams(lists_entry.PostAddMovie);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await lists_entry.PostAddMovie()).toBe(answer);
//   });
// });
// test('lists.PostRemoveMovie', () => {
//   const parems = GetParams(lists_entry.PostRemoveMovie);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await lists_entry.PostRemoveMovie()).toBe(answer);
//   });
// });
// test('lists.PostClearList', () => {
//   const parems = GetParams(lists_entry.PostClearList);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await lists_entry.PostClearList()).toBe(answer);
//   });
// });
// test('lists.DeleteDeleteList', () => {
//   const parems = GetParams(lists_entry.DeleteDeleteList);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await lists_entry.DeleteDeleteList()).toBe(answer);
//   });
// });
// test('networks.GetDetails', () => {
//   const parems = GetParams(networks_entry.GetDetails);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await networks_entry.GetDetails()).toBe(answer);
//   });
// });
// test('networks.GetAlternativeNames', () => {
//   const parems = GetParams(networks_entry.GetAlternativeNames);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await networks_entry.GetAlternativeNames()).toBe(answer);
//   });
// });
// test('networks.GetImages', () => {
//   const parems = GetParams(networks_entry.GetImages);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await networks_entry.GetImages()).toBe(answer);
//   });
// });
// test('people.GetDetails', () => {
//   const parems = GetParams(people_entry.GetDetails);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await people_entry.GetDetails()).toBe(answer);
//   });
// });
// test('people.GetChanges', () => {
//   const parems = GetParams(people_entry.GetChanges);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await people_entry.GetChanges()).toBe(answer);
//   });
// });
// test('people.GetMovieCredits', () => {
//   const parems = GetParams(people_entry.GetMovieCredits);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await people_entry.GetMovieCredits()).toBe(answer);
//   });
// });
// test('people.GetTVCredits', () => {
//   const parems = GetParams(people_entry.GetTVCredits);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await people_entry.GetTVCredits()).toBe(answer);
//   });
// });
// test('people.GetCombinedCredits', () => {
//   const parems = GetParams(people_entry.GetCombinedCredits);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await people_entry.GetCombinedCredits()).toBe(answer);
//   });
// });
// test('people.GetExternalIDs', () => {
//   const parems = GetParams(people_entry.GetExternalIDs);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await people_entry.GetExternalIDs()).toBe(answer);
//   });
// });
// test('people.GetImages', () => {
//   const parems = GetParams(people_entry.GetImages);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await people_entry.GetImages()).toBe(answer);
//   });
// });
// test('people.GetTaggedImages', () => {
//   const parems = GetParams(people_entry.GetTaggedImages);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await people_entry.GetTaggedImages()).toBe(answer);
//   });
// });
// test('people.GetTranslations', () => {
//   const parems = GetParams(people_entry.GetTranslations);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await people_entry.GetTranslations()).toBe(answer);
//   });
// });
// test('people.GetLatest', () => {
//   const parems = GetParams(people_entry.GetLatest);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await people_entry.GetLatest()).toBe(answer);
//   });
// });
// test('people.GetPopular', () => {
//   const parems = GetParams(people_entry.GetPopular);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await people_entry.GetPopular()).toBe(answer);
//   });
// });
// test('reviews.GetDetails', () => {
//   const parems = GetParams(reviews_entry.GetDetails);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await reviews_entry.GetDetails()).toBe(answer);
//   });
// });
// test('search.GetSearchCompanies', () => {
//   const parems = GetParams(search_entry.GetSearchCompanies);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await search_entry.GetSearchCompanies()).toBe(answer);
//   });
// });
// test('search.GetSearchCollections', () => {
//   const parems = GetParams(search_entry.GetSearchCollections);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await search_entry.GetSearchCollections()).toBe(answer);
//   });
// });
// test('search.GetSearchKeywords', () => {
//   const parems = GetParams(search_entry.GetSearchKeywords);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await search_entry.GetSearchKeywords()).toBe(answer);
//   });
// });
// test('search.GetSearchMovies', () => {
//   const parems = GetParams(search_entry.GetSearchMovies);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await search_entry.GetSearchMovies()).toBe(answer);
//   });
// });
// test('search.GetMultiSearch', () => {
//   const parems = GetParams(search_entry.GetMultiSearch);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await search_entry.GetMultiSearch()).toBe(answer);
//   });
// });
// test('search.GetSearchPeople', () => {
//   const parems = GetParams(search_entry.GetSearchPeople);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await search_entry.GetSearchPeople()).toBe(answer);
//   });
// });
// test('search.GetSearchTVShows', () => {
//   const parems = GetParams(search_entry.GetSearchTVShows);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await search_entry.GetSearchTVShows()).toBe(answer);
//   });
// });
// test('trending.GetTrending', () => {
//   const parems = GetParams(trending_entry.GetTrending);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await trending_entry.GetTrending()).toBe(answer);
//   });
// });
// test('tvepisodes.GetDetails', () => {
//   const parems = GetParams(tvepisodes_entry.GetDetails);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await tvepisodes_entry.GetDetails()).toBe(answer);
//   });
// });
// test('tvepisodes.GetAccountStates', () => {
//   const parems = GetParams(tvepisodes_entry.GetAccountStates);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await tvepisodes_entry.GetAccountStates()).toBe(answer);
//   });
// });
// test('tvepisodes.GetChanges', () => {
//   const parems = GetParams(tvepisodes_entry.GetChanges);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await tvepisodes_entry.GetChanges()).toBe(answer);
//   });
// });
// test('tvepisodes.GetCredits', () => {
//   const parems = GetParams(tvepisodes_entry.GetCredits);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await tvepisodes_entry.GetCredits()).toBe(answer);
//   });
// });
// test('tvepisodes.GetExternalIDs', () => {
//   const parems = GetParams(tvepisodes_entry.GetExternalIDs);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await tvepisodes_entry.GetExternalIDs()).toBe(answer);
//   });
// });
// test('tvepisodes.GetImages', () => {
//   const parems = GetParams(tvepisodes_entry.GetImages);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await tvepisodes_entry.GetImages()).toBe(answer);
//   });
// });
// test('tvepisodes.GetTranslations', () => {
//   const parems = GetParams(tvepisodes_entry.GetTranslations);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await tvepisodes_entry.GetTranslations()).toBe(answer);
//   });
// });
// test('tvepisodes.PostRateTVEpisode', () => {
//   const parems = GetParams(tvepisodes_entry.PostRateTVEpisode);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await tvepisodes_entry.PostRateTVEpisode()).toBe(answer);
//   });
// });
// test('tvepisodes.DeleteDeleteRating', () => {
//   const parems = GetParams(tvepisodes_entry.DeleteDeleteRating);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await tvepisodes_entry.DeleteDeleteRating()).toBe(answer);
//   });
// });
// test('tvepisodes.GetVideos', () => {
//   const parems = GetParams(tvepisodes_entry.GetVideos);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await tvepisodes_entry.GetVideos()).toBe(answer);
//   });
// });
// test('tvepisodesgroups.GetDetails', () => {
//   const parems = GetParams(tvepisodesgroups_entry.GetDetails);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await tvepisodesgroups_entry.GetDetails()).toBe(answer);
//   });
// });
// test('tvseasons.GetDetails', () => {
//   const parems = GetParams(tvseasons_entry.GetDetails);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await tvseasons_entry.GetDetails()).toBe(answer);
//   });
// });
// test('tvseasons.GetAccountStates', () => {
//   const parems = GetParams(tvseasons_entry.GetAccountStates);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await tvseasons_entry.GetAccountStates()).toBe(answer);
//   });
// });
// test('tvseasons.GetAggregateCredits', () => {
//   const parems = GetParams(tvseasons_entry.GetAggregateCredits);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await tvseasons_entry.GetAggregateCredits()).toBe(answer);
//   });
// });
// test('tvseasons.GetChanges', () => {
//   const parems = GetParams(tvseasons_entry.GetChanges);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await tvseasons_entry.GetChanges()).toBe(answer);
//   });
// });
// test('tvseasons.GetCredits', () => {
//   const parems = GetParams(tvseasons_entry.GetCredits);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await tvseasons_entry.GetCredits()).toBe(answer);
//   });
// });
// test('tvseasons.GetExternalIDs', () => {
//   const parems = GetParams(tvseasons_entry.GetExternalIDs);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await tvseasons_entry.GetExternalIDs()).toBe(answer);
//   });
// });
// test('tvseasons.GetImages', () => {
//   const parems = GetParams(tvseasons_entry.GetImages);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await tvseasons_entry.GetImages()).toBe(answer);
//   });
// });
// test('tvseasons.GetTranslations', () => {
//   const parems = GetParams(tvseasons_entry.GetTranslations);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await tvseasons_entry.GetTranslations()).toBe(answer);
//   });
// });
// test('tvseasons.GetVideos', () => {
//   const parems = GetParams(tvseasons_entry.GetVideos);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await tvseasons_entry.GetVideos()).toBe(answer);
//   });
// });
// test('watchproviders.GetAvailableRegions', () => {
//   const parems = GetParams(watchproviders_entry.GetAvailableRegions);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await watchproviders_entry.GetAvailableRegions()).toBe(answer);
//   });
// });
// test('watchproviders.GetMovieProviders', () => {
//   const parems = GetParams(watchproviders_entry.GetMovieProviders);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await watchproviders_entry.GetMovieProviders()).toBe(answer);
//   });
// });
// test('watchproviders.GetTVProviders', () => {
//   const parems = GetParams(watchproviders_entry.GetTVProviders);
//   const cases = [];
//   cases.forEach(async element => {
//     const answer = GetReturnString(`${URL}`, parems, element);
//     expect(await watchproviders_entry.GetTVProviders()).toBe(answer);
//   });
// });
