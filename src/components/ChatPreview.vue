<template>
<div class="chat-preview" :class="{'selected': selected}">
        <img :src="image" alt="Avatar" class="avatar" />
        <section class="info">
            <h3 class="name">{{ firstName }}</h3>
            <p class="last-message">{{ lastMsg }}</p>
        </section>
    </div>
</template>
<script setup lang="ts">
import { onMounted, toRefs, watch } from 'vue';

interface UserInfo {
    firstName: string;
    lastMsg: string;
    image?: string;
    selected: boolean;
}
const props = withDefaults(defineProps<UserInfo>(), {image: 'https://media.istockphoto.com/id/1564441923/ru/%D1%84%D0%BE%D1%82%D0%BE/%D1%81%D1%82%D0%BE%D0%BF%D0%BA%D0%B0-%D0%BA%D0%B0%D0%BC%D0%BD%D0%B5%D0%B9-%D0%B2-%D1%81%D0%BF%D0%BE%D0%BA%D0%BE%D0%B9%D0%BD%D0%BE%D0%BC-%D0%BE%D0%BA%D0%B5%D0%B0%D0%BD%D0%B5.jpg?s=612x612&w=0&k=20&c=vglz1YmtOOOHgYJrCi3sYT3KpCwC75cRRsU3VIXOYpE='});

// const {selected} = toRefs(props);
// watch(selected, (oldVal, newVal) => {
//     console.log('Было: ', oldVal, 'Стало: ', newVal);
// })

onMounted(() => {
    console.log('hello wolrd');
})
</script>
<style scoped lang="css">
    .chat-preview {
        display: flex;
        flex-direction: row;
        gap: 10px;
        cursor: pointer;
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