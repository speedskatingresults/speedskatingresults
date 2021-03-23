import {Skater} from '../models/skating/Skater';
import {Injectable} from '@angular/core';
import {RequestService} from './request.service';

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
  async skaterLookup(args: { givenName?: string, familyName?: string, country?: string, gender?: string } = null): Promise<Skater[]> {
    const skaters = await this.requestService.get('skater_lookup', args);
    return skaters.skaters;
  }
}
