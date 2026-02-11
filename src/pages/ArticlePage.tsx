
import React, { useMemo } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import ArticleLayout from '../components/ArticleLayout';

// Function to import all MDX modules
const articles = import.meta.glob('../content/articles/*.mdx', { eager: true });

const ArticlePage = () => {
    const { slug } = useParams();

    // Find the matching module
    const post = useMemo(() => {
        // 1. Try exact match
        const path = `../content/articles/${slug}.mdx`;
        if (articles[path]) return articles[path];

        // 2. Fallback search (if slug is close or file naming differs)
        return Object.entries(articles).find(([k]) => k.includes(`/${slug}.mdx`))?.[1];
    }, [slug]);

    if (!post) {
        return <div className="min-h-screen pt-40 text-center">Article not found. <a href="/blog" className="underline">Go back.</a></div>;
    }

    // MDX content is the default export
    const Content = post.default;
    const meta = post.frontmatter;

    return (
        <ArticleLayout meta={meta}>
            <Content />
        </ArticleLayout>
    );
};

export default ArticlePage;
