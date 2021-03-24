/* tslint:disable:max-line-length */
import { TreoNavigationItem } from '@treo/components/navigation';


export const defaultNavigation: TreoNavigationItem[] = [
    {
        id      : 'home',
        title   : 'Home',
        type    : 'basic',
        icon    : 'heroicons_outline:home',
        link    : '/home'
    },
    // {
    //     id      : 'results',
    //     title   : 'Results',
    //     type    : 'basic',
    //     icon    : 'heroicons_outline:trending-up',
    //     link    : '/results'
    // },
    {
        id      : 'skaters',
        title   : 'Skaters',
        type    : 'basic',
        icon    : 'heroicons_outline:user-group',
        link    : '/skaters'
    },
    {
        id      : 'countries',
        title   : 'Countries',
        type    : 'basic',
        icon    : 'heroicons_outline:globe',
        link    : '/country'
    },
    {
        id      : 'tracks',
        title   : 'Tracks',
        type    : 'basic',
        icon    : 'heroicons_outline:location-marker',
        link    : '/tracks'
    },
    {
        id      : 'records',
        title   : 'Records',
        type    : 'basic',
        icon    : 'heroicons_outline:star',
        link    : '/records'
    },
    {
        id      : 'season',
        title   : 'Season',
        type    : 'basic',
        icon    : 'feather:cloud-snow',
        link    : '/season'
    },

];

export const horizontalNavigation: TreoNavigationItem[] = defaultNavigation;
// export const horizontalNavigation: TreoNavigationItem[] = [
//     {
//         id      : 'home',
//         title   : 'Home',
//         type    : 'basic',
//         icon    : 'home',
//         link    : '/'
//     }
// ];


// Other themes:
export const compactNavigation: TreoNavigationItem[] = [];
export const futuristicNavigation: TreoNavigationItem[] = [];
