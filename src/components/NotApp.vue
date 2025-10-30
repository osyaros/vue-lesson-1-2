<template>
  <h1>Приложение Vue</h1>
  <button @click="fetchProducts">Получить товары</button>
  <ProductCard
    v-for="product in products"
    :title="product.title"
    :price="product.price"
  />
</template>

<script setup lang="ts">
import { ref } from "vue";
import ProductCard from "./ProductCard.vue";

interface Product {
  id: number;
  title: string;
  price: number;
}
const products = ref<Product[]>([]);
const fetchProducts = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    products.value = data;
  } catch (err) {
    console.log(err);
  }
};
</script>
