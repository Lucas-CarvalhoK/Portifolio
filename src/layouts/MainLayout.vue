<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="barra">
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />
        <q-toolbar-title>
          <q-avatar>
            <img src="../../public/icons/Helix.png" />
          </q-avatar>
          Estudos
        </q-toolbar-title>
        <div>...</div>
      </q-toolbar>
    </q-header>
    <q-drawer
      style="background-color: #121929"
      show-if-above
      v-model="leftDrawerOpen"
      side="left"
    >
      <!-- drawer content -->
      <div class="text-h6 text-center">MENU</div>
      <div class="q-pt-m column">
        <q-expansion-item
          dense
          class="text-center teste"
          label="Front-End Projects"
          icon="fab fa-dev"
        >
          <div class="column">
            <q-btn
              flat
              dense
              style="color: black"
              label="Equilibrium"
              icon="fas fa-cube"
              @click="goEquilibrium()"
            />
            <q-btn
              flat
              dense
              style="color: black"
              label="ydStudio"
              icon="fas fa-cube"
              @click="goysStudio()"
            />
          </div>
        </q-expansion-item>
        <q-expansion-item
          dense
          class="text-center teste"
          label="Hardware Projects"
          icon="fas fa-microchip"
        >
        </q-expansion-item>
        <q-btn
          flat
          dense
          class="text-left"
          color="primary"
          icon="home"
          label="Home"
          :to="'/'"
        />
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const leftDrawerOpen = ref(false);
    const router = useRouter();
    function toggleLeftDrawer() {
      leftDrawerOpen.value = !leftDrawerOpen.value;
    }
    function goEquilibrium() {
      router.push({ name: "equilibrium" });
    }
    function goysStudio() {
      router.push({ name: "ydstudio" });
    }
    return {
      leftDrawerOpen,
      toggleLeftDrawer,
      goEquilibrium,
      goysStudio,
    };
  },
};
</script>

<style scoped>
.barra {
  background-color: #121929;
}
.lateral {
  background-color: #056367;
}
.teste >>> .q-item__section--main ~ .q-item__section--side {
  padding: 0px !important;
}
</style>
