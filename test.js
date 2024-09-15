import knightMoves from "./knightMoves.js";

function searchStepsToCoord(start, end, queue = []) {
  if (Array.isArray(start)) {
    start = { coord: start, previousSteps: [] };
  }

  //Base case. If start coords equal end coords return objects previousSteps Array
  if (start.coord[0] === end[0] && start.coord[1] === end[1]) {
    //Adds final step to previous steps array
    start.previousSteps.push(end);
    return start.previousSteps;
  }

  const arrayOfNeighbours = knightMoves().returnNeighboursOfCoords([
    start.coord[0],
    start.coord[1],
  ]);

  arrayOfNeighbours.forEach((neighbour) => {
    const previousSteps = [...start.previousSteps];
    previousSteps.push([start.coord[0], start.coord[1]]);
    const obj = { coord: neighbour, previousSteps: previousSteps };
    queue.push(obj);
  });

  const newStartCoord = queue.shift();

  return searchStepsToCoord(newStartCoord, end, queue);
}

const arrayOfResults = searchStepsToCoord([4, 3], [2, 5]);

console.log(arrayOfResults);
