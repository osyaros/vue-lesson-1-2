<template>
  <div>User with id: {{ id }} and username: {{ user.firstName }}</div>
  <img :src="user.image" alt="Avatar" />
  <button @click="router.go(-1)">Back</button>
</template>
<script setup lang="ts">
import { computed } from "vue"
import { useRouter, useRoute } from "vue-router"
const route = useRoute()
const id = computed(() => Number(route.params.id))


const router = useRouter()

const user = await fetch(`https://dummyjson.com/users/${id.value}`).then(
  (res) => {
    return res.json()
  },
)
</script>
