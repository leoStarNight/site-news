import { mediaBreakpointDown, mediaBreakpointUp } from '@/style/mixins';
import styled from 'styled-components';
import Image from '@/components/common/Image/Image';

export const WeatherDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 22px;

    width: 19.271vw;
    height: 100%;
    border-radius: 16px;

    font-size: 18px;

    background-color: #F3F3F3;

    ${mediaBreakpointDown('xl')} {
        font-size: 12px;
        padding: 12px;
    }

    ${mediaBreakpointDown('md')} {
        width: 20.806vw;
    }

    ${mediaBreakpointDown('xs')} {
        position: relative;
        width: 100%;
        padding-top: 20px;
        font-size: 11px;
    }
`

export const TitleWeather = styled.div`
    display: flex;
    font-size: 20px;
    font-weight: 500;
    color: #157BFB;

    h2 {
        margin-left: 13px;
    }

    svg {
        width: 14px;
    }

    ${mediaBreakpointDown('xl')} {
        font-size: 14px;

        h2 {
            margin-left: 7px;
        }

        svg {
            width: 10px;
        }
    }

    ${mediaBreakpointDown('xs')} {
        font-size: 12px;
        font-weight: 500;
    }

`

export const DateWeather = styled.h3`
    padding-top: 20px;

    ${mediaBreakpointDown('xl')} {
        padding-top: 12px;
    }

    ${mediaBreakpointDown('xs')} {
        padding-top: 8px;
    }
`

export const AlignWeatherContainer = styled.div`
    ${mediaBreakpointDown('xs')} {
        display: flex;
        align-items: center;
        padding-top: 28px;
    }
`

export const AlignWeatherData = styled.div`
    display: flex;
    padding-top: 3.125vw;
    padding-bottom: 1.042vw;

    h2 {
        font-size: 4.167vw;
        font-weight: 600;

        ${mediaBreakpointDown('xl')} {
            font-size: 4.219vw;
        }

        ${mediaBreakpointDown('xs')} {
            font-size: 36px;
            line-height: 36px;
        }
    }

    svg {
        //padding-right: 20px;
        width: 80px;
        display: flex;
        justify-content: center;
        align-items: center;
        
        ${mediaBreakpointDown('xl')} {
            width: 47px;
            margin-right: 12px;
        }

        ${mediaBreakpointDown('xs')} {
            width: 30px;
            margin-right: 10px;
        }
    }

    svg:nth-child(3) {
        width: 20px;
        height: 20px;

        ${mediaBreakpointDown('xl')} {
            width: 10px;
            height: 10px;
        }

        ${mediaBreakpointDown('xs')} {
            margin: 0;
        }
    }

    ${mediaBreakpointDown('xs')} {
        padding-right: 21px;
    }
`

export const PaddingImg = styled.div`

    width: 80px;

    ${mediaBreakpointDown('xl')} {
        position: relative;
        width: 40px;
        height: 100%;
    }
`

export const PaddingImgMini = styled.div`
    position: relative;
    width: 21px;
    height: 100%;
`
export const WeatherImgMini = styled(Image)`
    position: absolute;
    width: 22px;
`

export const WeatherImg = styled(Image)`
    width: 80px;

    ${mediaBreakpointDown('xl')} {
        width: 40px;
    }
`

export const AlignWeatherDataMini = styled.div`
    display: flex;
    
    svg + h2 {
        padding-left: 10px;
    }

    h2 + svg {
        padding-left: 2px;
    }

    svg:nth-child(3) {
        width: 10px;
        height: 10px;

        ${mediaBreakpointDown('xl')} {
            width: 5px;
            height: 5px;
        }
    }

    ${mediaBreakpointDown('xs')} {
        svg + h2 {
            padding-left: 4px;
        }
    }

`

export const AlignWeatherState = styled.div`
    h3 + h3 {
        margin-top: 10px;

        ${mediaBreakpointDown('xl')} {
            margin-top: 8px;
        }
    }
`

export const AlignTimeData = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding-top: 3.802vw;

    text-align: left;

    ${mediaBreakpointDown('md')} {
        display: grid;
        grid-template-columns: auto auto;
        row-gap: 12px;
    }

    ${mediaBreakpointDown('xs')} {
        display: flex;
    }
`

export const WeatherState = styled.div`
    width: 100%;

    svg {
        width: 24px;
    }  
    
    h3 + div {
        padding-top: 12px;
    }

    h3 {
        font-size: 14px;
        color: #23232380;
    }

    h2 {
        font-size: 20px;
        color: black;
    }

    ${mediaBreakpointDown('xl')} {
        h2 {
            font-size: 14px;
        }

        svg {
            width: 16px;
        }
    }

    ${mediaBreakpointDown('xs')} {
        h3 {
            font-size: 10px;
        }

        h3 + div {
            padding-top: 8px;
        }
    }
`