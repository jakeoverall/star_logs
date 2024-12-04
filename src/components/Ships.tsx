import { Ship } from '../models/Ship'
import ShipComponent from './Ship'

function ShipsComponent({ ships, onSelect }: { ships: Ship[], onSelect: (ship: Ship) => void }) {
  return (
    ships.map(ship => <ShipComponent key={ship.id} ship={ship} onSelect={onSelect} />)
  )
}

export default ShipsComponent