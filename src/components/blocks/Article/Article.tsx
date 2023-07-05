import React from 'react';
import { Container, DividedSection, TitleContainer } from './Article.styled';
import Card from './Card';
import Weather from './Weather';

interface ArticleProps {
    /* Component props */
}

const Article: React.FC<ArticleProps> = () => {
    return (
        <Container>
            <TitleContainer>Ближайшие мероприятия</TitleContainer>
            <DividedSection>
                <Card/>
                <Weather/>
            </DividedSection>
        </Container>
    )
}

export default Article;