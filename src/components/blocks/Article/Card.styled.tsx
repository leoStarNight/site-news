import styled from 'styled-components';
import Image from '@/components/common/Image/Image';
import { mediaBreakpointDown } from '@/style/mixins';
import { Swiper } from 'swiper/react';

// Создать следующий компонент-интерфейс данной карточки для слайдинга
// НЕ ЗАБЫТЬ ПРЕВРАТИТЬ ЕЕ ВО СВАЙПЕР
export const CardInterface = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    z-index: 2;

    padding: 40px;

    ${mediaBreakpointDown('xl')} {
        padding: 28px;
    }

    ${mediaBreakpointDown('xs')} {
        padding: 12px;
    }
`;

export const PaddingDot = styled.div`
    flex-direction: column;
    display: flex;
    justify-content: center;
    padding: 0px 20px;

    ${mediaBreakpointDown('xs')} {
        padding: 0 12px;
    }
`

export const ImageDiv = styled(Image)`
    position: absolute;
    display: contents;
`;

/**
 * Интерактивные элементы нежелательно делать обычными div
 * В данном случае можно использовать тег button, чтобы не нарушать семантику
 */
export const IElipse = styled.button`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50px;
    background-color: #FFFFFF26;
    border: none;
    padding: 0;
    
    &:last-child {
        margin-left: 10px;
    }
`;

export const IUpperDiv = styled.div`
    display: flex;
    justify-content: space-between;

    ${IElipse} {
        width: 60px;
        height: 60px;

        svg {
            width: 28px;
            height: 28px;
        }

        ${mediaBreakpointDown('xl')} {
            width: 40px;
            height: 40px;

            svg {
                width: 20px;
                height: 20px;
            }
        }

        ${mediaBreakpointDown('xs')} {
            width: 36px;
            height: 36px;

            svg {
                width: 18px;
                height: 18px;
            }
        }
    }
`;

export const IUpperRight = styled.div`
    display: flex;
    justify-content: space-between;

    div {
        margin-left: 10px;
    }
`


export const ILowerDiv = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: baseline;
    //width: 100%;
    bottom: 0;
    color: white;

    svg {
        color: white;
        width: 6px;
    }

    ${mediaBreakpointDown('xl')} {
        p {
            margin: 12px 0;
        }
        
        p, h2 {
            font-size: 14px;
        }
    }

    ${mediaBreakpointDown('xs')} {
        p {
            width: 210px;
        }

        p, h2 {
            font-size: 12px;
        }

        svg {
            width: 3px;
        }
    }
`;

export const ILowerHeader = styled.h1`
    position: relative;
    font-size: 40px;
    font-weight: 700;

    ${mediaBreakpointDown('xl')} {
        font-size: 26px;
    }

    ${mediaBreakpointDown('xs')} {
        font-size: 16px;
    }
`;

export const ILowerDesc = styled.div`
    display: flex;
`

export const CardSlider = styled(Swiper)`
    width: 100%;
    height: 100%;

    border-radius: 0.833vw;
    position: relative;
    overflow: hidden;

    ${mediaBreakpointDown('xs')} {
        border-radius: 10px;
    }
`

export const CardDiv = styled.div`
    width: 61.979vw; 
    height: 100%;
    position: relative;

    ${mediaBreakpointDown('md')} {
        width: 67.230vw;
    }

    ${mediaBreakpointDown('xs')} {
        position: relative;
        width: 100%;
        height: 96vw;
        margin-bottom: 20px;
    }
`

