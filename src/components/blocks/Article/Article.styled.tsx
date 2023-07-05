import styled from "styled-components";
import Image from '@/components/common/Image/Image';
import { mediaBreakpointDown } from "@/style/mixins";

export const Container = styled.div`
    position: relative;
        
`;

/**
 * Неиспользуемый styled-component
 */
export const ImageDiv = styled(Image)`
    position: absolute;
`;

export const TitleContainer = styled.h1`
    font-size: 1.875vw;
    font-weight: 600;
    line-height: 1.875vw;    
    padding-bottom: 1.458vw;

    ${mediaBreakpointDown('md')} {
        font-size: 20px;
    }

    ${mediaBreakpointDown('xs')} {
        font-size: 18px;
        padding-top: 60px;
        padding-bottom: 20px;
    }
`;

export const DividedSection = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    height: 27.083vw;

    ${mediaBreakpointDown('md')} {
        height: 46.814vw;
    }

    ${mediaBreakpointDown('xs')} {
        display: block;
        width: 100%;
        height: 100%;
    }
`;