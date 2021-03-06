<script setup lang="ts">
import { useQuery, useResult } from '@vue/apollo-composable'
import { gql } from 'graphql-tag'
import { PokemonResults, Pokemons } from '~/libs/models/pokemon'
import LoaderPokemonList from '~/components/loader/LoaderPokemonList.vue'

const limit = 15
const currentPage = ref(1)
const enabledFetch = ref(false)

const { result, variables, fetchMore, refetch, loading, error } = useQuery<PokemonResults>(gql`
  query pokemons($offset: Int, $limit: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      status
      message
      results {
        url
        name
        image,
        artwork,
        dreamworld
      }
    }
  }
`,
{
  limit,
  offset: 0,
}, () => ({ enabled: enabledFetch.value, notifyOnNetworkStatusChange: true }))

const count = computed(() => useResult(result, { results: [] } as Pokemons).value.count || 0)
const pokemons = computed(() => useResult(result, { results: [] } as Pokemons).value.results)

const router = useRouter()
const route = useRoute()

const fetchPokemons = () => {
  enabledFetch.value = true
  refetch()
}

const init = () => {
  const page = route.query.page
  if (typeof page === 'string')
    currentPage.value = +page || 1

  variables.value = {
    limit,
    offset: (currentPage.value - 1) * limit,
  }

  fetchPokemons()
}

watch([currentPage], ([curPage]) => {
  router.push({ name: 'index', query: { page: curPage } })
  fetchMore({
    variables: {
      offset: (curPage - 1) * limit,
    },
    updateQuery: (previousResult, { fetchMoreResult }) => {
      if (!fetchMoreResult) return previousResult

      return fetchMoreResult
    },

  })
})

init()
</script>

<template>
  <div class="sm:hidden my-4 w-full text-center" :class="{'opacity-70 pointer-events-none': loading}">
    <Pagination v-model:current-page="currentPage" :total-data="count" :page-size="limit" />
  </div>
  <LoaderPokemonList v-if="loading" :length="limit" />
  <div v-else-if="error">
    {{ error.message }}
  </div>
  <div v-else-if="pokemons.length > 0">
    <PokemonList :pokemons="pokemons" />
  </div>
  <div v-else>
    No data found
  </div>
  <div class="my-4 w-full text-center" :class="{'opacity-70 pointer-events-none': loading}">
    <Pagination v-model:current-page="currentPage" :total-data="count" :page-size="limit" />
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
