// Code your solution in this file!
function calculateVertical(beginning, destination){
  return destination - beginning;
}



function distanceFromHqInBlocks(calculateVertical, feet){
  return calculateVertical * 264;
}
function distanceFromHqInFeet(){
  return distanceFromHqInBlocks * 264;
}

var distanceTravelledInFeet = distanceTravelledInFeet - 400;

function calculatesFarePrice(distance, price){
  if(400 < distanceTravelledInFeet < 2000){
    price = distanceTravelledInFeet * 2;
    return price;
  }
  2000 < distanceTravelledInFeet < 2500 = 25;
  else if(distanceTravelledInFeet > 2500){
  return "Cannot travel that far";
}

}
