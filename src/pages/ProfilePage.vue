<template>
  <div>User with id: {{ id }} and username: {{ username }}</div>
</template>
<script setup lang="ts">
import { computed } from "vue"
import { useRoute } from "vue-router"

const route = useRoute()

const id = computed(() => route.params.id)

const username = computed(() => route.params.username)
</script>
