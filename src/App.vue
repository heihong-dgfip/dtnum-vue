<script setup lang="ts">
import { FrHeader, FrHeaderService, FrNavigation } from '@dtnum/vue';
import { ref } from 'vue'

let element: any;


function addElement(){
   let link = document.createElement('a');
      link.href = '#';
      link.target = '_self';
      link.innerHTML = 'acces direct';
    element = link;
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
      <FrNavigation>
        <ul class="fr-nav__list" id="">
          <li class="fr-nav__item">
              <RouterLink to="/" class="fr-nav__link">Home</RouterLink>
          </li>
          <li class="fr-nav__item">
           <RouterLink to="/about" class="fr-nav__link">About</RouterLink>
          </li>
          {{element}}
        </ul>
      </FrNavigation>
    </FrHeader>
  <!-- <header>

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
 -->
  <RouterView />
    <button @Click="addElement">click</button>
</template>
