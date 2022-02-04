import { InformationText } from '../InformationText'
import { Summary } from '../Summary'
import { TransactionsTable } from '../TransactionsTable'
import { Container } from './styles'

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <InformationText />
      <TransactionsTable />
    </Container>
  )
}
