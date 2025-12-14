export const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID;

// 1. Initialize PageView
export const pageview = () => {
    if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', 'PageView');
    }
};

// 2. Track Specific Events (Standard & Custom)
export const event = (name, options = {}) => {
    if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', name, options);
    }
};

// 3. Track Custom Events (like 'Login' which isn't standard)
export const customEvent = (name, options = {}) => {
    if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('trackCustom', name, options);
    }
};