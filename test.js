import knightMoves from "./knightMoves.js";

const adjacencyList = knightMoves().adjacencyList;

// console.log("hello");

console.log(knightMoves().boardOfCoords);

const startCoords = knightMoves().findIndexOfCoords([5, 4]);

console.log(adjacencyList[startCoords]);
