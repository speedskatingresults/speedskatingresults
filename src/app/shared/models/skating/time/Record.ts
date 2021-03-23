import {Moment} from 'moment';
import {Skater} from '../Skater';

/**
 * Returns a record for the: World records, National records & Olympic records
 */
export class Record {
    gender: string;
    age: string;
    distance: number;
    time: string;
    date: Moment;
    location: string;
    skater: Skater;
}
