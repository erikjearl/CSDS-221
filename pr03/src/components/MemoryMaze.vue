<template>
  <v-app>

    <!-- MENU BAR -->
    <v-toolbar app fixed :elevation="8" color="black">
      <v-app-bar-nav-icon @click="this.options = !this.options"></v-app-bar-nav-icon>
      <v-toolbar-title style="font-size: 25px;">Memory Maze</v-toolbar-title>
      <h2 style="color:rgb(235, 121, 255); margin-right:75px; font-style: italic;"> Win Streak: {{this.numWins}}</h2>
      
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
            <v-card-title class="text-h3 mt-3" style="font-weight: 900;"> Game Settings </v-card-title>
            <v-row class="settings mt-3">
                <v-btn variant="outlined" @click="easySettings" style="width:9vw; min-width: 85px !important;" color="primary"> Easy </v-btn>
                <v-btn variant="outlined" @click="mediumSettings" style="width:9vw; min-width: 88px !important;" color="primary">  Medium </v-btn> 
                <v-btn variant="outlined" @click="hardSettings" style="width:9vw; min-width: 85px !important;" color="primary"> Hard </v-btn> 
            </v-row>
            <v-card-item class="ma-0 pb-0">
              <h3># of Rows</h3>
              <v-slider v-model="numRows" color="primary" thumb-label class="mx-5"
                min="3" max="10" step="1"></v-slider>
              <h3># of Columns</h3>
              <v-slider v-model="numCols" color="primary" thumb-label class="mx-5"
                min="5" max="13" step ="2"></v-slider>
            </v-card-item>
            <v-card-item class="justify-center">
              <v-btn variant="outlined" @click="$refs.board.newGame()" color="primary" style="min-width: 130px"> New Game</v-btn> &nbsp;
              <v-btn variant="outlined" @click="this.isPlaying = false" color="black" style="min-width: 110px"> Quit Game</v-btn> &nbsp;
            </v-card-item>
          </v-card>
          
          <br>

          <!-- LEADER BOARDS-->
          <v-card v-if="this.gameMode !== ''" variant="outlined" class="leaderBoard">
            <v-card-title class="mt-3 mb-0 pb-0">
              <h1 class="mb-1" style="font-weight: 900;">Leaderboard</h1> 
              <h3 v-if="this.gameMode==='EASY'" style="color:rgb(89, 13, 229)"> EASY </h3> 
              <h3 v-if="this.gameMode==='MEDIUM'" style="color:rgb(89, 13, 229)"> MEDIUM </h3>
              <h3 v-if="this.gameMode==='HARD'" style="color:rgb(89, 13, 229)"> HARD</h3>
            </v-card-title>
            <v-card-item class="mt-0 pt-0">
              <v-table>
                <thead>
                  <tr>
                    <th class="text-center" style="font-size:medium"> &nbsp; Name</th>
                    <th class="text-center" style="font-size:medium"> &nbsp; Win Streak</th>
                  </tr>
                </thead>
                <tbody style="color:rgb(89, 13, 229)">
                  <tr v-for="item in this.gameMode==='EASY'?easyRank:this.gameMode==='MEDIUM'?mediumRank:this.gameMode==='HARD'?hardRank:none" :key="item.name" >
                    <td>{{ item.name }}</td>
                    <td>{{ item.wins }}</td>
                  </tr>
                </tbody>
              </v-table>
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
              @winCounter="winCounter"
            />
          </div>
        </v-col>
      </v-row>
    </v-container>

    <v-dialog v-model="newScore" style="width:40vw; min-width: 500px;" persistent>
      <v-card>
        <v-card-title class="text-h3 my-4" style="text-align: center; font-weight: bold;">
          NEW HIGH SCORE!
        </v-card-title>
        <v-card-text class="pa-0 ma-0">
          <v-container class="justify-center ma-0 pa-0">
            <v-row no-gutters>
              <v-col cols="8">
                <v-text-field v-model="playerName" variant="outlined" label="Enter Your Name" required
                  class='ml-10 mr-1' style="color:rgb(89, 13, 229);" ></v-text-field>
              </v-col>
              <v-col cols="4">
                <v-text-field variant="solo" readonly
                  class='mr-10 ml-1 centered-input'><b style="color:rgb(89, 13, 229);font-weight:bold;text-align:center;width:100%">Score: {{numWins}}</b></v-text-field>
              </v-col>
              </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions class="justify-center pt-0">
          <v-btn color="primary" variant="outlined" @click="addNewScore" style="width:15vw;"> SUBMIT </v-btn>
          <v-btn color="red" variant="outlined" @click="newScore = false; numWins=0" style="width:15vw;"> CANCEL </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>


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
      numCols:9,
      options:true,
      helpMenu: false,
      isPlaying:false,
      numWins:0,
      gameMode:"MEDIUM",

      newScore: false,
      playerName:'',

      easyRank:[
        {name: 'Erik', wins: 3},
        {name: '-', wins: 0},
        {name: '-', wins: 0},
      ],
      mediumRank: [
        {name: 'Erik', wins: 2},
        {name: '-', wins: 0},
        {name: '-', wins: 0},
      ],
      hardRank:[
        {name: 'Erik', wins: 1},
        {name: '-', wins: 0},
        {name: '-', wins: 0},
      ],
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
      this.numRows = 5;
      this.numCols = 7;
    },
    mediumSettings(){
      this.numRows = 7;
      this.numCols = 9;
    },
    hardSettings(){
      this.numRows = 10;
      this.numCols = 13;
    },
    togglePlaying(newVal){
      this.isPlaying = newVal;
    },
    winCounter(isWin){
      if(isWin){
        this.numWins++;
      }else{
        //check leader boards
        let rank;
        if(this.gameMode ==='EASY'){
          rank = this.easyRank;
        }
        if(this.gameMode ==='MEDIUM'){
          rank = this.mediumRank;
        }
        if(this.gameMode ==='HARD'){
          rank = this.hardRank;
        }
        rank = rank.sort((a,b) => b.wins - a.wins);
        console.log(`here ${rank.length}`)
        let rank3 = rank.length>=3?rank[2]:{wins:0};
        console.log(`${rank3.wins} ${this.numWins} ${(this.numWins > rank3.wins)}`)
        if(this.numWins > rank3.wins){
          this.isPlaying = false;
          this.newScore = true;
        }else{
          this.numWins = 0;
        }
      }
    },
    setGameMode(){
      if(this.numCols == 7 && this.numRows == 5)    this.gameMode = 'EASY';
      else if(this.numCols == 9 && this.numRows == 7)    this.gameMode = 'MEDIUM';
      else if(this.numCols == 13 && this.numRows == 10)  this.gameMode = 'HARD';
      else this.gameMode = '';
    },
    addNewScore(){
      let rank;
      if(this.gameMode ==='EASY'){
        rank = this.easyRank;
      }
      if(this.gameMode ==='MEDIUM'){
        rank = this.mediumRank;
      }
      if(this.gameMode ==='HARD'){
        rank = this.hardRank;
      }
      rank.length = 2;
      rank.push({name:this.playerName, wins:this.numWins})
      rank = rank.sort((a,b) => b.wins - a.wins);
      this.numWins = 0;
      this.playerName = '';
      this.newScore = false;
    }
  },
  watch: {
    numRows(rows){
      this.numRows = parseInt(rows)
      this.setGameMode();
    },
    numCols(cols){
      this.numCols = parseInt(cols)
      this.setGameMode();
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
      background-color:white;
      text-align: center;
    }
    .leaderBoard{
      background-color:white;
      text-align: center;
    }
    .board{
      min-width: 350px;
    }
    .settings{
      justify-content: space-between;
      margin: 0px 20px 15px 20px;
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

