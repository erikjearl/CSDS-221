<template>
  <v-app>
    <v-card>
    <!--panel header-->
        <v-card-title class='headline primary justify-center' primary-title style='black: white;'>
          <v-spacer />
                <h1 class="text-center"> Memory Maze </h1>
            <v-spacer />
            <v-btn color="primary" elevation="2" large @click="addTaskModal"> <span class="fa-solid fa-bars" /> Menu </v-btn>
        </v-card-title>
    </v-card>
  </v-app>
</template>

<script>
export default {
  components: {
  },
  props: [
  ],
  data () {
    return {
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
        justify-content: center;
        align-items: center;
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

