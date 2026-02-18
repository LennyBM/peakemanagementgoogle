import React, { useEffect } from 'react';
import LegalLayout from './LegalLayout';

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <LegalLayout
            title="Privacy Policy"
            date="February 5, 2026"
            description="Privacy Policy for Peake Management Ltd. How we collect, use, and protect your data."
        >
            <p>
                This Privacy Policy describes how Peake Management Ltd ("we", "us", or "our") collects, uses, and discloses your Personal Information when you visit specific webpages or make a purchase from <a href="https://www.peakemanagement.com">www.peakemanagement.com</a> (the "Site").
            </p>

            <h2>1. Collecting Personal Information</h2>
            <p>
                When you visit the Site, we collect certain information about your device, your interaction with the Site, and information necessary to process your queries. We may also collect additional information if you contact us for customer support. In this Privacy Policy, we refer to any information that can uniquely identify an individual (including the information below) as "Personal Information".
            </p>
            <ul>
                <li>
                    <strong>Device information:</strong> Examples include version of web browser, IP address, time zone, cookie information, what sites or products you view, search terms, and how you interact with the Site. This is collected automatically to load the Site accurately for you and to perform analytics on Site usage to optimise our Site.
                </li>
                <li>
                    <strong>Order information:</strong> Examples include name, billing address, shipping address, payment information, email address, and phone number. This is collected to provide products or services to you, to process your payment information, arrange for shipping, and provide you with invoices and/or order confirmations.
                </li>
            </ul>

            <h2>2. How We Use Your Personal Information</h2>
            <p>We use your Personal Information to provide our services to you, which includes:</p>
            <ul>
                <li>Offering products and services for sale.</li>
                <li>Processing payments and shipping/fulfillment of your order.</li>
                <li>Keeping you up to date on new products, services, and offers.</li>
                <li>Screening our orders for potential risk or fraud.</li>
            </ul>

            <h2>3. Sharing Personal Information</h2>
            <p>
                We share your Personal Information with service providers to help us provide our services and fulfill our contracts with you. For example:
            </p>
            <ul>
                <li>We use <strong>Google Analytics</strong> to help us understand how our customers use the Site. You can read more about how Google uses your Personal Information <a href="https://policies.google.com/privacy?hl=en" target="_blank" rel="noopener noreferrer">here</a>.</li>
                <li>We may share your Personal Information to comply with applicable laws and regulations, to respond to a subpoena, search warrant or other lawful request for information we receive, or to otherwise protect our rights.</li>
            </ul>

            <h2>4. Behavioural Advertising</h2>
            <p>
                As described above, we use your Personal Information to provide you with targeted advertisements or marketing communications we believe may be of interest to you. For example, we use Google Analytics to help us understand how our customers use the Site.
            </p>
            <p>
                You can opt out of targeted advertising by using the links below:
            </p>
            <ul>
                <li><a href="https://www.facebook.com/settings/?tab=ads" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                <li><a href="https://www.google.com/settings/ads/anonymous" target="_blank" rel="noopener noreferrer">Google</a></li>
            </ul>

            <h2>5. Your Rights (GDPR / UK Data Protection Act)</h2>
            <p>
                If you are a resident of the European Economic Area (EEA) or the UK, you have the right to access the Personal Information we hold about you, to port it to a new service, and to ask that your Personal Information be corrected, updated, or erased. If you would like to exercise these rights, please contact us through the contact information below.
            </p>
            <p>
                Your Personal Information will be initially processed in Ireland and then will be transferred outside of Europe for storage and further processing, including to Canada and the United States.
            </p>

            <h2>6. Data Retention</h2>
            <p>
                When you place an order through the Site, we will maintain your Order Information for our records unless and until you ask us to delete this information.
            </p>

            <h2>7. Contact</h2>
            <p>
                For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at <a href="mailto:leonard@peakemanagement.com">leonard@peakemanagement.com</a> or by mail using the details provided below:
            </p>
            <p>
                <strong>Peake Management Ltd</strong><br />
                Registered in Bude, Cornwall, England, UK.<br />
                Company Number: 15574401
            </p>

        </LegalLayout>
    );
};

export default PrivacyPolicy;
