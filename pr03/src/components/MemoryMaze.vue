<template>
  <v-app>

    <!-- MENU BAR -->
    <v-toolbar app dark fixed :elevation="8">
      <v-app-bar-nav-icon @click="options = !options"></v-app-bar-nav-icon>
      <v-toolbar-title>Memory Maze</v-toolbar-title>
      <v-btn color="primary"> Help
        <v-dialog v-model="helpMenu" activator="parent" class="helpMenu">
          <v-card>
            <v-card-text>
              <h1>Memory Maze Rules:</h1>
              <v-list>
                <v-list-item>Try to find the path from the green starting block to the red end block</v-list-item>
                <v-list-item>You can only move in cardinal directions (NSEW)</v-list-item>
              </v-list>
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" block @click="helpMenu = false">Close</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-btn>

    </v-toolbar>
    

    <!-- CONTENT -->
    <v-container fluid>
      <v-row align="start" >
        <v-col cols="4" v-if="options">
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
              <v-btn variant="outlined" @click="$refs.board.toggleShowMaze()"> Hint </v-btn> 
            </v-card-item>
          </v-card>
        </v-col>

        <!-- v col here ????-->
        <v-col justify="center">
          <div>
            <GameBoard ref="board"
              :numRows="numRows"
              :numCols="numCols"
            />
          </div>
        </v-col>
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
      options:true,
      helpMenu: false,
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
    .helpMenu{
      width: 60vw;
    }
</style>

