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

const labels = ref<string[]>([]);
const data = ref<number[]>([]);
for (const key of Object.keys(RANK)) {
  await db.users
    .where("rank")
    .equals(RANK[key as keyof typeof RANK])
    .count()
    .then((count) => {
      labels.value.push(key);
      data.value.push(count);
    });
}
</script>
