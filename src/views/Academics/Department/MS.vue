<script setup>
import DepartComponent from "../../../components/DepartmentComponent.vue";
import { shallowRef } from "vue";

const dep = shallowRef({
  coverImageUrl: "/academics/homepage_images/graduates.jpg",
  title: "Department Of Mathematical Science",
  message:
    "Welcome to the Department of Mathematical Science. Our philosophy is to promote interdisciplinary scholarship, as well as the search for and the application of scientific knowledge through mathematical education, training and research. The Department is committed to pursuing this philosophy by providing a programme in Mathematics with Economics aimed at training highly skilled and globally-employable graduates that are able to conduct interdisciplinary research in the field of mathematics and economics. By integrating faith and learning, it is hoped that graduates will be equipped to demonstrate positive intellectual, moral and professional influence in their field of expertise",
  hodImageUrl: "/about/faculty-and-staff/Prince Yaw Owusu Amoako.jpg",
});
</script>
<template>
  <DepartComponent :department="dep" />
</template>
