<script setup lang="ts">
import pagination from '~/libs/helpers/pagination'
const props = defineProps<{
  totalData: number
  currentPage: number
  pageSize: number
}>()

const emit = defineEmits<{
  (e: 'update:currentPage', page: number): void
  (e: 'changePage', page: number): void
}>()

const totalPage = computed(() => {
  return Math.ceil(props.totalData / props.pageSize)
})

const items = computed(() => {
  return pagination(props.currentPage, totalPage.value)
})

const changePage = (page: number) => {
  emit('update:currentPage', page)
  emit('changePage', page)
}

const goToPage = (page: number) => {
  if (props.currentPage === page || page <= 0 || page > totalPage.value)
    return

  changePage(page)
}

const prevPage = () => {
  if (props.currentPage === 1)
    return

  changePage(props.currentPage - 1)
}

const nextPage = () => {
  if (props.currentPage === totalPage.value)
    return

  changePage(props.currentPage + 1)
}

</script>

<template>
  <div v-if="items.length > 0" class="flex space-x-1">
    <button
      class="btn justify-center min-w-9 h-9"
      :class="{ 'btn-disabled': currentPage === 1 }"
      @click="prevPage"
    >
      <div class="flex">
        <bx-bxs-chevron-left />
      </div>
    </button>
    <button
      v-for="(page, idx) in items"
      :key="idx"
      class="btn justify-center min-w-9 h-9"
      :disabled="page === '...' || page === currentPage"
      @click="goToPage(page)"
    >
      {{ page }}
    </button>
    <button
      class="btn justify-center min-w-9 h-9"
      :class="{ 'btn-disabled': currentPage === totalPage }"
      @click="nextPage"
    >
      <div class="flex">
        <bx-bxs-chevron-right />
      </div>
    </button>
  </div>
  <div v-else></div>
</template>
