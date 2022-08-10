<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { FrHeader, FrHeaderService, FrNavigation } from '@dtnum/vue';
function addElement(){
 let link = document.createElement('a');
      link.href = '#';
      link.target = '_self';
      link.innerHTML = 'acces direct';
  FrNavigation.addElement(link)
}
</script>

<template>
  <!-- <header>

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
      
    </div>
  </header> 
    <RouterView />-->
  
  <FrHeader>
     <FrHeaderService
        slot="service"
        href-link="/"
        aria-current-link="page"
        title-link="Accueil - Système de Design de l'État"
        text-link="Système de Design de l'État"
      >
      </FrHeaderService>
      <FrNavigation>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </FrNavigation>
    
  </FrHeader>
        <button @Click="addElement">addElement</button>
<RouterView />
</template>

