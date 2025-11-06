<template>
  <Suspense>
    <UserInfo  />
    <template #fallback> Loading... </template>
  </Suspense>
</template>
<script setup lang="ts">
import UserInfo from "@/components/UserInfo.vue"
import { computed, Suspense } from "vue"
import { useRoute, useRouter } from "vue-router"

const route = useRoute()
const router = useRouter()

const id = computed(() => Number(route.params.id))

const username = computed(() => route.params.username)


const avatar = computed(() => user.image)
</script>
