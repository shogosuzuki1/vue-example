<template>
  <v-app>
    <!-- ドロワー -->
    <v-navigation-drawer v-model="drawer">
      <v-list>
        <v-list-subheader>MENU LIST</v-list-subheader>

        <v-list-item
          v-for="(menu, i) in menuList"
          :key="i"
          :value="menu"
          color="primary"
          :to="menu.link"
        >
          <template v-slot:prepend>
            <v-icon :icon="menu.icon"></v-icon>
          </template>

          <v-list-item-title v-text="menu.text"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- ヘッダー -->
    <v-app-bar color="primary">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-app-bar-title>Application Bar</v-app-bar-title>
    </v-app-bar>

    <!-- メインコンテンツ -->
    <v-main height="100vh">
      <router-view />
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import { ref } from "vue";

const drawer = ref(true);
const menuList = [
  { text: "users", icon: "mdi-account-group", link: "/user" },
  { text: "dashboard", icon: "mdi-view-dashboard", link: "/" },
  { text: "C menu 03", icon: "mdi-flag", link: "/about" },
];
</script>
