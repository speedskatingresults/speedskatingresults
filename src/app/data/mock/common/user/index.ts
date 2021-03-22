import { Injectable } from '@angular/core';
import { assign, cloneDeep } from 'lodash-es';
import { TreoMockApi } from '@treo/lib/mock-api/mock-api.interfaces';
import { TreoMockApiService } from '@treo/lib/mock-api/mock-api.service';
import { user as userData } from 'app/data/mock/common/user/data';

@Injectable({
    providedIn: 'root'
})
export class UserMockApi implements TreoMockApi
{
    // Private
    private _user: any;

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
        this._user = userData;

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
        // @ User - GET
        // -----------------------------------------------------------------------------------------------------
        this._treoMockApiService
            .onGet('api/common/user')
            .reply(() => {
                return [
                    200,
                    {
                        user: cloneDeep(this._user)
                    }
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ User - PATCH
        // -----------------------------------------------------------------------------------------------------
        this._treoMockApiService
            .onPatch('api/common/user')
            .reply((request) => {

                // Get the user data
                const user = cloneDeep(request.body.user);

                // Update the user data
                this._user = assign({}, this._user, user);

                return [
                    200,
                    {
                        user: cloneDeep(this._user)
                    }
                ];
            });
    }
}
