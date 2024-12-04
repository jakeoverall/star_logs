import { Log } from '../models/Log'
import LogComponent from './Log'

type logsComponentProps = {
  logs: Log[]
}

function Logs({ logs }: logsComponentProps) {

  return (
    logs.map(l => <LogComponent key={l.id} log={l} />)
  )

}

export default Logs