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
  async getSkater(args: { givenName?: string, familyName?: string, country?: string, gender?: string } = null): Promise<Skater[]> {
    const skaters = await this.requestService.get('skater_lookup', args);
    return skaters.skaters;
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
    const results = await this.requestService.get('skater_results', args);
    return results.results;
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
   * @returns a list of seed times
   * @deprecated For some weird reason this one doesnt work
   * @param args
   */
  async getSeedTimesFromSkater(args: { skater?: number, start?: string, end?: string, distance?: number } = null): Promise<Time[]> {
    const times = await this.requestService.get('seed_times', args);
    return times.times;
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
    const records = await this.requestService.get('olympic_records', args);
    return records.records;
  }
}
