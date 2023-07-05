import React from 'react';
import { Card, CardData, CardDesc, Container, DescContainer, ImageDiv, PaddingDot } from './CardGenerator.styled';
import Mishel from 'public/images/PageHero/Mishel.jpg'
import Sochi from 'public/images/PageHero/Sochi.jpg'
import Orchestra from 'public/images/PageHero/Orchestra.jpg'
import Adler from 'public/images/PageHero/Adler.jpg'
import Aphon from 'public/images/PageHero/Aphon.jpg'
import LOne from 'public/images/PageHero/LOne.jpg'

import Dot from '../../../icons/Article/Dot.svg';
import Data from 'public/data.json';

interface CardSectionProps {
    /* Component props */
}

const ImgDict = [
    Mishel,
    Sochi,
    Orchestra,
    Adler,
    Aphon,
    LOne
]

const CardGenerator: React.FC<CardSectionProps> = () => {
    return (
        <Container>
            {
                Data.secondary.map((el, ind) => {
                    return (
                        <Card>
                            <ImageDiv src={ImgDict[ind]} width={"507px"} height={"300px"} objectFit='cover'/>
                            <CardData>
                                <h2>{el.name}</h2>
                                <CardDesc>
                                        <p>{el.data}</p>
                                        <PaddingDot><Dot/></PaddingDot>
                                        <p>{el.location}</p>
                                </CardDesc>
                            </CardData>
                        </Card>
                    )
                })
            }
        </Container>
    )
}

export default CardGenerator;