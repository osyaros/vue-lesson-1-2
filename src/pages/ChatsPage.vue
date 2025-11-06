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
  <section v-if="selectedChat" class="chat-content">
    <ChatHeader
      :first-name="chats.find((chat) => chat.id == selectedChat)!.firstName"
      :avatar="chats.find((chat) => chat.id === selectedChat)!.image"
      :id="selectedChat"
    />
    <div class="chat-messages">
      <ChatMessage
        v-for="message in messages"
        :key="message.id"
        :id="message.id"
        :text_content="message.text_content"
        :image_content="message.image_content"
        :created_at="message.created_at"
        :is-mine="isMyMessage(message.from_user_id)"
      />
    </div>
    <ChatInput
      v-model="messageText"
      class="chat-input"
      @submit="updateMessages"
    />
  </section>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue"
import ChatPreview from "../components/ChatPreview.vue"
import ChatInput from "../components/ChatInput.vue"
import ChatMessage from "../components/ChatMessage.vue"
import ChatHeader from "@/components/ChatHeader.vue"

interface UserInfo {
  id: number
  firstName: string
  lastMsg: string
  image?: string
  selected: boolean
}

const chats = ref<UserInfo[]>([])
const selectedChat = ref<number | null>(null)
const messages = ref([
  {
    id: "1",
    chat_id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    from_user_id: "256",
    text_content: "Привет, друг!",
    image_content:
      "https://i.pinimg.com/736x/d4/38/c3/d438c31d0caf10b0dc17a5fcb503a38e.jpg",
    created_at: "2025-11-04T16:26:30.663Z",
    seen_by: [
      {
        user_id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        seen_at: "2025-11-04T16:26:30.663Z",
      },
    ],
  },
  {
    id: "2",
    chat_id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    from_user_id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    text_content: "Hello, friend!",
    image_content:
      "https://1.downloader.disk.yandex.ru/preview/5d18ec1768d74ad0401e6141dc14d2c4a08d2fee87ed671acb4856752086bd8a/inf/Iwck-XgS4IsYWv4P6DDwGp_vuf34CVEleYfw65yK-m1VTc7DHGNAwYJY4OEev5mlWvSW2VdblpHgjVEGZ7gvag%3D%3D?uid=404498210&filename=photo_2025-11-04_19-39-23.jpg&disposition=inline&hash=&limit=0&content_type=image%2Fjpeg&owner_uid=404498210&tknv=v3&size=1920x953",
    created_at: "2025-11-04T16:26:30.663Z",
    seen_by: [
      {
        user_id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        seen_at: "2025-11-04T16:26:30.663Z",
      },
    ],
  },
  {
    id: "3",
    chat_id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    from_user_id: "256",
    text_content: "Как дела?",
    created_at: "2025-11-04T16:26:30.663Z",
    seen_by: [
      {
        user_id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        seen_at: "2025-11-04T16:26:30.663Z",
      },
    ],
  },
])

const messageText = ref<string>("")
const getData = async () => {
  return await fetch("https://dummyjson.com/users")
    .then((res) => {
      return res.json()
    })
    .catch((err) => {
      console.error("Error: ", err)
    })
}

const isMyMessage = (from_user_id: any) => {
  return from_user_id === "256"
}
const updateMessages = (messageText: string) => {
  messages.value.push({
    id: new Date().getTime().toString(),
    chat_id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
    from_user_id: "256",
    text_content: messageText,
    image_content:
      "https://i.pinimg.com/736x/d4/38/c3/d438c31d0caf10b0dc17a5fcb503a38e.jpg",
    created_at: "2025-11-04T16:26:30.663Z",
    seen_by: [
      {
        user_id: "3fa85f64-5717-4562-b3fc-2c963f66afa6",
        seen_at: "2025-11-04T16:26:30.663Z",
      },
    ],
  })
}

onMounted(async () => {
  await getData().then((data) => {
    chats.value = data.users.map((user) => {
      return { ...user, lastMsg: user.university }
    })
  })
})
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
.chat-content {
  display: flex;
  flex-direction: column;
  width: calc(100vw - 300px);
  height: 100vh;
  position: fixed;
  right: 0;
  top: 0;
}
.chat-messages {
  height: calc(100vh - 150px);
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px 20px;
  overflow-y: auto;
}
.chat-input {
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
