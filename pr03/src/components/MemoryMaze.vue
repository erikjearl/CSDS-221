<template>
  <v-app>

    <!-- MENU BAR -->
    <v-toolbar app fixed :elevation="8" color="black">
      <v-app-bar-nav-icon @click="options = !options"></v-app-bar-nav-icon>
      <v-toolbar-title style="font-size: 25px;">Memory Maze</v-toolbar-title>
      
      
      <v-btn color="dark"> Help
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
      <v-row align="start" no-gutters>

        <v-col cols="4" v-if="options" class="options">

          <v-card variant="outlined">
            <br>
            <v-card-title> <h1>Game Settings</h1></v-card-title>
            
            <br>
            <v-row class="settings">
                <v-btn variant="outlined" @click="easySettings" style="width:9vw"> Easy </v-btn>
                <v-btn variant="outlined" @click="mediumSettings" style="width:9vw"> Medium </v-btn> 
                <v-btn variant="outlined" @click="hardSettings" style="width:9vw"> Hard </v-btn> 
            </v-row>
            
            <v-card-item>
              <h3>rows</h3>
              <v-slider v-model="numRows" color="rgb(124, 67, 230)" thumb-label
                min="3" max="10" step="1"></v-slider>
              <h3>cols</h3>
              <v-slider v-model="numCols" color="rgb(124, 67, 230)" thumb-label
                min="5" max="13" step ="2"></v-slider>
            </v-card-item>
            <v-card-item class="justify-center">
              <v-btn variant="outlined" @click="$refs.board.newGame()" color="primary" style="width:30vw"> New Game</v-btn> &nbsp;
            </v-card-item>
          </v-card>
          
          <br>

          <v-card variant="outlined">
            <v-card-title>
               <h1>Leader Boards</h1></v-card-title>
               <v-card-item>
                FIRST
               </v-card-item>
          </v-card>

          

        </v-col>

        <!-- v col here ????-->
        <v-col class="board" justify="center">
          <div>
            <GameBoard ref="board"
              :numRows="numRows"
              :numCols="numCols"
              :showOptions="options"
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
    easySettings(){
      this.numRows = 4;
      this.numCols = 5;
      this.setUpBoard();
    },
    mediumSettings(){
      this.numRows = 7;
      this.numCols = 7;
        this.setUpBoard();
    },
    hardSettings(){
      this.numRows = 10;
      this.numCols = 13;
        this.setUpBoard();
    },
    customSettings(){

    },
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
    .helpMenu{
      width: 60vw;
    }
    .options {
      min-width: 300px;
    }
    .board{
      min-width: 400px;
    }
    .settings{
      justify-content: space-between;
      height:70px;
      margin: 0px 20px;
      padding:0px;
    }
</style>

