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
    if (basic.includes('{' + parms[i] + '}')) {
      basic = basic.replace('{' + parms[i] + '}', value[parms[i]]);
      continue;
    }
    result += '&' + parms[i] + '=' + value[parms[i]];
  }
  return basic + result;
}
//#endregion

describe('Get URLs that funciton request: Movie', () => {
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
        `${URL}` + c_module.Route.MOVIE + '{movie_id}',
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
        `${URL}` + c_module.Route.MOVIE + '{movie_id}' + '/account_states',
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
  test('movie.GetAlternativetitles', async () => {
    const parems = GetParams(movie_entry.GetAlternativetitles);
    const cases = [
      {
        movie_id: 624860654643384,
        country: 'asdawfz',
      },
      {
        movie_id: 34476861215,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.MOVIE + '{movie_id}' + '/alternative_titles',
        parems,
        element
      );
      expect(
        await movie_entry.GetAlternativetitles(
          element.movie_id,
          element.country
        )
      ).toBe(answer);
    });
  });
  test('movie.GetChanges', async () => {
    const parems = GetParams(movie_entry.GetChanges);
    const cases = [
      {
        movie_id: 454866321,
        start_date: '10-25',
        end_date: '11-06',
        page: 1,
      },
      {
        movie_id: 454866321,
        start_date: undefined,
        end_date: '8-21',
      },
      {
        movie_id: 454866321,
        start_date: undefined,
        end_date: undefined,
        page: undefined,
      },
      {
        movie_id: 454866321,
        start_date: undefined,
        end_date: undefined,
        page: 1,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.MOVIE + '{movie_id}' + '/changes',
        parems,
        element
      );
      expect(
        await movie_entry.GetChanges(
          element.movie_id,
          element.start_date,
          element.end_date,
          element.page
        )
      ).toBe(answer);
    });
  });
  test('movie.GetCredits', async () => {
    const parems = GetParams(movie_entry.GetCredits);
    const cases = [
      {
        movie_id: 454866321,
        language: undefined,
      },
      {
        movie_id: 454866321,
        language: 'en_US',
      },
      {
        movie_id: 454866321,
        language: 'none_language',
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.MOVIE + '{movie_id}' + '/credits',
        parems,
        element
      );
      expect(
        await movie_entry.GetCredits(element.movie_id, element.language)
      ).toBe(answer);
    });
  });
  test('movie.GetExternalIDs', async () => {
    const parems = GetParams(movie_entry.GetExternalIDs);
    const cases = [
      {
        movie_id: 531846,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.MOVIE + '{movie_id}' + '/external_ids',
        parems,
        element
      );
      expect(await movie_entry.GetExternalIDs(element.movie_id)).toBe(answer);
    });
  });
  test('movie.GetImage', async () => {
    const parems = GetParams(movie_entry.GetImages);
    const cases = [
      {
        movie_id: 531846,
        language: 'en_US',
        include_image_language: 'zh-CN',
      },
      {
        movie_id: 531846,
        language: undefined,
        include_image_language: undefined,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.MOVIE + '{movie_id}' + '/images',
        parems,
        element
      );
      expect(
        await movie_entry.GetImages(
          element.movie_id,
          element.language,
          element.include_image_language
        )
      ).toBe(answer);
    });
  });
  test('movie.GetKeywords', async () => {
    const parems = GetParams(movie_entry.GetKeywords);
    const cases = [
      {
        movie_id: 531846,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.MOVIE + '{movie_id}' + '/keywords',
        parems,
        element
      );
      expect(await movie_entry.GetKeywords(element.movie_id)).toBe(answer);
    });
  });
  test('movie.GetLists', async () => {
    const parems = GetParams(movie_entry.GetLists);
    const cases = [
      {
        movie_id: 531846,
      },
      {
        movie_id: 5314,
        language: 'en_US',
        page: 654,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.MOVIE + '{movie_id}' + '/lists',
        parems,
        element
      );
      expect(
        await movie_entry.GetLists(
          element.movie_id,
          element.language,
          element.page
        )
      ).toBe(answer);
    });
  });
  test('movie.GetRecommendations', async () => {
    const parems = GetParams(movie_entry.GetRecommendations);
    const cases = [
      {
        movie_id: 531846,
      },
      {
        movie_id: 5314,
        language: 'en_US',
        page: 654,
      },
      {
        movie_id: 5314,
        language: undefined,
        page: 654,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.MOVIE + '{movie_id}' + '/recommendations',
        parems,
        element
      );
      expect(
        await movie_entry.GetRecommendations(
          element.movie_id,
          element.language,
          element.page
        )
      ).toBe(answer);
    });
  });
  test('movie.GetReleaseDates', async () => {
    const parems = GetParams(movie_entry.GetReleaseDates);
    const cases = [
      {
        movie_id: 531846,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.MOVIE + '{movie_id}' + '/release_dates',
        parems,
        element
      );
      expect(await movie_entry.GetReleaseDates(element.movie_id)).toBe(answer);
    });
  });
  test('movie.GetReviews', async () => {
    const parems = GetParams(movie_entry.GetReviews);
    const cases = [
      {
        movie_id: 531846,
      },
      {
        movie_id: 5314,
        language: undefined,
        page: 654,
      },
      {
        movie_id: 51654,
        language: 'undefined',
        page: 654,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.MOVIE + '{movie_id}' + '/reviews',
        parems,
        element
      );
      expect(
        await movie_entry.GetReviews(
          element.movie_id,
          element.language,
          element.page
        )
      ).toBe(answer);
    });
  });
  test('movie.GetSimilar', async () => {
    const parems = GetParams(movie_entry.GetSimilar);
    const cases = [
      {
        movie_id: 531846,
      },
      {
        movie_id: 51654,
        language: 'undefined',
        page: 654,
      },
      {
        movie_id: 51654,
        language: 'asdwfxghe',
        page: undefined,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.MOVIE + '{movie_id}' + '/similar',
        parems,
        element
      );
      expect(
        await movie_entry.GetSimilar(
          element.movie_id,
          element.language,
          element.page
        )
      ).toBe(answer);
    });
  });
  test('movie.GetTranslations', async () => {
    const parems = GetParams(movie_entry.GetTranslations);
    const cases = [
      {
        movie_id: 531846,
      },

      {
        movie_id: 51654,
        language: undefined,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.MOVIE + '{movie_id}' + '/translations',
        parems,
        element
      );
      expect(await movie_entry.GetTranslations(element.movie_id)).toBe(answer);
    });
  });
  test('movie.GetVideos', async () => {
    const parems = GetParams(movie_entry.GetVideos);
    const cases = [
      {
        movie_id: 531846,
      },
      {
        movie_id: 51654,
        language: 'asdwfxghe',
      },
      {
        movie_id: 51654,
        language: undefined,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.MOVIE + '{movie_id}' + '/videos',
        parems,
        element
      );
      expect(
        await movie_entry.GetVideos(element.movie_id, element.language)
      ).toBe(answer);
    });
  });
  test('movie.GetWatchProviders', async () => {
    const parems = GetParams(movie_entry.GetWatchProviders);
    const cases = [
      {
        movie_id: 531846,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.MOVIE + '{movie_id}' + '/watch/providers',
        parems,
        element
      );
      expect(await movie_entry.GetWatchProviders(element.movie_id)).toBe(
        answer
      );
    });
  });
  test('movie.PostRateMovie', async () => {
    const parems = GetParams(movie_entry.PostRateMovie);
    const cases = [
      {
        movie_id: 531846,
        session_id: '548941368',
        guest_session_id: '31561',
      },
      {
        movie_id: 531846,
        session_id: '548941368',
        guest_session_id: undefined,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.MOVIE + '{movie_id}' + '/rating',
        parems,
        element
      );
      expect(
        await movie_entry.PostRateMovie(
          element.movie_id,
          {},
          element.session_id,
          element.guest_session_id
        )
      ).toBe(answer);
    });
  });
  test('movie.DeleteRating', async () => {
    const parems = GetParams(movie_entry.DeleteRating);
    const cases = [
      {
        movie_id: 531846,
        session_id: '548941368',
        guest_session_id: '31561',
      },
      {
        movie_id: 531846,
        session_id: '548941368',
        guest_session_id: undefined,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.MOVIE + '{movie_id}' + '/rating',
        parems,
        element
      );
      expect(
        await movie_entry.DeleteRating(
          element.movie_id,
          element.session_id,
          element.guest_session_id
        )
      ).toBe(answer);
    });
  });
  test('movie.GetLatest', async () => {
    const parems = GetParams(movie_entry.GetLatest);
    const cases = [
      {
        language: 'string',
      },
      {},
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.MOVIE + 'latest',
        parems,
        element
      );
      expect(await movie_entry.GetLatest(element.language)).toBe(answer);
    });
  });
  test('movie.GetNowPlaying', async () => {
    const parems = GetParams(movie_entry.GetNowPlaying);
    const cases = [
      {
        language: 'string',
      },
      {},
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.MOVIE + 'now_playing',
        parems,
        element
      );
      expect(await movie_entry.GetNowPlaying(element.language)).toBe(answer);
    });
  });
  test('movie.GetPopular', async () => {
    const parems = GetParams(movie_entry.GetPopular);
    const cases = [
      {
        language: 'string',
        page: 446512,
        region: 'string',
      },
      {
        language: 'string',
        region: 'string',
      },
      {
        page: 446512,
        region: 'string',
      },
      {
        language: 'string',
        page: 132,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.MOVIE + 'popular',
        parems,
        element
      );
      expect(
        await movie_entry.GetPopular(
          element.language,
          element.page,
          element.region
        )
      ).toBe(answer);
    });
  });
  test('movie.GetTopRated', async () => {
    const parems = GetParams(movie_entry.GetTopRated);
    const cases = [
      {
        language: 'string',
        page: 446512,
        region: 'string',
      },
      {
        language: 'string',
        region: 'string',
      },
      {
        page: 446512,
        region: 'string',
      },
      {
        language: 'string',
        page: 132,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.MOVIE + 'top_rated',
        parems,
        element
      );
      expect(
        await movie_entry.GetTopRated(
          element.language,
          element.page,
          element.region
        )
      ).toBe(answer);
    });
  });
  test('movie.GetUpcoming', async () => {
    const parems = GetParams(movie_entry.GetUpcoming);
    const cases = [
      {
        language: 'string',
        page: 446512,
        region: 'string',
      },
      {
        language: 'string',
        region: 'string',
      },
      {
        page: 446512,
        region: 'string',
      },
      {
        language: 'string',
        page: 132,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.MOVIE + 'upcoming',
        parems,
        element
      );
      expect(
        await movie_entry.GetUpcoming(
          element.language,
          element.page,
          element.region
        )
      ).toBe(answer);
    });
  });
});
describe('Get URLs that funciton request: TV', () => {
  test('tv.GetDetails', () => {
    const parems = GetParams(tv_entry.GetDetails);
    const cases = [
      {
        tv_id: 454866321,
        language: undefined,
      },
      {
        tv_id: 454866321,
        language: 'en_US',
      },
      {
        tv_id: 454866321,
        language: 'none_language',
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.TV + '{tv_id}',
        parems,
        element
      );
      expect(await tv_entry.GetDetails(element.tv_id, element.language)).toBe(
        answer
      );
    });
  });
  test('tv.GetAccountStates', () => {
    const parems = GetParams(tv_entry.GetAccountStates);
    const cases = [
      {
        tv_id: 624860,
        session_id: 'asdas',
      },
      {
        tv_id: 62486065463521864631233843384,
        session_id: 'gsfgerersfg',
        guest_session_id: 'asdawduhanlfslilerk',
      },
      {
        tv_id: 62486065463521864631233843384,
        session_id: 'dasgsfgerersfg',
        guest_session_id: undefined,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.TV + '{tv_id}' + '/account_states',
        parems,
        element
      );
      expect(
        await tv_entry.GetAccountStates(
          element.tv_id,
          element.session_id,
          element.guest_session_id
        )
      ).toBe(answer);
    });
  });
  test('tv.GetAggregateCredits', () => {
    const parems = GetParams(tv_entry.GetAggregateCredits);
    const cases = [
      {
        tv_id: 454866321,
        language: undefined,
      },
      {
        tv_id: 454866321,
        language: 'en_US',
      },
      {
        tv_id: 454866321,
        language: 'none_language',
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.TV + '{tv_id}' + '/aggregate_credits',
        parems,
        element
      );
      expect(
        await tv_entry.GetAggregateCredits(element.tv_id, element.language)
      ).toBe(answer);
    });
  });
  test('tv.GetAlternativetitles', () => {
    const parems = GetParams(tv_entry.GetAlternativetitles);
    const cases = [
      {
        tv_id: 454866321,
        language: undefined,
      },
      {
        tv_id: 454866321,
        language: 'en_US',
      },
      {
        tv_id: 454866321,
        language: 'none_language',
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.TV + '{tv_id}' + '/alternative_titles',
        parems,
        element
      );
      expect(
        await tv_entry.GetAlternativetitles(element.tv_id, element.language)
      ).toBe(answer);
    });
  });
  test('tv.GetChanges', () => {
    const parems = GetParams(tv_entry.GetChanges);
    const cases = [
      {
        tv_id: 454866321,
        start_date: '10-25',
        end_date: '11-06',
        page: 1,
      },
      {
        tv_id: 454866321,
        start_date: undefined,
        end_date: '8-21',
      },
      {
        tv_id: 454866321,
        start_date: undefined,
        end_date: undefined,
        page: undefined,
      },
      {
        tv_id: 454866321,
        start_date: undefined,
        end_date: undefined,
        page: 1,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.TV + '{tv_id}' + '/changes',
        parems,
        element
      );
      expect(
        await tv_entry.GetChanges(
          element.tv_id,
          element.start_date,
          element.end_date,
          element.page
        )
      ).toBe(answer);
    });
  });
  test('tv.GetContentRatings', () => {
    const parems = GetParams(tv_entry.GetContentRatings);
    const cases = [
      {
        tv_id: 454866321,
        language: undefined,
      },
      {
        tv_id: 454866321,
        language: 'en_US',
      },
      {
        tv_id: 454866321,
        language: 'none_language',
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.TV + '{tv_id}' + '/content_ratings',
        parems,
        element
      );
      expect(
        await tv_entry.GetContentRatings(element.tv_id, element.language)
      ).toBe(answer);
    });
  });
  test('tv.GetCredits', () => {
    const parems = GetParams(tv_entry.GetCredits);
    const cases = [
      {
        tv_id: 454866321,
        language: undefined,
      },
      {
        tv_id: 454866321,
        language: 'en_US',
      },
      {
        tv_id: 454866321,
        language: 'none_language',
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.TV + '{tv_id}' + '/credits',
        parems,
        element
      );
      expect(await tv_entry.GetCredits(element.tv_id, element.language)).toBe(
        answer
      );
    });
  });
  test('tv.GetEpisodeGroup', () => {
    const parems = GetParams(tv_entry.GetEpisodeGroup);
    const cases = [
      {
        tv_id: 454866321,
        language: undefined,
      },
      {
        tv_id: 454866321,
        language: 'en_US',
      },
      {
        tv_id: 454866321,
        language: 'none_language',
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.TV + '{tv_id}' + '/episode_groups',
        parems,
        element
      );
      expect(
        await tv_entry.GetEpisodeGroup(element.tv_id, element.language)
      ).toBe(answer);
    });
  });
  test('tv.GetExternalIDs', () => {
    const parems = GetParams(tv_entry.GetExternalIDs);
    const cases = [
      {
        tv_id: 454866321,
        language: undefined,
      },
      {
        tv_id: 454866321,
        language: 'en_US',
      },
      {
        tv_id: 454866321,
        language: 'none_language',
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.TV + '{tv_id}' + '/external_ids',
        parems,
        element
      );
      expect(
        await tv_entry.GetExternalIDs(element.tv_id, element.language)
      ).toBe(answer);
    });
  });
  test('tv.GetImages', () => {
    const parems = GetParams(tv_entry.GetImages);
    const cases = [
      {
        tv_id: 454866321,
        language: undefined,
      },
      {
        tv_id: 454866321,
        language: 'en_US',
      },
      {
        tv_id: 454866321,
        language: 'none_language',
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.TV + '{tv_id}' + '/images',
        parems,
        element
      );
      expect(await tv_entry.GetImages(element.tv_id, element.language)).toBe(
        answer
      );
    });
  });
  test('tv.GetKeywords', () => {
    const parems = GetParams(tv_entry.GetKeywords);
    const cases = [
      {
        tv_id: 454866321,
      },
      {
        tv_id: 866321,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.TV + '{tv_id}' + '/keywords',
        parems,
        element
      );
      expect(await tv_entry.GetKeywords(element.tv_id)).toBe(answer);
    });
  });
  test('tv.GetRecommendations', () => {
    const parems = GetParams(tv_entry.GetRecommendations);
    const cases = [
      {
        tv_id: 531846,
      },
      {
        tv_id: 5314,
        language: 'en_US',
        page: 654,
      },
      {
        tv_id: 5314,
        language: undefined,
        page: 654,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.TV + '{tv_id}' + '/recommendations',
        parems,
        element
      );
      expect(
        await tv_entry.GetRecommendations(
          element.tv_id,
          element.language,
          element.page
        )
      ).toBe(answer);
    });
  });
  test('tv.GetReviews', () => {
    const parems = GetParams(tv_entry.GetReviews);
    const cases = [
      {
        tv_id: 531846,
      },
      {
        tv_id: 5314,
        language: 'en_US',
        page: 654,
      },
      {
        tv_id: 5314,
        language: undefined,
        page: 654,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.TV + '{tv_id}' + '/reviews',
        parems,
        element
      );
      expect(
        await tv_entry.GetReviews(element.tv_id, element.language, element.page)
      ).toBe(answer);
    });
  });
  test('tv.GetScreenedTheatrically', () => {
    const parems = GetParams(tv_entry.GetScreenedTheatrically);
    const cases = [
      {
        tv_id: 454866321,
      },
      {
        tv_id: 866321,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.TV + '{tv_id}' + '/screened_theatrically',
        parems,
        element
      );
      expect(await tv_entry.GetScreenedTheatrically(element.tv_id)).toBe(
        answer
      );
    });
  });
  test('tv.GetSimilarTVShows', () => {
    const parems = GetParams(tv_entry.GetSimilarTVShows);
    const cases = [
      {
        tv_id: 531846,
      },
      {
        tv_id: 5314,
        language: 'en_US',
        page: 654,
      },
      {
        tv_id: 5314,
        language: undefined,
        page: 654,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.TV + '{tv_id}' + '/similar',
        parems,
        element
      );
      expect(
        await tv_entry.GetSimilarTVShows(
          element.tv_id,
          element.language,
          element.page
        )
      ).toBe(answer);
    });
  });
  test('tv.GetTranslations', () => {
    const parems = GetParams(tv_entry.GetTranslations);
    const cases = [
      {
        tv_id: 454866321,
      },
      {
        tv_id: 866321,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.TV + '{tv_id}' + '/translations',
        parems,
        element
      );
      expect(await tv_entry.GetTranslations(element.tv_id)).toBe(answer);
    });
  });
  test('tv.GetVideos', () => {
    const parems = GetParams(tv_entry.GetVideos);
    const cases = [
      {
        tv_id: 531846,
      },
      {
        tv_id: 5314,
        language: 'en_US',
      },
      {
        tv_id: 5314,
        language: undefined,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.TV + '{tv_id}' + '/videos',
        parems,
        element
      );
      expect(await tv_entry.GetVideos(element.tv_id, element.language)).toBe(
        answer
      );
    });
  });
  test('tv.GetWatchProviders', () => {
    const parems = GetParams(tv_entry.GetWatchProviders);
    const cases = [
      {
        tv_id: 454866321,
      },
      {
        tv_id: 866321,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.TV + '{tv_id}' + '/watch/providers',
        parems,
        element
      );
      expect(await tv_entry.GetWatchProviders(element.tv_id)).toBe(answer);
    });
  });
  test('tv.PostRateTVShow', () => {
    const parems = GetParams(tv_entry.PostRateTVShow);
    const cases = [
      {
        tv_id: 531846,
        session_id: '548941368',
        guest_session_id: '31561',
      },
      {
        tv_id: 8746,
        session_id: '548941368',
        guest_session_id: undefined,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.TV + '{tv_id}' + '/rating',
        parems,
        element
      );
      expect(
        await tv_entry.PostRateTVShow(
          element.tv_id,
          {},
          element.session_id,
          element.guest_session_id
        )
      ).toBe(answer);
    });
  });
  test('tv.DeleteRating', () => {
    const parems = GetParams(tv_entry.DeleteRating);
    const cases = [
      {
        tv_id: 531846,
        session_id: '548941368',
        guest_session_id: '31561',
      },
      {
        tv_id: 8746,
        session_id: '541368',
        guest_session_id: undefined,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.TV + '{tv_id}' + '/rating',
        parems,
        element
      );
      expect(
        await tv_entry.DeleteRating(
          element.tv_id,
          element.session_id,
          element.guest_session_id
        )
      ).toBe(answer);
    });
  });
  test('tv.GetLatest', () => {
    const parems = GetParams(tv_entry.GetLatest);
    const cases = [
      {
        language: 'string',
      },
      {},
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.TV + 'latest',
        parems,
        element
      );
      expect(await tv_entry.GetLatest(element.language)).toBe(answer);
    });
  });
  test('tv.GetTVAiringToday', () => {
    const parems = GetParams(tv_entry.GetTVAiringToday);
    const cases = [
      {
        language: 'en_US',
      },
      {
        language: undefined,
        page: 654,
      },
      {},
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.TV + 'airing_today',
        parems,
        element
      );
      expect(
        await tv_entry.GetTVAiringToday(element.language, element.page)
      ).toBe(answer);
    });
  });
  test('tv.GetTVOnTheAir', () => {
    const parems = GetParams(tv_entry.GetTVOnTheAir);
    const cases = [
      {
        language: 'en_US',
      },
      {
        language: undefined,
        page: 654,
      },
      {},
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.TV + 'on_the_air',
        parems,
        element
      );
      expect(await tv_entry.GetTVOnTheAir(element.language, element.page)).toBe(
        answer
      );
    });
  });
  test('tv.GetPopular', () => {
    const parems = GetParams(tv_entry.GetPopular);
    const cases = [
      {
        language: 'en_US',
      },
      {
        language: undefined,
        page: 654,
      },
      {},
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.TV + 'popular',
        parems,
        element
      );
      expect(await tv_entry.GetPopular(element.language, element.page)).toBe(
        answer
      );
    });
  });
  test('tv.GetTopRated', () => {
    const parems = GetParams(tv_entry.GetTopRated);
    const cases = [
      {
        language: 'en_US',
      },
      {
        language: undefined,
        page: 654,
      },
      {},
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.TV + 'top_rated',
        parems,
        element
      );
      expect(await tv_entry.GetTopRated(element.language, element.page)).toBe(
        answer
      );
    });
  });
});

