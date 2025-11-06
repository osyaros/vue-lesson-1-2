<!-- ChildInput.vue -->
<template>
  <input :value="modelValue" @input="update" />
</template>

<script setup lang="ts">
const props = defineProps<{ modelValue: string }>()
const emit = defineEmits<(e: "update:modelValue", v: string) => void>()

function update(e: Event) {
  const target = e.target as HTMLInputElement
  emit("update:modelValue", target.value)
}
</script>
