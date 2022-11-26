<template>
    <div class="cell" :class=" {
        'off' : !this.isPlaying,
        'plain' : maze === 'x' || maze === '.',
        'path': maze === '*',
        'wall': maze === '+',
        'goal': maze === 'goal',
        'done': maze === 'o',
    }">
      <span v-if="showMaze && value === 'x' ">{{ value }}</span>
    </div>
</template>

<script>
  export default {
    name:'gameCell',
    props: {
      isPlaying: Boolean,
      maze: String,
      value: String,
      showMaze: Boolean,
      cellSize: Number,
    },
    data () {
        return {
        }
    },
    created () {
      
    },
  }
</script>
<style>
  .cell {
    width: v-bind(cellSize + 'vw');
    height: v-bind(cellSize + 'vw');
    border: 2px solid rgb(0, 0, 0);
    font-size: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
    color:red;
    font-size: xxx-large;
    font-weight: 1000;
  }

  .plain{
    background-color:rgb(194, 194, 194);
  }
  .plain:hover{
    background-color:rgb(117, 117, 117);
  }


  .path{
    background-color:rgb(0, 255, 0);
  }
  .goal{
    background-color:rgb(255, 170, 0);
  }
  .done{
    background-color:rgb(255, 225, 0);
  }
  .wall{
    background-color:rgb(255, 0, 0);
  }
  .off{
    background-color:rgb(82, 82, 82) !important;
  }
</style>