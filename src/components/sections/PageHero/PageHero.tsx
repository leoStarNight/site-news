import React, { useLayoutEffect, useState } from 'react';
import Article from '@/components/blocks/Article/Article';
import CardSection from '@/components/blocks/CardSection/CardSection';
import { Container } from './PageHero.styled';
import { useMediaQuery } from 'react-responsive';

interface PageHeroProps {
    /* Component props */
}

// Данный блок будет содержать сам слайдер и погоду напротив него
const PageHero: React.FC<PageHeroProps> = () => {
    const [state, setState] = useState('desktop');
    // let currentState = 'desktop';

    // Надо менять данную структуру в пользу
    const tabletState = useMediaQuery({ query: '(max-width: 768px)' });
    const mobileState = useMediaQuery({ query: '(max-width: 375px)' });

    // Мне пришлось сделать ход условий раздельно (условия не являются взаимозависимыми) путем подставки вручную if.
    useLayoutEffect(() => {
        if (mobileState) {
            console.log('Mobile state');
            setState('mobile');
        }
        if (tabletState && !mobileState) {
            console.log('Tablet state');
            setState('tablet');
        }
        if (!mobileState && !tabletState) {
            console.log('Desktop state');
            setState('desktop');
        }
    }, [mobileState || !tabletState]);

    return (
        <Container>
            <Article currentState={state}/>
            <CardSection/>
        </Container>
    )
}

export default PageHero;