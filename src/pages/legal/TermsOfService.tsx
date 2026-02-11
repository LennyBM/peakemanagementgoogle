import React, { useEffect } from 'react';
import LegalLayout from './LegalLayout';

const TermsOfService = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <LegalLayout
            title="Terms of Service"
            date="February 5, 2026"
            description="Terms of Service for Peake Management Ltd."
        >
            <p>
                <strong>OVERVIEW</strong><br />
                This website is operated by Peake Management Ltd. Throughout the site, the terms "we", "us" and "our" refer to Peake Management. Peake Management offers this website, including all information, tools and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.
            </p>
            <p>
                By visiting our site and/ or purchasing something from us, you engage in our "Service" and agree to be bound by the following terms and conditions ("Terms of Service", "Terms"), including those additional terms and conditions and policies referenced herein and/or available by hyperlink. These Terms of Service apply to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, and/ or contributors of content.
            </p>

            <h2>1. General Conditions</h2>
            <p>
                We reserve the right to refuse service to anyone for any reason at any time. You understand that your content (not including credit card information), may be transferred unencrypted and involve (a) transmissions over various networks; and (b) changes to conform and adapt to technical requirements of connecting networks or devices. Credit card information is always encrypted during transfer over networks.
            </p>

            <h2>2. Accuracy, Completeness and Timeliness of Information</h2>
            <p>
                We are not responsible if information made available on this site is not accurate, complete or current. The material on this site is provided for general information only and should not be relied upon or used as the sole basis for making decisions without consulting primary, more accurate, more complete or more timely sources of information. Any reliance on the material on this site is at your own risk.
            </p>

            <h2>3. Modifications to the Service and Prices</h2>
            <p>
                Prices for our products are subject to change without notice. We reserve the right at any time to modify or discontinue the Service (or any part or content thereof) without notice at any time.
            </p>

            <h2>4. Products or Services</h2>
            <p>
                We have made every effort to display as accurately as possible the colors and images of our products that appear at the store. We cannot guarantee that your computer monitor's display of any color will be accurate.
            </p>

            <h2>5. Third-Party Links</h2>
            <p>
                Certain content, products and services available via our Service may include materials from third-parties. Third-party links on this site may direct you to third-party websites that are not affiliated with us. We are not responsible for examining or evaluating the content or accuracy and we do not warrant and will not have any liability or responsibility for any third-party materials or websites.
            </p>

            <h2>6. Personal Information</h2>
            <p>
                Your submission of personal information through the store is governed by our Privacy Policy.
            </p>

            <h2>7. Governing Law</h2>
            <p>
                These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of United Kingdom.
            </p>

            <h2>8. Changes to Terms of Service</h2>
            <p>
                You can review the most current version of the Terms of Service at any time at this page. We reserve the right, at our sole discretion, to update, change or replace any part of these Terms of Service by posting updates and changes to our website. It is your responsibility to check our website periodically for changes.
            </p>

            <h2>9. Contact Information</h2>
            <p>
                Questions about the Terms of Service should be sent to us at <a href="mailto:leonard@peakemanagement.com">leonard@peakemanagement.com</a>.
            </p>

        </LegalLayout>
    );
};

export default TermsOfService;
