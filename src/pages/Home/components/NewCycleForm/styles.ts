import styled from 'styled-components'

export const FormContainer = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.5rem;

    color: ${(props) => props.theme['gray-100']};
    font-size: 1.125rem;
    font-weight: bold;

    @media (max-width: 750px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    @media (max-width: 430px) {
        font-size: 1rem;
    }
`

const BaseInput = styled.input`
    background: transparent;
    height: 2.5rem;
    border: 0;
    border-bottom: 2px solid ${(props) => props.theme['gray-500']};
    font-weight: bold;
    font-size: 1.125rem;
    padding: 0 0.5rem;
    color: ${(props) => props.theme['gray-100']};
    outline: none;

    &:focus {
        box-shadow: none;
        border-color: ${(props) => props.theme['green-500']};
    }

    &::placeholder {
        color: ${(props) => props.theme['gray-500']};
    }

    @media (max-width: 430px) {
        font-size: 0.9rem;
    }
`

export const InputContainer = styled.div`
    display: flex;
    align-items: center;

    gap: 0.5rem;
`

export const TaskInput = styled(BaseInput)`
    flex: 1;
    &::-webkit-calendar-picker-indicator {
        display: none !important;
    }
`

export const MinutesAmountInput = styled(BaseInput)`
    width: 4rem;
`
