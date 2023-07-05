import { mediaBreakpointDown } from "@/style/mixins";
import styled from "styled-components";

export const Container = styled.div`
    padding: 8.333vw;    

    ${mediaBreakpointDown('md')} {
        padding: 4.688vw;
    }

    ${mediaBreakpointDown('xs')} {
        padding: 20px;
    }
`;