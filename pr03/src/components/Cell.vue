<template>
    <div class="cell">
      <span v-if="value !== ''">{{ value }}</span>
    </div>
</template>

<script>
  export default {
    name:'gameCell',
    props: {
      value: String,
    }
  }
</script>
<style>
  .cell {
    width: 7vw;
    height: 7vw;
    border: 2px solid rgb(124, 67, 230);
    font-size: 42px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>