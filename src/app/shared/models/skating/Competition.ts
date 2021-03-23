import {Moment} from 'moment';

/**
 * Get a competition in which a skater competed.
 */
export class Competition {
    id: number;
    name: string;
    startdate: Moment;
    enddate: Moment;
    link: string;
}
