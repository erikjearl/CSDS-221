<template>
  <v-app style='margin:30px'>

    <!-- MENU BAR -->
    <v-card  color="black" >
      <v-card-title>
        <v-icon large left> mdi-menu </v-icon>
          <span class="text-center"> Memory Maze </span>
      </v-card-title>
    </v-card>

    <!-- CONTENT -->
    <v-container>
      <v-row align="start" no-gutters>
      <v-col cols="4">
        <v-card>
          <v-card-title> <h1>Options</h1></v-card-title>
          <v-card-item>
            <h3>rows</h3>
            <v-slider v-model="numRows" color="rgb(124, 67, 230)" thumb-label
              min="3" max="11" step="1"></v-slider>
            <h3>cols</h3>
            <v-slider v-model="numCols" color="rgb(124, 67, 230)" thumb-label
              min="3" max="11" step ="2"></v-slider>
          </v-card-item>
          <v-card-item>
            <v-btn variant="outlined" @click="$refs.board.newGame()"> New Game</v-btn> &nbsp;
            <v-btn variant="outlined" @click="$refs.board.toggleShowMaze()"> Toggle Maze</v-btn> 
          </v-card-item>
        </v-card>
      </v-col>


      <!-- v col here ????-->
        <GameBoard ref="board"
          :numRows="numRows"
          :numCols="numCols"
        />

        
    </v-row>
    </v-container>
  </v-app>
</template>

<script>
import GameBoard from './GameBoard.vue'

export default {
  components: {
    GameBoard,
  },
  props: [
  ],
  data () {
    return {
      numRows:7,
      numCols:7,
    }
  },
  mounted () {
  },
  created () {
    console.log(`%c ----- STARTING ${Date.now()} -----`, 'color: #bada55')
  },
  computed: {
  },
  methods: {
  },
  watch: {
    numRows(rows){
      this.numRows = parseInt(rows)
    },
    numCols(cols){
      this.numCols = parseInt(cols)
    }
  }
}
</script>

<style>
    * {
        margin:0;
        padding:0;
    }
    #app{
        position: relative;
        width: 99vw;
        min-height: 100vh;
    }
    .column{
        width: 15%;
    }
    .button{
        width: 70%;
    }
</style>