describe('Get URLs that funciton request: Account', () => {
  test('account.GetDetails', () => {
    const parems = GetParams(account_entry.GetDetails);
    const cases = [
      {
        session_id: 454866321,
      },
      {
        session_id: 866321,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.ACCOUNT,
        parems,
        element
      );
      expect(await account_entry.GetDetails(element.session_id)).toBe(answer);
    });
  });
  test('account.GetCreatedLists', () => {
    const parems = GetParams(account_entry.GetCreatedLists);
    const cases = [
      {
        account_id: 531846,
        session_id: 'hrhe',
      },
      {
        account_id: 5314,
        session_id: 'awxfghdthrth',
        language: 'en_US',
        page: undefined,
      },
      {
        account_id: 5314,
        session_id: 'dfgrthrtgwe',
        language: undefined,
        page: 654,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + 'account/{account_id}/lists',
        parems,
        element
      );
      expect(
        await account_entry.GetCreatedLists(
          element.account_id,
          element.session_id,
          element.language,
          element.page
        )
      ).toBe(answer);
    });
  });
  test('account.GetFavoriteMovies', () => {
    const parems = GetParams(account_entry.GetFavoriteMovies);
    const cases = [
      {
        account_id: 531846,
        session_id: 'hrhe',
        sort_by: 'created_at.asc',
      },
      {
        account_id: 5314,
        session_id: 'awxfghdthrth',
        language: 'en_US',
        sort_by: 'created_at.asc',
        page: undefined,
      },
      {
        account_id: 5314,
        session_id: 'dfgrthrtgwe',
        language: undefined,
        page: 654,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + 'account/{account_id}/favorite/movies',
        parems,
        element
      );
      expect(
        await account_entry.GetFavoriteMovies(
          element.account_id,
          element.session_id,
          element.language,
          element.sort_by,
          element.page
        )
      ).toBe(answer);
    });
  });
  test('account.GetFavoriteTVShows', () => {
    const parems = GetParams(account_entry.GetFavoriteTVShows);
    const cases = [
      {
        account_id: 531846,
        session_id: 'hrhe',
        sort_by: 'created_at.asc',
      },
      {
        account_id: 5314,
        session_id: 'awxfghdthrth',
        language: 'en_US',
        sort_by: 'created_at.asc',
        page: undefined,
      },
      {
        account_id: 5314,
        session_id: 'dfgrthrtgwe',
        language: undefined,
        page: 654,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + 'account/{account_id}/favorite/tv/',
        parems,
        element
      );
      expect(
        await account_entry.GetFavoriteTVShows(
          element.account_id,
          element.session_id,
          element.language,
          element.sort_by,
          element.page
        )
      ).toBe(answer);
    });
  });
  test('account.PostMarkAsFavorite', () => {
    const parems = GetParams(account_entry.PostMarkAsFavorite);
    const cases = [
      {
        account_id: 531846,
        session_id: 'hrhe',
      },
      {
        account_id: 5314,
        session_id: 'awxfghdthrth',
      },
      {
        account_id: 5314,
        session_id: 'dfgrthrtgwe',
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + 'account/{account_id}/favorite',
        parems,
        element
      );
      expect(
        await account_entry.PostMarkAsFavorite(
          {},
          element.account_id,
          element.session_id
        )
      ).toBe(answer);
    });
  });
  test('account.GetRatedMovies', () => {
    const parems = GetParams(account_entry.GetRatedMovies);
    const cases = [
      {
        account_id: 531846,
        session_id: 'hrhe',
        sort_by: 'created_at.asc',
      },
      {
        account_id: 5314,
        session_id: 'awxfghdthrth',
        language: 'en_US',
        sort_by: 'created_at.asc',
        page: undefined,
      },
      {
        account_id: 5314,
        session_id: 'dfgrthrtgwe',
        language: undefined,
        page: 654,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + 'account/{account_id}/rated/movies',
        parems,
        element
      );
      expect(
        await account_entry.GetRatedMovies(
          element.account_id,
          element.session_id,
          element.language,
          element.sort_by,
          element.page
        )
      ).toBe(answer);
    });
  });
  test('account.GetRatedTVShows', () => {
    const parems = GetParams(account_entry.GetRatedTVShows);
    const cases = [
      {
        account_id: 531846,
        session_id: 'hrhe',
        sort_by: 'created_at.asc',
      },
      {
        account_id: 5314,
        session_id: 'awxfghdthrth',
        language: 'en_US',
        sort_by: 'created_at.asc',
        page: undefined,
      },
      {
        account_id: 5314,
        session_id: 'dfgrthrtgwe',
        language: undefined,
        page: 654,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + 'account/{account_id}/rated/tv',
        parems,
        element
      );
      expect(
        await account_entry.GetRatedTVShows(
          element.account_id,
          element.session_id,
          element.language,
          element.sort_by,
          element.page
        )
      ).toBe(answer);
    });
  });
  test('account.GetRatedTVEpisodes', () => {
    const parems = GetParams(account_entry.GetRatedTVEpisodes);
    const cases = [
      {
        account_id: 531846,
        session_id: 'hrhe',
        sort_by: 'created_at.asc',
      },
      {
        account_id: 5314,
        session_id: 'awxfghdthrth',
        language: 'en_US',
        sort_by: 'created_at.asc',
        page: undefined,
      },
      {
        account_id: 5314,
        session_id: 'dfgrthrtgwe',
        language: undefined,
        page: 654,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + 'account/{account_id}/rated/tv/episodes',
        parems,
        element
      );
      expect(
        await account_entry.GetRatedTVEpisodes(
          element.account_id,
          element.session_id,
          element.language,
          element.sort_by,
          element.page
        )
      ).toBe(answer);
    });
  });
  test('account.GetMovieWatchlist', () => {
    const parems = GetParams(account_entry.GetMovieWatchlist);
    const cases = [
      {
        account_id: 531846,
        session_id: 'hrhe',
        sort_by: 'created_at.asc',
      },
      {
        account_id: 5314,
        session_id: 'awxfghdthrth',
        language: 'en_US',
        sort_by: 'created_at.asc',
        page: undefined,
      },
      {
        account_id: 5314,
        session_id: 'dfgrthrtgwe',
        language: undefined,
        page: 654,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + 'account/{account_id}/watchlist/movies',
        parems,
        element
      );
      expect(
        await account_entry.GetMovieWatchlist(
          element.account_id,
          element.session_id,
          element.language,
          element.sort_by,
          element.page
        )
      ).toBe(answer);
    });
  });
  test('account.GetTVShowWatchlist', () => {
    const parems = GetParams(account_entry.GetTVShowWatchlist);
    const cases = [
      {
        account_id: 531846,
        session_id: 'hrhe',
        sort_by: 'created_at.asc',
      },
      {
        account_id: 5314,
        session_id: 'awxfghdthrth',
        language: 'en_US',
        sort_by: 'created_at.asc',
        page: undefined,
      },
      {
        account_id: 5314,
        session_id: 'dfgrthrtgwe',
        language: undefined,
        page: 654,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + '' + 'account/{account_id}/watchlist/tv',
        parems,
        element
      );
      expect(
        await account_entry.GetTVShowWatchlist(
          element.account_id,
          element.session_id,
          element.language,
          element.sort_by,
          element.page
        )
      ).toBe(answer);
    });
  });
  test('account.PostAddToWatchlist', () => {
    const parems = GetParams(account_entry.PostAddToWatchlist);
    const cases = [
      {
        account_id: '31561',
        session_id: '548941368',
      },
      {
        account_id: 548941368,
        session_id: '541368',
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + '' + 'account/{account_id}/watchlist',
        parems,
        element
      );
      expect(
        await account_entry.PostAddToWatchlist(
          {},
          element.account_id,
          element.session_id
        )
      ).toBe(answer);
    });
  });
});

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
