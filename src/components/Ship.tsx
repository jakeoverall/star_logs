import { Ship } from '../models/Ship';

// Named Props ✅
type ShipComponentProps = {
  ship: Ship,
  onSelect: (ship: Ship) => void
}

function ShipComponent({ ship, onSelect }: ShipComponentProps) {

  // Local Scope
  // functions, data

  return (
    <div className='ship'>
      <img src={ship.picture} alt={ship.registration} />
      <div>
        <p>{ship.name} - {ship.registration}</p>
      </div>

      <div>
        <button onClick={() => onSelect(ship)}>Select Ship</button>
      </div>

    </div>
  )
}

export default ShipComponent