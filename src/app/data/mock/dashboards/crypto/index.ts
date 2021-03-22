import { Injectable } from '@angular/core';
import { cloneDeep } from 'lodash-es';
import { TreoMockApi } from '@treo/lib/mock-api/mock-api.interfaces';
import { TreoMockApiService } from '@treo/lib/mock-api/mock-api.service';
import { crypto as cryptoData } from 'app/data/mock/dashboards/crypto/data';

@Injectable({
    providedIn: 'root'
})
export class CryptoMockApi implements TreoMockApi
{
    // Private
    private _crypto: any;

    /**
     * Constructor
     *
     * @param _treoMockApiService
     */
    constructor(
        private _treoMockApiService: TreoMockApiService
    )
    {
        // Set the data
        this._crypto = cryptoData;

        // Register the API endpoints
        this.register();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Register
     */
    register(): void
    {
        // -----------------------------------------------------------------------------------------------------
        // @ Crypto - GET
        // -----------------------------------------------------------------------------------------------------
        this._treoMockApiService
            .onGet('api/dashboards/crypto')
            .reply(() => {

                return [
                    200,
                    cloneDeep(this._crypto)
                ];
            });
    }
}
