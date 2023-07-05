import React from 'react';
import Article from '@/components/blocks/Article/Article';
import CardSection from '@/components/blocks/CardSection/CardSection';
import { Container } from './PageHero.styled';

interface PageHeroProps {
    /* Component props */
}

// Данный блок будет содержать сам слайдер и погоду напротив него
const PageHero: React.FC<PageHeroProps> = () => {
    /**
     * Проверка на тип устройства не требуется
     * В данном случае логика поведения компонентов одинаковая для десктоп, планшета и мобильной версии
     */

    return (
        <Container>
            <Article/>
            <CardSection/>
        </Container>
    )
}

export default PageHero;