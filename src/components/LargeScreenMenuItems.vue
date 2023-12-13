<script setup>
import { RouterLink } from "vue-router";
import { activeRoutePathNamesKey } from "./keys";
import { ref, inject } from "vue";

const props = defineProps({
  menus: Array,
});

const { currentPathNames } = inject(activeRoutePathNamesKey);
const firstActiveMenu = ref(null);
const secondActiveMenu = ref([]);

const firstHandleMouseOver = (submenu) => {
  firstActiveMenu.value = submenu;
};
const secondHandleMouseOver = (submenu) => {
  secondActiveMenu.value.push(submenu);
};

const firstHandleMouseOut = () => {
  firstActiveMenu.value = null;
  secondActiveMenu.value.splice(0, secondActiveMenu.value.length);
};
</script>
<template>
  <div class="md:gap-4 hidden md:flex relative">
    <template v-for="menu of menus" :key="menu.id">
      <div @mouseover="firstHandleMouseOver(menu.name)">
        <RouterLink
          :to="{ name: menu.name }"
          class="hover:cursor-pointer px-1 py-3 hover:text-[#3F51B5] capitalize transition ease-in-out duration-300 w-fit"
          :class="[
            Array.isArray(currentPathNames) &&
            (currentPathNames.includes(menu.name) ||
              currentPathNames.includes(`${menu.name} Home`))
              ? 'text-[#3F51B5] font-semibold'
              : '',
            firstActiveMenu === menu.name
              ? 'underline underline-offset-[12px] decoration-[#3F51B5] decoration-2'
              : '',
          ]"
        >
          {{ menu.name }}
        </RouterLink>
        <div
          @mouseleave="firstHandleMouseOut()"
          v-if="menu.hasSubMenu && firstActiveMenu === menu.name"
          class="w-full max-w-screen-xl bg-black bg-opacity-70 overflow-auto text-white flex gap-4 font-semibold text-justify flex-wrap p-4 absolute top-10 left-0 border-t-2 border-[#3F51B5]"
        >
          <template v-for="submenu of menu.submenus" :id="submenu.id">
            <div class="w-fit h-fit flex flex-col text-base flex-wrap">
              <RouterLink
                @mouseover="secondHandleMouseOver(submenu.name)"
                :to="{ name: submenu.name }"
                class="w-fit h-fit flex items-center hover:cursor-pointer hover:text-[#3F51B5] capitalize transition ease-in-out duration-300"
                :class="[
                  (currentPathNames &&
                    currentPathNames?.includes(submenu.name)) ||
                  (currentPathNames &&
                    currentPathNames?.includes(`${submenu.name} Home`))
                    ? 'text-[#3F51B5] font-semibold'
                    : '',
                ]"
              >
                {{ submenu.name }}
              </RouterLink>
              <div
                v-if="
                  submenu.hasSubMenu && secondActiveMenu.includes(submenu.name)
                "
                class="w-fit flex h-fit flex-col flex-wrap gap-2 text-sm font-normal"
              >
                <template
                  v-for="innerMenu of submenu.submenus"
                  :key="innerMenu.id"
                >
                  <RouterLink
                    :to="{ name: innerMenu.name }"
                    class="h-full flex items-center hover:cursor-pointer hover:text-[#3F51B5] capitalize transition ease-in-out duration-300"
                    :class="[
                      (currentPathNames &&
                        currentPathNames?.includes(innerMenu.name)) ||
                      (currentPathNames &&
                        currentPathNames?.includes(`${innerMenu.name} Home`))
                        ? 'text-[#3F51B5] font-semibold'
                        : '',
                    ]"
                    >{{ innerMenu.name }}</RouterLink
                  >
                </template>
              </div>
            </div>
          </template>
        </div>
      </div>
    </template>
  </div>
</template>
