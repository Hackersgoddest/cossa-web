<script setup>
import DepartComponent from "../../../components/DepartmentComponent.vue";
import { shallowRef } from "vue";

const dep = shallowRef({
  coverImageUrl: "/academics/homepage_images/graduates.jpg",
  title: "Department Of Information Technology",
  message:
    "The need for trained personnel of integrity, good work ethnics, excellent professional skills and positive human relations to contribute towards the realization of the world’s socio-economic development cannot be over-emphasized. Specifically, there is an urgent need to meet the short fall in Information Technology graduates with the requisite skills. This programme is, therefore, designed to address the major area of manpower requirements for the nation by preparing qualified youth for Information Technology careers in the public and private sectors of the world. The role that the Information Technology field and industry can play to support the socio-economic development process has been recognized by governments world-wide including the government of Ghana. By integrating faith and learning, it is hoped that graduates will be equipped to exert positive intellectual, moral and professional influence in the practice of Information Technology.",
  hodImageUrl: "/about/faculty-and-staff/kingsley-arthur.jpg",
});
</script>
<template>
  <DepartComponent :department="dep" />
</template>
