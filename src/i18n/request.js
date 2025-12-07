import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ requestLocale }) => {
    // This typically corresponds to the `[locale]` segment
    let locale = await requestLocale;

    // Ensure that a valid locale is used
    if (!locale || !['en', 'ar', 'fr'].includes(locale)) {
        locale = 'en';
    }

    return {
        locale,
        // This points to your messages folder. 
        // If your "messages" folder is in the root, use "../messages"
        messages: (await import(`../messages/${locale}.json`)).default
    };
});