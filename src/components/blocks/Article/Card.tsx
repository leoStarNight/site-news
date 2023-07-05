import React, { useCallback, useRef, useState } from 'react';
import { PaddingDot, CardImage, CardDiv, ImageDiv, CardInterface, ILowerDiv, IUpperDiv, ILowerHeader, IElipse, IUpperRight, ILowerDesc, PaddingInterface, InterfaceContainer } from './Card.styled';
import Evgeny from '../../../../public/images/PageHero/Evgeny.jpg';
import Evgeny2 from '../../../../public/images/PageHero/Evgeny2.jpg';
import Evgeny3 from '../../../../public/images/PageHero/Evgeny3.jpg';
import Link from '../../../icons/Article/Link.svg';
import ArrowLeft from '../../../icons/Article/ArrowLeft.svg';
import ArrowRight from '../../../icons/Article/ArrowRight.svg';
import Dot from '../../../icons/Article/Dot.svg';
import Data from 'public/data.json';
import copy from 'clipboard-copy';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation'
import { Navigation } from 'swiper';


interface ArticleProps {
    /* Component props */
    currentState: string
}

const ImgAdapted = (currentState: string, Image: any) => {
    if (currentState == 'tablet') {
        return (
            <>
                <ImageDiv src={Image} width={'517px'} height={'360px'} objectFit="cover" objectPosition={'80% 0%'} />
            </>
        );
    } else if (currentState == 'mobile') {
        return (
            <>
                <ImageDiv src={Image} width={'335px'} height={'360px'} objectFit="cover" objectPosition={'45% 0%'} />
            </>
        );
    } else {
        return (
            <>
                <ImageDiv src={Image} width={'1190px'} height={'520px'} objectFit='cover' />
            </>
        );
    }
};

const Card: React.FC<ArticleProps> = (args) => {
    
    const sliderRef = useRef(null);

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        sliderRef.current.swiper.slideNext();
    }, []);

    return (
        <CardDiv>
            <CardImage>
                {/* Тот компонент незабыть превратить его во свайпер!!! */}
                {/*ChooseDevice(args.currentState)*/}

                <Swiper
                    ref={sliderRef}
                    modules={[Navigation]}
                    spaceBetween={0}
                    slidesPerView={1}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                    navigation
                >
                    <SwiperSlide>
                        {ImgAdapted(args.currentState, Evgeny)}
                    </SwiperSlide>
                    <SwiperSlide>
                        {ImgAdapted(args.currentState, Evgeny2)}
                    </SwiperSlide>
                    <SwiperSlide>
                        {ImgAdapted(args.currentState, Evgeny3)}
                    </SwiperSlide>
                    <PaddingInterface>
                        <InterfaceContainer>
                            {/*<h2 onClick={handleNext}>Next</h2>
                            <h2 onClick={handlePrev}>Prev</h2>*/}
                            <IUpperDiv>
                                <IElipse onClick={() => {
                                    copy(`${Data.main.name} | ${Data.main.about} | ${Data.main.data} | ${Data.main.location}`);
                                }}>
                                    <Link/>
                                </IElipse>
                                <IUpperRight>
                                    <IElipse onClick={handlePrev}>
                                        <ArrowLeft/>
                                    </IElipse>
                                    <IElipse onClick={handleNext}>
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
                        </InterfaceContainer>
                </PaddingInterface>
                </Swiper>
            </CardImage>
            {/*<CardInterface>
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
                </CardInterface>*/}
            
        </CardDiv>
    )
}

export default Card;