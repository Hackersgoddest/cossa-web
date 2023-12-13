<script setup>
import menus from '../../../components/menu';
import { RouterLink } from 'vue-router';
import ClickIcon from "../../../assets/icons/ClickIcon.vue"

const departments = menus.value && menus.value[2]?.submenus[0]?.submenus;

</script>
<template>
  <div class="w-full relative mt-14">
    <img
      src="/academics/homepage_images/graduates.jpg"
      alt="graduates"
      class="object-cover w-full"
    />
    <div
      class="w-full h-full bg-black bg-opacity-30 absolute top-0 left-0"
    ></div>
  </div>
  <div
    class="max-w-screen-lg mx-auto flex justify-center px-4 xl:px-0 text-[#272224]"
  >
    <div
      class="flex flex-col gap-8 justify-center items-start py-28 font-['Lato']"
    >
      <p
        class="main-content font-light text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
      >
        Our Departments
      </p>
      <p
        class="main-content text-base md:text-lg lg:text-xl xl:text-2xl whitespace-normal font-light text-justify"
      >
        At Valley View's Faculty of Science, teaching and learning are
        collaborative efforts. Regardless of their chosen major within the
        faculty, students are encouraged to enroll in courses offered by various
        academic departments.
      </p>
    </div>
  </div>
  <div
    class="max-w-screen-lg mx-auto flex justify-center px-4 xl:px-0 text-[#272224]"
  >
    <div
      class="flex flex-col gap-20 justify-center items-start py-28 font-['Lato'] w-full h-full"
    >
    <div class="flex w-full flex-col gap-8">
      <div class="border-b-[1px] md:border-b-2 border-gray-300 w-full pb-2">
        <span class="font-semibold text-2xl md:text-3xl xl:text-4xl capitalize">Department</span>
      </div>
      <div v-for="department of departments" :key="department.id" class="border-b-[1px] md:border-b-2 border-gray-300 w-full pb-2">
        <RouterLink :to="{ name: department.name }" class="flex items-center gap-2">
          <span class="capitalize text-[#FF0000] text-xl md:text-2xl xl:text-3xl font-light">{{ department.name }}</span>
          <ClickIcon class="w-8 h-6 md:w-8 md:h-8" />
        </RouterLink>
      </div>
    </div>
      <button
        class="w-fit font-sans font-bold px-8 py-2 bg-[#3F51B5] text-white text-lg md:text-2xl transition-transform transform hover:scale-105"
      >
        DEAN
      </button>
    </div>
  </div>
</template>
