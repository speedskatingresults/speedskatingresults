import {Moment} from "moment";

/**
 * Returns a skater's results for a distance.
 */
export class Result {
    time: number;
    date: Moment;
    location: string;
    name: string;
    link: string;
}
