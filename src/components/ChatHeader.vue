<template>
  <div class="chat-header">
    <!-- <router-link :to="{ name: 'profile', params: { id, username: firstName } }"> -->
    <img :src="avatar" alt="Avatar" class="avatar" />
    <section
      class="info"
      @click="
        router.push({ name: 'profile', params: { id, username: firstName } })
      "
    >
      <h3 class="name">{{ firstName }}</h3>
    </section>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router"

defineProps<{
  firstName: string
  avatar?: string
  id: number
}>()

const router = useRouter()
</script>
<style scoped lang="css">
.chat-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  width: 100%;
  background-color: #b4b4be;
}

.avatar {
  width: 40px;
  height: 40px;
  border-radius: 100%;
}

section {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.name {
  font-size: 24px;
  font-weight: 600;
  margin: 0;
}
.last-message {
  font-size: 18px;
  font-weight: 400;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 200px;
}

.selected {
  background-color: aqua;
}
</style>
