<template>
  <div class="drawer">
    <ChatPreview
      v-for="chat in chats"
      :first-name="chat.firstName"
      :last-msg="chat.lastMsg"
      :image="chat.image"
      :key="chat.id"
      :selected="selectedChat == chat.id"
      @click="selectedChat = chat.id"
    />
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import ChatPreview from "../components/ChatPreview.vue";

interface UserInfo {
  id: number;
  firstName: string;
  lastMsg: string;
  image?: string;
  selected: boolean;
}

const chats = ref<UserInfo[]>([]);
const selectedChat = ref<number | null>(null);

const getData = async () => {
  return await fetch("https://dummyjson.com/users")
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      console.error("Error: ", err);
    });
};

onMounted(async () => {
  await getData().then((data) => {
    chats.value = data.users.map((user) => {
      return { ...user, lastMsg: user.university };
    });
  });
});
</script>
<style scoped lang="css">
.drawer {
  width: 300px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #101010;
}
</style>
