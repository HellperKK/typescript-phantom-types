interface Meter {}
interface Kilometer {}

type Unity = Meter | Kilometer

class Distance<T extends Unity> {
    length: number;
    constructor(length:number) {
      this.length = length;
    }
}

function KilToMet(distance:Distance<Kilometer>): Distance<Meter>{
  return new Distance<Meter>(distance.length * 1000);
}

function MetToKil(distance:Distance<Meter>): Distance<Kilometer>{
  return new Distance<Kilometer>(distance.length / 1000);
}
