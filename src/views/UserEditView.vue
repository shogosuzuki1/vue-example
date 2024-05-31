<template>
  <TemplateView :view-name="viewName">
    <v-card max-width="600" class="mx-auto pa-8">
      <v-card-title class="text-center">Detail</v-card-title>
      <v-text-field v-model="lastName" label="Last Name" variant="outlined" />
      <v-text-field v-model="firstName" label="First Name" variant="outlined" />
      <v-text-field v-model="email" label="Email" variant="outlined" />
      <v-radio-group inline v-model="gender" label="Gender" variant="outlined">
        <v-radio
          v-for="key in Object.keys(GENDER)"
          :key="key"
          :label="key.charAt(0).toUpperCase() + key.slice(1).toLowerCase()"
          :value="GENDER[key as keyof typeof GENDER]"
        />
      </v-radio-group>
      <v-radio-group inline v-model="rank" label="Rank" variant="outlined">
        <v-radio
          v-for="key in Object.keys(RANK)"
          :key="key"
          :label="key.charAt(0).toUpperCase() + key.slice(1).toLowerCase()"
          :value="RANK[key as keyof typeof RANK]"
        />
      </v-radio-group>
      <v-card-actions>
        <v-btn @click="updateUser" color="primary" block variant="elevated">
          update
        </v-btn>
      </v-card-actions>
    </v-card>
  </TemplateView>
</template>

<script setup lang="ts">
import TemplateView from "@/components/TemplateView.vue";
import { GENDER, RANK } from "@/constants/constants";
import { db } from "@/core/db";
import { Gender, Rank, User } from "@/types/User";
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const router = useRouter();

const viewName = "User Edit";
const id = Number(useRoute().params.id);
const user = await db.users.get(id);

const lastName = ref("");
const firstName = ref("");
const email = ref("");
const gender = ref<Gender>(GENDER.MALE);
const rank = ref<Rank>(RANK.ONE);

const updateUser = () => {
  const updateUser: User = {
    id: id,
    lastName: lastName.value,
    firstName: firstName.value,
    gender: gender.value,
    email: email.value,
    rank: rank.value,
  };
  db.users.put(updateUser);
  router.push(`/user`);
};

onMounted(() => {
  if (user) {
    lastName.value = user.lastName;
    firstName.value = user.firstName;
    gender.value = user.gender;
    email.value = user.email;
    rank.value = user.rank;
  }
});
</script>
