<template>
  <v-app>

    <!-- MENU BAR -->
    <v-toolbar app fixed :elevation="8" color="black">
      <v-app-bar-nav-icon @click="toggleOptions" v-on="on"></v-app-bar-nav-icon>
      <v-toolbar-title style="font-size: 25px;">Memory Maze</v-toolbar-title>
      
      <v-btn color="dark"> Help
        <v-dialog v-model="helpMenu" activator="parent" class="helpMenu">
          <v-card>
            <v-card-text>
              <h1>Memory Maze Rules:</h1>
              <v-list>
                <v-list-item>Try to find the path from the green starting block to the red end block</v-list-item>
                <v-list-item>You can only move in cardinal directions { N S E W }</v-list-item>
                <v-list-item>Click the menu button to toggle game settings</v-list-item>
                <v-list-item>Good Luck</v-list-item>
              </v-list>
            </v-card-text>
            <v-card-actions>
              <v-btn color="primary" block @click="helpMenu = false">Close</v-btn>
            </v-card-actions>
            <v-card-subtitle style="text-align: right;">Created By Erik Earl</v-card-subtitle>
          </v-card>
        </v-dialog>
      </v-btn>

    </v-toolbar>
    

    <!-- CONTENT -->
    <v-container fluid>
      <v-row align="start" no-gutters class="flex-nowrap">


        <!-- OPTION BAR-->

        <Transition name="slide">
        <v-col cols="4" v-if="options" class="options">

          <v-card variant="outlined">
            <br>
            <v-card-title> <h1>Game Settings</h1></v-card-title>
            
            <br>
            <v-row class="settings">
                <v-btn variant="outlined" @click="easySettings" style="width:9vw; min-width: 85px; " color="primary"> Easy </v-btn>
                <v-btn variant="outlined" @click="mediumSettings" style="width:9vw; min-width: 88px;" color="primary">  Medium </v-btn> 
                <v-btn variant="outlined" @click="hardSettings" style="width:9vw; min-width: 85px;" color="primary"> Hard </v-btn> 
            </v-row>
            
            <v-card-item>
              <h3>Number of Rows</h3>
              <v-slider v-model="numRows" color="primary" thumb-label class="mx-5"
                min="3" max="10" step="1"></v-slider>
              <h3>Number of Column</h3>
              <v-slider v-model="numCols" color="primary" thumb-label class="mx-5"
                min="5" max="13" step ="2"></v-slider>
            </v-card-item>
            <v-card-item class="justify-center">
              <v-btn variant="outlined" @click="$refs.board.newGame()" color="primary" style="width:12vw; min-width: 130px;"> New Game</v-btn> &nbsp;
              <v-btn variant="outlined" @click="this.isPlaying = false" color="black" style="width:10vw; min-width: 110px;"> Quit Game</v-btn> &nbsp;
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
        </Transition>

        <!-- v col here ????-->
        <v-col class="board" justify="center">
          <div>
            <GameBoard ref="board"
              :numRows="numRows"
              :numCols="numCols"
              :options="options"
              :isPlaying="isPlaying"
              @isPlaying="togglePlaying"
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
      isPlaying:false,
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
    },
    mediumSettings(){
      this.numRows = 7;
      this.numCols = 7;
    },
    hardSettings(){
      this.numRows = 10;
      this.numCols = 13;
    },
    togglePlaying(newVal){
      this.isPlaying = newVal;
    },
    toggleOptions(){
      this.options = !this.options;
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
      margin-left:20px;
    }
    .board{
      min-width: 250px;
    }
    .settings{
      justify-content: space-between;
      height:70px;
      margin: 0px 20px;
      padding:0px;
    }


  /* option bar slide transition */
    .slide-leave-active,
    .slide-enter-active {
      transition: .5s;
    }
    .slide-enter {
      transform: translate(100%, 0);
    }
    .slide-leave-to {
      transform: translate(-100%, 0);
    }

    .img-slider{
      overflow: hidden;
      position: relative;
      height: 200px;
      width: 400px;
    }

    .img-slider img {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right:0;
    }
</style>

