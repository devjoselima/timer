import styled from 'styled-components'

export const CountDownContainer = styled.div`
    font-family: 'Roboto Mono', monospace;
    font-size: 10rem;
    line-height: 8rem;
    color: ${(props) => props.theme['gray-100']};

    display: flex;
    gap: 1rem;

    span {
        background-color: ${(props) => props.theme['gray-700']};
        padding: 2rem 1rem;
        border-radius: 8px;

        @media (max-width: 770px) {
            padding: 1.5rem 0.5rem;
        }

        @media (max-width: 600px) {
            padding: 0.5rem 0.5rem;
        }
    }

    @media (max-width: 770px) {
        font-size: 7rem;
        line-height: 6rem;
    }

    @media (max-width: 600px) {
        font-size: 5rem;
        align-items: center;
        gap: 0.5rem;
    }
`
export const Separator = styled.div`
    padding: 2rem 0;
    color: ${(props) => props.theme['green-500']};

    width: 4rem;
    overflow: hidden;
    display: flex;
    justify-content: center;

    @media (max-width: 600px) {
        width: 2rem;
    }
`
