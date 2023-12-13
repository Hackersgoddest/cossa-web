<script setup>
import Close from '../../assets/icons/Close.vue';
const props = defineProps({
  show: Boolean,
});
</script>

<template>
  <Transition name="modal">
    <div
      v-if="show"
      class="fixed md:hidden overflow-auto z-50 top-0 left-0 font-['Lato'] flex flex-col gap-5 w-screen h-screen bg-black bg-opacity-80 transition-opacity duration-300 ease-in-out p-8"
    >
      <div class="flex w-full justify-center items-center">
        <p class="text-white text-2xl font-medium">Menu</p>
        <Close @click="$emit('close')" class=" fixed top-2 right-4 w-8 h-8 stroke-white stroke-2 hover:cursor-pointer hover:stroke-red-700 transform hover:scale-125 transition-transform ease-in-out duration-300" />
      </div>
      <slot name="body"></slot>
    </div>
  </Transition>
</template>

<style>
.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
