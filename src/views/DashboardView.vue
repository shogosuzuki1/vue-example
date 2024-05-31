<template>
  <TemplateView :viewName="viewName">
    <BarChart :labels="labels" :data="data" />
  </TemplateView>
</template>

<script setup lang="ts">
import BarChart from "@/components/BarChart.vue";
import TemplateView from "@/components/TemplateView.vue";
import { RANK } from "@/constants/constants";
import { db } from "@/core/db";
import { ref } from "vue";

const viewName = "Dashboard";

const labels = ref<string[]>(["ONE", "TWO", "THREE", "FOUR", "FIVE"]);
const data = ref<number[]>([
  await db.users.where("rank").equals(RANK.ONE).count(),
  await db.users.where("rank").equals(RANK.TWO).count(),
  await db.users.where("rank").equals(RANK.THREE).count(),
  await db.users.where("rank").equals(RANK.FOUR).count(),
  await db.users.where("rank").equals(RANK.FIVE).count(),
]);
</script>
