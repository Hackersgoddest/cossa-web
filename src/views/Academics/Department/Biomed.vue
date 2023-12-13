<script setup>
import DepartComponent from "../../../components/DepartmentComponent.vue";
import { shallowRef } from "vue";

const dep = shallowRef({
  coverImageUrl: "/academics/homepage_images/graduates.jpg",
  title: "Department Of Biomedical Equipment Technology",
  message:
    "The field of Biomedical Equipment Technology is undoubtedly one of the most exciting and rewarding areas of study available to students in the 21st century. It is a multidisciplinary area that integrates different principles including anatomy, physiology, medical terminology, physics, chemistry, mathematics, electronics, electrical, information technology, biomedical instrumentation, and equipment management, to form a coherent background for providing cost-effective, efficacious and safe management of medical equipment in a clinical environment.At the Department of Biomedical Equipment Technology, students are trained to handle the maintenance, repair and management of medical and clinical equipment. This is the goal of biomedical equipment technology education. We produce biomedical engineers and biomedical equipment technicians through a curriculum that incorporates the spiritual, physical, mental and social development of qualified students.",
  hodImageUrl: "/about/faculty-and-staff/a. Salako.jpg",
});
</script>
<template>
  <DepartComponent :department="dep" />
</template>
