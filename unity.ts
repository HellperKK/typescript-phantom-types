// This code shows a way to handle units

// Defines two empty types that will be used to describe the units used un the distance
interface unity {}
interface meter extends unity
{
    __meter__ : never;
}
interface kilometer extends unity
{
    __kilometer__ : never;
}

// Defines a class that handles a number with a unused generic type
// Units will be used in the generic spot the tell the compiler
// what unit is described
class Distance<T extends unity> {
    __unused__: T;
    length: number;
    constructor(length:number) {
      this.length = length;
    }
}

// Converts kilometers to meters
function KilToMet(distance:Distance<kilometer>): Distance<meter> {
  return new Distance<meter>(distance.length * 1000);
}

// Converts meters to kilometers
function MetToKil(distance:Distance<meter>): Distance<kilometer> {
  return new Distance<kilometer>(distance.length / 1000);
}

// Adds to distances of the same unit
function AddDistance<T extends unity>(distanceF:Distance<T>, distanceS:Distance<T>) : Distance<T> {
  return new Distance<T>(distanceF.length + distanceS.length);
}

// Some tests
let kilms = new Distance<kilometer>(15);
let meters : Distance<meter> = KilToMet(kilms)

let sum = AddDistance(kilms, new Distance<kilometer>(7));

// This should output an error
let new_meters : Distance<meter> = KilToMet(meters);
