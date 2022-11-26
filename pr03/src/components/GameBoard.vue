<template>
    <v-app>
        <v-container class="ma-0 pa-0" fluid justify-center>
        
        <div class="game-board" ref="boardRef">
            <div v-for="(n, c) in this.board.maze[0].length" :key="c">
                <div v-for="(n, r) in this.board.maze.length" :key="r">
                    <cell @click="clickCell(r, c)" 
                        :maze="this.board.maze[r][c]"
                        :value="this.board.maze[r][c]" 
                        :showMaze=showMaze
                        :cellSize="cellSize"
                    />
                </div>
            </div>
        </div>
        </v-container>
    </v-app>
</template>

<script>
    import Board from "./Board";
    import cell from "./Cell";

    export default {
    components: {
     cell,
    },
    props: {
        numRows: Number,
        numCols: Number,
        showOptions: Boolean,
    },
    data () {
        return {
            board: '',
            path: '',
            showMaze:false,
            cellSize:'',
            boardWidth:'',
        }
    },
    created () {
        this.setUpBoard();
    },
    methods: {
        setUpBoard(){
            this.cellSize = 20 / Math.max(this.numCols,this.numRows+1)+ 3;
            if(!this.showOptions){this.cellSize = this.cellSize + (10 / Math.max(this.numCols,this.numRows+1));}
            this.board = new Board(this.numRows, this.numCols);
            this.showMaze = false;
        },
        newGame(){
            this.setUpBoard();
            this.path = [ [this.board.start[0], this.board.start[1]] ];
            this.showMaze = false;
            setTimeout(() => this.toggleShowMaze(), 500)
        },
        clickCell(x, y) {
            let isValidMove = false;
            this.path.forEach((cell) => {
                let moves = [];
                moves.push([cell[0]-1, cell[1]]);
                moves.push([cell[0]+1, cell[1]]);
                moves.push([cell[0], cell[1]-1]);
                moves.push([cell[0], cell[1]+1]);
                if(moves.filter((move) => move[0]===x && move[1]===y).length>0){
                    isValidMove = true;
                }
            });
            if(!isValidMove){
                return;
            }
            // move is valid
            if(this.board.maze[x][y] === '.'){
                this.board.maze[x][y] = '*';
                this.path.push([x,y]);
            }
            if(this.board.maze[x][y] === 'x'){
                this.path.forEach((cell) => this.board.maze[cell[0]][cell[1]] = '.');
                this.path = [ [this.board.start[0], this.board.start[1]] ];
                this.board.maze[this.board.start[0]][this.board.start[1]] = '*';
            }
            if(this.board.maze[x][y] === 'goal'){
                this.path.push([x,y]);
                this.path.forEach((cell) => this.board.maze[cell[0]][cell[1]] = 'o');
                this.showMaze = true;
            }
            
            this.$forceUpdate();
        },
        toggleShowMaze(){
            this.showMaze = true;
            setTimeout(() => this.showMaze = false, 50)
        },
    },
    watch: {
        numRows(){
            this.setUpBoard();
        },
        numCols(){
            this.setUpBoard();
        },
        showOptions(){
            this.setUpBoard();
        }
    }
}
</script>

<style>
    .game-board {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
</style>