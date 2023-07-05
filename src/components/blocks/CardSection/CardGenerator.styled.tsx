import styled from "styled-components";
import Image from "@/components/common/Image/Image";
import { mediaBreakpointDown } from "@/style/mixins";

export const Container = styled.div`
    position: relative;
    display: grid;
    grid-template-columns: 26.406vw 26.406vw 26.406vw;
    justify-content: space-between;
    gap: 40px;
    row-gap: 116px;

    ${mediaBreakpointDown('xl')} {
        gap: 28px;
        row-gap: 60px;
    }

    ${mediaBreakpointDown('md')} {        
        grid-template-columns: 44.010vw 44.010vw;
    }

    ${mediaBreakpointDown('xs')} {
        display: flex;
        flex-direction: column;
        padding-bottom: 110px;
    }
`

export const Card = styled.div`
    width: 100%;
    height: 100%;
    
    border-radius: 16px;
`

export const ImageDiv = styled(Image)`
    //position: absolute;
    border-radius: 16px;
`

export const CardData = styled.div`
    padding-top: 20px;
    
    p {
        margin: 20px 0;
    }

    h2 {
        font-size: 26px;
        font-weight: 700;
        line-height: 36.4px;
    
        color: black;
    }

    ${mediaBreakpointDown('xl')} {
        padding-top: 10px;

        h2 {
            font-size: 20px;
            line-height: 24px;
        }

        p {
            margin: 10px 0;
        }
    }

    ${mediaBreakpointDown('md')} {
        padding-top: 8px;

        h2 {
            font-size: 14px;
            line-height: 19.6px;
        }

        p {
            font-size: 12px;
            line-height: 12px;
        }
    }
`;

export const PaddingDot = styled.div`
    padding: 0 20px;

    svg {
        color: ${args => args.color};
        width: 6px;
        height: 100%;

        ${mediaBreakpointDown('xs')} {
            width: 3px;
        }
    }

    ${mediaBreakpointDown('md')} {
        padding: 0 12px;
    }
`

export const CardDesc = styled.div`
    position: relative;
    display: flex;
    
    color: #23232399;

    p {
        white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    }
`

export const DescContainer = styled.div`
    display: flex;
`