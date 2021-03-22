import * as moment from 'moment';

/* tslint:disable:max-line-length */
export const analytics = {
    age                 : {
        series: [35, 65],
        labels: [
            'Under 30',
            'Over 30'
        ]
    },
    averagePurchaseValue: {
        amount: 152.46,
        data  : [
            44.82,
            46.19,
            47.69,
            49.01,
            46.40,
            51.28,
            50.15,
            53.60,
            56.08,
            52.72,
            56.60,
            60.26,
            58.36,
            56.59,
            55.75,
            54.74,
            54.27,
            58.65,
            57.00,
            60.52,
            57.60,
            56.48,
            55.10,
            54.35,
            52.39,
            54.52,
            54.16,
            51.95,
            51.19,
            46.35,
            48.33,
            45.84,
            48.22,
            43.30,
            45.82,
            43.48,
            41.32,
            40.99,
            38.49,
            40.10,
            44.86,
            44.03,
            41.41,
            37.80,
            39.29,
            35.24,
            32.12,
            35.68,
            38.00,
            37.96,
            38.70,
            37.45,
            37.51,
            33.10,
            35.09,
            33.11,
            31.87,
            29.18,
            31.91,
            34.37,
            32.91,
            33.17,
            37.16,
            32.60,
            36.94,
            35.98,
            38.12
        ]
    },
    browsers            : {
        amount: 46085,
        series: [
            {
                name: 'Chrome',
                data: [22939]
            },
            {
                name: 'Firefox',
                data: [12102]
            },
            {
                name: 'Safari',
                data: [8483]
            },
            {
                name: 'Others',
                data: [2561]
            }
        ]
    },
    channels            : {
        amount: 46085,
        series: [
            {
                name: 'Direct',
                data: [27755]
            },
            {
                name: 'Search',
                data: [9839]
            },
            {
                name: 'Referral',
                data: [5942]
            },
            {
                name: 'Social',
                data: [2549]
            }
        ]
    },
    devices             : {
        amount: 46085,
        series: [
            {
                name: 'Desktop',
                data: [26939]
            },
            {
                name: 'Mobile',
                data: [14102]
            },
            {
                name: 'Tablet',
                data: [4483]
            },
            {
                name: 'Others',
                data: [561]
            }
        ]
    },
    gender              : {
        series: [55, 45],
        labels: [
            'Male',
            'Female'
        ]
    },
    language            : {
        series: [75, 25],
        labels: [
            'Non-English',
            'English'
        ]
    },
    newVsReturning      : {
        series: [80, 20],
        labels: [
            'New',
            'Returning'
        ]
    },
    purchases           : {
        amount: 17663,
        data  : [4412, 4345, 4541, 4677, 4322, 4123],
        labels: [
            moment().subtract(47, 'days').format('DD MMM') + ' - ' + moment().subtract(40, 'days').format('DD MMM'),
            moment().subtract(39, 'days').format('DD MMM') + ' - ' + moment().subtract(32, 'days').format('DD MMM'),
            moment().subtract(31, 'days').format('DD MMM') + ' - ' + moment().subtract(24, 'days').format('DD MMM'),
            moment().subtract(23, 'days').format('DD MMM') + ' - ' + moment().subtract(16, 'days').format('DD MMM'),
            moment().subtract(15, 'days').format('DD MMM') + ' - ' + moment().subtract(8, 'days').format('DD MMM'),
            moment().subtract(7, 'days').format('DD MMM') + ' - ' + moment().format('DD MMM')
        ]
    },
    refunds             : {
        amount: 4523.11,
        data  : [
            20.21,
            17.49,
            16.54,
            19.00,
            16.47,
            13.15,
            18.07,
            17.93,
            18.92,
            18.46,
            19.66,
            18.04,
            17.78,
            20.15,
            18.92,
            17.08,
            17.11,
            15.70,
            15.07,
            14.51,
            15.22,
            18.01,
            19.77,
            23.67,
            27.98,
            30.80,
            28.56,
            27.45,
            27.50,
            27.28,
            24.36,
            22.89,
            26.57,
            28.04,
            27.77,
            30.24,
            26.57,
            22.18,
            19.64,
            16.74,
            17.21,
            20.05,
            16.13,
            12.95,
            10.71,
            7.99,
            11.33,
            15.36,
            20.16,
            22.56,
            19.34,
            18.32,
            20.75,
            17.09,
            19.32,
            18.31,
            14.34,
            9.93,
            10.64,
            6.18,
            10.32,
            12.80,
            13.44,
            18.35,
            22.87,
            22.26,
            26.92,
            22.50,
            18.14,
            19.06,
            19.73,
            18.82,
            23.33,
            20.48,
            25.47,
            28.84,
            29.09
        ]
    },
    totalVisits         : {
        amount: 62083,
        data  : [15521, 15519, 15522, 15521],
        labels: [
            moment().subtract(31, 'days').format('DD MMM') + ' - ' + moment().subtract(24, 'days').format('DD MMM'),
            moment().subtract(23, 'days').format('DD MMM') + ' - ' + moment().subtract(16, 'days').format('DD MMM'),
            moment().subtract(15, 'days').format('DD MMM') + ' - ' + moment().subtract(8, 'days').format('DD MMM'),
            moment().subtract(7, 'days').format('DD MMM') + ' - ' + moment().format('DD MMM')
        ]
    },
    uniquePurchases     : {
        amount: 2716,
        data  : [
            48.84,
            53.51,
            52.93,
            49.08,
            50.27,
            48.37,
            44.84,
            40.71,
            41.24,
            45.63,
            44.66,
            38.20,
            39.68,
            41.02,
            39.41,
            35.66,
            38.53,
            38.53,
            40.69,
            38.79,
            42.98,
            46.36,
            43.55,
            40.65,
            36.50,
            33.79,
            31.91,
            29.68,
            29.57,
            33.13,
            37.08,
            35.86,
            37.60,
            39.65,
            39.01,
            34.10,
            37.48,
            39.29,
            38.46,
            37.71,
            40.15,
            35.89,
            31.50,
            31.81,
            30.50,
            25.74,
            28.23,
            28.48,
            30.00,
            32.16,
            32.99,
            37.68,
            35.24,
            39.18,
            41.37,
            41.45,
            43.78,
            39.41,
            39.32,
            43.80,
            42.43,
            43.67,
            38.79,
            43.57,
            41.81,
            44.82,
            46.19,
            47.69,
            49.01,
            46.40,
            51.28,
            50.15,
            53.60,
            56.08,
            52.72,
            56.60,
            60.26
        ]
    },
    uniqueVisitors      : {
        amount: 46085,
        data  : [11577, 11441, 11544, 11523],
        labels: [
            moment().subtract(31, 'days').format('DD MMM') + ' - ' + moment().subtract(24, 'days').format('DD MMM'),
            moment().subtract(23, 'days').format('DD MMM') + ' - ' + moment().subtract(16, 'days').format('DD MMM'),
            moment().subtract(15, 'days').format('DD MMM') + ' - ' + moment().subtract(8, 'days').format('DD MMM'),
            moment().subtract(7, 'days').format('DD MMM') + ' - ' + moment().format('DD MMM')
        ]
    }
};
