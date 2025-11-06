<script setup lang="ts">
const emit = defineEmits(["click"])
</script>

<template>
  <button @click="emit('click')"><slot>Текст</slot></button>
</template>
