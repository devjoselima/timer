import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'

import { Play } from 'phosphor-react'

import * as S from './styles'

const newCycleFormValidationSchema = z.object({
    task: z.string().min(1),
    minutesAmount: z.number().min(5).max(60),
})

type NewCycleFormData = z.infer<typeof newCycleFormValidationSchema>

export function Home() {
    const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
        resolver: zodResolver(newCycleFormValidationSchema),
        defaultValues: {
            task: '',
            minutesAmount: 0,
        },
    })

    function handleCreateNewCycle(data: NewCycleFormData) {
        reset()
    }

    const task = watch('task')
    const isSubmitDisabled = !task

    return (
        <S.HomeContainer>
            <form onSubmit={handleSubmit(handleCreateNewCycle)}>
                <S.FormContainer>
                    <label htmlFor="task">Vou trabalhar em</label>
                    <S.TaskInput
                        id="task"
                        placeholder="Dê um nome para o seu projeto"
                        list="task-suggestions"
                        {...register('task')}
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
                        {...register('minutesAmount', { valueAsNumber: true })}
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

                <S.StartCountDownButton
                    disabled={isSubmitDisabled}
                    type="submit"
                >
                    <Play size={24} />
                    Começar
                </S.StartCountDownButton>
            </form>
        </S.HomeContainer>
    )
}
