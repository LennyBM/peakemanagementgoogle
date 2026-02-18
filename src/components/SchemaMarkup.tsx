import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

interface SchemaMarkupProps {
    type?: 'organization' | 'localBusiness' | 'service' | 'website' | 'faq' | 'blog' | 'breadcrumb';
    data?: Record<string, unknown>;
}

export const SchemaMarkup = ({ type = 'organization', data }: SchemaMarkupProps) => {
    const location = useLocation();
    const cleanUrl = `https://www.peakemanagement.com${location.pathname === '/' ? '' : location.pathname}`;

    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": "https://www.peakemanagement.com/#organization",
        "name": "Peake Management Ltd",
        "url": "https://www.peakemanagement.com",
        "logo": {
            "@type": "ImageObject",
            "url": "https://www.peakemanagement.com/assets/hero-poster.jpg",
            "width": "1200",
            "height": "630"
        },
        "description": "High-performance marketing for UK holiday parks and luxury resorts.",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Bude",
            "addressRegion": "Cornwall",
            "addressCountry": "UK"
        },
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+44-7375-064514",
            "contactType": "Sales"
        }
    };

    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": "https://www.peakemanagement.com/#website",
        "url": "https://www.peakemanagement.com",
        "name": "Peake Management",
        "publisher": { "@id": "https://www.peakemanagement.com/#organization" }
    };

    const breadcrumbSchema = () => {
        const pathnames = location.pathname.split('/').filter((x) => x);
        const itemListElement = [
            {
                "@type": "ListItem",
                "position": 1,
                "item": {
                    "@id": "https://www.peakemanagement.com",
                    "name": "Home"
                }
            }
        ];

        pathnames.forEach((value, index) => {
            const url = `https://www.peakemanagement.com/${pathnames.slice(0, index + 1).join('/')}`;
            itemListElement.push({
                "@type": "ListItem",
                "position": index + 2,
                "item": {
                    "@id": url,
                    "name": value.charAt(0).toUpperCase() + value.slice(1).replace(/-/g, ' ')
                }
            });
        });

        return {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": itemListElement
        };
    };

    const getSchema = () => {
        switch (type) {
            case 'localBusiness':
                return {
                    "@context": "https://schema.org",
                    "@type": "LocalBusiness",
                    "@id": "https://www.peakemanagement.com/#localbusiness",
                    "name": "Peake Management Ltd",
                    "image": "https://www.peakemanagement.com/assets/hero-poster.jpg",
                    "url": "https://www.peakemanagement.com",
                    "telephone": "+44-7375-064514",
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "Bude",
                        "addressRegion": "Cornwall",
                        "addressCountry": "UK"
                    }
                };
            case 'service':
                return data || {};
            case 'faq':
                return data || {};
            case 'blog':
                return data || {};
            case 'website':
                return websiteSchema;
            case 'breadcrumb':
                return breadcrumbSchema();
            default:
                return organizationSchema;
        }
    };

    return (
        <Helmet>
            <script type="application/ld+json">
                {JSON.stringify(getSchema())}
            </script>
        </Helmet>
    );
};
