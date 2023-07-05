import React, { useState } from 'react';
import { PaddingDot, CardSlider, CardDiv, ImageDiv, CardInterface, ILowerDiv, IUpperDiv, ILowerHeader, IElipse, IUpperRight, ILowerDesc } from './Card.styled';
import Evgeny from '../../../../public/images/PageHero/Evgeny.jpg';
import Link from '../../../icons/Article/Link.svg';
import ArrowLeft from '../../../icons/Article/ArrowLeft.svg';
import ArrowRight from '../../../icons/Article/ArrowRight.svg';
import Dot from '../../../icons/Article/Dot.svg';
import Data from 'public/data.json';
import {SwiperSlide } from 'swiper/react';
import Swiper, { SwiperOptions } from 'swiper';


interface ArticleProps {
    /* Component props */
}

/**
 * Для стилизации картинки под разные разрешения проще воспользоваться css
 */

const Card: React.FC<ArticleProps> = () => {
    const [swiper, setSwiper] = useState<Swiper>()

    /**
     * Параметры инициализации Swiper
     */
    const swiperOptions: SwiperOptions = {
        speed: 1000,
        slidesPerView: 1,
        loop: true,
        simulateTouch: false
    }

    const nextSlide = () => swiper?.slideNext();

    const prevSlide = () => swiper?.slidePrev();

    const copyToClipboard = () => {
        /** Копирование информации в буфер обмена */
    }

    return (
        <CardDiv>
            <CardInterface>
                <IUpperDiv>
                    <IElipse onClick={copyToClipboard}>
                        <Link/>
                    </IElipse>
                    <IUpperRight>
                        <IElipse onClick={prevSlide}>
                            <ArrowLeft/>
                        </IElipse>
                        <IElipse onClick={nextSlide}>
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
            <CardSlider
                onSwiper={setSwiper}
                {...swiperOptions}
            >
                {/* Пустой массив просто для примера */}
                {(new Array(4).fill(null)).map((index) =>
                    <SwiperSlide key={index}>
                        <ImageDiv src={Evgeny} layout={'fill'} objectFit='cover' />
                    </SwiperSlide>
                )}
            </CardSlider>
        </CardDiv>
    )
}

export default Card;