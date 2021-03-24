import {Injectable} from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class Params {

    format(params: object): string {

        let string: string;

        for (const [key, value] of Object.entries(params)) {
            console.log(key, value);
        }

        return string;
    }
}
