import {AbstractService} from "./abstract.service";
import {Skater} from "../../models/skating/Skater";
import {Injectable} from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class SkaterService extends AbstractService {

    /**
     * @returns a list of skaters
     * @param givenName
     * @param familyName
     * @param country
     * @param gender
     */
    find(givenName: string = null, familyName: string = null, country: string = null, gender: string = null): Skater[] {

        let params = "?familyname=Egberts";

        let request = this.requestService.get("skater_lookup", params).subscribe((skaters) => {

            console.log(skaters);

        });

        return [];

    }
}
