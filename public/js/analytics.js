/**
 * PEAKE MANAGEMENT | ANALYTICS INITIALIZATION
 * Externalized to satisfy CSP requirements and updated for GDPR compliance.
 */

const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // TODO: User should replace with real ID
const CLARITY_ID = 'XXXXXXXXXX'; // TODO: User should replace with real ID

/**
 * Initializes tracking scripts only after user consent.
 */
window.peakeInitTracking = function (force = false) {
    // Check if consent has already been given or if forced (e.g., just clicked Accept)
    const hasConsent = document.cookie.split('; ').find(row => row.startsWith('peake-consent=true'));

    if (!hasConsent && !force) return;

    // --- GOOGLE ANALYTICS 4 ---
    if (!window.gtag_initialized) {
        const gaScript = document.createElement('script');
        gaScript.async = true;
        gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
        document.head.appendChild(gaScript);

        window.dataLayer = window.dataLayer || [];
        window.gtag = function () { dataLayer.push(arguments); };
        gtag('js', new Date());
        gtag('config', GA_MEASUREMENT_ID);
        window.gtag_initialized = true;
    }

    // --- MICROSOFT CLARITY ---
    if (!window.clarity_initialized && CLARITY_ID !== 'XXXXXXXXXX') {
        (function (c, l, a, r, i, t, y) {
            c[a] = c[a] || function () { (c[a].q = c[a].q || []).push(arguments) };
            t = l.createElement(r); t.async = 1; t.src = "https://www.clarity.ms/tag/" + i;
            y = l.getElementsByTagName(r)[0]; y.parentNode.insertBefore(t, y);
        })(window, document, "clarity", "script", CLARITY_ID);
        window.clarity_initialized = true;
    }

    console.log('Peake Analytics: Tracking scripts initialized.');
};

// Auto-run on load if consent already exists
window.addEventListener('load', () => window.peakeInitTracking());
