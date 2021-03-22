import { Layout } from 'app/layout/layout.types';

// Theme type
export type Theme = 'auto' | 'dark' | 'light';

/**
 * AppConfig interface. Update this interface to strictly type your config
 * object.
 */
export interface AppConfig
{
    layout: Layout;
    theme: Theme;
}

/**
 * Default configuration for the entire application. This object is used by
 * 'ConfigService' to set the default configuration.
 *
 * If you need to store global configuration for your app, you can use this
 * object to set the defaults. To access, update and reset the config, use
 * 'ConfigService'.
 */
export const appConfig: AppConfig = {
    layout: 'classy',
    theme : 'light'
};
