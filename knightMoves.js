export default function knightMoves(startSquare, endSquare) {
  //Create board
  const board = buildBoardWithCoords();
  //Create adjacency list for board
  const adjacencyList = createAdjacencyList(board);

  //Build board matrix
  function buildBoardWithCoords() {
    const board = [];
    //Number each square between 0- 63 a coordinate
    for (let i = 0; i < 8; i++) {
      for (let j = 0; j < 8; j++) {
        //Stringify make coords easier to search
        board.push(JSON.stringify([j, i]));
      }
    }
    return board;
  }

  //function to build adjacency list for all 64 squares of the board
  function createAdjacencyList(board) {
    const adjacencyList = [];
    board.forEach((coord, index, array) => {
      const x = JSON.parse(coord)[0];
      const y = JSON.parse(coord)[1];
      //Create adjacencyList entry for each square
      adjacencyList[index] = {
        neighbours: [],
        coord: [x, y],
      };
      //Following checks if possible moves have coresponing squares in board
      //If they exist they are added to adjacency list
      //Check upRight
      if (array.includes(`[${x + 1},${y + 2}]`)) {
        adjacencyList[index].neighbours.push([x + 1, y + 2]);
      }
      //check upLeft
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

  //Returns neighbours of coord/square.
  //Used to navigate adjacencyList.
  function returnNeighboursOfCoords(coords, adjacencyList) {
    const [x, y] = coords;
    const foundElement = adjacencyList.find(
      (obj) => obj.coord[0] === x && obj.coord[1] === y
    );
    return foundElement ? [...foundElement.neighbours] : null;
  }

  //Returns least amount steps to get from one square to another.
  //Breadth first BFS is better for shortest path.
  function searchStepsToCoord(start, end, queue = []) {
    //Base case. If start coords equal end coords return objects previousSteps Array
    if (start.coord[0] === end[0] && start.coord[1] === end[1]) {
      //Adds final step to previous steps array
      start.previousSteps.push(end);
      return start.previousSteps;
    }
    //Create array of Neighbours for start coord/square
    const arrayOfNeighbours = returnNeighboursOfCoords(
      [start.coord[0], start.coord[1]],
      adjacencyList
    );

    //Iterate through all neighbours adding to object with theit details to queue.
    arrayOfNeighbours.forEach((neighbour) => {
      //Create array with previous steps(coords) taken to get to this point.
      const updatedSteps = [...start.previousSteps];
      //Add current coord/square to array.
      updatedSteps.push([start.coord[0], start.coord[1]]);
      //Creat object to be added to queue
      const obj = { coord: neighbour, previousSteps: updatedSteps };
      queue.push(obj);
    });
    //Remove item from queue
    const newStartObject = queue.shift();
    //Recursive call with new start obj/coords
    return searchStepsToCoord(newStartObject, end, queue);
  }

  return searchStepsToCoord(
    { coord: startSquare, previousSteps: [] },
    endSquare
  );
}
