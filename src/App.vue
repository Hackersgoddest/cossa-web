<script setup>
import { RouterView, useRoute } from "vue-router";
import { ref, watch, provide } from "vue";
import MainNavBar from "./components/MainNavBar.vue";
import Footer from "./components/Footer.vue";
import { activeRoutePathNamesKey } from "./components/keys";

const route = useRoute();
const showLogo = ref(true);
const currentPathNames = ref(["Home"]);

provide(activeRoutePathNamesKey, {
  currentPathNames,
});

watch(
  () => route.path,
  (newPath) => {
    showLogo.value = newPath === "/";
    currentPathNames.value = route.matched.map((obj) => obj.name);
  }
);
</script>

<template>
  <MainNavBar :show-logo="showLogo" class="z-20" />
  <RouterView />
  <Footer />
</template>

<style scoped></style>
