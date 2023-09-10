<script setup lang="ts">
import {definePageMeta} from "#imports";

definePageMeta({
  title: 'My home page'
})
const route = useRoute();
console.log(route.meta)
</script>

<template>
<div>
  {{ route.params.id}}
</div>
</template>

<style scoped>

</style>