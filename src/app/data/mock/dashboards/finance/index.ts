import { Injectable } from '@angular/core';
import { cloneDeep } from 'lodash-es';
import { TreoMockApi } from '@treo/lib/mock-api/mock-api.interfaces';
import { TreoMockApiService } from '@treo/lib/mock-api/mock-api.service';
import { finance as financeData } from 'app/data/mock/dashboards/finance/data';

@Injectable({
    providedIn: 'root'
})
export class FinanceMockApi implements TreoMockApi
{
    // Private
    private _finance: any;

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
        this._finance = financeData;

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
        // @ Sales - GET
        // -----------------------------------------------------------------------------------------------------
        this._treoMockApiService
            .onGet('api/dashboards/finance')
            .reply(() => {

                return [
                    200,
                    cloneDeep(this._finance)
                ];
            });
    }
}
