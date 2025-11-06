import { createRouter, createWebHistory } from "vue-router"

import CenteredLayout from "@/layouts/CenteredLayout.vue"
import BaseLayout from "@/layouts/BaseLayout.vue"
import ChatsPage from "@/pages/ChatsPage.vue"
import ProfilePage from "@/pages/ProfilePage.vue"

const routes = [
  {
    path: "/",
    name: "chats",
    component: ChatsPage,
    meta: {
      layout: CenteredLayout,
    },
  },
  {
    path: "/profile/:id/:username",
    name: "profile",
    component: () => import("@/pages/ProfilePage.vue"),
    meta: {
      layout: BaseLayout,
    },
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/",
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
