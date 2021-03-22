const forEach = require('lodash/forEach');
const isObject = require('lodash/isObject');
const {colors} = require('tailwindcss/defaultTheme');

module.exports = {

    // Experimental
    experimental: {
        applyComplexClasses : true,
        extendedSpacingScale: true
    },

    // Future
    future: {
        removeDeprecatedGapUtilities: true
    },

    // PurgeCSS
    purge: false,

    // Options
    important: true,

    // Theme
    theme: {
        colors  : {
            current    : 'currentColor',
            transparent: 'transparent',
            white      : '#FFFFFF',
            black      : '#000000',
            gray       : {
                '50'   : '#F9FAFB',
                '100'  : '#F4F5F7',
                '200'  : '#E5E7EB',
                '300'  : '#D2D6DC',
                '400'  : '#9FA6B2',
                '500'  : '#6B7280',
                default: '#6B7280',
                '600'  : '#4B5563',
                '700'  : '#374151',
                '800'  : '#252F3F',
                '900'  : '#161E2E'
            },
            'cool-gray': {
                '50'   : '#FBFDFE',
                '100'  : '#F1F5F9',
                '200'  : '#E2E8F0',
                '300'  : '#CFD8E3',
                '400'  : '#97A6BA',
                '500'  : '#64748B',
                default: '#64748B',
                '600'  : '#475569',
                '700'  : '#364152',
                '800'  : '#27303F',
                '900'  : '#1A202E'
            },
            red        : {
                '50'   : '#FDF2F2',
                '100'  : '#FDE8E8',
                '200'  : '#FBD5D5',
                '300'  : '#F8B4B4',
                '400'  : '#F98080',
                '500'  : '#F05252',
                default: '#F05252',
                '600'  : '#E02424',
                '700'  : '#C81E1E',
                '800'  : '#9B1C1C',
                '900'  : '#771D1D'
            },
            orange     : {
                '50'   : '#FFF8F1',
                '100'  : '#FEECDC',
                '200'  : '#FCD9BD',
                '300'  : '#FDBA8C',
                '400'  : '#FF8A4C',
                '500'  : '#FF5A1F',
                default: '#FF5A1F',
                '600'  : '#D03801',
                '700'  : '#B43403',
                '800'  : '#8A2C0D',
                '900'  : '#771D1D'
            },
            yellow     : {
                '50'   : '#FDFDEA',
                '100'  : '#FDF6B2',
                '200'  : '#FCE96A',
                '300'  : '#FACA15',
                '400'  : '#E3A008',
                '500'  : '#C27803',
                default: '#C27803',
                '600'  : '#9F580A',
                '700'  : '#8E4B10',
                '800'  : '#723B13',
                '900'  : '#633112'
            },
            green      : {
                '50'   : '#F3FAF7',
                '100'  : '#DEF7EC',
                '200'  : '#BCF0DA',
                '300'  : '#84E1BC',
                '400'  : '#31C48D',
                '500'  : '#0E9F6E',
                default: '#0E9F6E',
                '600'  : '#057A55',
                '700'  : '#046C4E',
                '800'  : '#03543F',
                '900'  : '#014737'
            },
            teal       : {
                '50'   : '#EDFAFA',
                '100'  : '#D5F5F6',
                '200'  : '#AFECEF',
                '300'  : '#7EDCE2',
                '400'  : '#16BDCA',
                '500'  : '#0694A2',
                default: '#0694A2',
                '600'  : '#047481',
                '700'  : '#036672',
                '800'  : '#05505C',
                '900'  : '#014451'
            },
            blue       : {
                '50'   : '#EBF5FF',
                '100'  : '#E1EFFE',
                '200'  : '#C3DDFD',
                '300'  : '#A4CAFE',
                '400'  : '#76A9FA',
                '500'  : '#3F83F8',
                default: '#3F83F8',
                '600'  : '#1C64F2',
                '700'  : '#1A56DB',
                '800'  : '#1E429F',
                '900'  : '#233876'
            },
            indigo     : {
                '50'   : '#F0F5FF',
                '100'  : '#E5EDFF',
                '200'  : '#CDDBFE',
                '300'  : '#B4C6FC',
                '400'  : '#8DA2FB',
                '500'  : '#6875F5',
                default: '#6875F5',
                '600'  : '#5850EC',
                '700'  : '#5145CD',
                '800'  : '#42389D',
                '900'  : '#362F78'
            },
            purple     : {
                '50'   : '#F6F5FF',
                '100'  : '#EDEBFE',
                '200'  : '#DCD7FE',
                '300'  : '#CABFFD',
                '400'  : '#AC94FA',
                '500'  : '#9061F9',
                default: '#9061F9',
                '600'  : '#7E3AF2',
                '700'  : '#6C2BD9',
                '800'  : '#5521B5',
                '900'  : '#4A1D96'
            },
            pink       : {
                '50'   : '#FDF2F8',
                '100'  : '#FCE8F3',
                '200'  : '#FAD1E8',
                '300'  : '#F8B4D9',
                '400'  : '#F17EB8',
                '500'  : '#E74694',
                default: '#E74694',
                '600'  : '#D61F69',
                '700'  : '#BF125D',
                '800'  : '#99154B',
                '900'  : '#751A3D'
            }
        },
        fontSize: {
            'xs'  : '0.625rem',
            'sm'  : '0.75rem',
            'md'  : '0.8125rem',
            'base': '0.875rem',
            'lg'  : '1rem',
            'xl'  : '1.125rem',
            '2xl' : '1.25rem',
            '3xl' : '1.5rem',
            '4xl' : '2rem',
            '5xl' : '2.25rem',
            '6xl' : '2.5rem',
            '7xl' : '3rem',
            '8xl' : '4rem',
            '9xl' : '6rem',
            '10xl': '8rem'
        },
        screens : {
            // XSmall
            'xs'   : {
                min: '0',
                max: '599px'
            },
            // Small
            'sm'   : {
                min: '600px',
                max: '959px'
            },
            // Medium
            'md'   : {
                min: '960px',
                max: '1279px'
            },
            // Large
            'lg'   : {
                min: '1280px',
                max: '1439px'
            },
            // XLarge
            'xl'   : {
                min: '1440px'
            },
            // Less than Medium
            'lt-md': {
                max: '959px'
            },
            // Less than Large
            'lt-lg': {
                max: '1279px'
            },
            // Less than XLarge
            'lt-xl': {
                max: '1439px'
            },
            // Greater than XSmall
            'gt-xs': {
                min: '600px'
            },
            // Greater than Small
            'gt-sm': {
                min: '960px'
            },
            // Greater than Medium
            'gt-md': {
                min: '1280px'
            }
        },
        // Extending default configurations
        extend  : {
            /*
            // Once TailwindCSS adds the above colors to their default config,
            // this code will be used for generating the default colors
            // and the theme.colors object will be removed from above
            colors: theme =>
            {
                const defaultColors = colors;

                // Add 'cool-gray' palette
                defaultColors['cool-gray'] = {
                    '50' : '#FBFDFE',
                    '100': '#F1F5F9',
                    '200': '#E2E8F0',
                    '300': '#CFD8E3',
                    '400': '#97A6BA',
                    '500': '#64748B',
                    '600': '#475569',
                    '700': '#364152',
                    '800': '#27303F',
                    '900': '#1A202E'
                };

                // Extend the colors to add 'default' values that uses the hue 500.
                // This will generate utilities like 'text-indigo' or 'bg-red',
                // which will be defaulted to the hue 500 of that color palette.
                forEach(defaultColors, (value, key) =>
                {
                    if ( isObject(value) )
                    {
                        defaultColors[key]['default'] = defaultColors[key]['500'];
                    }
                });

                // Return the colors
                return defaultColors;
            },
            */

            /*
            // Use this map to define custom contrasting colors for the custom colors
            colorContrasts: theme => ({
                brand-color: {
                    50     : theme('colors.brand-color.900'), // Use the 900 from the 'brand-color' palette as the contrasting color of the 50
                    100    : theme('colors.brand-color.900'),
                    200    : theme('colors.brand-color.900'),
                    300    : theme('colors.brand-color.900'),
                    400    : theme('colors.brand-color.900'),
                    500    : theme('colors.brand-color.900'),
                    600    : theme('colors.brand-color.50'),
                    700    : theme('colors.brand-color.50'),
                    800    : theme('colors.brand-color.50'),
                    900    : theme('colors.brand-color.50'),
                    default: theme('colors.brand-color.900')
                }
            },
            */

            /*
            // Use this map to extend the iconSize utility sizes
            iconSize: {
                8: '8px',
                10: '10px'
            },
            */

            boxShadow : {
                solid: '0 0 0 2px currentColor'
            },
            flex      : {
                '0': '0 0 auto'
            },
            fontFamily: {
                sans: [
                    'Inter var',
                    'system-ui',
                    '-apple-system',
                    'BlinkMacSystemFont',
                    '"Segoe UI"',
                    'Roboto',
                    '"Helvetica Neue"',
                    'Arial',
                    '"Noto Sans"',
                    'sans-serif',
                    '"Apple Color Emoji"',
                    '"Segoe UI Emoji"',
                    '"Segoe UI Symbol"',
                    '"Noto Color Emoji"'
                ],
                mono: [
                    '"IBM Plex Mono"',
                    'Menlo',
                    'Monaco',
                    'Consolas',
                    '"Liberation Mono"',
                    '"Courier New"',
                    'monospace'
                ]
            },
            opacity   : {
                12: '0.12',
                38: '0.38',
                54: '0.54',
                70: '0.70',
                84: '0.84'
            },
            rotate    : {
                '-270': '270deg',
                '15'  : '15deg',
                '30'  : '30deg',
                '60'  : '60deg',
                '270' : '270deg'
            },
            spacing   : {
                '2px': '2px',
                '18' : '4.5rem',
                '22' : '5.5rem',
                '26' : '6.5rem',
                '30' : '7.5rem',
                '50' : '12.5rem',
                '90' : '24rem',
                '100': '25rem',
                '120': '30rem',
                '128': '32rem',
                '140': '35rem',
                '160': '40rem',
                '180': '45rem',
                '192': '48rem',
                '200': '50rem',
                '240': '60rem',
                '256': '64rem',
                '280': '70rem',
                '320': '80rem',
                '360': '90rem',
                '400': '100rem',
                '480': '120rem'
            },
            zIndex    : {
                '-1'   : -1,
                '60'   : 60,
                '70'   : 70,
                '80'   : 80,
                '90'   : 90,
                '99'   : 99,
                '999'  : 999,
                '9999' : 9999,
                '99999': 99999
            },
            minHeight : theme => ({
                ...theme('spacing')
            }),
            maxHeight : {
                none: 'none'
            },
            minWidth  : theme => ({
                screen: '100vw',
                ...theme('spacing')
            }),
            maxWidth  : theme => ({
                screen: '100vw',
                ...theme('spacing')
            })
        }
    },

    // Variants
    variants: {
        accessibility           : ['responsive', 'focus'],
        alignContent            : ['responsive'],
        alignItems              : ['responsive'],
        alignSelf               : ['responsive'],
        backgroundAttachment    : [],
        backgroundClip          : [],
        backgroundColor         : ['dark-light'],
        backgroundImage         : [],
        gradientColorStops      : [],
        backgroundOpacity       : [],
        backgroundPosition      : [],
        backgroundRepeat        : [],
        backgroundSize          : [],
        borderCollapse          : [],
        borderColor             : ['dark-light'],
        borderOpacity           : [],
        borderRadius            : ['responsive'],
        borderStyle             : [],
        borderWidth             : ['responsive', 'first', 'last'],
        boxShadow               : [],
        boxSizing               : [],
        cursor                  : [],
        display                 : ['responsive'],
        divideColor             : [],
        divideOpacity           : [],
        divideStyle             : [],
        divideWidth             : [],
        fill                    : [],
        flex                    : ['responsive'],
        flexDirection           : ['responsive'],
        flexGrow                : ['responsive'],
        flexShrink              : ['responsive'],
        flexWrap                : ['responsive'],
        fontFamily              : [],
        fontSize                : ['responsive'],
        fontSmoothing           : [],
        fontStyle               : [],
        fontWeight              : ['responsive'],
        height                  : ['responsive'],
        inset                   : ['responsive'],
        justifyContent          : ['responsive'],
        letterSpacing           : ['responsive'],
        lineHeight              : ['responsive'],
        listStylePosition       : [],
        listStyleType           : [],
        margin                  : ['responsive'],
        maxHeight               : ['responsive'],
        maxWidth                : ['responsive'],
        minHeight               : ['responsive'],
        minWidth                : ['responsive'],
        objectFit               : ['responsive'],
        objectPosition          : ['responsive'],
        opacity                 : ['responsive', 'hover', 'focus'],
        order                   : ['responsive'],
        outline                 : ['focus'],
        overflow                : ['responsive'],
        overscrollBehavior      : ['responsive'],
        padding                 : ['responsive'],
        placeholderOpacity      : ['focus'],
        pointerEvents           : [],
        position                : ['responsive'],
        resize                  : [],
        space                   : ['responsive'],
        stroke                  : [],
        strokeWidth             : [],
        tableLayout             : [],
        textAlign               : ['responsive'],
        textColor               : ['dark-light'],
        textOpacity             : [],
        textDecoration          : ['hover', 'focus'],
        textTransform           : [],
        userSelect              : [],
        visibility              : ['responsive'],
        whitespace              : ['responsive'],
        width                   : ['responsive'],
        wordBreak               : ['responsive'],
        zIndex                  : ['responsive'],
        gap                     : ['responsive'],
        gridAutoFlow            : ['responsive'],
        gridTemplateColumns     : ['responsive'],
        gridColumn              : ['responsive'],
        gridColumnStart         : ['responsive'],
        gridColumnEnd           : ['responsive'],
        gridTemplateRows        : ['responsive'],
        gridRow                 : ['responsive'],
        gridRowStart            : ['responsive'],
        gridRowEnd              : ['responsive'],
        transform               : ['responsive'],
        transformOrigin         : ['responsive'],
        scale                   : [],
        rotate                  : [],
        translate               : [],
        skew                    : [],
        transitionProperty      : [],
        transitionTimingFunction: [],
        transitionDuration      : [],
        transitionDelay         : [],
        animation               : [],

        // Custom
        iconSize: ['responsive']
    },

    // Core plugins
    corePlugins: {
        appearance      : false,
        container       : false,
        clear           : false,
        float           : false,
        placeholderColor: false,
        verticalAlign   : false
    },

    // Custom plugins
    plugins: [

        // Custom plugins required by Treo
        ...require('../@treo/tailwind/plugins')

        // Other third party and custom plugins can be required here
        // ...
    ]
};
