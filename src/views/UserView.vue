<template>
  <TemplateView :view-name="viewName">
    <v-card>
      <v-table fixed-header>
        <thead>
          <tr>
            <th>id</th>
            <th>last-name</th>
            <th>first-name</th>
            <th>email</th>
            <th>rank</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in userList" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.lastName }}</td>
            <td>{{ user.firstName }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.rank }}</td>
            <td class="text-end">
              <v-btn
                icon="mdi-pencil"
                variant="text"
                @click="onGoToEdit(user.id)"
              />
              <v-btn
                icon="mdi-delete"
                variant="text"
                @click="onDelete(user.id)"
              />
            </td>
          </tr>
        </tbody>
      </v-table>
    </v-card>
  </TemplateView>
</template>

<script setup lang="ts">
import TemplateView from "@/components/TemplateView.vue";
import { db } from "@/core/db";
import { User } from "@/types/User";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const viewName = "Users Management";
const router = useRouter();
const userList = ref<User[]>([]);

const onGoToEdit = (id: number) => {
  router.push(`/user/edit/${id}`);
};

const onDelete = async (id: number) => {
  await db.users.delete(id);
  userList.value = await db.users.toArray();
};

onMounted(async () => {
  userList.value = await db.users.toArray();
});
</script>
