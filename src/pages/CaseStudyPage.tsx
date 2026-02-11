
import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import CaseStudyLayout from '../components/CaseStudyLayout';

const caseStudies = import.meta.glob('../content/case-studies/*.mdx', { eager: true });

const CaseStudyPage = () => {
    const { slug } = useParams();

    const study = useMemo(() => {
        const path = `../content/case-studies/${slug}.mdx`;
        if (caseStudies[path]) return caseStudies[path];
        return Object.entries(caseStudies).find(([k]) => k.includes(`/${slug}.mdx`))?.[1];
    }, [slug]);

    if (!study) {
        return <div className="min-h-screen pt-40 text-center">Case Study not found. <a href="/websites" className="underline">Back to Work.</a></div>;
    }

    const Content = study.default;
    const meta = study.frontmatter;

    return (
        <CaseStudyLayout meta={meta}>
            <Content />
        </CaseStudyLayout>
    );
};

export default CaseStudyPage;
