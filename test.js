import knightMoves from "./knightMoves.js";

function searchStepsToCoord(start, end, queue = []) {
  if (start[0] === end[0] && start[1] === end[1]) {
    return start;
  }
  //Find index of adjacencyList start coords
  const startCoordsIndex = knightMoves().findIndexOfCoords([
    start[0],
    start[1],
  ]);
  //Find adjacent coords
  const adjList = knightMoves().adjacencyList[startCoordsIndex];
  //Add adjacent coords to queue
  adjList.forEach((coord) => {
    const array = [...coord];

    //Need to loop values in start
    start.forEach((element) => {
      array.push(element);
    });
    queue.push(array);
  });

  const newStartCoord = queue.shift();

  return searchStepsToCoord(newStartCoord, end, queue);
}

const arrayOfResults = searchStepsToCoord([7, 7], [1, 1]);

// console.log(arrayOfResults);
const results = [];

for (let i = arrayOfResults.length - 1; i >= 0; i = i - 2) {
  results.push([arrayOfResults[i], arrayOfResults[i - 1]]);
}

console.log(results);
