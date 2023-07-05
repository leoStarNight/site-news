import React from 'react';
import {Container } from './CardSection.styled';
import CardGenerator from './CardGenerator';

interface CardSectionProps {
    /* Component props */
}

const CardSection: React.FC<CardSectionProps> = () => {
    return (
        <Container>
            {/* Лишняя обертка, тело компонента CardGenerator можно вставить сразу сюда */}
            <CardGenerator/>
        </Container>
    )
}

export default CardSection;