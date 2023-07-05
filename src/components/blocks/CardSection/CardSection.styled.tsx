import styled from "styled-components";
import Image from "@/components/common/Image/Image";
import { mediaBreakpointDown } from "@/style/mixins";

export const Container = styled.div`
    position: relative;
    padding-top: 120px;

    ${mediaBreakpointDown('xl')} {
        padding-top: 80px;
    }

    ${mediaBreakpointDown('xs')} {
        padding-top: 28px;
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