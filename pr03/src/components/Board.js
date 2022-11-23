export default class Board {
    
    constructor(m,n) {
        this.start = [m-1, Math.floor(n/2)];
        this.end = [0, Math.floor(n/2)];

        let cells = new Array(m);
        for (var i = 0; i < cells.length; i++) {
            cells[i] = new Array(n).join(".").split(".");
        }
        this.grid = cells;
        this.maze = this.generateMaze(m,n);
    }

    /**
     * @param x The x location
     * @param y The y location
     */
    doMove(x, y) {
        console.log(this.grid[x][y]);
        if (this.grid[x][y] !== '') {
            console.log()
        }
    }

    /**
     * @param m number of rows
     * @param n number of columns
     * @return a maze of size m x n 
     */
    generateMaze(m,n){
        let maze = Array(m).fill().map(() => Array(n).fill('x'));
        const r = 0; const c = 1;
        let current = this.start;
        let path = [current];
        while(maze[this.end[r]][this.end[c]] !== '.') {
            let moves = [];
            if (current[r]-1 >= 0 && maze[current[r]-1][current[c]] !== '.'){
                moves.push([current[r]-1, current[c]]);
            }
            if (current[r]+1 < m && maze[current[r]+1][current[c]] !== '.'){
                moves.push([current[r]+1, current[c]]);
            }
            if (current[c]-1 >= 0 && maze[current[r]][current[c]-1] !== '.'){
                moves.push([current[r], current[c]-1]);
            }
            if (current[c]+1 < n && maze[current[r]][current[c]+1] !== '.'){
                moves.push([current[r], current[c]+1]);
            }
            const nextMove = moves[Math.floor(Math.random()*moves.length)];
    
            if(!nextMove){
                current = path[Math.floor(Math.random()*path.length)];
            }else{
                maze[nextMove[r]][nextMove[c]] = '.';
                current = nextMove;
                path.push(current);
            }
        }
        const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
        let count = 0;
        maze.forEach((row) => {count += countOccurrences(row,'.')});
    
        if(count > (m*n)/2.5){
            maze = this.generateMaze(m,n);
        }
        maze[this.start[r]][this.start[c]] = '[]';
        maze[this.end[r]][this.end[c]] = '[]';
        return maze;
    }
  }