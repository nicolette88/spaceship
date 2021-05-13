
// Házi feladat: Spaceship

const spaceShip = {
  fuel: 400,
  passengers: ['John', 'Steve', 'Sam', 'Danielle'],
  shields: true,
  speedometer: 0,
  listPassengers: function () {
    for (let i = 0; i < this.passengers.length; i++) {
      // A feladat elején indexszel voltak kiíratva a konzolra az utasok, viszont a feladat végén már nem, így ezt a sorszámozást kivettem, hogy ugyanúgy nézzen ki a megoldásom, mint a feladat végén kiírt adatok:
      // console.log('Passenger ' + (i + 1) + ': ' + this.passengers[i]);
      console.log('Passenger' + ': ' + this.passengers[i]);
    }
  },
  addPassengers: function (newPassenger) {
    this.passengers.push(newPassenger);
    console.log(newPassenger + ' was added to the ship');
  },
  travel: function (distance) {
    console.log('trying to travel: ' + distance);
    if (this.fuel === 0) {
      console.log('cant go further, tank is empty');
    }
    else {
      let tempFuel = this.fuel - (distance / 2);
      if (tempFuel < 0) {
        let newDistance = distance - (tempFuel * -2);
        this.fuel = 0;
        this.speedometer = newDistance + this.speedometer;
        console.log('can only travel: ' + newDistance);
      }
      else {
        this.fuel = tempFuel;
        this.speedometer = distance + this.speedometer;
      }

      if (this.fuel < 30 && this.shields === true) {
        this.shields = false;
        console.log('fuel is Low, turning off shields...');
      }
      console.log('the SpaceShip is at: ' + this.speedometer);
      console.log('the spaceship has: ' + this.fuel + ' fuel');
    }
  }
};

spaceShip.listPassengers();
spaceShip.addPassengers('Lindsay');
spaceShip.listPassengers();
spaceShip.travel(750);
spaceShip.travel(200);
spaceShip.travel(100);