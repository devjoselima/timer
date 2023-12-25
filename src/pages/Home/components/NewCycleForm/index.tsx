import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { CyclesContext } from '../..'

import * as S from './styles'

export function NewCycleForm() {
    const { activeCycle } = useContext(CyclesContext)
    const { register } = useFormContext()

    return (
        <S.FormContainer>
            <label htmlFor="task">Vou trabalhar em</label>
            <S.TaskInput
                id="task"
                placeholder="Dê um nome para o seu projeto"
                list="task-suggestions"
                {...register('task')}
                disabled={!!activeCycle}
            />

            <datalist id="task-suggestions">
                <option value="Project 1" />
            </datalist>

            <label htmlFor="minutesAmount">Durante</label>
            <S.MinutesAmountInput
                type="number"
                id="minutesAmount"
                placeholder="00"
                // step={5}
                min={0}
                max={60}
                {...register('minutesAmount', { valueAsNumber: true })}
                disabled={!!activeCycle}
            />

            <span>minutos</span>
        </S.FormContainer>
    )
}
