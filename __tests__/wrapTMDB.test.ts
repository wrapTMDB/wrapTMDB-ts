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
    if (value[parms[i]] === undefined || value[parms[i]] === '') {
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

process.on('unhandledRejection', reason => {
  throw reason;
});
//#endregion

describe('Get URLs funciton request: Movie', () => {
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
      {
        movie_id: '54465',
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
describe('Get URLs funciton request: TV', () => {
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
describe('Get URLs funciton request: Account', () => {
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
describe('Get URLs funciton request: Authentication', () => {
  test('authentication.GetCreateGuestSession', () => {
    const parems = GetParams(authentication_entry.GetCreateGuestSession);
    const cases = [{}];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.AUTHENTICATION + 'guest_session/new',
        parems,
        element
      );
      expect(await authentication_entry.GetCreateGuestSession()).toBe(answer);
    });
  });
  test('authentication.GetCreateRequestToken', () => {
    const parems = GetParams(authentication_entry.GetCreateRequestToken);
    const cases = [{}];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.AUTHENTICATION + 'token/new',
        parems,
        element
      );
      expect(await authentication_entry.GetCreateRequestToken()).toBe(answer);
    });
  });
  test('authentication.PostCreateSession', () => {
    const parems = GetParams(authentication_entry.PostCreateSession);
    const cases = [{}];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.AUTHENTICATION + 'session/new',
        parems,
        element
      );
      expect(await authentication_entry.PostCreateSession({})).toBe(answer);
    });
  });
  test('authentication.PostCreateSessionWithLogin', () => {
    const parems = GetParams(authentication_entry.PostCreateSessionWithLogin);
    const cases = [{}];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.AUTHENTICATION + 'token/validate_with_login',
        parems,
        element
      );
      expect(await authentication_entry.PostCreateSessionWithLogin({})).toBe(
        answer
      );
    });
  });
  test('authentication.DeleteDeleteSession', () => {
    const parems = GetParams(authentication_entry.DeleteDeleteSession);
    const cases = [{}];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.AUTHENTICATION + 'session',
        parems,
        element
      );
      expect(await authentication_entry.DeleteDeleteSession({})).toBe(answer);
    });
  });
});
describe('Get URLs funciton request: Certifications', () => {
  test('certifications.GetMovieCertifications', () => {
    const parems = GetParams(certifications_entry.GetMovieCertifications);
    const cases = [{}];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.CERTIFICATION + c_module.Route.MOVIE + 'list',
        parems,
        element
      );
      expect(await certifications_entry.GetMovieCertifications()).toBe(answer);
    });
  });
  test('certifications.GetTVCertifications', () => {
    const parems = GetParams(certifications_entry.GetTVCertifications);
    const cases = [{}];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.CERTIFICATION + c_module.Route.TV + 'list',
        parems,
        element
      );
      expect(await certifications_entry.GetTVCertifications()).toBe(answer);
    });
  });
});
describe('Get URLs funciton request: Changes', () => {
  test('changes.GetMovieChangeList', () => {
    const parems = GetParams(changes_entry.GetMovieChangeList);
    const cases = [
      {
        start_date: '10-25',
        end_date: '11-06',
        page: 1,
      },
      {
        start_date: undefined,
        end_date: '8-21',
      },
      {
        start_date: undefined,
        end_date: undefined,
        page: undefined,
      },
      {
        start_date: undefined,
        end_date: undefined,
        page: 1,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.MOVIE + 'changes',
        parems,
        element
      );
      expect(
        await changes_entry.GetMovieChangeList(
          element.start_date,
          element.end_date,
          element.page
        )
      ).toBe(answer);
    });
  });
  test('changes.GetTVChangeList', () => {
    const parems = GetParams(changes_entry.GetTVChangeList);
    const cases = [
      {
        start_date: '10-25',
        end_date: '11-06',
        page: 1,
      },
      {
        start_date: undefined,
        end_date: '8-21',
      },
      {
        start_date: undefined,
        end_date: undefined,
        page: undefined,
      },
      {
        start_date: undefined,
        end_date: undefined,
        page: 1,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.TV + 'changes',
        parems,
        element
      );
      expect(
        await changes_entry.GetTVChangeList(
          element.start_date,
          element.end_date,
          element.page
        )
      ).toBe(answer);
    });
  });
  test('changes.GetPersonChangesList', () => {
    const parems = GetParams(changes_entry.GetPersonChangesList);
    const cases = [
      {
        start_date: '10-25',
        end_date: '11-06',
        page: 1,
      },
      {
        start_date: undefined,
        end_date: '8-21',
      },
      {
        start_date: undefined,
        end_date: undefined,
        page: undefined,
      },
      {
        start_date: undefined,
        end_date: undefined,
        page: 1,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + 'person/' + 'changes',
        parems,
        element
      );
      expect(
        await changes_entry.GetPersonChangesList(
          element.start_date,
          element.end_date,
          element.page
        )
      ).toBe(answer);
    });
  });
});
describe('Get URLs funciton request: Collections', () => {
  test('collections.GetDetails', () => {
    const parems = GetParams(collections_entry.GetDetails);
    const cases = [
      {
        collection_id: 454866321,
        language: undefined,
      },
      {
        collection_id: 454866321,
        language: 'en_US',
      },
      {
        collection_id: 454866321,
        language: 'none_language',
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.COLLECTION + '{collection_id}',
        parems,
        element
      );
      expect(
        await collections_entry.GetDetails(
          element.collection_id,
          element.language
        )
      ).toBe(answer);
    });
  });
  test('collections.GetImages', () => {
    const parems = GetParams(collections_entry.GetImages);
    const cases = [
      {
        collection_id: 454866321,
        language: undefined,
      },
      {
        collection_id: 454866321,
        language: 'en_US',
      },
      {
        collection_id: 454866321,
        language: 'none_language',
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.COLLECTION + '{collection_id}' + '/images',
        parems,
        element
      );
      expect(
        await collections_entry.GetImages(
          element.collection_id,
          element.language
        )
      ).toBe(answer);
    });
  });
  test('collections.GetTranslations', () => {
    const parems = GetParams(collections_entry.GetTranslations);
    const cases = [
      {
        collection_id: 454866321,
        language: undefined,
      },
      {
        collection_id: 454866321,
        language: 'en_US',
      },
      {
        collection_id: 454866321,
        language: 'none_language',
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` +
          c_module.Route.COLLECTION +
          '{collection_id}' +
          '/translations',
        parems,
        element
      );
      expect(
        await collections_entry.GetTranslations(
          element.collection_id,
          element.language
        )
      ).toBe(answer);
    });
  });
});
describe('Get URLs funciton request: Companies', () => {
  test('companies.GetDetails', () => {
    const parems = GetParams(companies_entry.GetDetails);
    const cases = [
      {
        company_id: 531846,
      },
      {
        company_id: '54465',
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.COMPANY + '{company_id}',
        parems,
        element
      );
      expect(await companies_entry.GetDetails(element.company_id)).toBe(answer);
    });
  });
  test('companies.GetAlternativeNames', () => {
    const parems = GetParams(companies_entry.GetAlternativeNames);
    const cases = [
      {
        company_id: 531846,
      },
      {
        company_id: '54465',
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` +
          c_module.Route.COMPANY +
          '{company_id}' +
          '/alternative_names',
        parems,
        element
      );
      expect(
        await companies_entry.GetAlternativeNames(element.company_id)
      ).toBe(answer);
    });
  });
  test('companies.GetImages', () => {
    const parems = GetParams(companies_entry.GetImages);
    const cases = [
      {
        company_id: 531846,
      },
      {
        company_id: '54465',
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.COMPANY + '{company_id}' + '/images',
        parems,
        element
      );
      expect(await companies_entry.GetImages(element.company_id)).toBe(answer);
    });
  });
});
describe('Get URLs funciton request: Configuration', () => {
  test('configuration.GetAPIConfiguration', () => {
    const parems = GetParams(configuration_entry.GetAPIConfiguration);
    const cases = [{}];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.CONFIGURATION,
        parems,
        element
      );
      expect(await configuration_entry.GetAPIConfiguration()).toBe(answer);
    });
  });
  test('configuration.GetCountries', () => {
    const parems = GetParams(configuration_entry.GetCountries);
    const cases = [{}];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.CONFIGURATION + 'countries',
        parems,
        element
      );
      expect(await configuration_entry.GetCountries()).toBe(answer);
    });
  });
  test('configuration.GetJobs', () => {
    const parems = GetParams(configuration_entry.GetJobs);
    const cases = [{}];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.CONFIGURATION + 'jobs',
        parems,
        element
      );
      expect(await configuration_entry.GetJobs()).toBe(answer);
    });
  });
  test('configuration.GetLanguages', () => {
    const parems = GetParams(configuration_entry.GetLanguages);
    const cases = [{}];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.CONFIGURATION + 'languages',
        parems,
        element
      );
      expect(await configuration_entry.GetLanguages()).toBe(answer);
    });
  });
  test('configuration.GetPrimaryTranslations', () => {
    const parems = GetParams(configuration_entry.GetPrimaryTranslations);
    const cases = [{}];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.CONFIGURATION + 'primary_translations',
        parems,
        element
      );
      expect(await configuration_entry.GetPrimaryTranslations()).toBe(answer);
    });
  });
  test('configuration.GetTimezones', () => {
    const parems = GetParams(configuration_entry.GetTimezones);
    const cases = [{}];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.CONFIGURATION + 'timezones',
        parems,
        element
      );
      expect(await configuration_entry.GetTimezones()).toBe(answer);
    });
  });
});
describe('Get URLs funciton request: Credits', () => {
  test('credits.GetDetails', () => {
    const parems = GetParams(credits_entry.GetDetails);
    const cases = [
      {
        credit_id: 531846,
      },
      {
        credit_id: '54465',
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.CREDIT + '{credit_id}',
        parems,
        element
      );
      expect(await credits_entry.GetDetails(element.credit_id)).toBe(answer);
    });
  });
});
describe('Get URLs funciton request: Discover', () => {
  test('discover.GetMovieDiscover', () => {
    const parems = GetParams(discover_entry.GetMovieDiscover);
    const cases = [{}];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.DISCOVER + c_module.Route.MOVIE,
        parems,
        element
      );
      expect(await discover_entry.GetMovieDiscover({})).toBe(answer);
    });
  });
  test('discover.GetTVDiscover', () => {
    const parems = GetParams(discover_entry.GetTVDiscover);
    const cases = [{}];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.DISCOVER + c_module.Route.TV,
        parems,
        element
      );
      expect(await discover_entry.GetTVDiscover({})).toBe(answer);
    });
  });
});
describe('Get URLs funciton request: Find', () => {
  test('find.GetFindByID', () => {
    const parems = GetParams(find_entry.GetFindByID);
    const cases = [
      {
        external_id: 531846,
        language: 'en_US',
        external_source: 'zh-CN',
      },
      {
        external_id: 531846,
        language: undefined,
        external_source: undefined,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.FIND + '{external_id}',
        parems,
        element
      );
      expect(
        await find_entry.GetFindByID(
          element.external_id,
          element.language,
          element.external_source
        )
      ).toBe(answer);
    });
  });
});
describe('Get URLs funciton request: Genres', () => {
  test('genres.GetMovieList', () => {
    const parems = GetParams(genres_entry.GetMovieList);
    const cases = [
      {
        language: undefined,
      },
      {
        language: 'en_US',
      },
      {
        language: 'none_language',
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.GENRE + c_module.Route.MOVIE + 'list',
        parems,
        element
      );
      expect(await genres_entry.GetMovieList(element.language)).toBe(answer);
    });
  });
  test('genres.GetTVList', () => {
    const parems = GetParams(genres_entry.GetTVList);
    const cases = [
      {
        language: undefined,
      },
      {
        language: 'en_US',
      },
      {
        language: 'none_language',
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.GENRE + c_module.Route.TV + 'list',
        parems,
        element
      );
      expect(await genres_entry.GetTVList(element.language)).toBe(answer);
    });
  });
});
describe('Get URLs funciton request: Guestsessions', () => {
  test('guestsessions.GetRatedMovies', () => {
    const parems = GetParams(guestsessions_entry.GetRatedMovies);
    const cases = [
      {
        guest_session_id: 45364120,
        language: undefined,
        sort_by: undefined,
      },
      {
        guest_session_id: 453210,
        language: 'undefined',
        sort_by: 'created_at.asc',
      },
      {
        guest_session_id: 12046,
        language: 'en_US',
        sort_by: undefined,
      },
      {
        guest_session_id: 1238612,
        language: undefined,
        sort_by: 'created_at.desc',
      },
      {
        guest_session_id: 84761285,
        language: undefined,
        sort_by: 'assegrgjgfu',
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` +
          c_module.Route.GUESTSESSION +
          '{guest_session_id}' +
          '/rated/movies',
        parems,
        element
      );
      expect(
        await guestsessions_entry.GetRatedMovies(
          element.guest_session_id,
          element.language,
          element.sort_by
        )
      ).toBe(answer);
    });
  });
  test('guestsessions.GetRatedTVShows', () => {
    const parems = GetParams(guestsessions_entry.GetRatedTVShows);
    const cases = [
      {
        guest_session_id: 45364120,
        language: undefined,
        sort_by: undefined,
      },
      {
        guest_session_id: 453210,
        language: 'undefined',
        sort_by: 'created_at.asc',
      },
      {
        guest_session_id: 12046,
        language: 'en_US',
        sort_by: undefined,
      },
      {
        guest_session_id: 1238612,
        language: undefined,
        sort_by: 'created_at.desc',
      },
      {
        guest_session_id: 84761285,
        language: undefined,
        sort_by: 'assegrgjgfu',
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` +
          c_module.Route.GUESTSESSION +
          '{guest_session_id}' +
          '/rated/tv',
        parems,
        element
      );
      expect(
        await guestsessions_entry.GetRatedTVShows(
          element.guest_session_id,
          element.language,
          element.sort_by
        )
      ).toBe(answer);
    });
  });
  test('guestsessions.GetRatedTVEpisodes', () => {
    const parems = GetParams(guestsessions_entry.GetRatedTVEpisodes);
    const cases = [
      {
        guest_session_id: 45364120,
        language: undefined,
        sort_by: undefined,
      },
      {
        guest_session_id: 453210,
        language: 'undefined',
        sort_by: 'created_at.asc',
      },
      {
        guest_session_id: 12046,
        language: 'en_US',
        sort_by: undefined,
      },
      {
        guest_session_id: 1238612,
        language: undefined,
        sort_by: 'created_at.desc',
      },
      {
        guest_session_id: 84761285,
        language: undefined,
        sort_by: 'assegrgjgfu',
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` +
          c_module.Route.GUESTSESSION +
          '{guest_session_id}' +
          '/rated/tv/episodes',
        parems,
        element
      );
      expect(
        await guestsessions_entry.GetRatedTVEpisodes(
          element.guest_session_id,
          element.language,
          element.sort_by
        )
      ).toBe(answer);
    });
  });
});
describe('Get URLs funciton request: Keywords', () => {
  test('keywords.GetDetails', () => {
    const parems = GetParams(keywords_entry.GetDetails);
    const cases = [
      {
        keyword_id: 454866321,
      },
      {
        keyword_id: 'sfdderyer',
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.KEYWORD + '{keyword_id}',
        parems,
        element
      );
      expect(await keywords_entry.GetDetails(element.keyword_id)).toBe(answer);
    });
  });
  test('keywords.GetMovies', () => {
    const parems = GetParams(keywords_entry.GetMovies);
    const cases = [
      {
        keyword_id: 45364120,
        language: undefined,
        include_adult: undefined,
      },
      {
        keyword_id: 453210,
        language: 'undefined',
        include_adult: true,
      },
      {
        keyword_id: 12046,
        language: 'en_US',
        include_adult: undefined,
      },
      {
        keyword_id: 1238612,
        language: undefined,
        include_adult: false,
      },
      {
        keyword_id: 84761285,
        language: undefined,
        include_adult: true,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.KEYWORD + '{keyword_id}' + '/movies',
        parems,
        element
      );
      expect(
        await keywords_entry.GetMovies(
          element.keyword_id,
          element.language,
          element.include_adult
        )
      ).toBe(answer);
    });
  });
});
describe('Get URLs funciton request: Lists', () => {
  test('lists.GetDetails', () => {
    const parems = GetParams(lists_entry.GetDetails);
    const cases = [
      {
        list_id: 454866321,
        language: '10-25',
      },
      {
        list_id: 321,
      },
      {
        list_id: '321',
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.LIST + '{list_id}',
        parems,
        element
      );
      expect(
        await lists_entry.GetDetails(element.list_id, element.language)
      ).toBe(answer);
    });
  });
  test('lists.GetCheckItemStatus', () => {
    const parems = GetParams(lists_entry.GetCheckItemStatus);
    const cases = [
      {
        list_id: 454866321,
        movie_id: 'dfgwe',
      },
      {
        list_id: '46321',
        movie_id: 'adsf',
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.LIST + '{list_id}' + '/item_status',
        parems,
        element
      );
      expect(
        await lists_entry.GetCheckItemStatus(element.list_id, element.movie_id)
      ).toBe(answer);
    });
  });
  test('lists.PostCreateList', () => {
    const parems = GetParams(lists_entry.PostCreateList);
    const cases = [
      {
        session_id: 'aiolkfmd',
      },
      {
        session_id: 4615203,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.LIST,
        parems,
        element
      );
      expect(await lists_entry.PostCreateList({}, element.session_id)).toBe(
        answer
      );
    });
  });
  test('lists.PostAddMovie', () => {
    const parems = GetParams(lists_entry.PostAddMovie);
    const cases = [
      {
        list_id: 'daefs',
        session_id: 4512,
      },
      {
        list_id: 563213,
        session_id: '4512',
      },
      {
        list_id: 'daefs',
        session_id: 'gha54',
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.LIST + '{list_id}' + '/add_item',
        parems,
        element
      );
      expect(
        await lists_entry.PostAddMovie({}, element.list_id, element.session_id)
      ).toBe(answer);
    });
  });
  test('lists.PostRemoveMovie', () => {
    const parems = GetParams(lists_entry.PostRemoveMovie);
    const cases = [
      {
        list_id: 'daefs',
        session_id: 4512,
      },
      {
        list_id: 563213,
        session_id: '4512',
      },
      {
        list_id: 'daefs',
        session_id: 'gha54',
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.LIST + '{list_id}' + '/remove_item',
        parems,
        element
      );
      expect(
        await lists_entry.PostRemoveMovie(
          {},
          element.list_id,
          element.session_id
        )
      ).toBe(answer);
    });
  });
  test('lists.PostClearList', () => {
    const parems = GetParams(lists_entry.PostClearList);
    const cases = [
      {
        list_id: 84615,
        confirm: true,
        session_id: 46153,
      },
      {
        list_id: 84615,
        confirm: true,
        session_id: '46153',
      },
      {
        list_id: '84615',
        confirm: true,
        session_id: 46153,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.LIST + '{list_id}' + '/clear',
        parems,
        element
      );
      expect(
        await lists_entry.PostClearList(
          element.list_id,
          element.session_id,
          element.confirm
        )
      ).toBe(answer);
    });
  });
  test('lists.DeleteDeleteList', () => {
    const parems = GetParams(lists_entry.DeleteDeleteList);
    const cases = [
      {
        list_id: 'daefs',
        session_id: 4512,
      },
      {
        list_id: 563213,
        session_id: '4512',
      },
      {
        list_id: 'daefs',
        session_id: 'gha54',
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.LIST + '{list_id}',
        parems,
        element
      );
      expect(
        await lists_entry.DeleteDeleteList(element.list_id, element.session_id)
      ).toBe(answer);
    });
  });
});
describe('Get URLs funciton request: Networks', () => {
  test('networks.GetDetails', () => {
    const parems = GetParams(networks_entry.GetDetails);
    const cases = [
      {
        network_id: 454866321,
      },
      {
        network_id: 21,
      },
      {
        network_id: '21',
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.NETWORK + '{network_id}',
        parems,
        element
      );
      expect(await networks_entry.GetDetails(element.network_id)).toBe(answer);
    });
  });
  test('networks.GetAlternativeNames', () => {
    const parems = GetParams(networks_entry.GetAlternativeNames);
    const cases = [
      {
        network_id: 454866321,
      },
      {
        network_id: 21,
      },
      {
        network_id: '21',
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` +
          c_module.Route.NETWORK +
          '{network_id}' +
          '/alternative_names',
        parems,
        element
      );
      expect(await networks_entry.GetAlternativeNames(element.network_id)).toBe(
        answer
      );
    });
  });
  test('networks.GetImages', () => {
    const parems = GetParams(networks_entry.GetImages);
    const cases = [
      {
        network_id: 454866321,
      },
      {
        network_id: 21,
      },
      {
        network_id: '21',
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.NETWORK + '{network_id}' + '/images',
        parems,
        element
      );
      expect(await networks_entry.GetImages(element.network_id)).toBe(answer);
    });
  });
});
describe('Get URLs funciton request: People', () => {
  test('people.GetDetails', () => {
    const parems = GetParams(people_entry.GetDetails);
    const cases = [
      {
        person_id: 454866321,
        language: 'en-US',
        append_to_response: 'undefined',
      },
      {
        person_id: 454866321,
        append_to_response: '10-25',
      },
      {
        person_id: 454866321,
        language: 'en-US',
      },
      {
        person_id: 454866321,
        language: 'undefined',
        append_to_response: undefined,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.PEOPLE + '{person_id}',
        parems,
        element
      );
      expect(
        await people_entry.GetDetails(
          element.person_id,
          element.language,
          element.append_to_response
        )
      ).toBe(answer);
    });
  });
  test('people.GetChanges', () => {
    const parems = GetParams(people_entry.GetChanges);
    const cases = [
      {
        person_id: 454866321,
        start_date: '10-25',
        end_date: '11-06',
        page: 1,
      },
      {
        person_id: 454866321,
        start_date: undefined,
        end_date: '8-21',
      },
      {
        person_id: 454866321,
        start_date: undefined,
        end_date: undefined,
        page: undefined,
      },
      {
        person_id: 454866321,
        start_date: undefined,
        end_date: undefined,
        page: 1,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.PEOPLE + '{person_id}' + '/changes',
        parems,
        element
      );
      expect(
        await people_entry.GetChanges(
          element.person_id,
          element.start_date,
          element.end_date,
          element.page
        )
      ).toBe(answer);
    });
  });
  test('people.GetMovieCredits', () => {
    const parems = GetParams(people_entry.GetMovieCredits);
    const cases = [
      {
        person_id: 454866321,
        language: '10-25',
      },
      {
        person_id: 454866321,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.PEOPLE + '{person_id}' + '/movie_credits',
        parems,
        element
      );
      expect(
        await people_entry.GetMovieCredits(element.person_id, element.language)
      ).toBe(answer);
    });
  });
  test('people.GetTVCredits', () => {
    const parems = GetParams(people_entry.GetTVCredits);
    const cases = [
      {
        person_id: 454866321,
        language: '10-25',
      },
      {
        person_id: 454866321,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.PEOPLE + '{person_id}' + '/tv_credits',
        parems,
        element
      );
      expect(
        await people_entry.GetTVCredits(element.person_id, element.language)
      ).toBe(answer);
    });
  });
  test('people.GetCombinedCredits', () => {
    const parems = GetParams(people_entry.GetCombinedCredits);
    const cases = [
      {
        person_id: 454866321,
        language: '10-25',
      },
      {
        person_id: 454866321,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.PEOPLE + '{person_id}' + '/combined_credits',
        parems,
        element
      );
      expect(
        await people_entry.GetCombinedCredits(
          element.person_id,
          element.language
        )
      ).toBe(answer);
    });
  });
  test('people.GetExternalIDs', () => {
    const parems = GetParams(people_entry.GetExternalIDs);
    const cases = [
      {
        person_id: 454866321,
        language: '10-25',
      },
      {
        person_id: 454866321,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.PEOPLE + '{person_id}' + '/external_ids',
        parems,
        element
      );
      expect(
        await people_entry.GetExternalIDs(element.person_id, element.language)
      ).toBe(answer);
    });
  });
  test('people.GetImages', () => {
    const parems = GetParams(people_entry.GetImages);
    const cases = [
      {
        person_id: 454866321,
      },
      {
        person_id: 6321,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.PEOPLE + '{person_id}' + '/images',
        parems,
        element
      );
      expect(await people_entry.GetImages(element.person_id)).toBe(answer);
    });
  });
  test('people.GetTaggedImages', () => {
    const parems = GetParams(people_entry.GetTaggedImages);
    const cases = [
      {
        person_id: 45321,
        language: 'en-US',
        page: 1,
      },
      {
        person_id: 454866321,
        language: '10-25',
      },
      {
        person_id: 866321,
        page: 5,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.PEOPLE + '{person_id}' + '/tagged_images',
        parems,
        element
      );
      expect(
        await people_entry.GetTaggedImages(
          element.person_id,
          element.language,
          element.page
        )
      ).toBe(answer);
    });
  });
  test('people.GetTranslations', () => {
    const parems = GetParams(people_entry.GetTranslations);
    const cases = [
      {
        person_id: 45321,
        language: 'en-US',
      },
      {
        person_id: 454866321,
        language: '10-25',
      },
      {
        person_id: 866321,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.PEOPLE + '{person_id}' + '/translations',
        parems,
        element
      );
      expect(
        await people_entry.GetTranslations(element.person_id, element.language)
      ).toBe(answer);
    });
  });
  test('people.GetLatest', () => {
    const parems = GetParams(people_entry.GetLatest);
    const cases = [
      {
        language: 'en-US',
      },
      {
        language: 'undefined',
      },
      {
        language: undefined,
      },
      {},
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.PEOPLE + 'latest',
        parems,
        element
      );
      expect(await people_entry.GetLatest(element.language)).toBe(answer);
    });
  });
  test('people.GetPopular', () => {
    const parems = GetParams(people_entry.GetPopular);
    const cases = [
      {
        language: 'en-US',
        page: 2,
      },
      {
        language: 'undefined',
      },
      {
        language: undefined,
        page: 3,
      },
      {},
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.PEOPLE + 'popular',
        parems,
        element
      );
      expect(
        await people_entry.GetPopular(element.language, element.page)
      ).toBe(answer);
    });
  });
});
describe('Get URLs funciton request: Reviews', () => {
  test('reviews.GetDetails', () => {
    const parems = GetParams(reviews_entry.GetDetails);
    const cases = [
      {
        review_id: 45312,
      },
      {
        review_id: '34120',
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.REVIEWS + '{review_id}',
        parems,
        element
      );
      expect(await reviews_entry.GetDetails(element.review_id)).toBe(answer);
    });
  });
});
describe('Get URLs funciton request: Search', () => {
  test('search.GetSearchCompanies', () => {
    const parems = GetParams(search_entry.GetSearchCompanies);
    const cases = [
      {
        query: 'fantasy',
        page: 241,
      },
      {
        query: 'anime',
        page: 4321,
      },
      {
        query: 'undefind',
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.SEARCH + c_module.Route.COMPANY,
        parems,
        element
      );
      expect(
        await search_entry.GetSearchCompanies(element.query, element.page)
      ).toBe(answer);
    });
  });
  test('search.GetSearchCollections', () => {
    const parems = GetParams(search_entry.GetSearchCollections);
    const cases = [
      {
        query: 'dafdsgd',
        language: 'oiluyktjrh',
        page: 5432,
      },
      {
        query: 'oiluyktjrh',
        page: 1,
      },
      {
        query: 'asd',
        language: 'oiluyktjrh',
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.SEARCH + c_module.Route.COLLECTION,
        parems,
        element
      );
      expect(
        await search_entry.GetSearchCollections(
          element.query,
          element.language,
          element.page
        )
      ).toBe(answer);
    });
  });
  test('search.GetSearchKeywords', () => {
    const parems = GetParams(search_entry.GetSearchKeywords);
    const cases = [
      {
        query: 'dafdsgd',
        page: 5432,
      },
      {
        query: 'oiluyktjrh',
        page: 1,
      },
      {
        query: 'asd',
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.SEARCH + c_module.Route.KEYWORD,
        parems,
        element
      );
      expect(
        await search_entry.GetSearchKeywords(element.query, element.page)
      ).toBe(answer);
    });
  });
  test('search.GetSearchMovies', () => {
    const parems = GetParams(search_entry.GetSearchMovies);
    const cases = [
      {
        query: 'fantasy',
        language: 'string',
        page: 241,
        include_adult: true,
        region: '1996',
        year: 1996,
        primary_release_year: 2018,
      },
      {
        query: '',
        language: 'string',
        include_adult: true,
        region: undefined,
      },
      {
        query: 'anime',
        language: 'string',
        page: 241,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.SEARCH + c_module.Route.MOVIE,
        parems,
        element
      );
      expect(
        await search_entry.GetSearchMovies(
          element.query,
          element.language,
          element.page,
          element.include_adult,
          element.region,
          element.year,
          element.primary_release_year
        )
      ).toBe(answer);
    });
  });
  test('search.GetMultiSearch', () => {
    const parems = GetParams(search_entry.GetMultiSearch);
    const cases = [
      {
        query: 'fantasy',
        language: 'string',
        page: 241,
        include_adult: true,
        region: 'joiawa',
      },
      {
        query: '',
        language: 'string',
        include_adult: true,
        region: undefined,
      },
      {
        query: 'anime',
        language: 'string',
        page: 241,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.SEARCH + 'multi',
        parems,
        element
      );
      expect(
        await search_entry.GetMultiSearch(
          element.query,
          element.language,
          element.page,
          element.include_adult,
          element.region
        )
      ).toBe(answer);
    });
  });
  test('search.GetSearchPeople', () => {
    const parems = GetParams(search_entry.GetSearchPeople);
    const cases = [
      {
        query: 'fantasy',
        language: 'string',
        page: 241,
        include_adult: true,
        region: 'jiaodw',
      },
      {
        query: '',
        language: 'string',
        include_adult: true,
        region: undefined,
      },
      {
        query: 'anime',
        language: 'string',
        page: 241,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.SEARCH + c_module.Route.PEOPLE,
        parems,
        element
      );
      expect(
        await search_entry.GetSearchPeople(
          element.query,
          element.language,
          element.page,
          element.include_adult,
          element.region
        )
      ).toBe(answer);
    });
  });
  test('search.GetSearchTVShows', () => {
    const parems = GetParams(search_entry.GetSearchTVShows);
    const cases = [
      {
        query: 'fantasy',
        language: 'string',
        page: 241,
        include_adult: true,
        first_air_date_year: 1996,
      },
      {
        query: '',
        language: 'string',
        include_adult: true,
        first_air_date_year: undefined,
      },
      {
        query: 'anime',
        language: 'string',
        page: 241,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.SEARCH + c_module.Route.TV,
        parems,
        element
      );
      expect(
        await search_entry.GetSearchTVShows(
          element.query,
          element.language,
          element.page,
          element.include_adult,
          element.first_air_date_year
        )
      ).toBe(answer);
    });
  });
});
describe('Get URLs funciton request: Trending', () => {
  test('trending.GetTrending', () => {
    const parems = GetParams(trending_entry.GetTrending);
    const cases = [
      {
        media_type: 'dafdsgd',
        time_window: 'fsrgdtfhbvc',
      },
      {
        media_type: 'oiluyktjrh',
        time_window: 'tfygukhj',
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.TRENDING + '{media_type}' + '/{time_window}',
        parems,
        element
      );
      expect(
        await trending_entry.GetTrending(
          element.media_type,
          element.time_window
        )
      ).toBe(answer);
    });
  });
});
describe('Get URLs funciton request: TVepisodes', () => {
  test('tvepisodes.GetDetails', () => {
    const parems = GetParams(tvepisodes_entry.GetDetails);
    const cases = [
      {
        tv_id: 454866321,
        season_number: '453786',
        episode_number: 'sefgrthtyr',
        language: 'en-US',
        append_to_response: '10-25',
      },
      {
        tv_id: 454866321,
        season_number: 1234874120,
        episode_number: 'asfdertyh',
        language: 'undefined',
        append_to_response: undefined,
      },
      {
        tv_id: 454866321,
        season_number: 44215423,
        episode_number: 'dassfsgfd',
        language: undefined,
        append_to_response: undefined,
      },
      {
        tv_id: 454866321,
        season_number: '10-25',
        episode_number: '687453',
        language: undefined,
        append_to_response: undefined,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` +
          c_module.Route.TV +
          '{tv_id}/' +
          'season/' +
          '{season_number}/' +
          c_module.Route.EPISODE +
          '{episode_number}',
        parems,
        element
      );
      expect(
        await tvepisodes_entry.GetDetails(
          element.tv_id,
          element.season_number,
          element.episode_number,
          element.language,
          element.append_to_response
        )
      ).toBe(answer);
    });
  });
  test('tvepisodes.GetAccountStates', () => {
    const parems = GetParams(tvepisodes_entry.GetAccountStates);
    const cases = [
      {
        tv_id: 454866321,
        season_number: '453786',
        episode_number: 'sefgrthtyr',
        guest_session_id: 'en-US',
        session_id: '10-25',
      },
      {
        tv_id: 454866321,
        season_number: 1234874120,
        episode_number: 'asfdertyh',
        guest_session_id: 'undefined',
        session_id: undefined,
      },
      {
        tv_id: 454866321,
        season_number: 44215423,
        episode_number: 'dassfsgfd',
        guest_session_id: undefined,
        session_id: undefined,
      },
      {
        tv_id: 454866321,
        season_number: '10-25',
        episode_number: '687453',
        guest_session_id: undefined,
        session_id: undefined,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` +
          c_module.Route.TV +
          '{tv_id}/' +
          'season/' +
          '{season_number}/' +
          c_module.Route.EPISODE +
          '{episode_number}' +
          '/account_states',
        parems,
        element
      );
      expect(
        await tvepisodes_entry.GetAccountStates(
          element.tv_id,
          element.season_number,
          element.episode_number,
          element.guest_session_id,
          element.session_id
        )
      ).toBe(answer);
    });
  });
  test('tvepisodes.GetChanges', () => {
    const parems = GetParams(tvepisodes_entry.GetChanges);
    const cases = [
      {
        episode_id: 454866321,
        start_date: '10-25',
        end_date: '11-06',
        page: 1,
      },
      {
        episode_id: 454866321,
        start_date: undefined,
        end_date: '8-21',
      },
      {
        episode_id: 454866321,
        start_date: undefined,
        end_date: undefined,
        page: undefined,
      },
      {
        episode_id: 454866321,
        start_date: undefined,
        end_date: undefined,
        page: 1,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` +
          c_module.Route.TV +
          c_module.Route.EPISODE +
          '{episode_id}/' +
          'changes',
        parems,
        element
      );
      expect(
        await tvepisodes_entry.GetChanges(
          element.episode_id,
          element.start_date,
          element.end_date,
          element.page
        )
      ).toBe(answer);
    });
  });
  test('tvepisodes.GetCredits', () => {
    const parems = GetParams(tvepisodes_entry.GetCredits);
    const cases = [
      {
        tv_id: 454866321,
        season_number: '453786',
        episode_number: 'sefgrthtyr',
        language: 'en-US',
      },
      {
        tv_id: 454866321,
        season_number: 1234874120,
        episode_number: 'asfdertyh',
        language: 'undefined',
      },
      {
        tv_id: 454866321,
        season_number: 44215423,
        episode_number: 'dassfsgfd',
        language: undefined,
      },
      {
        tv_id: 454866321,
        season_number: '10-25',
        episode_number: '687453',
        language: undefined,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` +
          c_module.Route.TV +
          '{tv_id}/' +
          'season/' +
          '{season_number}/' +
          c_module.Route.EPISODE +
          '{episode_number}' +
          '/credits',
        parems,
        element
      );
      expect(
        await tvepisodes_entry.GetCredits(
          element.tv_id,
          element.season_number,
          element.episode_number,
          element.language
        )
      ).toBe(answer);
    });
  });
  test('tvepisodes.GetExternalIDs', () => {
    const parems = GetParams(tvepisodes_entry.GetExternalIDs);
    const cases = [
      {
        tv_id: 454866321,
        season_number: '453786',
        episode_number: 'sefgrthtyr',
      },
      {
        tv_id: 454866321,
        season_number: 1234874120,
        episode_number: 'asfdertyh',
      },
      {
        tv_id: 454866321,
        season_number: 44215423,
        episode_number: 'dassfsgfd',
      },
      {
        tv_id: 454866321,
        season_number: '10-25',
        episode_number: '687453',
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` +
          c_module.Route.TV +
          '{tv_id}/' +
          'season/' +
          '{season_number}/' +
          c_module.Route.EPISODE +
          '{episode_number}' +
          '/external_ids',
        parems,
        element
      );
      expect(
        await tvepisodes_entry.GetExternalIDs(
          element.tv_id,
          element.season_number,
          element.episode_number
        )
      ).toBe(answer);
    });
  });
  test('tvepisodes.GetImages', () => {
    const parems = GetParams(tvepisodes_entry.GetImages);
    const cases = [
      {
        tv_id: 454866321,
        season_number: '453786',
        episode_number: 'sefgrthtyr',
      },
      {
        tv_id: 454866321,
        season_number: 1234874120,
        episode_number: 'asfdertyh',
      },
      {
        tv_id: 454866321,
        season_number: 44215423,
        episode_number: 'dassfsgfd',
      },
      {
        tv_id: 454866321,
        season_number: '10-25',
        episode_number: '687453',
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` +
          c_module.Route.TV +
          '{tv_id}/' +
          'season/' +
          '{season_number}/' +
          c_module.Route.EPISODE +
          '{episode_number}' +
          '/images',
        parems,
        element
      );
      expect(
        await tvepisodes_entry.GetImages(
          element.tv_id,
          element.season_number,
          element.episode_number
        )
      ).toBe(answer);
    });
  });
  test('tvepisodes.GetTranslations', () => {
    const parems = GetParams(tvepisodes_entry.GetTranslations);
    const cases = [
      {
        tv_id: 454866321,
        season_number: '453786',
        episode_number: 'sefgrthtyr',
      },
      {
        tv_id: 454866321,
        season_number: 1234874120,
        episode_number: 'asfdertyh',
      },
      {
        tv_id: 454866321,
        season_number: 44215423,
        episode_number: 'dassfsgfd',
      },
      {
        tv_id: 454866321,
        season_number: '10-25',
        episode_number: '687453',
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` +
          c_module.Route.TV +
          '{tv_id}/' +
          'season/' +
          '{season_number}/' +
          c_module.Route.EPISODE +
          '{episode_number}' +
          '/translations',
        parems,
        element
      );
      expect(
        await tvepisodes_entry.GetTranslations(
          element.tv_id,
          element.season_number,
          element.episode_number
        )
      ).toBe(answer);
    });
  });
  test('tvepisodes.PostRateTVEpisode', () => {
    const parems = GetParams(tvepisodes_entry.PostRateTVEpisode);
    const cases = [
      {
        tv_id: 454866321,
        season_number: '453786',
        episode_number: 'sefgrthtyr',
        guest_session_id: undefined,
        session_id: undefined,
      },
      {
        tv_id: 454866321,
        season_number: 1234874120,
        episode_number: 'asfdertyh',
        guest_session_id: undefined,
        session_id: '687453',
      },
      {
        tv_id: 454866321,
        season_number: 44215423,
        episode_number: 'dassfsgfd',
        session_id: undefined,
      },
      {
        tv_id: 454866321,
        season_number: '10-25',
        episode_number: '687453',
        guest_session_id: '687453',
        session_id: undefined,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` +
          c_module.Route.TV +
          '{tv_id}/' +
          'season/' +
          '{season_number}/' +
          c_module.Route.EPISODE +
          '{episode_number}' +
          '/rating',
        parems,
        element
      );
      expect(
        await tvepisodes_entry.PostRateTVEpisode(
          element.tv_id,
          element.season_number,
          element.episode_number,
          {},
          element.session_id,
          element.guest_session_id
        )
      ).toBe(answer);
    });
  });
  test('tvepisodes.DeleteDeleteRating', () => {
    const parems = GetParams(tvepisodes_entry.DeleteDeleteRating);
    const cases = [
      {
        tv_id: 454866321,
        season_number: '453786',
        episode_number: 'sefgrthtyr',
        guest_session_id: undefined,
        session_id: undefined,
      },
      {
        tv_id: 454866321,
        season_number: 1234874120,
        episode_number: 'asfdertyh',
        guest_session_id: undefined,
        session_id: '687453',
      },
      {
        tv_id: 454866321,
        season_number: 44215423,
        episode_number: 'dassfsgfd',
        session_id: undefined,
      },
      {
        tv_id: 454866321,
        season_number: '10-25',
        episode_number: '687453',
        guest_session_id: '687453',
        session_id: undefined,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` +
          c_module.Route.TV +
          '{tv_id}/' +
          'season/' +
          '{season_number}/' +
          c_module.Route.EPISODE +
          '{episode_number}' +
          '/rating',
        parems,
        element
      );
      expect(
        await tvepisodes_entry.DeleteDeleteRating(
          element.tv_id,
          element.season_number,
          element.episode_number,
          element.session_id,
          element.guest_session_id
        )
      ).toBe(answer);
    });
  });
  test('tvepisodes.GetVideos', () => {
    const parems = GetParams(tvepisodes_entry.GetVideos);
    const cases = [
      {
        tv_id: 454866321,
        season_number: '453786',
        episode_number: 'sefgrthtyr',
        language: undefined,
      },
      {
        tv_id: 454866321,
        season_number: 1234874120,
        episode_number: 'asfdertyh',
        language: undefined,
      },
      {
        tv_id: 454866321,
        season_number: 44215423,
        episode_number: 687453,
        language: 'dassfsgfd',
      },
      {
        tv_id: 454866321,
        season_number: '10-25',
        episode_number: '687453',
        language: '687453',
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` +
          c_module.Route.TV +
          '{tv_id}/' +
          'season/' +
          '{season_number}/' +
          c_module.Route.EPISODE +
          '{episode_number}' +
          '/videos',
        parems,
        element
      );
      expect(
        await tvepisodes_entry.GetVideos(
          element.tv_id,
          element.season_number,
          element.episode_number,
          element.language
        )
      ).toBe(answer);
    });
  });
});
describe('Get URLs funciton request: TVepisodesgroups', () => {
  test('tvepisodesgroups.GetDetails', () => {
    const parems = GetParams(tvepisodesgroups_entry.GetDetails);
    const cases = [
      {
        id: 4683545,
        language: undefined,
      },
      {
        id: 'sdfcgv',
        language: 'en_US',
      },
      {
        id: '78654',
        language: 'none_language',
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.TV + c_module.Route.EPISODEGROUPS + '{id}',
        parems,
        element
      );
      expect(
        await tvepisodesgroups_entry.GetDetails(element.id, element.language)
      ).toBe(answer);
    });
  });
});
describe('Get URLs funciton request: TVseasons', () => {
  test('tvseasons.GetDetails', () => {
    const parems = GetParams(tvseasons_entry.GetDetails);
    const cases = [
      {
        tv_id: 454866321,
        season_number: '453786',
        language: 'en-US',
        append_to_response: '10-25',
      },
      {
        tv_id: 454866321,
        season_number: 1234874120,
        append_to_response: '10-25',
      },
      {
        tv_id: 454866321,
        season_number: 44215423,
        language: 'en-US',
      },
      {
        tv_id: 454866321,
        season_number: '10-25',
        language: 'undefined',
        append_to_response: undefined,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` +
          c_module.Route.TV +
          '{tv_id}/' +
          'season/' +
          '{season_number}',
        parems,
        element
      );
      expect(
        await tvseasons_entry.GetDetails(
          element.tv_id,
          element.season_number,
          element.language,
          element.append_to_response
        )
      ).toBe(answer);
    });
  });
  test('tvseasons.GetAccountStates', () => {
    const parems = GetParams(tvseasons_entry.GetAccountStates);
    const cases = [
      {
        tv_id: 454866321,
        season_number: '453786',
        session_id: 'sefgrthtyr',
        language: 'en-US',
        guest_session_id: '10-25',
      },
      {
        tv_id: 454866321,
        season_number: 1234874120,
        session_id: 'asfdertyh',
        language: 'undefined',
        guest_session_id: undefined,
      },
      {
        tv_id: 454866321,
        season_number: 44215423,
        session_id: 'dassfsgfd',
        language: undefined,
        guest_session_id: undefined,
      },
      {
        tv_id: 454866321,
        season_number: '10-25',
        session_id: '687453',
        language: undefined,
        guest_session_id: undefined,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` +
          c_module.Route.TV +
          '{tv_id}/' +
          'season/' +
          '{season_number}' +
          '/account_states',
        parems,
        element
      );
      expect(
        await tvseasons_entry.GetAccountStates(
          element.tv_id,
          element.season_number,
          element.session_id,
          element.language,
          element.guest_session_id
        )
      ).toBe(answer);
    });
  });
  test('tvseasons.GetAggregateCredits', () => {
    const parems = GetParams(tvseasons_entry.GetAggregateCredits);
    const cases = [
      {
        tv_id: 531846,
        season_number: 'awdsefrd',
        language: 'en_US',
      },
      {
        tv_id: '531846',
        season_number: 315165,
        language: undefined,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` +
          c_module.Route.TV +
          '{tv_id}/' +
          'season/' +
          '{season_number}' +
          '/aggregate_credits',
        parems,
        element
      );
      expect(
        await tvseasons_entry.GetAggregateCredits(
          element.tv_id,
          element.season_number,
          element.language
        )
      ).toBe(answer);
    });
  });
  test('tvseasons.GetChanges', () => {
    const parems = GetParams(tvseasons_entry.GetChanges);
    const cases = [
      {
        season_id: 454866321,
        start_date: '10-25',
        end_date: '11-06',
        page: 1,
      },
      {
        season_id: 454866321,
        start_date: undefined,
        end_date: '8-21',
      },
      {
        season_id: 454866321,
        start_date: undefined,
        end_date: undefined,
        page: undefined,
      },
      {
        season_id: 454866321,
        start_date: undefined,
        end_date: undefined,
        page: 1,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.TV + 'season/' + '{season_id}' + '/changes',
        parems,
        element
      );
      expect(
        await tvseasons_entry.GetChanges(
          element.season_id,
          element.start_date,
          element.end_date,
          element.page
        )
      ).toBe(answer);
    });
  });
  test('tvseasons.GetCredits', () => {
    const parems = GetParams(tvseasons_entry.GetCredits);
    const cases = [
      {
        tv_id: 531846,
        season_number: 'awdsefrd',
        language: 'en_US',
      },
      {
        tv_id: '531846',
        season_number: 315165,
        language: undefined,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` +
          c_module.Route.TV +
          '{tv_id}/' +
          'season/' +
          '{season_number}' +
          '/credits',
        parems,
        element
      );
      expect(
        await tvseasons_entry.GetCredits(
          element.tv_id,
          element.season_number,
          element.language
        )
      ).toBe(answer);
    });
  });
  test('tvseasons.GetExternalIDs', () => {
    const parems = GetParams(tvseasons_entry.GetExternalIDs);
    const cases = [
      {
        tv_id: 531846,
        season_number: 'awdsefrd',
        language: 'en_US',
      },
      {
        tv_id: '531846',
        season_number: 315165,
        language: undefined,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` +
          c_module.Route.TV +
          '{tv_id}/' +
          'season/' +
          '{season_number}' +
          '/external_ids',
        parems,
        element
      );
      expect(
        await tvseasons_entry.GetExternalIDs(
          element.tv_id,
          element.season_number,
          element.language
        )
      ).toBe(answer);
    });
  });
  test('tvseasons.GetImages', () => {
    const parems = GetParams(tvseasons_entry.GetImages);
    const cases = [
      {
        tv_id: 531846,
        season_number: 'awdsefrd',
        language: 'en_US',
      },
      {
        tv_id: '531846',
        season_number: 315165,
        language: undefined,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` +
          c_module.Route.TV +
          '{tv_id}/' +
          'season/' +
          '{season_number}' +
          '/images',
        parems,
        element
      );
      expect(
        await tvseasons_entry.GetImages(
          element.tv_id,
          element.season_number,
          element.language
        )
      ).toBe(answer);
    });
  });
  test('tvseasons.GetTranslations', () => {
    const parems = GetParams(tvseasons_entry.GetTranslations);
    const cases = [
      {
        tv_id: 531846,
        season_number: 'awdsefrd',
        language: 'en_US',
      },
      {
        tv_id: '531846',
        season_number: 315165,
        language: undefined,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` +
          c_module.Route.TV +
          '{tv_id}/' +
          'season/' +
          '{season_number}' +
          '/translations',
        parems,
        element
      );
      expect(
        await tvseasons_entry.GetTranslations(
          element.tv_id,
          element.season_number,
          element.language
        )
      ).toBe(answer);
    });
  });
  test('tvseasons.GetVideos', () => {
    const parems = GetParams(tvseasons_entry.GetVideos);
    const cases = [
      {
        tv_id: 531846,
        season_number: 'awdsefrd',
        language: 'en_US',
      },
      {
        tv_id: '531846',
        season_number: 315165,
        language: undefined,
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` +
          c_module.Route.TV +
          '{tv_id}/' +
          'season/' +
          '{season_number}' +
          '/videos',
        parems,
        element
      );
      expect(
        await tvseasons_entry.GetVideos(
          element.tv_id,
          element.season_number,
          element.language
        )
      ).toBe(answer);
    });
  });
});
describe('Get URLs funciton request: Watchproviders', () => {
  test('watchproviders.GetAvailableRegions', () => {
    const parems = GetParams(watchproviders_entry.GetAvailableRegions);
    const cases = [
      {
        language: undefined,
      },
      {
        language: 'en_US',
      },
      {
        language: 'none_language',
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.WATCHPROVIDERS + 'regions',
        parems,
        element
      );
      expect(
        await watchproviders_entry.GetAvailableRegions(element.language)
      ).toBe(answer);
    });
  });
  test('watchproviders.GetMovieProviders', () => {
    const parems = GetParams(watchproviders_entry.GetMovieProviders);
    const cases = [
      {
        language: undefined,
        watch_region: undefined,
      },
      {
        language: 'undefined',
        watch_region: 'en_US',
      },
      {
        language: 'en_US',
        watch_region: undefined,
      },
      {
        language: undefined,
        watch_region: 'undefined',
      },
      {
        language: undefined,
        watch_region: 'assegrgjgfu',
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.WATCHPROVIDERS + c_module.Route.MOVIE,
        parems,
        element
      );
      expect(
        await watchproviders_entry.GetMovieProviders(
          element.language,
          element.watch_region
        )
      ).toBe(answer);
    });
  });
  test('watchproviders.GetTVProviders', () => {
    const parems = GetParams(watchproviders_entry.GetTVProviders);
    const cases = [
      {
        language: undefined,
        watch_region: undefined,
      },
      {
        language: 'undefined',
        watch_region: 'en_US',
      },
      {
        language: 'en_US',
        watch_region: undefined,
      },
      {
        language: undefined,
        watch_region: 'undefined',
      },
      {
        language: undefined,
        watch_region: 'assegrgjgfu',
      },
    ];
    cases.forEach(async element => {
      const answer = GetReturnString(
        `${URL}` + c_module.Route.WATCHPROVIDERS + c_module.Route.TV,
        parems,
        element
      );
      expect(
        await watchproviders_entry.GetTVProviders(
          element.language,
          element.watch_region
        )
      ).toBe(answer);
    });
  });
});
