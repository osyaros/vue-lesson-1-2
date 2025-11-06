<template>
  <div class="app">
    <component :is="route.meta.layout || BaseLayout" />
  </div>
</template>
<script setup lang="ts">
import { useRoute } from 'vue-router'
import BaseLayout from './layouts/BaseLayout.vue'

const route = useRoute()
</script>
<style lang="css"></style>

