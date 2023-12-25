import * as S from './styles'

export function History() {
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
                            <td>Concluído</td>
                        </tr>
                        <tr>
                            <td>Tarefa</td>
                            <td>20 minutos</td>
                            <td>Há cerca 2 meses</td>
                            <td>Concluído</td>
                        </tr>
                        <tr>
                            <td>Tarefa</td>
                            <td>20 minutos</td>
                            <td>Há cerca 2 meses</td>
                            <td>Concluído</td>
                        </tr>
                        <tr>
                            <td>Tarefa</td>
                            <td>20 minutos</td>
                            <td>Há cerca 2 meses</td>
                            <td>Concluído</td>
                        </tr>
                    </tbody>
                </table>
            </S.HistoryList>
        </S.HistoryContainer>
    )
}
