<template>
  <v-app>
    <v-main>
      <MemoryMaze />
    </v-main>
  </v-app>
</template>

<script>
import MemoryMaze from './components/MemoryMaze.vue'

export default {
  name: 'App',

  components: {
    MemoryMaze,
  },

  data: () => ({
    //
  }),
}
</script>
