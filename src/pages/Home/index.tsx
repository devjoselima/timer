import { Play } from 'phosphor-react'
import * as S from './styles'

export function Home() {
    return (
        <S.HomeContainer>
            <form>
                <S.FormContainer>
                    <label htmlFor="task">Vou trabalhar em</label>
                    <S.TaskInput
                        id="task"
                        placeholder="Dê um nome para o seu projeto"
                        list="task-suggestions"
                    />

                    <datalist id="task-suggestions">
                        <option value="Project 1" />
                    </datalist>

                    <label htmlFor="minutesAmount">Durante</label>
                    <S.MinutesAmountInput
                        type="number"
                        id="minutesAmount"
                        placeholder="00"
                        step={5}
                        min={0}
                        max={60}
                    />

                    <span>minutos</span>
                </S.FormContainer>

                <S.CountDownContainer>
                    <span>0</span>
                    <span>0</span>
                    <S.Separator>:</S.Separator>
                    <span>0</span>
                    <span>0</span>
                </S.CountDownContainer>

                <S.StartCountDownButton disabled type="submit">
                    <Play size={24} />
                    Começar
                </S.StartCountDownButton>
            </form>
        </S.HomeContainer>
    )
}
