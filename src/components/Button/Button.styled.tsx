import { UIAccent } from '@/core/types/ui.types';
import styled from '@emotion/styled';

interface ButtonWrapperProps extends UIAccent {
}

export const ButtonWrapper = styled.button<ButtonWrapperProps>`
    display: inline-block;
    padding: 0.5rem 1rem;
    background-color: ${props => {
        switch (props.accent) {
            case 'primary':
                return '#007bff';
            case 'secondary':
                return '#6c757d';
            case 'tertiary':
                return '#28a745';
            default:
                return '#007bff';
        }
    }};
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin: 0.5rem;
    

    &:hover {
        filter: brightness(75%);
    }

    &:active {
       filter: brightness(120%);
    }

    transition: filter 0.3s ease;
`;
