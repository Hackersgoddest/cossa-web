<script setup>
import SmallScreenMenuItems from "./SmallScreenMenuItem.vue"
import RightArrow from "../assets/icons/RightArrow.vue";
import DownArrow from "../assets/icons/DownArrow.vue";
import { activeRoutePathNamesKey } from "./keys";
import { RouterLink } from "vue-router";
import { ref, onMounted, inject } from "vue";

const props = defineProps({
  menu: Object,
  level: Number,
});

let activeMenu = ref(null);
let isActiveMenu = ref(false);
let levelNum = ref(0);
let { currentPathNames } = inject(activeRoutePathNamesKey);

onMounted(() => {
  levelNum.value = parseInt(props.level);
  isActiveMenu.value =
    Array.isArray(currentPathNames.value) &&
    currentPathNames.value.some((name) => props.menu.name.includes(name));
});
</script>
<template>
  <div class="flex w-full flex-col gap-4 font-['Lato']">
    <div class="flex w-full justify-between items-center group text-white">
      <RouterLink
        @click="$emit('close')"
        :to="{ name: menu.name }"
        class="capitalize font-semibold group-hover:text-[#3F51B5] cursor-pointer flex-1"
        :class="[
          levelNum === 0
            ? 'text-lg'
            : levelNum === 1
            ? 'text-base text-opacity-70'
            : 'text-sm text-opacity-50',
          isActiveMenu ? 'text-[#3F51B5] font-bold' : '',
        ]"
      >
        {{ menu.name }}
      </RouterLink>
      <template v-if="menu.hasSubMenu">
        <RightArrow
          @click="activeMenu = menu.name"
          class="w-8 h-8 fill-none cursor-pointer stroke-2 stroke-white transition-colors duration-300 ease-in"
          :class="[
            activeMenu === menu.name ? 'hidden' : 'block',
            levelNum === 0
              ? 'opacity-100'
              : levelNum === 1
              ? 'opacity-70'
              : 'opacity-50',
          ]"
        />
        <DownArrow
          @click="activeMenu = null"
          class="w-8 h-8 cursor-pointer fill-white transition-colors duration-300 ease-in block"
          :class="[
            activeMenu === menu.name ? 'block' : 'hidden',
            levelNum === 0
              ? 'opacity-100'
              : levelNum === 1
              ? 'opacity-70'
              : 'opacity-50',
          ]"
        />
      </template>
    </div>
    <template v-if="activeMenu == menu.name">
      <SmallScreenMenuItems
        v-for="submenu of menu.submenus"
        :key="submenu.id"
        :menu="submenu"
        @close="$emit('close')"
        :level="parseInt(levelNum + 1)"
      />
    </template>
  </div>
</template>
