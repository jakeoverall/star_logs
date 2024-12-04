type shipData = { name: string, picture: string, classType: string, registration: string }

export class Ship {

  id: number
  name: string
  picture: string
  classType: string
  registration: string

  constructor(shipData: shipData) {

    this.id = ~~(Math.random() * 100)
    this.name = shipData.name
    this.picture = shipData.picture
    this.classType = shipData.classType
    this.registration = shipData.registration

  }
}
