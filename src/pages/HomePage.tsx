
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Hero = React.lazy(() => import('../components/Hero'));
const ClientLogos = React.lazy(() => import('../components/ClientLogos'));
const SystemSection = React.lazy(() => import('../components/SystemSection'));
const LeadMagnet = React.lazy(() => import('../components/LeadMagnet'));
const Mission = React.lazy(() => import('../components/Mission'));

const SEO = ({ title, description, image = '/assets/hero-poster.jpg', url = 'https://www.peakemanagement.com' }: { title: string; description: string; image?: string; url?: string }) => (
    <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={url} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={url} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={image} />
    </Helmet>
);

const HomePage = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const id = hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
    }, [hash]);

    return (
        <>
            <SEO
                title="Peake Management | High-Performance Marketing"
                description="We help holiday parks and luxury resorts increase direct bookings through automated marketing systems and high-converting websites."
            />
            <Hero />
            <ClientLogos />
            <SystemSection />
            <Mission />
            <LeadMagnet />
        </>
    );
};

export default HomePage;
