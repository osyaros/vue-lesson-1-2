<!-- ProductCard.vue -->
<template>
  <div>
    <h3>{{ props.title }}</h3>
    <p>Цена: {{ props.price }}₽</p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string;
  price?: number;
}
const props = withDefaults(
  defineProps<Props>(), {
    title: "Продукт",
    price: 100, 
  }
);
</script>
