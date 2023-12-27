import { useContext } from 'react'
import { CyclesContext } from '../../contexts/CyclesContext'

import * as S from './styles'

export function History() {
    const { cycles } = useContext(CyclesContext)
    return (
        <S.HistoryContainer>
            <h1>History</h1>

            <S.HistoryList>
                <table>
                    <thead>
                        <tr>
                            <th>Tarefa</th>
                            <th>Duração</th>
                            <th>Início</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cycles.map((cycle) => {
                            return (
                                <tr key={cycle.id}>
                                    <td>{cycle.task}</td>
                                    <td>{cycle.minutesAmount} minutos</td>
                                    <td>{cycle.startDate.toISOString()}</td>
                                    <td>
                                        {cycle.finishedDate && (
                                            <S.Status statusColor="green">
                                                Concluído
                                            </S.Status>
                                        )}

                                        {cycle.interruptedDate && (
                                            <S.Status statusColor="red">
                                                Interrompido
                                            </S.Status>
                                        )}

                                        {!cycle.finishedDate &&
                                            !cycle.interruptedDate && (
                                                <S.Status statusColor="yellow">
                                                    Em andamento
                                                </S.Status>
                                            )}
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </S.HistoryList>
        </S.HistoryContainer>
    )
}
