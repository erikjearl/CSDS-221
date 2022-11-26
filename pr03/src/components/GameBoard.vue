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
                        :isPlaying="isPlaying"
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
        options: Boolean,
        isPlaying: Boolean,
    },
    data () {
        return {
            board: '',
            path: '',
            showMaze:false,
            cellSize:'',
            showOptions:true,
            gameOver:false,
        }
    },
    created () {
        this.setUpBoard();
    },
    methods: {
        setUpBoard(){
            if(this.showOptions){
                this.cellSize = 20 / Math.max(this.numCols,this.numRows+1)+ 3;
            }else{
                this.cellSize = 50/Math.max(this.numCols-3,this.numRows);
            }
            this.board = new Board(this.numRows, this.numCols);
            this.showMaze = false;
        },
        newGame(){
            this.$emit('isPlaying',true);
            this.gameOver = false;
            this.setUpBoard();
            this.path = [ [this.board.start[0], this.board.start[1]] ];
            this.showMaze = false;
            setTimeout(() => this.toggleShowMaze(), 500)
        },
        clickCell(x, y) {
            if(this.gameOver){
                this.$emit('isPlaying',false);
                this.gameOver = false;
                return;
            }
            if(!this.isPlaying){
                this.newGame();
                return;
            }

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
                this.toggleShowMaze();
                this.$emit('winCounter',false);
            }
            if(this.board.maze[x][y] === 'goal'){
                this.path.push([x,y]);
                this.path.forEach((cell) => this.board.maze[cell[0]][cell[1]] = 'o');
                this.board.maze[this.board.start[0]][this.board.start[1]] = 'goal';
                this.board.maze[this.board.end[0]][this.board.end[1]] = 'goal';
                this.showMaze = true;
                this.gameOver = true;
                this.$emit('winCounter',true);
            }

            this.$forceUpdate();
            
        },
        toggleShowMaze(){
            this.showMaze = true;
            setTimeout(() => this.showMaze = false, 40)
        },
        toggleShowOptions(){
            this.showOptions = !this.showOptions;
            if(!this.showOptions){
                this.newGame();
            }else{
                this.$emit('isPlaying',false);
                this.setUpBoard();
            }
        }
    },
    watch: {
        showMaze(newVal){
            if(newVal){
                this.board.maze.forEach((cell,r) => {
                    cell.forEach((value,c) => {
                        if(value === 'x'){
                            this.board.maze[r][c] = '+';
                        }
                    });
                });
            } else {
                this.board.maze.forEach((cell,r) => {
                    cell.forEach((value,c) => {
                        if(value === '+'){
                            this.board.maze[r][c] = 'x';
                        }
                    });
                });
            }
            this.$forceUpdate();
        },
        numRows(){
            this.$emit('isPlaying',false);
            this.setUpBoard();
        },
        numCols(){
            this.$emit('isPlaying',false);
            this.setUpBoard();
        },
        options(newVal){
            if(!newVal){
                setTimeout(() => this.toggleShowOptions(), 500);
            }else{
                this.toggleShowOptions();
            }
        },
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