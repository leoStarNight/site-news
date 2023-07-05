import React from 'react';
import { Container, DividedSection, TitleContainer } from './Article.styled';
import Card from './Card';
import Weather from './Weather';

interface ArticleProps {
    /* Component props */
    currentState: string
}

const Article: React.FC<ArticleProps> = (args) => {
    return (
        <Container>
            {/* Component body */}
            <TitleContainer>Ближайшие мероприятия</TitleContainer>
            <DividedSection>
                <Card currentState={args.currentState}/>
                <Weather/>
            </DividedSection>
        </Container>
    )
}

export default Article;