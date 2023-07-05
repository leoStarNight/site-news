import { GetStaticProps } from 'next';
import React from 'react';
import Only from '@/icons/only.svg';
import Layout from '@/components/common/Layout/Layout';
import { BasePageProps } from '@/interfaces';
import PageHero from "@/components/sections/PageHero/PageHero";

interface IndexProps extends BasePageProps {
    /* Page props*/
}

// Прежде всено мне следует сделать сначала ТОЛЬКО макет,
// остальное сделать только при совершении того шага.

const Index: React.FC<IndexProps> = (props) => {
    return (
        <Layout meta={props.meta} header={props.header} sandwich={props.sandwich}>
            <PageHero />

            {/* Page body */}
        </Layout>
    );
};

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
    return {
        props: {
            meta: {
                title: 'Title',
                description: 'description',
                keywords: 'keywords'
            },
            header: {},
            sandwich: {}
        },
        revalidate: 1
    };
};

export default Index;
