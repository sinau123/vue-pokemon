<script setup lang="ts">
defineProps<{
  length: number
}>()
</script>
<template>
  <ul class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
    <li
      v-for="num in [...Array(length).keys()]"
      :key="num"
    >
      <LoaderPokemonListItem />
    </li>
  </ul>
</template>
