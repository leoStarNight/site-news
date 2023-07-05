import React from 'react';
import { Card, Container, ImageDiv } from './CardSection.styled';
import CardImg from 'public/images/PageHero/Mishel.jpg'
import CardGenerator from './CardGenerator';

interface CardSectionProps {
    /* Component props */
}

const CardSection: React.FC<CardSectionProps> = () => {
    return (
        <Container>
            {/* Component body */}
            <CardGenerator/>
        </Container>
    )
}

export default CardSection;