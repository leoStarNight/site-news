import React from 'react';
import { PaddingDot, CardImage, CardDiv, ImageDiv, CardInterface, ILowerDiv, IUpperDiv, ILowerHeader, IElipse, IUpperRight, ILowerDesc } from './Card.styled';
import Evgeny from '../../../../public/images/PageHero/Evgeny.jpg';
import Link from '../../../icons/Article/Link.svg';
import ArrowLeft from '../../../icons/Article/ArrowLeft.svg';
import ArrowRight from '../../../icons/Article/ArrowRight.svg';
import Dot from '../../../icons/Article/Dot.svg';
import Data from 'public/data.json';
import copy from 'clipboard-copy';


interface ArticleProps {
    /* Component props */
    currentState: string
}

const ChooseDevice = (currentState: string) => {
    if (currentState == 'tablet') {
        return (
            <>
                <ImageDiv src={Evgeny} width={'517px'} height={'360px'} objectFit="cover" objectPosition={'80% 0%'} />
            </>
        );
    } else if (currentState == 'mobile') {
        return (
            <>
                <ImageDiv src={Evgeny} width={'335px'} height={'360px'} objectFit="cover" objectPosition={'45% 0%'} />
            </>
        );
    } else {
        return (
            <>
                <ImageDiv src={Evgeny} width={'1190px'} height={'520px'} objectFit='cover' />
            </>
        );
    }
};

const Card: React.FC<ArticleProps> = (args) => {
    return (
        <CardDiv>
            <CardInterface>
                <IUpperDiv>
                    <IElipse onClick={() => {
                        copy(`${Data.main.name} | ${Data.main.about} | ${Data.main.data} | ${Data.main.location}`);
                    }}>
                        <Link/>
                    </IElipse>
                    <IUpperRight>
                        <IElipse>
                            <ArrowLeft/>
                        </IElipse>
                        <IElipse>
                            <ArrowRight/>
                        </IElipse>
                    </IUpperRight>
                </IUpperDiv>
                <ILowerDiv>
                    <ILowerHeader>{Data.main.name}</ILowerHeader>
                    <p>{Data.main.about}</p>
                    <ILowerDesc>
                        <h2>{Data.main.data}</h2>
                        <PaddingDot><Dot/></PaddingDot>
                        <h2>{Data.main.location}</h2>
                    </ILowerDesc>
                </ILowerDiv>
            </CardInterface>
            <CardImage>
                {/* Тот компонент незабыть превратить его во свайпер!!! */}
                {ChooseDevice(args.currentState)}
            </CardImage>
        </CardDiv>
    )
}

export default Card;