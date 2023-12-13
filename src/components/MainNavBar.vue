<script setup>
import { ref, watch } from "vue";
import SearchIcon from "../assets/icons/SearchIcon.vue";
import SendIcon from "../assets/icons/SendIcon.vue";
import SearchModal from "./modals/SearchModal.vue";
import NavigationModal from "./modals/NavigationModal.vue";
import HamburgerMenu from "../assets/icons/HamburgerMenu.vue";
import menus from "./menu";
import SmallScreenMenuItem from "./SmallScreenMenuItem.vue";
import LargeScreenMenuItems from "./LargeScreenMenuItems.vue";

defineProps({ showLogo: Boolean });

const showSearchModal = ref(false);
const showNavModal = ref(false);
const searchValue = ref("");

const search = () => {
  if (searchValue.value === "") showSearchModal.value = false;
  else {
  }
};

watch( [showSearchModal, showNavModal], ([showSearch, showNav]) => {
  if(showSearch || showNav) {
    document.body.classList.toggle("overflow-hidden", true);
  }
  else {
    document.body.classList.remove("overflow-hidden");
  }
})

</script>
<template>
  <header class="w-full fixed top-0 left-0 bg-white bg-opacity-90 h-14 px-4">
    <div
      class="max-w-screen-xl h-14 mx-auto flex items-start relative"
      :class="[showLogo ? 'justify-between' : 'justify-end']"
    >
      <div
        v-if="showLogo"
        class="z-10 lg:w-1/5 h-44 lg:h-64 bg-[#3F51B5] hidden lg:flex flex-col items-center flex-wrap justify-center font-serif text-white text-2xl md:text-xl lg:text-3xl xl:text-4xl font-bold"
      >
        <p>FACULTY</p>
        <p>OF</p>
        <p>SCIENCE</p>
      </div>
      <div
        class="h-full flex flex-1 flex-col justify-center items-center md:items-end relative flex-wrap w-full"
      >
        <div class="text-[#272224] text-base font-normal font-['Lato'] w-full">
          <div class="flex items-center gap-2 md:gap-4 w-full justify-end">
            <LargeScreenMenuItems :menus="menus" />
            <div class="flex justify-end md:hidden">
              <HamburgerMenu
                id="hamburger-menu"
                @click="showNavModal = true"
                :class="{ hidden: showNavModal }"
                class="w-8 h-6 stroke-2 stroke-[#272224] cursor-pointer hover:stroke-[#3F51B5] transform hover:scale-125 transition-transform ease-in-out duration-300"
              />
              <Teleport to="body">
                <navigation-modal :show="showNavModal" @close="showNavModal = false">
                  <template #body>
                    <SmallScreenMenuItem
                      v-for="submenu of menus"
                      :key="submenu.id"
                      :menu="submenu"
                      :level="0"
                      @close="showNavModal = false"
                    />
                  </template>
                </navigation-modal>
              </Teleport>
            </div>
            <SearchIcon
              v-if="!showSearchModal"
              class="flex w-8 h-6 stroke-2 hover:cursor-pointer hover:stroke-[#3F51B5] transform hover:scale-110 transition-transform ease-in-out duration-300"
              @click="showSearchModal = true"
            />
            <Teleport to="body">
              <search-modal
                :show="showSearchModal"
                @close="showSearchModal = false"
              >
                <template #header>
                  <div
                    class="flex self-center w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-12 bg-white rounded"
                  >
                    <input
                      type="text"
                      placeholder="Search"
                      v-model="searchValue"
                      class="h-full flex flex-1 px-4 placeholder-[#272224] focus:outline-none text-lg bg-transparent"
                    />
                    <button
                      @click="search"
                      class="group h-full w-16 flex bg-gray-400 hover:bg-gray-300 hover:cursor-pointer justify-center rounded-e"
                    >
                      <SendIcon
                        class="w-8 h-8 self-center group-hover:fill-cyan-700 transition-colors duration-300 ease-in"
                      />
                    </button>
                  </div>
                </template>
              </search-modal>
            </Teleport>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
