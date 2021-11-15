<script setup lang="ts">
import { Pokemon } from '~/libs/models/pokemon'
defineProps<{
  pokemons: Pokemon[]
}>()
</script>
<template>
  <ul class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
    <li
      v-for="pokemon in pokemons"
      :key="pokemon.url"
    >
      <PokemonListItem :pokemon="pokemon" />
    </li>
  </ul>
</template>
