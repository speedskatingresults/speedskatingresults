import { Injectable } from '@angular/core';
import { assign, cloneDeep } from 'lodash-es';
import { TreoMockApi } from '@treo/lib/mock-api/mock-api.interfaces';
import { TreoMockApiService } from '@treo/lib/mock-api/mock-api.service';
import { TreoMockApiUtils } from '@treo/lib/mock-api/mock-api.utils';
import { shortcuts as shortcutsData } from 'app/data/mock/common/shortcuts/data';

@Injectable({
    providedIn: 'root'
})
export class ShortcutsMockApi implements TreoMockApi
{
    // Private
    private _shortcuts: any;

    /**
     * Constructor
     *
     * @param {TreoMockApiService} _treoMockApiService
     */
    constructor(
        private _treoMockApiService: TreoMockApiService
    )
    {
        // Set the data
        this._shortcuts = shortcutsData;

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
        // @ Shortcuts - GET
        // -----------------------------------------------------------------------------------------------------
        this._treoMockApiService
            .onGet('api/common/shortcuts')
            .reply(() => {
                return [
                    200,
                    {
                        shortcuts: cloneDeep(this._shortcuts)
                    }
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Shortcuts - POST
        // -----------------------------------------------------------------------------------------------------
        this._treoMockApiService
            .onPost('api/common/shortcuts')
            .reply((request) => {

                // Get the shortcut
                const newShortcut = cloneDeep(request.body.shortcut);

                // Generate a new GUID
                newShortcut.id = TreoMockApiUtils.guid();

                // Unshift the new shortcut
                this._shortcuts.unshift(newShortcut);

                return [
                    200,
                    newShortcut
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Shortcuts - PATCH
        // -----------------------------------------------------------------------------------------------------
        this._treoMockApiService
            .onPatch('api/common/shortcuts')
            .reply((request) => {

                // Get the id and shortcut
                const id = request.body.id;
                const shortcut = cloneDeep(request.body.shortcut);

                // Prepare the updated shortcut
                let updatedShortcut = null;

                // Find the shortcut and update it
                this._shortcuts.forEach((item, index, shortcuts) => {

                    if ( item.id === id )
                    {
                        // Update the shortcut
                        shortcuts[index] = assign({}, shortcuts[index], shortcut);

                        // Store the updated shortcut
                        updatedShortcut = shortcuts[index];
                    }
                });

                return [
                    200,
                    updatedShortcut
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Shortcuts - DELETE
        // -----------------------------------------------------------------------------------------------------
        this._treoMockApiService
            .onDelete('api/common/shortcuts')
            .reply((request) => {

                // Get the id
                const id = request.params.get('id');

                // Prepare the deleted shortcut
                let deletedShortcut = null;

                // Find the shortcut
                const index = this._shortcuts.findIndex((item) => item.id === id);

                // Store the deleted shortcut
                deletedShortcut = cloneDeep(this._shortcuts[index]);

                // Delete the shortcut
                this._shortcuts.splice(index, 1);

                return [
                    200,
                    deletedShortcut
                ];
            });
    }
}
