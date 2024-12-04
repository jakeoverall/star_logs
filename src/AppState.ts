import { Log } from './models/Log'
import { Ship } from './models/Ship'

export const ships = [
  new Ship({ name: 'USS Enterprise', classType: 'Constitution', picture: 'https://i.imgur.com/KcVFWbl.png', registration: 'NCC-1701' }),
  new Ship({ name: 'USS Reliant', classType: 'Miranda', picture: 'https://i.imgur.com/Muyh8zC.png', registration: 'NCC-1864' })
]

const ship1 = ships[0].id
const ship2 = ships[1].id


export const logs = [
  new Log(
    { shipId: ship1, author: 'Captain James T. Kirk', starDate: '1513.1', summary: 'We have been ordered to investigate a distress call from the planet Talos IV.', tag: 'Mission' }
  ),
  new Log(
    { shipId: ship2, author: 'Captain Clark Terrell', starDate: '8130.3', summary: 'We have been ordered to investigate a distress call from the planet Ceti Alpha V.', tag: 'Mission' }
  ),
  new Log(
    { shipId: ship1, author: 'Captain James T. Kirk', starDate: '1513.1', summary: 'We have been ordered to investigate a distress call from the planet Talos IV.', tag: 'Mission' }
  ),
  new Log(
    { shipId: ship2, author: 'Captain Clark Terrell', starDate: '8130.3', summary: 'We have been ordered to investigate a distress call from the planet Ceti Alpha V.', tag: 'Mission' }
  ),
  new Log(
    { shipId: ship1, author: 'Captain James T. Kirk', starDate: '1513.1', summary: 'We have been ordered to investigate a distress call from the planet Talos IV.', tag: 'Mission' }
  ),
  new Log(
    { shipId: ship1, author: 'Captain James T. Kirk', starDate: '1513.4', summary: 'We have been attacked by a Romulan Bird of Prey.', tag: 'Combat' }
  ),
  new Log(
    { shipId: ship2, author: 'Captain Clark Terrell', starDate: '2285.5', summary: 'We have discovered the Botany Bay adrift in space.', tag: 'Discovery' }
  ),
  new Log(
    { shipId: ship2, author: 'Captain Clark Terrell', starDate: '2285.6', summary: 'We have been ordered to investigate the planet Ceti Alpha VI.', tag: 'Mission' }
  ),
  new Log(
    { shipId: ship2, author: 'Captain Clark Terrell', starDate: '2285.7', summary: 'We have been attacked by Khan Noonien Singh.', tag: 'Combat' }
  ),
  new Log(
    { shipId: ship2, author: 'Captain Clark Terrell', starDate: '2285.8', summary: 'We have been ordered to investigate the planet Genesis.', tag: 'Mission' }
  ),
  new Log(
    { shipId: ship2, author: 'Captain Clark Terrell', starDate: '2285.9', summary: 'We have been attacked by Klingon warships.', tag: 'Combat' }
  ),
  new Log(
    { shipId: ship2, author: 'Captain Clark Terrell', starDate: '2285.10', summary: 'We have been ordered to escort the USS Enterprise to the Genesis Planet.', tag: 'Mission' }
  ),
  new Log(
    { shipId: ship2, author: 'Captain Clark Terrell', starDate: '2285.11', summary: 'We have been attacked by Klingon warships.', tag: 'Combat' }
  ),
  new Log(
    { shipId: ship2, author: 'Captain Clark Terrell', starDate: '2285.12', summary: 'We have been ordered to investigate the planet Genesis.', tag: 'Mission' }
  ),
  new Log(
    { shipId: ship2, author: 'Captain Clark Terrell', starDate: '2285.13', summary: 'We have been attacked by Khan Noonien Singh.', tag: 'Combat' }
  ),
  new Log(
    { shipId: ship2, author: 'Captain Clark Terrell', starDate: '2285.14', summary: 'We have been ordered to investigate the planet Genesis.', tag: 'Mission' }
  ),
  new Log(
    { shipId: ship2, author: 'Captain Clark Terrell', starDate: '2285.15', summary: 'We have been attacked by Klingon warships.', tag: 'Combat' }
  ),
  new Log(
    { shipId: ship2, author: 'Captain Clark Terrell', starDate: '2285.16', summary: 'We have been ordered to escort the USS Enterprise to the Genesis Planet.', tag: 'Mission' }
  ),
  new Log(
    { shipId: ship2, author: 'Captain Clark Terrell', starDate: '2285.17', summary: 'We have been attacked by Klingon warships.', tag: 'Combat' }
  ),
  new Log(
    { shipId: ship2, author: 'Captain Clark Terrell', starDate: '2285.18', summary: 'We have been ordered to investigate the planet Genesis.', tag: 'Mission' }
  ),
  new Log(
    { shipId: ship2, author: 'Captain Clark Terrell', starDate: '2285.19', summary: 'We have been attacked by Khan Noonien Singh.', tag: 'Combat' }
  )




]