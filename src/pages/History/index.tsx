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
                        <tr>
                            <td>Tarefa</td>
                            <td>20 minutos</td>
                            <td>Há cerca 2 meses</td>
                            <td>
                                <S.Status statusColor="green">
                                    Concluído
                                </S.Status>
                            </td>
                        </tr>
                        <tr>
                            <td>Tarefa</td>
                            <td>20 minutos</td>
                            <td>Há cerca 2 meses</td>
                            <td>
                                <S.Status statusColor="yellow">
                                    Em andamento
                                </S.Status>
                            </td>
                        </tr>
                        <tr>
                            <td>Tarefa</td>
                            <td>20 minutos</td>
                            <td>Há cerca 2 meses</td>
                            <td>
                                <S.Status statusColor="red">
                                    Interrompido
                                </S.Status>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </S.HistoryList>
        </S.HistoryContainer>
    )
}
