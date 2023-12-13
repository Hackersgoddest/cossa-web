<script setup>
import EmailIcon from "../../assets/icons/Email.vue";
import HR from "../../assets/icons/HR.vue";
import Calender from "../../assets/icons/Calender.vue";
import { shallowRef } from "vue";

const topLinks = shallowRef([
  {
    name: "Email Login",
    icon: EmailIcon,
  },
  {
    name: "HR Service Center",
    icon: HR,
  },
  {
    name: "Calender",
    icon: Calender,
  },
]);

const staffs = shallowRef([
  {name: 'John Kingsley Arthur', postion: 'Senior Lecturer', imageUrl: '/about/faculty-and-staff/kingsley-arthur.jpg'},
  {name: 'J. Abandoh-sam', postion: 'Senior Lecturer', imageUrl: '/about/faculty-and-staff/J. Abandoh-sam.jpg'},
  {name: 'Prince Yaw Owusu Amoako', postion: 'Senior Lecturer', imageUrl: '/about/faculty-and-staff/Prince Yaw Owusu Amoako.jpg'},
  {name: 'A. Salako', postion: 'Senior Lecturer', imageUrl: '/about/faculty-and-staff/a. Salako.jpg'},
  {name: 'Kingsley Arthur', postion: 'Senior Lecturer', imageUrl: '/about/faculty-and-staff/kingsley-arthur.jpg'},
  {name: 'Kingsley Arthur', postion: 'Senior Lecturer', imageUrl: '/about/faculty-and-staff/kingsley-arthur.jpg'},
  {name: 'Kingsley Arthur', postion: 'Senior Lecture', imageUrl: '/about/faculty-and-staff/kingsley-arthur.jpg'},
  {name: 'Kingsley Arthur', postion: 'Senior Lecturer', imageUrl: '/about/faculty-and-staff/kingsley-arthur.jpg'},
  {name: 'Micheal kelly', postion: 'Junior Lecturer', imageUrl: '/about/faculty-and-staff/Micheal kelly.jpg'},
])
</script>
<template>
  <div class="relative">
    <img
      src="/student_life_images/gallery_images/football.jpg"
      alt="group picture"
      class="object-cover w-screen h-[500px] lg:h-[600px] lg:object-center"
    />
    <div class="w-full h-full bg-black bg-opacity-30 absolute top-0 left-0">
      <div
        class="max-w-screen-xl h-full mx-auto flex px-4 xl:px-0 justify-center items-center relative font-['Lato']"
      >
        <div class="flex flex-col w-full items-center gap-2 font-['Lato']">
          <p
            class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-white"
          >
            Faculty & Staff
          </p>
          <div class="w-full flex justify-around gap-2 xs:gap-4 sm:gap-8">
            <div
              class="h-20 w-1/3 xs:h-28 sm:h-32 md:h-44 md:w-1/4 bg-white flex flex-col items-center justify-center"
              v-for="item of topLinks"
              :key="item.name"
            >
              <component :is="item.icon" class="w-6 h-10 xs:w-8 sm:w-10 md:w-12 xs:h-12 sm:h-14 md:h-16 lg:h-20" />
              <p class="text-[#FF0000] text-xs xs:text-base sm:text-lg md:text-xl lg:text-2xl font-light text-center">{{ item.name }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    class="max-w-screen-xl h-full mx-auto flex flex-wrap gap-8 px-4 xl:px-0 justify-evenly lg:justify-between items-center relative font-['Lato'] mt-40"
  >
  <div class="flex flex-col  items-center text-[#272224]" v-for="lecturer of staffs">
    <div class="w-56 h-56 rounded-full overflow-clip">
      <img :src="lecturer.imageUrl" alt="Mr Kingsley Aruthru Picture" class="object-cover object-center">
    </div>
    <div class="flex flex-col h-24 w-64 bg-[#D9D9D9] -mt-8 items-center justify-center">
      <p class="font-light">{{ lecturer.name }}</p>
      <p class="font-extrabold">{{ lecturer.postion }}</p>
    </div>
  </div>
  </div>
</template>

<style scoped></style>
