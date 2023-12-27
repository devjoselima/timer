import styled from 'styled-components'

export const LayoutContainer = styled.div`
    width: 100%;
    max-width: 74rem;
    height: calc(100vh - 10rem);
    margin: 5rem auto;
    padding: 2.5rem;

    background-color: ${(props) => props.theme['gray-800']};
    border-radius: 8px;

    display: flex;
    flex-direction: column;

    @media (max-width: 1250px) {
        max-width: calc(
            95% - 5rem
        ); /* Largura máxima ajustada para telas menores */
    }
`
