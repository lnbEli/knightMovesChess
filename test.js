import knightMoves from "./knightMoves.js";

function searchStepsToCoord(start, end, queue = []) {
  let startCoordsIndex;
  if (Array.isArray(start)) {
    if (start[0] === end[0] && start[1] === end[1]) {
      return start;
    }
    //Find index of adjacencyList start coords
    startCoordsIndex = knightMoves().findIndexOfCoords([start[0], start[1]]);
  }
  //If object passed
  if (start.coord) {
    if (start.coord[0] === end[0] && start.coord[1] === end[1]) {
      start.previousSteps.push(end);
      return start.previousSteps;
    }
    //Find index of adjacencyList start coords
    startCoordsIndex = knightMoves().findIndexOfCoords([
      start.coord[0],
      start.coord[1],
    ]);
  }

  //Find adjacent coords
  const adjList = knightMoves().adjacencyList[startCoordsIndex];

  //Add adjacent coords to queue
  const arrayOfNeighbours = [...adjList.neighbours];

  arrayOfNeighbours.forEach((neighbour) => {
    //Doesnt have the details!!
    let previousSteps;
    if (start.coord) {
      previousSteps = [...start.previousSteps];
    } else {
      previousSteps = [...start];
    }

    previousSteps.push(adjList.coord);
    const obj = { coord: neighbour, previousSteps: previousSteps };
    queue.push(obj);
  });

  const newStartCoord = queue.shift();
  console.log(newStartCoord);

  return searchStepsToCoord(newStartCoord, end, queue);
}

const arrayOfResults = searchStepsToCoord([7, 7], [1, 1]);

// // console.log(arrayOfResults);
// const results = [];

// for (let i = arrayOfResults.length - 1; i >= 0; i = i - 2) {
//   results.push([arrayOfResults[i], arrayOfResults[i - 1]]);
// }

// console.log(results);
console.log(arrayOfResults);
