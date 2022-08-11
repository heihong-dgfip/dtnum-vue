<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { FrHeader, FrHeaderService, FrNavigation } from '@dtnum/vue';
import { ref } from 'vue'

// https://vuejs.org/guide/essentials/template-refs.html#ref-on-component (Composition API)
const el = ref();

function addElement(){
 let link = document.createElement('a');
      link.href = '#';
      link.target = '_self';
      link.innerHTML = 'acces direct';
      const comp = el.value.$el as FrNavigation;
      comp.addElement(link);
}
</script>

<template>
  <FrHeader>
     <FrHeaderService
        slot="service"
        href-link="/"
        aria-current-link="page"
        title-link="Accueil - Système de Design de l'État"
        text-link="Système de Design de l'État"
      >
      </FrHeaderService>
      <FrNavigation ref="el">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </FrNavigation>
    
  </FrHeader>
        <button @Click="addElement">addElement</button>
<RouterView />
</template>

