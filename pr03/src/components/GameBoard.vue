<template>
    <v-app>
        <h1>
            Board &nbsp;
        </h1>
        
        <div class="game-board">
            <div v-for="(n, c) in this.board.maze[0].length" :key="c">
                <div v-for="(n, r) in this.board.maze.length" :key="r">
                    <cell @click="clickCell(r, c)" 
                        :maze="this.board.maze[r][c]"
                        :value="this.board.maze[r][c]" 
                        :showMaze=showMaze
                    />
                </div>
            </div>
        </div>
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
    },
    data () {
        return {
            board: '',
            path: '',
            showMaze:true,
        }
    },
    mounted () {
    },
    created () {
        this.newGame();
    },
    methods: {
        newGame(){
            this.board = new Board(this.numRows, this.numCols);
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
        
    }
}
</script>

<style>
    .game-board {
        display: flex;
        flex-wrap: wrap;
        border: 2px solid rgb(0, 0, 0)
    }
</style>