<template>
  <v-app style='margin:30px'>

    <v-card  color="black">
      <v-card-title>
        <v-icon large left> mdi-menu</v-icon>
          <span class="text-center" >Memory Maze </span>
      </v-card-title>
    </v-card>
     
    <h3>rows</h3>
    <v-slider
      v-model="numRows"
      color="rgb(124, 67, 230)"
      min="2"
      max="10"
      thumb-label
    ></v-slider>
    <h3>cols</h3>
    <v-slider
      v-model="numCols"
      color="rgb(124, 67, 230)"
      min="2"
      max="10"
      thumb-label
    ></v-slider>

    <GameBoard 
      :numRows="numRows"
      :numCols="numCols"
    />

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
      numRows:5,
      numCols:5,
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

