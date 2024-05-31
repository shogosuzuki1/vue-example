<template>
  <Bar v-if="loaded" :options="chartOptions" :data="chartData" />
</template>

<script setup lang="ts">
import {
  BarElement,
  CategoryScale,
  ChartData,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
import { onMounted, ref } from "vue";
import { Bar } from "vue-chartjs";

const props = defineProps<{
  labels: string[];
  data: number[];
}>();

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

const loaded = ref(false);
const chartData = ref<ChartData<"bar">>({
  labels: [],
  datasets: [{ data: [] }],
});
const chartOptions = {
  responsive: false,
};

onMounted(() => {
  chartData.value = {
    labels: props.labels,
    datasets: [{ data: props.data }],
  };
  loaded.value = true;
});
</script>
