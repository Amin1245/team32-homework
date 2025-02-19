
  function calculateTravelTime(travelInfo){
    const {speed , destinationDistance}=travelInfo;
    const totalTime = destinationDistance / speed;

    const hours = Math.floor(totalTime);
    const minutes =Math.round((totalTime - hours) * 60);

    return  `${hours} hours and ${minutes} minutes`;
  }

  const travelInformation = {
    speed: 50,
    destinationDistance: 432,
  };
const travelTime = calculateTravelTime(travelInformation);
  console.log(travelTime); 