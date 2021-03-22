import { Injectable } from '@angular/core';
import { cloneDeep } from 'lodash-es';
import { TreoMockApi } from '@treo/lib/mock-api/mock-api.interfaces';
import { TreoMockApiService } from '@treo/lib/mock-api/mock-api.service';
import { dripicons, feather, heroicons, iconsmind, material } from 'app/data/mock/ui/icons/data';

@Injectable({
    providedIn: 'root'
})
export class IconsMockApi implements TreoMockApi
{
    // Private Readonly
    private readonly _dripicons: any;
    private readonly _feather: any;
    private readonly _heroicons: any;
    private readonly _iconsmind: any;
    private readonly _material: any;

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
        this._dripicons = dripicons;
        this._feather = feather;
        this._heroicons = heroicons;
        this._iconsmind = iconsmind;
        this._material = material;

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
        // @ Dripicons icons - GET
        // -----------------------------------------------------------------------------------------------------
        this._treoMockApiService
            .onGet('api/ui/icons/dripicons')
            .reply(() => {
                return [
                    200,
                    {
                        namespace: 'dripicons',
                        name     : 'Dripicons',
                        grid     : 24,
                        list     : cloneDeep(this._dripicons)
                    }
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Feather icons - GET
        // -----------------------------------------------------------------------------------------------------
        this._treoMockApiService
            .onGet('api/ui/icons/feather')
            .reply(() => {
                return [
                    200,
                    {
                        namespace: 'feather',
                        name     : 'Feather',
                        grid     : 24,
                        list     : cloneDeep(this._feather)
                    }
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Heroicons outline icons - GET
        // -----------------------------------------------------------------------------------------------------
        this._treoMockApiService
            .onGet('api/ui/icons/heroicons-outline')
            .reply(() => {
                return [
                    200,
                    {
                        namespace: 'heroicons_outline',
                        name     : 'Heroicons Outline',
                        grid     : 24,
                        list     : cloneDeep(this._heroicons)
                    }
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Heroicons solid icons - GET
        // -----------------------------------------------------------------------------------------------------
        this._treoMockApiService
            .onGet('api/ui/icons/heroicons-solid')
            .reply(() => {
                return [
                    200,
                    {
                        namespace: 'heroicons_solid',
                        name     : 'Heroicons Solid',
                        grid     : 20,
                        list     : cloneDeep(this._heroicons)
                    }
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Iconsmind icons - GET
        // -----------------------------------------------------------------------------------------------------
        this._treoMockApiService
            .onGet('api/ui/icons/iconsmind')
            .reply(() => {
                return [
                    200,
                    {
                        namespace: 'iconsmind',
                        name     : 'Iconsmind',
                        grid     : 40,
                        list     : cloneDeep(this._iconsmind)
                    }
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Material outline icons - GET
        // -----------------------------------------------------------------------------------------------------
        this._treoMockApiService
            .onGet('api/ui/icons/material-outline')
            .reply(() => {
                return [
                    200,
                    {
                        namespace: 'mat_outline',
                        name     : 'Material Outline',
                        grid     : 24,
                        list     : cloneDeep(this._material)
                    }
                ];
            });

        // -----------------------------------------------------------------------------------------------------
        // @ Material twotone icons - GET
        // -----------------------------------------------------------------------------------------------------
        this._treoMockApiService
            .onGet('api/ui/icons/material-twotone')
            .reply(() => {
                return [
                    200,
                    {
                        namespace: '',
                        name     : 'Material Twotone',
                        grid     : 24,
                        list     : cloneDeep(this._material)
                    }
                ];
            });
    }
}
