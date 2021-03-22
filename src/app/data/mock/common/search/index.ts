import { Injectable } from '@angular/core';
import { cloneDeep } from 'lodash-es';
import { TreoNavigationItem, TreoNavigationService } from '@treo/components/navigation';
import { TreoMockApi } from '@treo/lib/mock-api/mock-api.interfaces';
import { TreoMockApiService } from '@treo/lib/mock-api/mock-api.service';
import { defaultNavigation } from 'app/data/mock/common/navigation/data';
import { contacts } from 'app/data/mock/apps/contacts/data';

@Injectable({
    providedIn: 'root'
})
export class SearchMockApi implements TreoMockApi
{
    // Private Readonly
    private readonly _defaultNavigation: TreoNavigationItem[] = defaultNavigation;
    private readonly _contacts: any[] = contacts;

    /**
     * Constructor
     *
     * @param _treoNavigationService
     * @param _treoMockApiService
     */
    constructor(
        private _treoNavigationService: TreoNavigationService,
        private _treoMockApiService: TreoMockApiService
    )
    {
        // Set the data
        this._defaultNavigation = defaultNavigation;
        this._contacts = contacts;

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
        // Get the flat navigation and store it
        const flatNavigation = this._treoNavigationService.getFlatNavigation(this._defaultNavigation);

        // -----------------------------------------------------------------------------------------------------
        // @ Search results - GET
        // -----------------------------------------------------------------------------------------------------
        this._treoMockApiService
            .onPost('api/common/search')
            .reply((request) => {

                // Get the search query
                const query = cloneDeep(request.body.query.toLowerCase());

                // If the search query is an empty string,
                // return an empty array
                if ( query === '' )
                {
                    return [200, {results: []}];
                }

                // Filter the navigation
                const navigationResults = cloneDeep(flatNavigation).filter((item) => {
                    return (item.title.toLowerCase().includes(query) || (item.subtitle && item.subtitle.includes(query)));
                });

                // Filter the contacts
                const contactsResults = cloneDeep(this._contacts).filter((user) => {
                    return user.name.toLowerCase().includes(query);
                });

                // Create the results array
                const results = [];

                // If there are navigation results...
                if ( navigationResults.length > 0 )
                {
                    // Normalize the results while marking the found chars
                    navigationResults.forEach((result) => {

                        // Normalize
                        result['hint'] = result.link;
                        result['resultType'] = 'page';

                        // Mark the found chars
                        const re = new RegExp('(' + query.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&') + ')', 'ig');
                        result.title = result.title.replace(re, '<mark>$1</mark>');
                    });

                    // Add the results
                    results.push(...navigationResults);
                }

                // If there are contacts results...
                if ( contactsResults.length > 0 )
                {
                    // Normalize the results while marking the found chars
                    contactsResults.forEach((result) => {

                        // Normalize
                        result.title = result.name;
                        result.resultType = 'contact';

                        // Make the found chars bold
                        const re = new RegExp('(' + query.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&') + ')', 'ig');
                        result.title = result.title.replace(re, '<mark>$1</mark>');

                        // Add a link
                        result.link = '/apps/contacts/' + result.id;
                    });

                    // Add the results to the results object
                    results.push(...contactsResults);
                }

                // Return the results
                return [200, {results}];
            });
    }
}
