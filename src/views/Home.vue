<script setup>
import { ref } from 'vue'
import Toast from '../components/Toast.vue'
import Todos from '../components/Todos.vue'

const showToast = ref(false);
 function  triggerToast() {
    showToast.value=true;
    setTimeout(() => {
        showToast.value=false;
    }, 3000);
 }

</script>

<template>
  <div class="home">
    <transition name="toast">
      <Toast v-if="showToast" />
    </transition>
    <Todos @badValue="triggerToast" />
  </div>
  </template>
<style scoped>
.toast-enter-active {
  animation: wobble 0.4s ease;
}
.toast-leave-to {
  opacity: 0;
  transform: translateY(-60px);
}
.toast-leave-active {
  transition: 0.4s ease;
}
@keyframes wobble {
  0% {opacity: 0; transform: translateY(-60px);} 
  50% {opacity: 1; transform: translateY(0);} 
  60% {transform: translateX(8px);}  
  70% {transform: translateX(-8px);}  
  80% {transform: translateX(4px);}  
  90% {transform: translateX(-4px);}  
  100% {transform: translateX(0);}  
}
</style>