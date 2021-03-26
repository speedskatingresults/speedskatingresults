import {Injectable} from '@angular/core';
import {RequestService} from './request.service';
import {Skater} from '../models/skating-data/Skater';
import {Competition} from '../models/skating-data/Competition';
import {Result} from '../models/skating-data/Result';
import {Time} from '../models/skating-data/Time';
import {Season} from '../models/skating-data/Season';
import {Record} from '../models/skating-data/Record';

@Injectable({
  providedIn: 'root',
})

/**
 * speedskatingresults.com API Service
 */
export class SpeedSkatingResultsApiService {

  constructor(protected requestService: RequestService) {
  }

  /**
   * @returns a list of skaters
   * @param args
   */
  async getSkaters(args: { givenName?: string, familyName?: string, country?: string, gender?: string } = null): Promise<Skater[]> {
    const skaters = await this.requestService.get('skater_lookup', args);
    return skaters.skaters;
  }

  /**
   * @returns a list of skaters
   * @param search
   */
  async getSkatersWithSearchString(search: string): Promise<Skater[]> {
    let skaters: Skater[] = [];
    const skaterIds = new Set();

    const searchSkaters = async (searchArgs) => {
      if (searchArgs.givenName === '' || searchArgs.familyName === '') {
        return;
      }

      const skaterSearchData = await this.getSkaters(searchArgs);
      const skatersFoundNew = skaterSearchData.filter(d => !skaterIds.has(d.id));
      const skatersFoundAgain = skaterSearchData.filter(d => skaterIds.has(d.id));

      skatersFoundNew.forEach(newSkater => {
        newSkater.searchScore = 0;
        skaterIds.add(newSkater.id);
      });

      skaters = [...skaters, ...skatersFoundNew];

      skatersFoundAgain.forEach(skaterFoundAgain => {
        skaters.forEach(skater => {
          if (skater.id === skaterFoundAgain.id) {
            skater.searchScore += 1;
          }
        });
      });
    };

    const splitSearch = search.split(' ');
    const firstWord = splitSearch.shift();
    const LastWord = splitSearch.join(' ');

    await Promise.all([
      searchSkaters({givenName: firstWord, familyName: LastWord}),
      searchSkaters({familyName: firstWord}),
      searchSkaters({familyName: LastWord}),
      searchSkaters({givenName: firstWord}),
      searchSkaters({givenName: LastWord}),
    ]);


    skaters = skaters.sort((obj1, obj2) => {
      if (obj1.searchScore > obj2.searchScore) {
        return -1;
      }
      if (obj1.searchScore < obj2.searchScore) {
        return 1;
      }
      return 0;
    });

    return skaters;
  }

  /**
   * @returns a list of competitions from a skater
   * Season is latest if empty
   * @param args
   */
  async getCompetitionsFromSkater(args: { skater?: number, season?: number } = null): Promise<Competition[]> {
    const competitions = await this.requestService.get('skater_competitions', args);
    return competitions.competitions;
  }

  /**
   * @returns a list of results for a distance of a skater
   * @param args
   */
  async getResultsFromSkater(args: { skater?: number, distance?: number, season?: number } = null): Promise<Result[]> {
    let results = [];
    let distances = [500, 1000, 1500, 3000, 5000, 10000];

    if (args.distance) {
      distances = [args.distance];
    }

    for (const distance of distances) {
      args.distance = distance;
      const response = await this.requestService.get('skater_results', args);
      response.results.forEach(r => r.distance = args.distance);
      results = [...results, ...response.results];
    }

    results = results.sort((obj1, obj2) => {
      if (obj1.date > obj2.date) {
        return -1;
      }
      if (obj1.date < obj2.date) {
        return 1;
      }
      return 0;
    });

    return results;
  }

  /**
   * @returns a list of personal records from a skater
   * @param args
   */
  async getPersonalRecordsFromSkater(args: { skater?: number, distance?: number } = null): Promise<Time[]> {
    const records = await this.requestService.get('personal_records', args);
    return records.records;
  }

  /**
   * @returns a list of season bests
   * @param args
   */
  async getSeasonBestsFromSkater(args: { skater?: number, start?: number, end?: number, distance?: number } = null): Promise<Season[]> {
    const seasons = await this.requestService.get('season_bests', args);
    return seasons.seasons;
  }

  /**
   * @returns a list of national records
   * @param args
   */
  async getNationalRecords(args: { country?: string, gender?: string, age?: string, distance?: number } = null): Promise<Record[]> {
    const records = await this.requestService.get('country_records', args);
    return records.records;
  }

  /**
   * @returns a list of olympic records
   * @param args
   */
  async getOlympicRecords(args: { gender?: string, distance?: number } = null): Promise<Record[]> {
    const records = await this.requestService.get('olympic_records', args);
    return records.records;
  }

  /**
   * @returns a list of world records
   * @param args
   */
  async getWorldRecords(args: { gender?: string, age: string, distance?: number } = null): Promise<Record[]> {
    const records = await this.requestService.get('world_records', args);
    return records.records;
  }
}
