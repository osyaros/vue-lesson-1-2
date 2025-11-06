<template>
  <article class="chat-message" v-bind:class="{ 'my-message': isMine }">
    <p v-if="text_content">{{ text_content }}</p>
    <img v-if="image_content" :src="image_content" />
    <span>{{ created_at }}</span>
  </article>
</template>
<script setup lang="ts">
const props = defineProps<{
  id: string
  text_content: string | null
  image_content?: string 
  created_at: string
  isMine: boolean
}>()
</script>
<style lang="css" scoped>
.chat-message {
  display: flex;
  flex-direction: column;
  padding: 12px;
  gap: 8px;
  max-width: 300px;
  align-self: flex-start;

  background-color: #dedede;
  border-radius: 20px;
  
}
.my-message {
  align-self: flex-end;
  background-color: #bebeeb;
}
</style>
