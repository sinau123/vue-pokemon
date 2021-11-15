<script setup lang="ts">
import { Pokemon } from '~/libs/models/pokemon'
defineProps<{
  pokemon: Pokemon
}>()
</script>
<template>
  <router-link
    to="/"
    class="block border border-gray-300 dark:border-gray-700 rounded px-2 py-1 bg-gray-100 dark:bg-gray-800"
  >
    <img class="max-w-[200px] min-h-[160px] mx-auto sm:max-w-full" :src="pokemon.artwork" :alt="pokemon.name" loading="lazy">
    <span class="font-bold capitalize italic dark:text-light-300">{{ pokemon.name }}</span>
  </router-link>
</template>
