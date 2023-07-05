import React, { useEffect, useState } from 'react';
import {
    AlignTimeData,
    AlignWeatherContainer,
    AlignWeatherData,
    AlignWeatherDataMini,
    AlignWeatherState,
    DateWeather,
    PaddingImg,
    PaddingImgMini,
    Skeleton,
    TitleWeather,
    WeatherDiv,
    WeatherImg,
    WeatherImgMini,
    WeatherState
} from './Weather.styled';
import Vector from '@/icons/Article/Vector.svg';
import axios from 'axios';
import moment from 'moment';
import "moment/locale/ru";

interface Data {
    location: {
        name: string;
    }
    current: {
        temp_c: number;
        last_updated: string;
        condition: {
            text: string;
        }
        feelslike_c: number;
    }
    forecast: {
        forecastday: {
            hour: {
                temp_c: number;
                last_updated: string;
                condition: {
                    text: string;
                    icon: string;
                }
                feelslike_c: number;
            }[]
        }[]
    }
}

export type TData = Data;

const Weather = () => {
    const [weatherData, setWeatherData] = useState<TData>();

    const options = {
        method: 'GET',
        url: 'https://weatherapi-com.p.rapidapi.com/forecast.json',
        params: {
            q: 'Sochi',
            days: '1',
            lang: 'ru'
        },
        headers: {
            'X-RapidAPI-Key': '60608a6cecmsh1dc9589602ea2fep18d27ajsnd46a1d346239',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };

    useEffect(() => {
        // Use [] as a second argument in useEffect for not rendering each time
        axios.get<TData>('https://weatherapi-com.p.rapidapi.com/forecast.json', options)
        .then((response) => {
            console.log(response.data);
            setWeatherData(response.data);
        });

    }, []);
    const date = moment(weatherData?.current.last_updated);
    date.locale('ru');

    useEffect(() => {
        console.log(`${date.format("dddd, D MMMM")}`);
    }, [weatherData])


    /**
     * Базовая реализация скелетона может выглядеть примерно так
     */
    return (
        <WeatherDiv>
            <TitleWeather>
                <Vector/>
                {!weatherData ? <Skeleton /> :
                    <h2>Погода в {weatherData.location.name}</h2>
                }
            </TitleWeather>
            <DateWeather>{`${date.format("dddd, D MMMM")}`}</DateWeather>
            <AlignWeatherContainer>
                <AlignWeatherData>
                    <PaddingImg>
                        {!weatherData ? <Skeleton/> :
                            <WeatherImg width={"72px"} height={"64px"} src={`http:${weatherData?.forecast.forecastday[0].hour[12].condition.icon}`}/>
                        }
                    </PaddingImg>
                    {!weatherData ? <Skeleton/> :
                        <h2>{`${weatherData.forecast.forecastday[0].hour[12].temp_c > 0 ? "+" : weatherData.forecast.forecastday[0].hour[12].temp_c ? "-" : ""}${weatherData.forecast.forecastday[0].hour[12].temp_c}°`}</h2>
                    }
                </AlignWeatherData>
                <AlignWeatherState>
                    {!weatherData ? <Skeleton /> :
                        <h3>{weatherData?.forecast.forecastday[0].hour[12].condition.text}</h3>
                    }
                    {!weatherData ? <Skeleton/> :
                        <h3>Ощущается как {`${weatherData.forecast.forecastday[0].hour[12].feelslike_c > 0 ? "+" : weatherData.forecast.forecastday[0].hour[12].feelslike_c ? "-" : ""}${weatherData.forecast.forecastday[0].hour[12].feelslike_c}°`}</h3>
                    }
                </AlignWeatherState>
            </AlignWeatherContainer>
            <AlignTimeData>
                {/* Компонент WeatherState дублируется, можно вынести его в отдельный компонент и передавать только время суток (вечер, ночь, утро) */}
                <WeatherState>
                    <h3>Вечером</h3>       {/* C 18 ЧАСОВ */}
                    <AlignWeatherDataMini><PaddingImgMini>
                        {!weatherData ? <Skeleton/> :
                            <WeatherImgMini width={"72px"} height={"64px"} src={`http:${weatherData?.forecast.forecastday[0].hour[18].condition.icon}`}/>
                        }</PaddingImgMini>
                        {!weatherData ? <Skeleton /> :
                            <h2>{`${weatherData.forecast.forecastday[0].hour[18].temp_c > 0 ? "+" : weatherData.forecast.forecastday[0].hour[18].temp_c ? "-" : ""}${weatherData.forecast.forecastday[0].hour[18].temp_c}°`}</h2>
                        }
                    </AlignWeatherDataMini>
                </WeatherState>
                <WeatherState>
                    <h3>Ночью</h3>       {/* C 12 ЧАСОВ */}
                    <AlignWeatherDataMini>
                        <PaddingImgMini>
                            {!weatherData ? <Skeleton/> :
                                <WeatherImgMini width={"72px"} height={"64px"} src={`http:${weatherData.forecast.forecastday[0].hour[0].condition.icon}`}/>
                            }
                        </PaddingImgMini>
                        {!weatherData ? <Skeleton /> :
                            <h2>{`${weatherData.forecast.forecastday[0].hour[0].temp_c > 0 ? "+" : weatherData.forecast.forecastday[0].hour[0].temp_c ? "-" : ""}${weatherData.forecast.forecastday[0].hour[0].temp_c}°`}</h2>
                        }
                    </AlignWeatherDataMini>
                </WeatherState>
                <WeatherState>
                    <h3>Утром</h3>       {/* C 6 ЧАСОВ */}
                    <AlignWeatherDataMini>
                        <PaddingImgMini>
                            {!weatherData ? <Skeleton /> :
                                <WeatherImgMini width={"72px"} height={"64px"} src={`http:${weatherData.forecast.forecastday[0].hour[6].condition.icon}`}/>
                            }
                        </PaddingImgMini>
                        {!weatherData ? <Skeleton /> :
                            <h2>{`${weatherData.forecast.forecastday[0].hour[6].temp_c > 0 ? "+" : weatherData.forecast.forecastday[0].hour[6].temp_c ? "-" : ""}${weatherData.forecast.forecastday[0].hour[6].temp_c}°`}</h2>
                        }
                    </AlignWeatherDataMini>
                </WeatherState>
            </AlignTimeData>
        </WeatherDiv>
    )
}

export default Weather;