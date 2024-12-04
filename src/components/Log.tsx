import { Log } from '../models/Log';
import './Log.css'

const stylesheet = {
  log: {
    border: '1px solid black',
    padding: '10px',
    margin: '10px'
  }
}

function LogComponent({ log }: { log: Log }) {

  const tagColor = `${log.tag} log`

  return (
    <div key={log.id} style={stylesheet.log}>
      <div className='d-flex justify-content-between align-items-center'>
        <h2>{log.title}</h2>
        <p className={tagColor}><strong>Tag:</strong> {log.tag}</p>
      </div>
      <p>{log.summary} - {log.author}</p>
    </div>
  )

}

export default LogComponent
