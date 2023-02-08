<script setup>
  import { useCounterStore } from "./stores/counter"
  const store = useCounterStore(); //initialize the store
</script>
<template>
  <h1>Counter App</h1>
  <p>Count is {{ store.count }}</p>
  <p>Double count is {{ store.doubleCount }}</p>
  <button @click="store.increment(1)">Add</button>
  <button @click="store.decrement(1)">Subtract</button>
  <button @click="store.reset">Reset</button>
</template>
<style scoped>
</style>