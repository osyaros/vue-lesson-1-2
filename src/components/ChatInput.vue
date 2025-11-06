<template>
  <div class="input-wrapper">
    <input type="text" placeholder="Написать сообщение" v-model="text" />
    <Button  @click="emit('submit')" class="submit-btn">Отправить</Button>
  </div>
</template>
<script setup lang="ts">
import Button from './Button.vue';

const text = defineModel<string>()

const emit = defineEmits(['submit'])
</script>
<style lang="css" scoped>
.input-wrapper {
  padding: 16px;
  background-color: #bebebe;
  max-height: 300px;

  display: flex;
  flex-direction: row;
  gap:20px;
}
input{
    width: calc(100vw - 300px - 200px);
    height: 100%;
    min-height: 60px;
}
.submit-btn{
    height: 100%;
    background-color: black;
    color: white;
    padding: 12px;
    border-radius: 8px;
    width: 200px;
}
</style>
