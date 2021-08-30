// Code your solution in this file!
const hq = 42;
let start;
let destination;
const distanceInFeet = (start - destination)*264


function distanceFromHqInBlocks(start){
    return Math.abs(hq - start);
}

function distanceFromHqInFeet(start) {
    return Math.abs((hq - start) * 264);
}
function distanceTravelledInFeet(start,destination) {
    return Math.abs((start - destination) * 264);
}

function calculatesFarePrice(start,destination) {
    let distanceInFeet = distanceTravelledInFeet(start,destination);
    if ((distanceInFeet >=400) && (distanceInFeet <=2000)) {
        return (distanceInFeet - 400) *.02;
    }
    else if ((distanceInFeet >2000) && (distanceInFeet <=2500)) {
        return 25
    }
    else if (distanceInFeet > 2500) {
        return 'cannot travel that far';
    }
    else {
        return 0;
    }
}