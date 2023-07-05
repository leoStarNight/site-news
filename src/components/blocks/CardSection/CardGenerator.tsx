import React, { useState } from 'react';
import { Card, CardData, CardDesc, Container, DescContainer, IconElipse, ImageDiv, PaddingDot, PaddingIcon } from './CardGenerator.styled';
import Mishel from 'public/images/PageHero/Mishel.jpg'
import Sochi from 'public/images/PageHero/Sochi.jpg'
import Orchestra from 'public/images/PageHero/Orchestra.jpg'
import Adler from 'public/images/PageHero/Adler.jpg'
import Aphon from 'public/images/PageHero/Aphon.jpg'
import LOne from 'public/images/PageHero/LOne.jpg'

import Dot from '../../../icons/Article/Dot.svg';
import Data from 'public/data.json';
import Link from '@/icons/Article/Link.svg'

import copy from 'clipboard-copy';

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

interface ICard {
    id: number;
    name: string;
    location: string;
    data: string;
}

const CardElem: React.FC<ICard> = (args) => {
    const [data] = useState(args);

    return (
        <Card>
            <PaddingIcon>
                <IconElipse onClick={() => {
                        copy(`${data.name} | ${data.data} | ${data.location}`);
                }}>
                    <Link/>
                </IconElipse>
            </PaddingIcon>
            <ImageDiv src={ImgDict[args.id]} width={"507px"} height={"300px"} objectFit='cover'/>
            <CardData>
                <h2>{data.name}</h2>
                <CardDesc>
                    <p>{data.data}</p>
                    <PaddingDot><Dot/></PaddingDot>
                    <p>{data.location}</p>
                </CardDesc>
            </CardData>
        </Card>
    )
}

const CardGenerator: React.FC<CardSectionProps> = () => {
    return (
        <Container>
            {
                Data.secondary.map((el, ind) => {
                    return (
                        <CardElem 
                            id={ind} 
                            data={el.data} 
                            location={el.location} 
                            name={el.name}/>
                    )
                })
            }
        </Container>
    )
}

export default CardGenerator;