<template>
    <v-app>
        <h1>board</h1>
        <div class="game-board">
            <div v-for="(n, c) in numCols" :key="c">
                <div v-for="(n, r) in numRows" :key="r">
                    <cell @click="doMove(r, c)" :value="this.board.maze[r][c]" />
                    <!-- <cell @click="doMove(i, j)" :value="board.grid[i][j]" /> -->
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
            board: new Board(this.numRows, this.numCols),
        }
    },
    mounted () {
    },
    created () {
        console.log(`-board data: ${this.board} s(${this.board.start}) e(${this.board.end})`)
        console.log(`-board data: ${this.board.maze}`)
    },
    methods: {
        doMove(x, y) {
            console.log(` ${x} ${y}`)
            if (!this.board.doMove(x, y,)) {
            // Invalid move.
            return;
            }
            this.$forceUpdate();
        }
    },
    watch: {
        numRows(){
            this.board = new Board(this.numRows, this.numCols);
        },
        numCols(){
            this.board = new Board(this.numRows, this.numCols);
        }
    }
    }
</script>

<style>
    .game-board {
        display: flex;
        flex-wrap: wrap;
    }
</style>