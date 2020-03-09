// This code shows a way to handle units
// Defines a class that handles a number with a unused generic type
// Units will be used in the generic spot the tell the compiler
// what unit is described
var Distance = /** @class */ (function () {
    function Distance(length) {
        this.length = length;
    }
    return Distance;
}());
// Converts kilometers to meters
function KilToMet(distance) {
    return new Distance(distance.length * 1000);
}
// Converts meters to kilometers
function MetToKil(distance) {
    return new Distance(distance.length / 1000);
}
// Adds to distances of the same unit
function AddDistance(distanceF, distanceS) {
    return new Distance(distanceF.length + distanceS.length);
}
// Some tests
var kilms = new Distance(15);
var meters = KilToMet(kilms);
var sum = AddDistance(kilms, new Distance(7));
// This will output a warning
var new_meters = KilToMet(meters);
