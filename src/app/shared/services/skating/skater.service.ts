import {AbstractService} from './abstract.service';
import {Skater} from '../../models/skating/Skater';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SkaterService extends AbstractService {

  /**
   * @returns a list of skaters
   * @param args
   */
  find(args: { givenName?: string, familyName?: string, country?: string, gender?: string } = null): Skater[] {

    this.requestService.get('skater_lookup', args).subscribe((skaters) => {
      console.log(skaters);
      return skaters;
    });

    return [];
  }
}
