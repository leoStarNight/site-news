import { mediaBreakpointDown, vw } from '@/style/mixins';
import styled from "styled-components";

export const Container = styled.div`
    /**
     * Использование магических чисел нежелательно, https://shorturl.at/xJRTZ
     * Так как это значительно усложняет понимание кода другими разработчиками
     * Для сохранения резиновой верстки без потери читаемости кода можно использовать миксин vw
     * Относится ко всем похожим компонентам
     */
    padding: ${vw(160)};    

    ${mediaBreakpointDown('md')} {
        padding: ${vw(36, 'md')};
    }

    ${mediaBreakpointDown('xs')} {
        padding: 20px;
    }
`;