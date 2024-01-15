<script setup>
import EmailIcon from "../../assets/icons/Email.vue";
import HR from "../../assets/icons/HR.vue";
import Calender from "../../assets/icons/Calender.vue";
import { shallowRef, onMounted, watch } from "vue";
import SearchIcon from "../../assets/icons/SearchIcon.vue";
import Close from "../../assets/icons/Close.vue";
import staffs from "../../components/faculty-and-staff";

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

let searchValue = shallowRef(null);
let facultyAndStaff = shallowRef([]);

onMounted(() => (facultyAndStaff.value = staffs));

watch(searchValue, (newSearchValue) => {
  facultyAndStaff.value = staffs.filter(
    (item) =>
      item?.name?.toLowerCase().includes(newSearchValue?.toLowerCase()) ||
      item?.position
        ?.toLocaleLowerCase()
        .includes(newSearchValue?.toLowerCase())
  );
  if (newSearchValue) showCloseMenu = true;
  else showCloseMenu = false;
});

const input = shallowRef(null);
const focusInput = () => {
  input.value.focus();
};

let showCloseMenu = shallowRef(false);
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
              <component
                :is="item.icon"
                class="w-6 h-10 xs:w-8 sm:w-10 md:w-12 xs:h-12 sm:h-14 md:h-16 lg:h-20"
              />
              <p
                class="text-[#FF0000] text-xs xs:text-base sm:text-lg md:text-xl lg:text-2xl font-light text-center"
              >
                {{ item.name }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="max-w-screen-xl h-full mx-auto font-['Lato'] mt-20">
    <div class="w-4/5 h-14 flex my-20 relative max-w-2xl ml-4">
      <input
        type="text"
        name="text"
        id="filter"
        ref="input"
        placeholder="Search"
        v-model="searchValue"
        class="w-full h-full bg-white bg-opacity-90 shadow-lg rounded border-none focus:outline-none px-12 text-[#272224]"
      />
      <SearchIcon
        @click="focusInput"
        class="absolute top-1/2 -translate-y-1/2 left-1 flex w-8 h-6 stroke-2 stroke-gray-400 cursor-text"
      />
      <Close
        v-if="showCloseMenu"
        @click="searchValue = ''"
        class="absolute top-1/2 -translate-y-1/2 right-2 flex w-8 h-8 stroke-2 stroke-[#272224] hover:cursor-pointer hover:stroke-[#3F51B5] transform hover:scale-110 transition-transform ease-in-out duration-300"
      />
    </div>
    <div
      class="w-full flex flex-wrap gap-8 px-4 xl:px-0 justify-evenly lg:justify-between items-center"
    >
      <div
        class="flex flex-col items-center text-[#272224]"
        v-for="lecturer of facultyAndStaff"
      >
        <div class="w-56 h-56 rounded-full overflow-clip">
          <img
            :src="lecturer.imageUrl"
            alt="Mr Kingsley Aruthru Picture"
            class="object-cover object-center"
          />
        </div>
        <div
          class="flex flex-col h-24 w-64 bg-[#D9D9D9] -mt-8 items-center justify-center"
        >
          <p class="font-light">{{ lecturer.name }}</p>
          <p class="font-extrabold">{{ lecturer.position }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
