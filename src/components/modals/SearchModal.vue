<script setup>
const props = defineProps({
  show: Boolean,
});
</script>

<template>
  <Transition name="modal">
    <div
      v-if="show"
      class="fixed z-50 top-0 left-0 flex flex-col justify-center w-screen h-screen bg-black bg-opacity-50 transition-opacity duration-300 ease-in-out"
    >
      <div
        class="absolute top-14 left-1/2 -translate-x-1/2 flex self-center text-3xl justify-center items-center text-white w-14 h-14 border-2 border-white rounded-full p-2 border-solid hover:cursor-pointer hover:border-red-700 hover:text-red-700 transition-colors duration-300 ease-in"
        @click="$emit('close')"
      >
        X
      </div>
      <div class="w-full flex justify-center">
        <slot name="header"></slot>
      </div>

      <div class="w-full flex justify-center">
        <slot name="body"></slot>
      </div>
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
