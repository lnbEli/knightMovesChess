//Rule of the board
//Knight can not leave board 8 square x 8 square. Matrix 0-8 x 0-8.
//Square -1 or 9+ doesnt exist
//It's basic move is two steps forward and one step to the side or one step forward and two steps to the side.
//It can face any direction.
//For every square there is a number of possible moves. What data structure allows to work with them? Graph
//Which search algorythm to find moves? Potentially infinite series?
//Find shortest path between node/square and ending square
//Output full path

export default function knightMoves() {
  //First build board with square number and its coord
  function buildBoardWithCoords() {
    //Number each square between 0- 63
    // let count = 0;
    const board = [];
    //Create coords for each numbered square
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) board.push(JSON.stringify([j, i]));
    }
    return board;
  }

  //function to build adjacency list for 64 squares
  function createAdjacencyList(boardCoords) {
    const adjacencyList = [];
    boardCoords.forEach((coord, index, array) => {
      const x = JSON.parse(coord)[0];
      const y = JSON.parse(coord)[1];
      //create adjacencyList entry
      // adjacencyList[index] = [];
      adjacencyList[index] = {
        neighbours: [],
        previousSteps: [],
        coord: [x, y],
      };

      //Does board coords include possible move coord
      //Check upRight Two up one right
      if (array.includes(`[${x + 1},${y + 2}]`)) {
        adjacencyList[index].neighbours.push([x + 1, y + 2]);
      }
      //check upleft
      if (array.includes(`[${x - 1},${y + 2}]`)) {
        adjacencyList[index].neighbours.push([x - 1, y + 2]);
      }
      //check rightUP
      if (array.includes(`[${x + 2},${y + 1}]`)) {
        adjacencyList[index].neighbours.push([x + 2, y + 1]);
      }
      //check leftUP
      if (array.includes(`[${x - 2},${y + 1}]`)) {
        adjacencyList[index].neighbours.push([x - 2, y + 1]);
      }
      //check rightDown
      if (array.includes(`[${x + 2},${y - 1}]`)) {
        adjacencyList[index].neighbours.push([x + 2, y - 1]);
      }
      //check leftDown
      if (array.includes(`[${x - 2},${y - 1}]`)) {
        adjacencyList[index].neighbours.push([x - 2, y - 1]);
      }
      //check downLeft
      if (array.includes(`[${x - 1},${y - 2}]`)) {
        adjacencyList[index].neighbours.push([x - 1, y - 2]);
      }
      //check downright
      if (array.includes(`[${x + 1},${y - 2}]`)) {
        adjacencyList[index].neighbours.push([x + 1, y - 2]);
      }
    });

    return adjacencyList;
  }

  //Returns index of Coord in board. Used to navigate adjacencyList.
  function findIndexOfCoords(coords) {
    const coordsString = JSON.stringify(coords);
    const board = buildBoardWithCoords();
    return board.indexOf(coordsString);
  }

  const boardOfCoords = buildBoardWithCoords();
  const adjacencyList = createAdjacencyList(boardOfCoords);

  return { adjacencyList, boardOfCoords, findIndexOfCoords };
}

//Function with algo to search fasted possible root from square/node/coord to other. Breath first BFS is better for shortest path
