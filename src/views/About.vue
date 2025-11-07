<script setup>
import { gsap } from 'gsap';
function beforeEnter (el) {
  gsap.set(el,{
    opacity : 0,
    y : -40,
    duration : 1,
  })
}
function enter(el,done) {
  gsap.to(el,{
    opacity : 1,
    y : 0,
    duration : 1,
    onComplete : done,
    ease : 'bounce.out'
  })
}

</script>

<template>
  <div class="about">
    <transition  appear
    @before-enter="beforeEnter"
    @enter="enter"
    >
    <h1>About</h1>
    </transition>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aperiam officia possimus delectus inventore quod quisquam culpa voluptas iusto, quae maiores quo dolorum, corporis laboriosam a dolore consequatur assumenda nam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aperiam officia possimus delectus inventore quod quisquam culpa voluptas iusto, quae maiores quo dolorum, corporis laboriosam a dolore consequatur assumenda nam!</p>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aperiam officia possimus delectus inventore quod quisquam culpa voluptas iusto, quae maiores quo dolorum, corporis laboriosam a dolore consequatur assumenda nam!</p>
  </div>
</template>

<style scoped>
.about {
  max-width: 600px;
  margin : 0 auto;
}
</style>