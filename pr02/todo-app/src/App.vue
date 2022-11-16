<template>
  <div id="app">
    <toDo />
  </div>
</template>

<script>
import toDo from './components/toDo.vue'

export default {
  name: 'App',
  components: {
    toDo
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
