<script setup lang="ts">
const a = 3;
if (a == 3) {
  console.log(a);
}
</script>
<template>
  <div class="toast-wrapper">
    <div class="toast">You must enter a value for the todo</div>
  </div>
</template>

<style>
.toast-wrapper {
  position: fixed;
  top: 20px;
  width: 100%;
}
.toast {
  padding: 20px;
  background-color: teal;
  color: white;
  border-radius: 7px;
  max-width: 400px;
  margin: 0 auto;
}
</style>
