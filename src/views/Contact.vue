<script setup>
import gsap from 'gsap';
import { onMounted, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n';
const {locale} = useI18n();
    const icons = ref([
      { name: 'alternate_email', text: 'by email'},
      { name: 'local_phone', text: 'by phone'},
      { name: 'local_post_office', text: 'by post'},
      { name: 'local_fire_department', text: 'by smoke signal'},
    ]);

    function beforeEnterLi (el) {
      gsap.set(el, { opacity: 0, y: 100 }); 
    } 
    function enterLi (el,done) {
      gsap.to(el,{
        duration : 0.8,
        opacity : 1,
        y : 0,
        onComplete : done,
        delay: el.dataset.index * 0.2,
      })
    }
    function changeLanguaage(lng) {
      locale.value = lng;
    }
</script>

<template>
  <div class="contact">
    <h1>Contact</h1>
    <transition-group appear tag="ul"
    @before-enter="beforeEnterLi"
    @enter="enterLi">
      <li v-for="(icon,index) in icons" :key="icon.name" :data-index="index">
        <span class="material-icons">{{ icon.name }}</span>
        <div>{{ icon.text }}</div>
      </li>
    </transition-group>
    <p>{{ $t('message.hello') }}</p>
    <button @click="changeLanguaage('ar')">Arabic</button>
    <button @click="changeLanguaage('en')">English</button>
  </div>
</template>

<style>
  .contact ul {
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    max-width: 400px;
    margin: 60px auto;
  }
  .contact li {
    list-style-type: none;
    background: white;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
    cursor: pointer;
    line-height: 1.5em;
  }
</style>

