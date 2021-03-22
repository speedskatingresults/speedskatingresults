import {RequestService} from "../request.service";
import {Injectable} from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class AbstractService {

    constructor(protected requestService: RequestService) {
    }
}
