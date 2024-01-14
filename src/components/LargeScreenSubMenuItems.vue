<template>
  <div
    class="bg-black bg-opacity-80 text-white flex flex-col font-semibold flex-wrap p-4 absolute top-12 left-1/2 -translate-x-1/2 border-t-2 border-[#3F51B5] w-64"
    ref="dropdown"
  >
    <div
      v-for="submenu of menus"
      :key="submenu.id"
      class="relative flex justify-between items-center w-full py-3 hover:cursor-pointer"
      :class="`group/${submenu?.name}`"
      @mouseover="onMouseOver(submenu.name)"
      @mouseleave="onMouseOut"
    >
      <RouterLink
        :to="{ name: submenu.name }"
        class="flex flex-1 items-center capitalize transition-colors duration-300 ease-in"
        :class="[
          currentPathNames?.includes(submenu.name) ||
          currentPathNames?.includes(`${submenu.name} Home`) ||
          submenu.name == activeMenu
            ? 'text-[#3F51B5] font-semibold'
            : '',
        ]"
      >
        {{ submenu.name }}
      </RouterLink>
      <RightArrow
        v-if="submenu.hasSubMenu"
        class="w-5 h-5 fill-none cursor-pointer stroke-2 stroke-white transition-colors duration-300 ease-in"
        :class="[submenu.name == activeMenu ? 'stroke-[#3F51B5]' : '']"
      />
      <transition name="fade">
        <div
          v-if="
            submenu.hasSubMenu &&
            activeMenu === submenu.name &&
            submenu.submenus?.length
          "
          class="bg-black bg-opacity-80 absolute top-6 w-64"
          :style="menuStyles"
        >
          <ul class="list-none p-2 flex flex-col">
            <li
              v-for="menu of submenu.submenus"
              :key="menu.id"
              class="py-3 px-2 hover:cursor-pointer"
            >
              <RouterLink
                :to="{ name: menu.name }"
                class="h-full flex hover:text-[#3F51B5] capitalize transition ease-in-out duration-300"
                :class="[
                  (currentPathNames && currentPathNames?.includes(menu.name)) ||
                  (currentPathNames &&
                    currentPathNames?.includes(`${menu.name} Home`))
                    ? 'text-[#3F51B5] font-semibold'
                    : '',
                ]"
                >{{ menu.name }}</RouterLink
              >
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, inject } from "vue";
import { RouterLink } from "vue-router";
import { activeRoutePathNamesKey } from "./keys";
import RightArrow from "../assets/icons/RightArrow.vue";

const props = defineProps({
  menus: Array,
});

const { currentPathNames } = inject(activeRoutePathNamesKey);

const dropdown = ref(null);

const menuStyles = ref({
  left: "auto",
  right: "0",
});

const activeMenu = ref(null);
const onMouseOver = (submenu) => {
  activeMenu.value = submenu;
};

const onMouseOut = () => {
  activeMenu.value = null;
};

const updateMenuPosition = () => {
  const dropdownRect = dropdown.value.getBoundingClientRect();
  const windowWidth = window.innerWidth;
  if (dropdownRect.right + dropdownRect.width <= windowWidth) {
    menuStyles.value.left = "auto";
    menuStyles.value.right = `-${dropdownRect.width + 10}px`;
  } else {
    menuStyles.value.left = `-${dropdownRect.width + 10}px`;
    menuStyles.value.right = "auto";
  }
};

onMounted(() => {
  updateMenuPosition();
  window.addEventListener("resize", updateMenuPosition());
});
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s, transform 0.3s ease-in-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: scaleY(0);
}
</style>
