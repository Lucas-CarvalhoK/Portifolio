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
      <div class="White text-h6 text-center" style="color: white">MENU</div>
      <div class="q-pt-m column" style="color: white">
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
              style="color: white"
              label="Equilibrium"
              icon="fas fa-cube"
              @click="goEquilibrium()"
            />
            <q-btn
              flat
              dense
              style="color: white"
              label="ydStudio"
              icon="apartment"
              @click="goysStudio()"
            />
            <q-btn
              flat
              dense
              style="color: white"
              label="Social Dashboard (WIP...)"
              icon="public"
              @click="gosocialDashboard()"
            />
            <q-btn
              flat
              dense
              style="color: white"
              label="ISS Tracker"
              icon="satellite_alt"
              @click="goIssTracker()"
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
    function gosocialDashboard() {
      router.push({ name: "socialDashboard" });
    }
    function goIssTracker() {
      router.push({ name: "IssTracker" });
    }
    return {
      leftDrawerOpen,
      toggleLeftDrawer,
      goEquilibrium,
      goysStudio,
      gosocialDashboard,
      goIssTracker,
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
