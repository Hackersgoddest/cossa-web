<script setup>
import { RouterLink } from "vue-router";
import { activeRoutePathNamesKey } from "./keys";
import { ref, inject } from "vue";
import AngleDown from "../assets/icons/AngleDown.vue";
import LargeScreenSubMenuItems from "./LargeScreenSubMenuItems.vue";

const props = defineProps({
  menus: Array,
});

const { currentPathNames } = inject(activeRoutePathNamesKey);
const activeMenu = ref(null);

const onMouseOver = (submenu) => {
  activeMenu.value = submenu;
};

const onMouseOut = () => {
  activeMenu.value = null;
};
</script>
<template>
  <div class="md:gap-4 hidden md:flex relative">
    <template v-for="menu of menus" :key="menu.id">
      <div
        @mouseover="onMouseOver(menu.name)"
        @mouseleave="onMouseOut()"
        class="relative group"
      >
        <RouterLink
          :to="{ name: menu.name }"
          class="group hover:cursor-pointer group-hover:text-[#3F51B5] px-1 py-3 capitalize transition ease-in-out duration-300 w-fit flex items-center"
          :class="[
            Array.isArray(currentPathNames) &&
            (currentPathNames.includes(menu.name) ||
              currentPathNames.includes(`${menu.name} Home`))
              ? 'text-[#3F51B5] font-semibold'
              : '',
          ]"
        >
          {{ menu.name }}
          <AngleDown
            v-if="menu.hasSubMenu"
            class="h-5 w-5 mt-1 my-auto group-hover:fill-[#3F51B5] group-focus:fill-[#3F51B5]"
          />
        </RouterLink>
        <LargeScreenSubMenuItems
          @click="activeMenu = null"
          v-if="menu.hasSubMenu && activeMenu === menu.name"
          :menus="menu.submenus"
        />
      </div>
    </template>
  </div>
</template>
