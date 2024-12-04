import './App.css'
import Logs from './components/Logs'
import ShipsComponent from './components/Ships'
import { logs, ships } from './AppState'
import { useState } from 'react'
import { Ship } from './models/Ship'

// ⛔ Inline Styling
// const styleSheet = {
//   ship: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between'
//   }
// }


function App() {
  // Vue Approach
  // const selectedShip = ref()
  // selectedShip.value = somethingNew

  //     vvv Value       vvv Setter Function
  const [selectedShip, setSelectedShip] = useState<Ship>()
  const filteredLogs = logs.filter(l => l.shipId == selectedShip?.id)

  return (
    <div>
      <div className="ships">
        <h3 className='mb-3'>Fleet - {selectedShip?.name}</h3>
        <ShipsComponent ships={ships} onSelect={setSelectedShip} />
        <h3 className='my-3'>Logs</h3>
        <Logs logs={filteredLogs} />
      </div>
    </div>
  )
}

export default App
