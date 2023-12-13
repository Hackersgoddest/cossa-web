<script setup>
import DepartComponent from "../../../components/DepartmentComponent.vue";
import { shallowRef } from "vue";

const dep = shallowRef({
  coverImageUrl: "/academics/homepage_images/graduates.jpg",
  title: "Department Of Business Information System",
  message:
    "The underlying and guiding philosophy of the Department of Computer Science and the B.Sc. (Computer Science) programme is to promote scholarship, as well as the search for and the application of scientific knowledge through education, training research and community extension. The Department is committed to pursuing this philosophy through the provision of a world-class programme in Computer Science aimed at training highly skilled and globally-employable computer scientists and conducting cutting-edge research in the field of computer science.",
  hodImageUrl: '/about/faculty-and-staff/J. Abandoh-sam.jpg'
});
</script>
<template>
  <DepartComponent :department="dep" />
</template>
