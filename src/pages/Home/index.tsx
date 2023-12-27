import { useContext } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { NewCycleForm } from './components/NewCycleForm'
import { CountDown } from './components/CountDown'

import { CyclesContext } from '../../contexts/CyclesContext'
import { NewCycleFormData, newCycleFormValidationSchema } from './schemas'

import { HandPalm, Play } from 'phosphor-react'

import * as S from './styles'

export function Home() {
    const { activeCycle, createNewCycle, interruptCurrentCycle } =
        useContext(CyclesContext)
    const newCycleForm = useForm<NewCycleFormData>({
        resolver: zodResolver(newCycleFormValidationSchema),
        defaultValues: {
            task: '',
            minutesAmount: 0,
        },
    })

    const { handleSubmit, watch, reset } = newCycleForm

    const task = watch('task')
    const isSubmitDisabled = !task

    return (
        <S.HomeContainer>
            <form onSubmit={handleSubmit(createNewCycle)}>
                <FormProvider {...newCycleForm}>
                    <NewCycleForm />
                </FormProvider>
                <CountDown />

                {activeCycle ? (
                    <S.StopCountDownButton
                        onClick={interruptCurrentCycle}
                        type="button"
                    >
                        <HandPalm size={24} />
                        Interromper
                    </S.StopCountDownButton>
                ) : (
                    <S.StartCountDownButton
                        disabled={isSubmitDisabled}
                        type="submit"
                    >
                        <Play size={24} />
                        Começar
                    </S.StartCountDownButton>
                )}
            </form>
        </S.HomeContainer>
    )
}
