<script setup lang="ts">
import { FrAccordion } from './../@dtnum/vue';
import { ref } from 'vue'

const descripton = ref('descripton')

function setdata(){
    descripton.value = 'descripton2'
}


</script>

<template>
  <FrAccordion
      ><span slot="title" id="titre1">titre1</span> <span id="descripton1"><span>{{descripton}}</span></span></FrAccordion>
      <span>{{descripton}}</span>
      <button @Click="setdata">click</button>
</template>

