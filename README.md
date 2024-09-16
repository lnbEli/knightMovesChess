# Shortest Knight Path Algorithm in JavaScript

## Overview

This project implements an algorithm to find the shortest path a knight can take on a standard 8x8 chessboard, using Breadth-First Search (BFS) in JavaScript (ES6). The solution builds a graph of all possible knight moves and utilizes recursion and queue-based traversal to explore paths.

## Technologies Used

- **JavaScript (ES6)**: Modern JavaScript features are used to implement the knight’s path algorithm.
- **Graph Representation**: The chessboard is represented as a graph using an adjacency list.
- **Breadth-First Search (BFS)**: The BFS algorithm is used to find the shortest path by level-order traversal of possible knight moves.

## Key Components of the Code

### Chessboard Generation (`generateChessBoardCoordinates`)

- Generates all the coordinates of an 8x8 chessboard.
- The board is represented as an array of stringified coordinates (e.g., `"[0,0]"` for the top-left corner).
- Each square is assigned a unique coordinate in the form `[x, y]`.

### Graph Construction (`buildKnightMovesGraph`)

- Builds an **adjacency list** to represent all the possible knight moves from each square on the board.
- For each square, all valid knight moves (up to 8) are calculated and stored as neighbors.
- The adjacency list allows fast lookup of valid moves from any square.

### Knight Move Validation (`getValidKnightMoves`)

- This function takes a set of coordinates and looks them up in the adjacency list to return all valid knight moves from that square.

### BFS Search Algorithm (`findShortestPathBFS`)

- **Breadth-First Search (BFS)** is used to traverse the graph and find the shortest path from the starting square to the target square.
- Each move is tracked along with its previous steps to reconstruct the path.
- The algorithm explores all possible paths level by level, ensuring the shortest path is found first.

## Key Functions and Operations

### Chessboard Coordinates Generation (`generateChessBoardCoordinates`)

- Creates a list of all squares on the chessboard (64 in total), stored as stringified arrays for easy lookup.

### Adjacency List Construction (`buildKnightMovesGraph`)

- Iterates over each square, calculates the possible knight moves, and builds the adjacency list with valid neighbors for each square.

### Knight Move Lookup (`getValidKnightMoves`)

- Looks up the valid knight moves from any square by searching the adjacency list.

### BFS Pathfinding (`findShortestPathBFS`)

- Implements the breadth-first search algorithm to find the shortest path between two squares.
- Tracks the steps taken to reach each square and returns the full path when the target square is found.

## Example

For a knight starting at square `[0, 0]` (bottom-left corner) and aiming to reach `[7, 7]` (top-right corner), the algorithm will output the shortest path by traversing the chessboard using valid knight moves.

This approach ensures the knight reaches its destination with the fewest possible moves.
