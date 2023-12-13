<script setup>
import MainNavBar from "../../components/MainNavBar.vue"
import Footer from "../../components/Footer.vue";
</script>
<template>
    <div class="fixed z-10">
        <MainNavBar :show-logo="false" />
    </div>
  <RouterView />
  <Footer />
</template>
<style scoped></style>